import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { TagTemplateQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { PaginatedWinners } from '../components/PaginatedWinners'

export type TagTemplate = LayoutProps & {
  data: TagTemplateQuery
}

export const TagTemplate = ({ data, ...props }: TagTemplate) => {
  const tag = data.paginatedCollectionPage?.collection?.name?.split?.('/')?.[1]
  const initialPage = data?.paginatedCollectionPage

  return (
    <Layout {...props}>
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
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.6875rem', '1.375rem', 'space'),
          })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            Tag: {tag}
          </Heading>
        </div>
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

export default TagTemplate

export const query = graphql`
  query TagTemplate($paginatedCollectionName: String!) {
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
        name
        nodeCount
      }
    }
  }
`
