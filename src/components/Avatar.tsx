import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

const colors: Record<string, [string, string]> = {
  grape: ['#bc93c4', '#bed2e7'],
  sprite: ['#f6b843', '#8ef5a7'],
  icee: ['#fd75b5', '#5be4fd'],
  pog: ['#ee8b74', '#ae7caf'],
  mentos: ['#70c3dc', '#bfeeda'],
  sunset: ['#d9646f', '#f3c26c'],
  peach: ['#f5bef4', '#ffe4c1'],
  chill: ['#b8b4ee', '#c4f7dc'],
}

const variants = {
  tiny: {
    dimension: linearScale('1rem', '1.25rem'),
  },
  small: {
    dimension: linearScale('1rem', '1.5rem'),
  },
  medium: {
    dimension: linearScale('1.875rem', '2.5rem'),
  },
} as const

export type AvatarProps = ViewProps & {
  variant?: keyof typeof variants
  fluid?: FluidObject
  alt?: string
}

export const Avatar = ({
  variant: variantName = 'medium',
  fluid,
  alt,
  ...props
}: AvatarProps) => {
  const variant = variants[variantName]

  return (
    <View
      {...props}
      css={mq({
        background: fluid
          ? 'transparent'
          : `linear-gradient(to bottom right, purple, skyblue)`,
        opacity: fluid ? 1 : 0.5,
        width: variant.dimension,
        height: variant.dimension,
        borderRadius: '50%',
        overflow: 'hidden',
      })}
    >
      {fluid && (
        <GatsbyImage
          fluid={fluid}
          alt={alt}
          css={{ width: '100%', height: '100%' }}
        />
      )}
    </View>
  )
}
