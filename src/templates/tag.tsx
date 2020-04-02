import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { TagTemplateQuery } from '../graphqlTypes'
import { Winner } from '../types'
import { useLoadMore } from '../hooks/useLoadMore'

import { t, mq, linearScale } from '../theme'
import { Layout } from '../components/Layout'
import { View } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { WinnerCard } from '../components/WinnerCard'
import { Button } from '../components/Button'
import { CardList } from '../components/CardList'
import { Heading } from '../components/Heading'

type TagTemplateProps = React.ComponentProps<typeof Layout> & {
  data: TagTemplateQuery
}

export const TagTemplate: React.FC<TagTemplateProps> = ({ data }) => {
  const initialPage: TagTemplateQuery['paginatedCollectionPage'] | undefined =
    data?.paginatedCollectionPage

  const [{ latestPage, items: winners }, loadMore] = useLoadMore({
    initialPage: initialPage as Partial<ExpandedPageNode>,
  })

  const hasNextPage = Boolean(latestPage?.nextPage?.id)
  const tag = data.paginatedCollectionPage?.collection?.name?.split?.('/')?.[1]

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
            Tag: {tag}
          </Heading>
        </View>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <View
          css={mq({
            display: 'grid',
            gap: linearScale('3rem', '6.25rem'),
          })}
        >
          <CardList columns={[1, 3, 3, 4]}>
            {(winners as Winner[]).map((winner) => (
              <WinnerCard
                key={winner.url}
                href={winner.url}
                title={winner?.name}
                subtitle={winner?.category?.line_1}
                award={winner?.award}
                imageFluid={winner.image}
              />
            ))}
          </CardList>
          <View
            css={mq({
              display: 'grid',
              gap: linearScale('0.375rem', '0.875rem'),
              justifyContent: 'center',
            })}
          >
            <Button disabled={!hasNextPage} onClick={loadMore}>
              {hasNextPage ? 'Load more' : "You've reached the end!"}
            </Button>
            <View
              as="p"
              css={mq({
                color: t.c.Gray60,
                fontSize: t.f['b-'],
                textAlign: 'center',
              })}
            >
              Showing {winners.length} of {latestPage?.collection?.nodeCount}
            </View>
          </View>
        </View>
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
