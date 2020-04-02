import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { AgencyTemplateQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { Layout } from '../components/Layout'
import { View } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { PaginatedWinners } from '../components/PaginatedWinners'

type AgencyTemplateProps = React.ComponentProps<typeof Layout> & {
  data: AgencyTemplateQuery
}

export const AgencyTemplate: React.FC<AgencyTemplateProps> = ({ data }) => {
  const agency = data.airtableAgency
  const initialPage = data?.paginatedCollectionPage

  return (
    <Layout>
      <Helmet>
        <title>{agency?.data?.name}</title>
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
            {agency?.data?.name}
          </Heading>
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

export default AgencyTemplate

export const query = graphql`
  query AgencyTemplate($recordId: String!, $paginatedCollectionName: String!) {
    airtableAgency(recordId: { eq: $recordId }) {
      data {
        name
      }
    }
    paginatedCollectionPage(
      collection: { name: { eq: $paginatedCollectionName } }
      index: { eq: 0 }
    ) {
      id
      nodes
      nextPage {
        id
      }
      collection {
        nodeCount
      }
    }
  }
`
