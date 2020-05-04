import React from 'react'

import { t, mq, linearScale } from '../theme'
import { Heading } from './Heading'
import { Anchor } from './Anchor'
import { View } from './View'
import { AwardIcon } from './AwardIcon'
import { AgencyIdentifier } from './AgencyIdentifier'
import { WinnerCardImageLink, WinnerCardProps } from './WinnerCard'

type WinnerCardBasicProps = Omit<WinnerCardProps, 'variant' | 'videoUrl'>

export const WinnerCardBasic = ({
  href,
  title,
  subtitle,
  award,
  imageFluid,
  agencies = [],
  isNationalWinner,
  year,
  ...props
}: WinnerCardBasicProps) => {
  return (
    <View
      {...props}
      css={mq({
        backgroundColor: t.c.White,
        display: 'flex',
        flexDirection: ['row', 'column'],
        width: '100%',
      })}
    >
      <WinnerCardImageLink
        href={href}
        title={title}
        x={4}
        y={3}
        imageFluid={imageFluid}
        isNationalWinner={isNationalWinner}
        year={year}
      />

      <div
        className="metadata"
        css={mq({
          backgroundColor: t.c.White,
          display: 'grid',
          width: ['50%', '100%'],
          alignContent: ['center', 'stretch'],
          flexGrow: '1',
          gap: linearScale('0.375rem', '0.5rem', 'space'),
          gridTemplateColumns: ['none', '1fr auto'],
          padding: linearScale('1rem', '1.25rem', 'space'),
          boxShadow: ['none', '0 -1px 0 rgba(0, 0, 0, 0.05)'],
          position: 'relative',
        })}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.375rem', '0.5rem', 'space'),
            gridTemplateRows: ['auto', 'auto auto 1fr'],
            alignItems: ['center', 'start'],
            textAlign: ['center', 'inherit'],
          })}
        >
          {subtitle && (
            <p
              css={mq({
                color: t.c.Gray60,
                fontSize: t.f['b-'],
              })}
            >
              {subtitle}
            </p>
          )}
          {title && (
            <Heading forwardedAs="h3" css={mq({ fontSize: t.f.m })}>
              <Anchor className="title-link" href={href}>
                {title}
              </Anchor>
            </Heading>
          )}
          <ul
            css={mq({
              display: 'grid',
              gap: linearScale('0.25rem', '0.375rem', 'space'),
              alignSelf: ['center', 'end'],
              justifyItems: ['center', 'start'],
              justifySelf: ['center', 'start'],
            })}
          >
            {agencies.map(agency => (
              <li key={agency.name}>
                <AgencyIdentifier
                  variant="smallNoAvatarOnMobile"
                  name={agency.name}
                  href={agency.url}
                  avatarFluid={agency.avatarFluid}
                />
              </li>
            ))}
          </ul>
        </div>
        {award && (
          <AwardIcon
            type={award}
            css={mq({
              width: ['0.8125rem', '1.25rem'],
              gridRow: ['1', 'auto'],
              justifySelf: ['center', 'end'],
              alignSelf: ['center', 'end'],
            })}
          />
        )}
      </div>
    </View>
  )
}