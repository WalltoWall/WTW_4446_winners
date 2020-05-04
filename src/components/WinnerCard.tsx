import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { Agency } from '../types'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { AwardIcon, AwardIconProps } from './AwardIcon'
import { AspectRatio } from './AspectRatio'
import { Anchor } from './Anchor'
import { Link } from './Link'
import { AgencyIdentifier } from './AgencyIdentifier'
import { Ribbon } from './Ribbon'
import { VideoPlayButton } from './VideoPlayButton'

const variants = {
  base: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
    padding: linearScale('1rem', '1.25rem', 'space'),
    flexDirection: ['row', 'column'],
    flexItemWidth: ['50%', '100%'],
    gridTemplateColumns: ['none', '1fr auto'],
    textAlign: ['center', 'inherit'],
    subtitleFontSize: t.f['b-'],
    awardGridRow: ['1', 'auto'],
    awardJustifySelf: ['center', 'end'],
    awardAlignSelf: ['center', 'end'],
    agencyJustifySelf: ['center', 'start'],
    agencyJustifyItems: ['center', 'start'],
    agencyIdentifierVariant: 'smallNoAvatarOnMobile',
  },
  featured: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
    padding: linearScale('1rem', '1.5rem', 'space'),
    flexDirection: 'column',
    flexItemWidth: '100%',
    gridTemplateColumns: '1fr auto',
    textAlign: 'inherit',
    subtitleFontSize: t.f.b,
    awardGridRow: 'auto',
    awardJustifySelf: 'end',
    awardAlignSelf: 'end',
    agencyJustifySelf: 'start',
    agencyJustifyItems: 'start',
    agencyIdentifierVariant: 'small',
  },
  featuredWide: {
    imageAspectRatioX: 8,
    imageAspectRatioY: 5,
    padding: linearScale('1rem', '1.5rem', 'space'),
    subtitleFontSize: t.f.b,
    flexDirection: 'column',
    flexItemWidth: '100%',
    gridTemplateColumns: '1fr auto',
    textAlign: 'inherit',
    awardGridRow: 'auto',
    awardJustifySelf: 'end',
    awardAlignSelf: 'end',
    agencyJustifySelf: 'start',
    agencyJustifyItems: 'start',
    agencyIdentifierVariant: 'small',
  },
} as const

export type WinnerCardProps = ViewProps & {
  variant?: keyof typeof variants
  href: string
  title?: string
  subtitle?: string
  award?: AwardIconProps['type'] | null
  isSpecialAward?: boolean
  imageFluid?: FluidObject
  agencies?: Agency[]
  isNationalWinner?: boolean
  isNmgScholarshipWinner?: boolean
  videoUrl?: string
}

export const WinnerCard = ({
  variant: variantName = 'base',
  href,
  title,
  subtitle,
  award,
  isSpecialAward = false,
  imageFluid,
  agencies = [],
  isNationalWinner,
  isNmgScholarshipWinner,
  videoUrl,
  ...props
}: WinnerCardProps) => {
  console.log('fooo ', isNationalWinner)
  console.log('booo ', isNmgScholarshipWinner)

  const variant = variants[variantName]

  return (
    <View
      {...props}
      css={mq({
        backgroundColor: t.c.White,
        display: 'flex',
        flexDirection: variant.flexDirection,
        width: '100%',
      })}
    >
      <Link
        href={href}
        tabIndex={-1}
        css={mq({
          '&:hover + .metadata .title-link, &:focus + .metadata .title-link': {
            color: t.c.Red40,
          },
          width: variant.flexItemWidth,
        })}
      >
        <VisuallyHidden>{title}</VisuallyHidden>
        <AspectRatio
          x={variant.imageAspectRatioX}
          y={variant.imageAspectRatioY}
          css={mq({
            backgroundColor: t.c.White,
            height: ['100%', 'inherit'],
          })}
        >
          {imageFluid && (
            <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
          )}
          {isNationalWinner && (
            <Ribbon
              css={mq({
                position: 'absolute',
                right: 0,
                top: linearScale('1rem', '1.5rem'),
              })}
            >
              2020 National Winner
            </Ribbon>
          )}
          {isNmgScholarshipWinner && (
            <Ribbon
              variant="teal"
              css={mq({
                position: 'absolute',
                right: 0,
                top: linearScale('1rem', '1.5rem'),
              })}
            >
              NMG Scholarship Winner
            </Ribbon>
          )}
          {videoUrl && <VideoPlayButton src={videoUrl} />}
        </AspectRatio>
      </Link>
      <div
        className="metadata"
        css={mq({
          backgroundColor: t.c.White,
          display: 'grid',
          width: variant.flexItemWidth,
          alignContent: ['center', 'stretch'],
          flexGrow: '1',
          gap: linearScale('0.375rem', '0.5rem', 'space'),
          gridTemplateColumns: variant.gridTemplateColumns,
          padding: variant.padding,
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
            textAlign: variant.textAlign,
          })}
        >
          {subtitle &&
            (isSpecialAward ? (
              <Subheading
                forwardedAs="h4"
                css={mq({
                  fontSize: variant.subtitleFontSize,
                })}
              >
                {subtitle}
              </Subheading>
            ) : (
              <p
                css={mq({
                  color: t.c.Gray60,
                  fontSize: variant.subtitleFontSize,
                })}
              >
                {subtitle}
              </p>
            ))}
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
              justifyItems: variant.agencyJustifyItems,
              justifySelf: variant.agencyJustifySelf,
            })}
          >
            {agencies.map(agency => (
              <li key={agency.name}>
                <AgencyIdentifier
                  variant={variant.agencyIdentifierVariant}
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
              gridRow: variant.awardGridRow,
              justifySelf: variant.awardJustifySelf,
              alignSelf: variant.awardAlignSelf,
            })}
          />
        )}
      </div>
    </View>
  )
}
