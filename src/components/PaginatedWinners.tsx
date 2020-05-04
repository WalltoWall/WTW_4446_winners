import React from 'react'

import { Winner } from '../types'
import { useLoadMore, UseLoadMoreArgs } from '../hooks/useLoadMore'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { CardList } from './CardList'
import { WinnerCard } from './WinnerCard'
import { Button } from './Button'
import { EmptyMessage } from './EmptyMessage'

export type PaginatedWinnersProps = ViewProps & {
  firstPageId?: UseLoadMoreArgs['firstPageId']
  initialPage?: UseLoadMoreArgs['initialPage']
  totalCountAddend?: number
  showingCountAddend?: number
}

export const PaginatedWinners = ({
  initialPage,
  firstPageId,
  totalCountAddend = 0,
  showingCountAddend = 0,
}: PaginatedWinnersProps) => {
  const [{ latestPage, items: winners }, loadMore] = useLoadMore({
    firstPageId,
    initialPage,
  })

  const hasNextPage = Boolean(latestPage?.nextPage?.id)
  const hasOnlyOnePage =
    (latestPage?.index === 0 || latestPage?.index === undefined) && !hasNextPage
  const hasWinners = winners.length > 0

  console.log({ winners })

  return (
    <View
      css={mq({
        display: 'grid',
        gap: linearScale('3rem', '6.25rem'),
      })}
    >
      {hasWinners ? (
        <>
          <CardList columns={[1, 2, 3, 3, 4]}>
            {(winners as Winner[]).map(winner => (
              <WinnerCard
                key={winner.url}
                href={winner.url}
                title={winner?.name}
                subtitle={winner?.category?.line_1}
                award={winner?.award}
                imageFluid={winner.imageFluid}
                agencies={winner.agencies}
                isNationalWinner={winner.nationalWinner}
                isNmgScholarshipWinner={winner.nmgScholarshipWinner}
              />
            ))}
          </CardList>
          {!hasOnlyOnePage && (
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
              <span
                css={mq({
                  color: t.c.Gray50,
                  fontSize: t.f['b-'],
                  textAlign: 'center',
                })}
              >
                Showing {winners.length + showingCountAddend} of{' '}
                {(latestPage?.collection?.nodeCount ?? 0) + totalCountAddend}
              </span>
            </div>
          )}
        </>
      ) : (
        <EmptyMessage heading="Looks like there aren't any winners here.">
          Please try a different filter or year.
        </EmptyMessage>
      )}
    </View>
  )
}
