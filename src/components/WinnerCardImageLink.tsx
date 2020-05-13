import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import GatsbyImage from 'gatsby-image'

import { AspectRatio } from './AspectRatio'
import { t, mq, linearScale } from '../theme'
import { Link } from './Link'
import { Ribbon } from './Ribbon'
import { WinnerCardProps } from './WinnerCard'

const imageVariants = {
  small: {
    width: ['50%', '100%'],
  },
  wide: {
    width: '100%',
  },
} as const

export type WinnerCardImageLinkProps = {
  href: WinnerCardProps['href']
  isNationalWinner?: WinnerCardProps['isNationalWinner']
  isNmgScholarshipWinner?: WinnerCardProps['isNmgScholarshipWinner']
  year?: number
  imageFluid?: WinnerCardProps['imageFluid']
  title?: WinnerCardProps['title']
  x: number
  y: number
  variant?: keyof typeof imageVariants
  className?: string
}

export const WinnerCardImageLink = ({
  variant: variantName = 'small',
  href,
  title,
  imageFluid,
  isNationalWinner,
  isNmgScholarshipWinner,
  year,
  x,
  y,
  className,
}: WinnerCardImageLinkProps) => {
  const variant = imageVariants[variantName]

  return (
    <Link
      href={href}
      tabIndex={-1}
      className={className}
      css={mq({
        '&:hover ~ .metadata .title-link, &:focus ~ .metadata .title-link': {
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
          height: '100%',
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
      </AspectRatio>
    </Link>
  )
}
