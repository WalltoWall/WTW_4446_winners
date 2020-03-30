import React from 'react'
import { Helmet } from 'react-helmet-async'

import { t, mq } from '../theme'
import { View } from './View'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = React.ComponentProps<typeof View>

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <>
    <Helmet
      defaultTitle="Pele Awards Winners"
      titleTemplate="%s | Pele Awards Winners"
    >
      <html lang="en" />
    </Helmet>
    <View
      {...props}
      css={mq({
        color: t.c.Gray10,
        fontFamily: t.ff.Sans,
        fontSize: t.f.b,
        lineHeight: t.lh.Solid,
      })}
    >
      <Header />
      <View as="main">{children}</View>
      <Footer />
    </View>
  </>
)
