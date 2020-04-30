import React from 'react'
import { Helmet } from 'react-helmet-async'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'
import { Header } from './Header'
import { Footer } from './Footer'

export type LayoutProps = ViewProps & {
  metaDescription?: string
}

export const Layout = ({
  children,
  metaDescription,
  ...props
}: LayoutProps) => (
  <>
    <Helmet
      defaultTitle="Pele Awards Winners"
      titleTemplate="%s – Pele Awards Winners"
    >
      <html lang="en" />
      <meta
        name="description"
        content={metaDescription ?? "The Pele winner's site."}
      />
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
      <main>{children}</main>
      <Footer />
    </View>
  </>
)
