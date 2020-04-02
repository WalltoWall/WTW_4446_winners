import React from 'react'

import { Winner } from '../types'
import { useLoadMore } from '../hooks/useLoadMore'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { CardList } from './CardList'
import { WinnerCard } from './WinnerCard'
import { Button } from './Button'

type PaginatedWinnersProps = React.ComponentProps<typeof View> & {
  firstPageId: Parameters<typeof useLoadMore>[0]['firstPageId']
  initialPage: Parameters<typeof useLoadMore>[0]['initialPage']
}

export const PaginatedWinners: React.FC<PaginatedWinnersProps> = ({
  initialPage,
  firstPageId,
}) => {
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
          Showing {winners.length} of {latestPage?.collection?.nodeCount ?? 0}
        </View>
      </View>
    </View>
  )
}
