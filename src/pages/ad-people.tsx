import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { AdPeoplePageQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { MessageSlice } from '../slices/MessageSlice'

import { Layout, LayoutProps } from '../components/Layout'
import { Heading } from '../components/Heading'
import { BoundedBox } from '../components/BoundedBox'

// import { LargePersonCard } from '../components/LargePersonCard'

export type AdPeoplePageProps = LayoutProps & {
  data: AdPeoplePageQuery
}

export const AdPeoplePage = ({ data, ...props }: AdPeoplePageProps) => {
  // const people = data.allAirtableAdPerson.nodes

  return (
    <Layout {...props}>
      <Helmet>
        <title>Ad People</title>
      </Helmet>
      <BoundedBox
        css={mq({
          backgroundColor: t.c.White,
          paddingTop: linearScale('1.5rem', '3.5rem'),
          paddingBottom: linearScale('1.5rem', '3.5rem'),
        })}
      >
        <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
          Ad People of the Year
        </Heading>
      </BoundedBox>

      <BoundedBox maxWidth="Medium" css={{ backgroundColor: t.c.Gray95 }}>
        {/* temporary message start */}
        <MessageSlice
          textHTML={`
            <p>
              Due to the current world health situation, the Pele Awards
              planning committee has made the decision to postpone the
              selection of the 2020 AAF Person of the Year, Ad 2 Hawaii Young
              Person of the Year, and Silver Medal Award winners until a later
              time when we can select, honor and celebrate them together. More
              details will be sent out about upcoming plans as they are made.
              Until then, take care of yourselves and each other. 
            </p>
          `}
        />
        {/* temporary message end*/}
      </BoundedBox>

      {/* Disabled due to postponed ad people awards announcement */}
      {/* 
      <BoundedBox maxWidth="Large" css={{ backgroundColor: t.c.Gray95 }}>
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
      </BoundedBox>
      */}
    </Layout>
  )
}

export default AdPeoplePage

export const query = graphql`
  query AdPeoplePage {
    allAirtableAdPerson {
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
