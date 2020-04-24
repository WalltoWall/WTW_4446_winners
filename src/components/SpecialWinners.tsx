import React from 'react'

import { SpecialAwardWinnerFragment } from '../graphqlTypes'
import { Award, Agency } from '../types'
import { t, mq } from '../theme'

import { CardList } from '../components/CardList'
import { WinnerCard, WinnerCardProps } from '../components/WinnerCard'
import { Heading } from '../components/Heading'
import { Anchor } from '../components/Anchor'

type SpecialWinnersProps = {
  winners: SpecialAwardWinnerFragment[]
  variant?: WinnerCardProps['variant']
  columns: number[]
  heading?: string
  headingHref?: string
}

export const SpecialWinners = ({
  winners,
  variant,
  columns,
  heading,
  headingHref,
}: SpecialWinnersProps) => {
  return (
    <>
      {heading && headingHref && (
        <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
          <Anchor href={headingHref}>{heading}</Anchor>
        </Heading>
      )}

      <CardList columns={columns}>
        {winners.map(winner => {
          const agencies = winner?.data?.agency?.map?.(agency => ({
            name: agency?.data?.name,
            url: agency?.fields?.url,
            avatarFluid: agency?.fields?.avatar?.fluid,
          })) as Agency[]

          return (
            <WinnerCard
              key={winner?.fields?.url}
              variant={variant}
              href={winner?.fields?.url!}
              title={winner?.data?.name}
              subtitle={winner?.data?.special_award}
              award={winner?.data?.award?.toLowerCase?.() as Award}
              imageFluid={winner?.fields?.images?.[0]?.fluid}
              isSpecialAward={true}
              isNationalWinner={winner?.data?.national_winner}
              videoUrl={winner?.data?.special_award_video}
              agencies={agencies}
            />
          )
        })}
      </CardList>
    </>
  )
}
