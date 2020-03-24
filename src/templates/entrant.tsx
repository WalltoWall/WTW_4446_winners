import React from 'react'
import { graphql } from 'gatsby'

import { EntrantTemplateQuery } from '../graphqlTypes'
import { Layout } from '../components/Layout'

type EntrantTemplateProps = React.ComponentProps<typeof Layout> & {
  data: EntrantTemplateQuery
}

export const EntrantTemplate: React.FC<EntrantTemplateProps> = ({
  data,
  ...props
}) => {
  const entrant = data.airtableEntrant

  return <Layout {...props}>Entrant template for: {entrant?.data?.name}</Layout>
}

export default EntrantTemplate

export const query = graphql`
  query EntrantTemplate($recordId: String!) {
    airtableEntrant(recordId: { eq: $recordId }) {
      data {
        name
      }
    }
  }
`
