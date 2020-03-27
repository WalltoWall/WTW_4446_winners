import React, { useReducer, useCallback } from 'react'
import { graphql, withPrefix } from 'gatsby'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { WinnersPageQuery, CloudinaryAssetFluidFragment } from '../graphqlTypes'
import { Award } from '../types'

import { t, mq, linearScale } from '../theme'
import { Layout } from '../components/Layout'
import { View } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { EntryCard } from '../components/EntryCard'
import { Button } from '../components/Button'
import { CardList } from '../components/CardList'
import { Heading } from '../components/Heading'

type WinnersPageProps = React.ComponentProps<typeof Layout> & {
  data: WinnersPageQuery
}

interface Entry {
  url: string
  name?: string
  award?: Award
  category?: { line_1: string; line_2: string }
  image?: CloudinaryAssetFluidFragment
}

enum ActionType {
  Begin,
  Failed,
  Completed,
}

interface Action {
  type: ActionType
  payload?: ExpandedPageNode | Error
}

enum StateType {
  Loading,
  Rest,
  Failed,
}

interface State {
  type: StateType
  entries: Entry[]
  latestPage: ExpandedPageNode | WinnersPageQuery['paginatedCollectionPage']
  error?: Error
}

const createInitialState = (
  initialPage: ExpandedPageNode | WinnersPageQuery['paginatedCollectionPage'],
): State => ({
  type: StateType.Rest,
  entries: initialPage?.nodes ?? [],
  latestPage: initialPage,
})

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.Begin:
      return { ...state, type: StateType.Loading, error: undefined }

    case ActionType.Failed:
      return {
        ...state,
        type: StateType.Failed,
        error: action.payload as Error,
      }

    case ActionType.Completed:
      return {
        ...state,
        type: StateType.Rest,
        entries: [
          ...state.entries,
          ...(action.payload
            ? // TODO: change gatsby-plugin-paginated-collection#PageNode.nodes to any
              (((action.payload as ExpandedPageNode).nodes as any) as Entry[])
            : []),
        ],
        latestPage: action.payload as ExpandedPageNode,
        error: undefined,
      }
  }
}

export const WinnersPage: React.FC<WinnersPageProps> = ({ data }) => {
  const initialPage: WinnersPageQuery['paginatedCollectionPage'] | undefined =
    data?.paginatedCollectionPage
  const [{ latestPage, entries }, dispatch] = useReducer(
    reducer,
    initialPage,
    createInitialState,
  )
  const hasNextPage = Boolean(latestPage?.nextPage?.id)

  const handleLoadMore = useCallback(async () => {
    if (!latestPage?.nextPage) return

    const nextPageId = latestPage.nextPage.id
    const path = withPrefix(`/paginated-collections/${nextPageId}.json`)

    try {
      const res = await fetch(path)
      const json = await res.json()
      dispatch({ type: ActionType.Completed, payload: json })
    } catch (error) {
      console.error(error)
      dispatch({ type: ActionType.Failed, payload: error })
    }
  }, [latestPage])

  return (
    <Layout>
      <BoundedBox
        css={mq({
          backgroundColor: t.c.White,
          paddingTop: linearScale('1.5rem', '3.5rem'),
          paddingBottom: linearScale('1.5rem', '3.5rem'),
        })}
      >
        <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
          Winners
        </Heading>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <View
          css={mq({
            display: 'grid',
            gap: linearScale('3rem', '6.25rem'),
          })}
        >
          <CardList columns={[1, 3, 3, 4]}>
            {entries.map((entry) => (
              <EntryCard
                key={entry.url}
                href={entry.url}
                title={entry?.name}
                subtitle={entry?.category?.line_1}
                award={entry?.award}
                imageFluid={entry.image}
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
            <Button disabled={!hasNextPage} onClick={handleLoadMore}>
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
              Showing {entries.length} of {latestPage?.collection?.nodeCount}
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
      collection: { name: { eq: "entries" } }
      index: { eq: 0 }
    ) {
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
