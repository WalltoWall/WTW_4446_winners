import React from 'react'

import { t, mq } from '../theme'
import { View } from './View'
import { AspectRatio } from './AspectRatio'
import { BoundedBox } from './BoundedBox'

type HeroProps = React.ComponentProps<typeof View>

export const Hero: React.FC<HeroProps> = ({ children, ...props }) => (
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
    />
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
