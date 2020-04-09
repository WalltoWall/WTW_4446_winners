import React from 'react'

import { Winner } from '../types'
import { useLoadMore, UseLoadMoreArgs } from '../hooks/useLoadMore'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { CardList } from './CardList'
import { WinnerCard } from './WinnerCard'
import { Button } from './Button'
import { Heading } from './Heading'

type TextProps = {
  children: React.ReactNode
}

const Text = (props: TextProps) => {
  return (
    <p
      {...props}
      css={mq({
        color: t.c.Gray60,
        fontSize: t.f['b-'],
        textAlign: 'center',
      })}
    />
  )
}

type NoWinnersProps = {
  heading: string
  text: string
}

const NoWinners = ({ heading, text }: NoWinnersProps) => {
  return (
    <div css={{ margin: '0 auto', maxWidth: '40ch', textAlign: 'center' }}>
      <Heading
        css={mq({
          marginBottom: t.spaceScales.t,
          lineHeight: t.lineHeights.TitleWide,
        })}
      >
        {heading}
      </Heading>
      <Text>{text}</Text>
    </div>
  )
}

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
  const hasOnlyOnePage =
    (latestPage?.index === 0 || latestPage?.index === undefined) && !hasNextPage
  const hasWinners = winners.length > 0

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
                agencyName={winner.agency?.name}
                agencyHref={winner.agency?.url}
                agencyAvatarFluid={winner.agency?.avatarFluid}
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
              <Text>
                Showing {winners.length} of{' '}
                {latestPage?.collection?.nodeCount ?? 0}
              </Text>
            </div>
          )}
        </>
      ) : (
        <NoWinners
          heading="Looks like there aren't any winners for this criteria."
          text="Please try a different filter or year."
        />
      )}
    </View>
  )
}
