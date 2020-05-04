import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { WinnerCardBasic } from './WinnerCardBasic'
import { AspectRatio } from './AspectRatio'
import { t, mq, linearScale } from '../theme'
import { Link } from './Link'
import { Ribbon } from './Ribbon'
import { Agency } from '../types'
import { WinnerCardFeatured } from './WinnerCardFeatured'
import { AwardIconProps } from './AwardIcon'
import { ViewProps } from './View'

const imageVariants = {
  small: {
    width: ['50%', '100%'],
  },
  wide: {
    width: '100%',
  },
} as const

type WinnerCardImageLinkProps = {
  href: WinnerCardProps['href']
  isNationalWinner?: WinnerCardProps['isNationalWinner']
  year?: number
  imageFluid?: WinnerCardProps['imageFluid']
  title?: WinnerCardProps['title']
  x: number
  y: number
  variant?: keyof typeof imageVariants
}

export const WinnerCardImageLink = ({
  variant: variantName = 'small',
  href,
  title,
  imageFluid,
  isNationalWinner,
  year,
  x,
  y,
}: WinnerCardImageLinkProps) => {
  const variant = imageVariants[variantName]

  return (
    <Link
      href={href}
      tabIndex={-1}
      css={mq({
        '&:hover + .metadata .title-link, &:focus + .metadata .title-link': {
          color: t.c.Red40,
        },
        width: variant.width,
      })}
    >
      <VisuallyHidden>{title}</VisuallyHidden>
      <AspectRatio
        x={x}
        y={y}
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
            {year} National Winner
          </Ribbon>
        )}
      </AspectRatio>
    </Link>
  )
}

export type WinnerCardProps = ViewProps & {
  href: string
  imageFluid?: FluidObject
  isNationalWinner?: boolean
  year?: number
  title?: string
  subtitle?: string
  award?: AwardIconProps['type'] | null
  agencies?: Agency[]
  variant?: 'featured' | 'featuredWide' | 'base'
  videoUrl?: string
}

export const WinnerCard = ({
  variant = 'base',
  href,
  title,
  subtitle,
  award,
  imageFluid,
  agencies = [],
  isNationalWinner,
  year,
  videoUrl,
  ...props
}: WinnerCardProps) => {
  switch (variant) {
    case 'featured':
    case 'featuredWide':
      return (
        <WinnerCardFeatured
          variant={variant}
          href={href}
          title={title}
          subtitle={subtitle}
          award={award}
          imageFluid={imageFluid}
          agencies={agencies}
          isNationalWinner={isNationalWinner}
          year={year}
          videoUrl={videoUrl}
          {...props}
        />
      )
    default:
      return (
        <WinnerCardBasic
          href={href}
          title={title}
          subtitle={subtitle}
          award={award}
          imageFluid={imageFluid}
          agencies={agencies}
          isNationalWinner={isNationalWinner}
          year={year}
          {...props}
        />
      )
  }
}
