import React from 'react'

import { Winner } from '../types'
import { useLoadMore, UseLoadMoreArgs } from '../hooks/useLoadMore'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { CardList } from './CardList'
import { WinnerCard } from './WinnerCard'
import { Button } from './Button'

export type PaginatedWinnersProps = ViewProps & {
  firstPageId: UseLoadMoreArgs['firstPageId']
  initialPage: UseLoadMoreArgs['initialPage']
}

export const PaginatedWinners = ({
  initialPage,
  firstPageId,
}: PaginatedWinnersProps) => {
  const [{ latestPage, items: winners }, loadMore] = useLoadMore({
    firstPageId,
    initialPage,
  })

  const hasNextPage = Boolean(latestPage?.nextPage?.id)

  return (
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
      <div
        css={mq({
          display: 'grid',
          gap: linearScale('0.375rem', '0.875rem'),
          justifyContent: 'center',
        })}
      >
        <Button disabled={!hasNextPage} onClick={loadMore}>
          {hasNextPage ? 'Load more' : "You've reached the end!"}
        </Button>
        <p
          css={mq({
            color: t.c.Gray60,
            fontSize: t.f['b-'],
            textAlign: 'center',
          })}
        >
          Showing {winners.length} of {latestPage?.collection?.nodeCount ?? 0}
        </p>
      </div>
    </View>
  )
}
