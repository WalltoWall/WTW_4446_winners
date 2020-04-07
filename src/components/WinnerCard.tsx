import React from 'react'
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
  },
  featured: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
    padding: linearScale('1rem', '1.5rem', 'space'),
    subtitleFontSize: t.f['b+'],
  },
  featuredWide: {
    imageAspectRatioX: 8,
    imageAspectRatioY: 5,
    padding: linearScale('1rem', '1.5rem', 'space'),
    subtitleFontSize: t.f['b+'],
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
      css={{
        backgroundColor: t.c.White,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Link href={href}>
        <AspectRatio
          x={variant.imageAspectRatioX}
          y={variant.imageAspectRatioY}
          css={{ backgroundColor: 'black' }}
        >
          {imageFluid && (
            <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
          )}
        </AspectRatio>
      </Link>
      <div
        css={mq({
          backgroundColor: t.c.White,
          display: 'grid',
          flexGrow: '1',
          gap: linearScale('0.375rem', '0.5rem', 'space'),
          gridTemplateColumns: '1fr auto',
          padding: variant.padding,
        })}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.375rem', '0.5rem', 'space'),
            gridTemplateRows: 'auto auto 1fr',
            alignItems: 'start',
          })}
        >
          {subtitle && isSpecialAward ? (
            <Subheading
              forwardedAs="h4"
              css={mq({ fontSize: variant.subtitleFontSize })}
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
              <Anchor href={href}>{title}</Anchor>
            </Heading>
          )}
          <AgencyIdentifier
            variant="small"
            name={agencyName}
            href={agencyHref}
            avatarFluid={agencyAvatarFluid}
            css={{ alignSelf: 'end', justifySelf: 'start' }}
          />
        </div>
        {award && (
          <AwardIcon
            type={award}
            css={mq({
              alignSelf: 'end',
              width: ['0.8125rem', '1.25rem'],
            })}
          />
        )}
      </div>
    </View>
  )
}
