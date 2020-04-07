import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { BoundedBox } from './BoundedBox'
import { ImageContainer } from './ImageContainer'

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
      gridTemplateColumns: [null, 'repeat(2, 1fr)'],
      backgroundColor: t.c.White,
      alignItems: 'center',
    })}
  >
    <AspectRatio x={8} y={5} css={{ backgroundColor: t.c.Black }}>
      {imageFluid && (
        <ImageContainer>
          <GatsbyImage fluid={imageFluid} alt={imageAlt} />
        </ImageContainer>
      )}
    </AspectRatio>
    <BoundedBox css={{ textAlign: 'center' }}>
      <div
        css={{
          maxWidth: '45ch',
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
