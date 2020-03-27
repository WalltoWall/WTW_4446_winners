import React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import { EntryTemplateQuery } from '../graphqlTypes'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'

type EntryTemplateProps = React.ComponentProps<typeof Layout> & {
  data: EntryTemplateQuery
}

export const EntryTemplate: React.FC<EntryTemplateProps> = ({
  data,
  ...props
}) => {
  const entry = data.airtableEntry
  const images =
    entry?.data?.images?.localFiles?.map(
      (file) => file?.childCloudinaryAsset,
    ) ?? []

  return (
    <Layout {...props}>
      <Heading>Entry template for: {entry?.data?.name}</Heading>
      {images.map((image) => (
        <GatsbyImage key={image?.fluid?.src} fluid={image?.fluid} />
      ))}
    </Layout>
  )
}

export default EntryTemplate

export const query = graphql`
  query EntryTemplate($recordId: String!) {
    airtableEntry(recordId: { eq: $recordId }) {
      data {
        name
        images {
          localFiles {
            childCloudinaryAsset {
              fluid(maxWidth: 800) {
                ...CloudinaryAssetFluid
              }
            }
          }
        }
      }
    }
  }
`
