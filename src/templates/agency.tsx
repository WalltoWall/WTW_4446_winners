import React from 'react'
import { graphql } from 'gatsby'

import { AgencyTemplateQuery } from '../graphqlTypes'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'

type AgencyTemplateProps = React.ComponentProps<typeof Layout> & {
  data: AgencyTemplateQuery
}

export const AgencyTemplate: React.FC<AgencyTemplateProps> = ({
  data,
  ...props
}) => {
  const agency = data.airtableAgency

  return (
    <Layout {...props}>
      <Heading>Agency template for: {agency?.data?.name}</Heading>
    </Layout>
  )
}

export default AgencyTemplate

export const query = graphql`
  query AgencyTemplate($recordId: String!) {
    airtableAgency(recordId: { eq: $recordId }) {
      data {
        name
      }
    }
  }
`
