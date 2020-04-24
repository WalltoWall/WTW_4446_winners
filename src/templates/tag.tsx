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
import { withLightbox } from '../components/Lightbox'

export type TagTemplate = LayoutProps & {
  data: TagTemplateQuery
}

export const TagTemplate = ({ data, ...props }: TagTemplate) => {
  const tag = data.paginatedCollectionPage?.collection?.name?.split?.('/')?.[1]
  const initialPage = data?.paginatedCollectionPage

  return (
    <Layout {...props}>
      <Helmet>
        <title>Tag: {tag}</title>
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
            textAlign: 'center',
          })}
        >
          <div
            css={mq({ display: 'grid', gap: linearScale('0.25rem', '0.5rem') })}
          >
            <p css={mq({ fontSize: t.f['b-'], color: t.c.Gray60 })}>
              Winners tagged with
            </p>
            <Heading css={mq({ fontSize: t.f.xl })}>{tag}</Heading>
          </div>
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

export default withLightbox(TagTemplate)

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
