import React from 'react'
import { FluidObject } from 'gatsby-image'

import { Agency } from '../types'

import { WinnerCardBasic } from './WinnerCardBasic'
import { WinnerCardFeatured } from './WinnerCardFeatured'
import { AwardIconProps } from './AwardIcon'
import { ViewProps } from './View'

export type WinnerCardProps = ViewProps & {
  href: string
  imageFluid?: FluidObject
  isNationalWinner?: boolean
  isNmgScholarshipWinner?: boolean
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
  isNmgScholarshipWinner,
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
          isNmgScholarshipWinner={isNmgScholarshipWinner}
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
          isNmgScholarshipWinner={isNmgScholarshipWinner}
          year={year}
          {...props}
        />
      )
  }
}
