import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

const DEFAULT_FLAVOR = ['#000', '#000'] as const

const flavors: Record<string, readonly [string, string]> = {
  grape: ['#bc93c4', '#bed2e7'],
  sprite: ['#f6b843', '#8ef5a7'],
  icee: ['#fd75b5', '#5be4fd'],
  pog: ['#ee8b74', '#ae7caf'],
  mentos: ['#70c3dc', '#bfeeda'],
  sunset: ['#d9646f', '#f3c26c'],
  peach: ['#f5bef4', '#ffe4c1'],
  chill: ['#b8b4ee', '#c4f7dc'],
}

export const seedToFlavor = (seed?: string) => {
  if (!seed) return DEFAULT_FLAVOR

  const flavorNames = Object.keys(flavors)
  const flavorName =
    flavorNames[
      ((seed?.charCodeAt?.(0) ?? 0) + (seed?.charCodeAt?.(1) ?? 0)) %
        (flavorNames.length - 1)
    ]

  return flavors[flavorName]
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
  flavorSeed?: string
  fluid?: FluidObject
  alt?: string
}

export const Avatar = ({
  variant: variantName = 'medium',
  flavorSeed,
  fluid,
  alt,
  ...props
}: AvatarProps) => {
  const variant = variants[variantName]
  const flavor = seedToFlavor(flavorSeed)

  return (
    <View
      {...props}
      css={mq({
        background: fluid
          ? 'transparent'
          : `linear-gradient(to bottom right, ${flavor[0]}, ${flavor[1]})`,
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
