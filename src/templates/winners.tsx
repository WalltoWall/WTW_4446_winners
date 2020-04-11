import React from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql } from 'gatsby'

import { Layout, LayoutProps } from '../components/Layout'

export type WinnersTemplateProps = LayoutProps & {}

export const WinnersTemplate = (props: WinnersTemplateProps) => {
  return (
    <Layout {...props}>
      <Helmet>
        <title>Winners</title>
      </Helmet>
    </Layout>
  )
}

export default WinnersTemplate
