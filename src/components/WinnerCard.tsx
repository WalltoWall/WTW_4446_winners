import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import GatsbyImage, { FluidObject } from 'gatsby-image'

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
    agentJustifySelf: ['center', 'start'],
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
    agentJustifySelf: 'start',
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
    agentJustifySelf: 'start',
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
  agencyName: string
  agencyHref: string
  agencyAvatarFluid?: FluidObject
  isNationalWinner?: boolean
}

export const WinnerCard = ({
  variant: variantName = 'base',
  href,
  title,
  subtitle,
  award,
  isSpecialAward = false,
  imageFluid,
  agencyName,
  agencyHref,
  agencyAvatarFluid,
  isNationalWinner,
  ...props
}: WinnerCardProps) => {
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
            position: 'relative',
          })}
        >
          {isNationalWinner && (
            <Ribbon css={mq({ right: 0, top: t.space[4] })}>
              2020 National Winner
            </Ribbon>
          )}
          {imageFluid && (
            <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
          )}
        </AspectRatio>
      </Link>
      <div
        className="metadata"
        css={mq({
          backgroundColor: t.c.White,
          display: 'grid',
          width: variant.flexItemWidth,
          alignContent: 'center',
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
          {subtitle && isSpecialAward ? (
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
          )}
          {title && (
            <Heading forwardedAs="h3" css={mq({ fontSize: t.f.m })}>
              <Anchor className="title-link" href={href}>
                {title}
              </Anchor>
            </Heading>
          )}
          <AgencyIdentifier
            variant={variant.agencyIdentifierVariant}
            name={agencyName}
            href={agencyHref}
            avatarFluid={agencyAvatarFluid}
            css={mq({
              alignSelf: ['center', 'end'],
              justifySelf: variant.agentJustifySelf,
            })}
          />
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
