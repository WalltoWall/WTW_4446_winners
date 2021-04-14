import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { AdPeoplePageQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { useYears } from '../hooks/useYears'

import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { AdPeopleFilters } from '../components/AdPeopleFilters'

import { LargePersonCard } from '../components/LargePersonCard'
import { EmptyMessage } from '../components/EmptyMessage'

export type AdPeoplePageProps = LayoutProps & {
  data: AdPeoplePageQuery
  pageContext: {
    year: string
  }
}

export const AdPeoplePage = ({
  data,
  pageContext,
  ...props
}: AdPeoplePageProps) => {
  const people = data.allAirtableAdPerson.nodes
  const years = useYears()

  return (
    <Layout {...props}>
      <Helmet>
        <title>Ad People</title>
      </Helmet>

      <AdPeopleFilters initialYear={pageContext.year} years={years} />

      <BoundedBox maxWidth="Large" css={{ backgroundColor: t.c.Gray95 }}>
        {people.length > 0 ? (
          <ul
            css={mq({
              display: 'grid',
              gap: linearScale('0.875rem', '1.5rem', 'space'),
            })}
          >
            {people.map(person => (
              <li key={person.data?.name}>
                <LargePersonCard
                  name={person.data?.name!}
                  title={person.data?.title!}
                  agencyName={person.data?.agency?.[0]?.data?.name}
                  agencyHref={person.data?.agency?.[0]?.fields?.url}
                  award={person.data?.award!}
                  descriptionHTML={
                    person.data?.description?.childMarkdownRemark?.html
                  }
                  imageFluid={person?.fields?.photo?.fluid}
                />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyMessage heading="Looks like there aren't any winners here.">
            Check back later.
          </EmptyMessage>
        )}
      </BoundedBox>
    </Layout>
  )
}

export default AdPeoplePage

export const query = graphql`
  query AdPeoplePage($year: Date!) {
    allAirtableAdPerson(filter: { data: { year: { eq: $year } } }) {
      nodes {
        fields {
          photo {
            fluid(maxWidth: 800) {
              ...GatsbyImgixFluid
            }
          }
        }
        data {
          name
          title
          agency {
            fields {
              url
            }
            data {
              name
            }
          }
          award
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
