import React from 'react'

import { t, mq, linearScale } from '../theme'
import { Heading } from './Heading'
import { Anchor } from './Anchor'
import { View } from './View'
import { AwardIcon } from './AwardIcon'
import { AgencyIdentifier } from './AgencyIdentifier'
import { WinnerCardProps } from './WinnerCard'
import { WinnerCardImageLink } from './WinnerCardImageLink'

type WinnerCardBasicProps = Omit<WinnerCardProps, 'variant' | 'videoUrl'>

export const WinnerCardBasic = ({
  href,
  title,
  subtitle,
  award,
  imageFluid,
  agencies = [],
  isNationalWinner,
  isNmgScholarshipWinner,
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
        isNmgScholarshipWinner={isNmgScholarshipWinner}
        year={year}
        css={{
          flexGrow: 1,
        }}
      />

      <div
        css={mq({
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          width: ['50%', '100%'],
        })}
      >
        <div
          className="metadata"
          css={mq({
            backgroundColor: t.c.White,
            display: 'grid',
            alignContent: ['center', 'stretch'],
            gap: linearScale('0.375rem', '0.5rem', 'space'),
            gridTemplateColumns: ['none', '1fr auto'],
            paddingTop: linearScale('1rem', '1.15rem', 'space'),
            paddingBottom: linearScale('1rem', '1.15rem', 'space'),
            paddingLeft: linearScale('1rem', '1.25rem', 'space'),
            paddingRight: linearScale('1rem', '1.25rem', 'space'),
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
      </div>
    </View>
  )
}
