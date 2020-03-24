import React from 'react'

import { Layout } from '../components/Layout'

type IndexPageProps = React.ComponentProps<typeof Layout>

export const IndexPage: React.FC<IndexPageProps> = props => (
  <Layout {...props}>
    <div>Hello world!</div>
  </Layout>
)

export default IndexPage
