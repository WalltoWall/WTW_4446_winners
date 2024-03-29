import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { BoundedBox } from './BoundedBox'

export type HeroProps = ViewProps & {
  imageFluid?: FluidObject
  imageAlt?: string
  imageSrc?: string
}

export const Hero = ({
  children,
  imageSrc,
  imageFluid,
  imageAlt,
  ...props
}: HeroProps) => (
  <View
    {...props}
    css={mq({
      display: 'grid',
      gridTemplateColumns: imageFluid ? [null, 'repeat(2, 1fr)'] : '1fr',
      backgroundColor: t.c.White,
      alignItems: 'center',
    })}
  >
    {imageFluid && (
      <AspectRatio
        x={8}
        y={5}
        css={{ backgroundColor: t.c.Black, height: '100%' }}
      >
        <GatsbyImage
          fluid={imageFluid}
          alt={imageAlt}
          style={{ height: '100%' }}
        />
      </AspectRatio>
    )}
    <BoundedBox css={{ textAlign: 'center' }}>
      <div
        css={{
          maxWidth: imageFluid ? '42ch' : '70ch',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: t.lh.Copy,
        }}
      >
        {children}
      </div>
    </BoundedBox>
  </View>
)
