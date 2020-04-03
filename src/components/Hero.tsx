import React from 'react'
import { FluidObject } from 'gatsby-image'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { BoundedBox } from './BoundedBox'
import { Img } from './Img'

export type HeroProps = ViewProps & {
  imageFluid?: FluidObject
  imageAlt?: string
  imageSrc?: string
}

export const Hero: React.FC<HeroProps> = ({
  children,
  imageFluid,
  imageAlt,
  imageSrc,
  ...props
}) => (
  <View
    as="section"
    {...props}
    css={mq({
      display: 'grid',
      gridTemplateColumns: [null, 'repeat(2, 1fr)'],
      backgroundColor: t.c.White,
      alignItems: 'center',
    })}
  >
    <AspectRatio
      x={8}
      y={5}
      css={{ backgroundColor: t.c.Black, height: '100%' }}
    >
      {/* TODO: should be changed to gatsby-image later */}
      {imageSrc && <Img src={imageSrc} alt={imageAlt} />}
    </AspectRatio>
    <BoundedBox css={{ textAlign: 'center' }}>
      <View
        css={{
          maxWidth: '45ch',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: t.lh.Copy,
        }}
      >
        {children}
      </View>
    </BoundedBox>
  </View>
)
