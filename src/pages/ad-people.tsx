import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { AdPeoplePageQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'
import { BoundedBox } from '../components/BoundedBox'
import { LargePersonCard } from '../components/LargePersonCard'
import { View } from '../components/View'

type AdPeoplePageProps = React.ComponentProps<typeof Layout> & {
  data: AdPeoplePageQuery
}

export const AdPeoplePage: React.FC<AdPeoplePageProps> = ({
  data,
  ...props
}) => {
  const people = data.allAirtableAdPerson.nodes

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
      <BoundedBox maxWidth="Large" css={{ backgroundColor: t.c.Gray95 }}>
        <View
          as="ul"
          css={mq({
            display: 'grid',
            gap: linearScale('0.875rem', '1.5rem', 'space'),
          })}
        >
          {people.map((person) => (
            <View key={person.data?.name} as="li">
              <LargePersonCard
                name={person.data?.name!}
                title={person.data?.title!}
                agencyName={person.data?.agency?.[0]?.data?.name}
                agencyHref={person.data?.agency?.[0]?.fields?.url}
                award={person.data?.award!}
                descriptionHTML={
                  person.data?.description?.childMarkdownRemark?.html
                }
                imageFluid={
                  person?.data?.photo?.localFiles?.[0]?.childCloudinaryAsset
                    ?.fluid
                }
              />
            </View>
          ))}
        </View>
      </BoundedBox>
    </Layout>
  )
}

export default AdPeoplePage

export const query = graphql`
  query AdPeoplePage {
    allAirtableAdPerson {
      nodes {
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
          photo {
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
  }
`
