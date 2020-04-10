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

const variants = {
  base: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
    padding: linearScale('1rem', '1.25rem', 'space'),
    subtitleFontSize: t.f['b-'],
    flexDirection: ['row', 'column'],
    textAlign: ['center', 'inherit'],
    justifyItems: ['center', 'inherit'],
    FlexItemWidth: ['50%', '100%'],
    awardIconVariant: {
      top: {
        display: ['block', 'none'],
      },
      bottom: {
        display: ['none', 'block'],
      },
    },
    agentJustifySelf: ['center', 'start'],
  },
  featured: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
    padding: linearScale('1rem', '1.5rem', 'space'),
    subtitleFontSize: t.f.b,
    flexDirection: 'column',
    textAlign: 'inherit',
    justifyItems: 'inherit',
    FlexItemWidth: '100%',
    awardIconVariant: {
      bottom: {
        display: 'block',
      },
    },
    agentJustifySelf: 'start',
  },
  featuredWide: {
    imageAspectRatioX: 8,
    imageAspectRatioY: 5,
    padding: linearScale('1rem', '1.5rem', 'space'),
    subtitleFontSize: t.f.b,
    flexDirection: 'column',
    textAlign: 'inherit',
    justifyItems: 'inherit',
    FlexItemWidth: '100%',
    awardIconVariant: {
      bottom: {
        display: 'block',
      },
    },

    agentJustifySelf: 'start',
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
          width: variant.FlexItemWidth,
        })}
      >
        <VisuallyHidden>{title}</VisuallyHidden>
        <AspectRatio
          x={variant.imageAspectRatioX}
          y={variant.imageAspectRatioY}
          css={{ backgroundColor: t.c.White }}
        >
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
          width: variant.FlexItemWidth,
          flexGrow: '1',
          gap: linearScale('0.375rem', '0.5rem', 'space'),
          gridTemplateColumns: '1fr auto',
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
            justifyItems: variant.justifyItems,
            textAlign: variant.textAlign,
          })}
        >
          {award && variant.awardIconVariant.top && (
            <AwardIcon
              type={award}
              css={mq({
                alignSelf: 'end',
                width: ['0.8125rem', '1.25rem'],
                display: variant.awardIconVariant.top.display,
              })}
            />
          )}
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
            variant="small"
            name={agencyName}
            href={agencyHref}
            avatarFluid={agencyAvatarFluid}
            css={mq({
              alignSelf: 'end',
              justifySelf: variant.agentJustifySelf,
            })}
          />
        </div>
        {award && (
          <AwardIcon
            type={award}
            css={mq({
              alignSelf: 'end',
              width: ['0.8125rem', '1.25rem'],
              display: variant.awardIconVariant.bottom.display,
            })}
          />
        )}
      </div>
    </View>
  )
}
