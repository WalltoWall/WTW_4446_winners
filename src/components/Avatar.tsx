import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { View } from './View'

const variants = {
  small: {
    dimension: linearScale('1rem', '1.5rem'),
  },
  medium: {
    dimension: linearScale('1.875rem', '2.5rem'),
  },
} as const

type AvatarProps = React.ComponentProps<typeof View> & {
  variant?: keyof typeof variants
  fluid?: FluidObject
  alt?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  variant: variantName = 'medium',
  fluid,
  alt,
  ...props
}) => {
  const variant = variants[variantName]

  return (
    <View
      {...props}
      css={mq({
        backgroundColor: fluid ? 'transparent' : t.c.Black,
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
