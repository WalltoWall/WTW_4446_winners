import React from 'react'
import { graphql } from 'gatsby'

import { PersonTemplateQuery } from '../graphqlTypes'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'

type PersonTemplateProps = React.ComponentProps<typeof Layout> & {
  data: PersonTemplateQuery
}

export const PersonTemplate: React.FC<PersonTemplateProps> = ({
  data,
  ...props
}) => {
  const person = data.airtableAdPerson

  return (
    <Layout {...props}>
      <Heading>Person template for: {person?.data?.name}</Heading>
    </Layout>
  )
}

export default PersonTemplate

export const query = graphql`
  query PersonTemplate($recordId: String!) {
    airtableAdPerson(recordId: { eq: $recordId }) {
      data {
        name
      }
    }
  }
`
