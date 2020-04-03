import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { CollegePageQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { Layout } from '../components/Layout'
import { View } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { FormSelect } from '../components/FormSelect'
import { FormSearchInput } from '../components/FormSearchInput'
import { PaginatedWinners } from '../components/PaginatedWinners'

type CollegePageProps = React.ComponentProps<typeof Layout> & {
  data: CollegePageQuery
}

export const CollegePage: React.FC<CollegePageProps> = ({ data }) => {
  const initialPage = data?.paginatedCollectionPage

  return (
    <Layout>
      <Helmet>
        <title>Winners</title>
      </Helmet>
      <BoundedBox
        css={mq({
          backgroundColor: t.c.White,
          paddingTop: linearScale('1.5rem', '3.5rem'),
          paddingBottom: linearScale('1.5rem', '3.5rem'),
        })}
      >
        <View
          css={mq({
            display: 'grid',
            gap: linearScale('0.6875rem', '1.375rem', 'space'),
          })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            College Winners
          </Heading>
          <View
            css={mq({
              display: 'grid',
              gap: linearScale('0.625rem', '1.875rem', 'space'),
              gridTemplateColumns: ['repeat(2, auto)', 'repeat(3, auto)'],
              justifyContent: 'center',
              justifyItems: 'center',
            })}
          >
            <FormSelect>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
            </FormSelect>
            <FormSearchInput css={mq({ gridColumn: ['1 / -1', 'auto'] })} />
          </View>
        </View>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <PaginatedWinners
          firstPageId={initialPage?.id!}
          initialPage={initialPage as Partial<ExpandedPageNode>}
        />
      </BoundedBox>
    </Layout>
  )
}

export default CollegePage

export const query = graphql`
  query CollegePage {
    paginatedCollectionPage(
      collection: { name: { eq: "collegeWinners" } }
      index: { eq: 0 }
    ) {
      id
      nodes
      nextPage {
        id
      }
      collection {
        id
        nodeCount
      }
    }
  }
`
