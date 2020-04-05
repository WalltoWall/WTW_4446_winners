import React from 'react'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { BoundedBox } from './BoundedBox'

export type HeroProps = ViewProps

export const Hero = ({ children, ...props }: HeroProps) => (
  <View
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
    />
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
