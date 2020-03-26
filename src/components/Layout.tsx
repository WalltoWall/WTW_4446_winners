import React from 'react'

import { t, mq } from '../theme'
import { View } from './View'
import { Footer } from './Footer'

type LayoutProps = React.ComponentProps<typeof View>

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <View
    {...props}
    css={mq({
      color: t.c.Gray10,
      fontFamily: t.ff.Sans,
      fontSize: t.f.b,
      lineHeight: t.lh.Solid,
    })}
  >
    <View as="main">{children}</View>
    <Footer />
  </View>
)
