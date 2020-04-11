import React from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql } from 'gatsby'

import { Layout, LayoutProps } from '../components/Layout'

export type WinnersTemplateProps = LayoutProps & {}

export const WinnersTemplate = (props: WinnersTemplateProps) => {
  console.log(props)

  return (
    <Layout {...props}>
      <Helmet>
        <title>Winners</title>
      </Helmet>
    </Layout>
  )
}

export default WinnersTemplate

export const query = graphql`
  query WinnersTemplate($categoryId: String!) {
    paginatedCollectionPage(
      collection: { id: { eq: $categoryId } }
      index: { eq: 0 }
    ) {
      id
      nodes
      nextPage {
        id
      }
      collection {
        id
        nodeCount
      }
    }
    allPaginatedCollectionPage(
      filter: {
        collection: { name: { regex: "/^winners//" } }
        index: { eq: 0 }
      }
    ) {
      nodes {
        id
        collection {
          id
          name
        }
      }
    }
  }
`
