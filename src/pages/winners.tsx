import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { WinnersPageQuery } from '../graphqlTypes'
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
import { FormSelect } from '../components/FormSelect'
import { FormSearchInput } from '../components/FormSearchInput'

type WinnersPageProps = React.ComponentProps<typeof Layout> & {
  data: WinnersPageQuery
}

export const WinnersPage: React.FC<WinnersPageProps> = ({ data }) => {
  const initialPage: WinnersPageQuery['paginatedCollectionPage'] | undefined =
    data?.paginatedCollectionPage
  const firstPages = data.allPaginatedCollectionPage.nodes

  const [selectedFirstPageId, setSelectedFirstPageId] = useState(
    initialPage?.collection?.id,
  )
  const [{ latestPage, items: winners }, loadMore, loadAndReset] = useLoadMore({
    initialPage: initialPage as Partial<ExpandedPageNode>,
  })
  const hasNextPage = Boolean(latestPage?.nextPage?.id)

  const handleCategoryChange = useCallback(
    async (event) => {
      const newFirstPageId = event.target.value
      setSelectedFirstPageId(newFirstPageId)

      await loadAndReset(newFirstPageId)
    },
    [loadAndReset],
  )

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
            Winners
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
            <FormSelect
              value={selectedFirstPageId}
              onChange={handleCategoryChange}
            >
              <option value={initialPage?.id}>All categories</option>
              {firstPages.map((firstPage) => (
                <option key={firstPage.id} value={firstPage.id}>
                  {firstPage.collection.name.split('/')[1]}
                </option>
              ))}
            </FormSelect>
            <FormSearchInput css={mq({ gridColumn: ['1 / -1', 'auto'] })} />
          </View>
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

export default WinnersPage

export const query = graphql`
  query WinnersPage {
    paginatedCollectionPage(
      collection: { name: { eq: "winners" } }
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
    allPaginatedCollectionPage(
      filter: {
        collection: { name: { regex: "/^winners//" } }
        index: { eq: 0 }
      }
    ) {
      nodes {
        id
        collection {
          id
          name
        }
      }
    }
  }
`
