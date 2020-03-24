import React from 'react'
import { graphql } from 'gatsby'

import { EntryTemplateQuery } from '../graphqlTypes'
import { Layout } from '../components/Layout'

type EntryTemplateProps = React.ComponentProps<typeof Layout> & {
  data: EntryTemplateQuery
}

export const EntryTemplate: React.FC<EntryTemplateProps> = ({
  data,
  ...props
}) => {
  const entry = data.airtableEntry

  return <Layout {...props}>Entry template for: {entry?.data?.name}</Layout>
}

export default EntryTemplate

export const query = graphql`
  query EntryTemplate($recordId: String!) {
    airtableEntry(recordId: { eq: $recordId }) {
      data {
        name
      }
    }
  }
`
