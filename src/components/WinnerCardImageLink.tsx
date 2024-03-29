import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import GatsbyImage from 'gatsby-image'
import { negateScale } from 'styled-system-scale'

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
        <ul
          css={mq({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            position: 'absolute',
            right: 0,
            top: linearScale('1rem', '1.5rem'),
            marginBottom: negateScale(linearScale('0.5rem', '1rem', 'space')),
          })}
        >
          {isNationalWinner && (
            <li
              css={mq({
                marginBottom: linearScale('0.5rem', '0.75rem', 'space'),
              })}
            >
              <Ribbon>{year} National Winner</Ribbon>
            </li>
          )}
          {isNmgScholarshipWinner && (
            <li
              css={mq({
                marginBottom: linearScale('0.5rem', '0.75rem', 'space'),
              })}
            >
              <Ribbon variant="teal">NMG Scholarship Winner</Ribbon>
            </li>
          )}
        </ul>
      </AspectRatio>
    </Link>
  )
}
