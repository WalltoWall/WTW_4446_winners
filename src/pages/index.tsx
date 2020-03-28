import React from 'react'
import { graphql } from 'gatsby'

import { EVENT_SITE_URL } from '../constants'
import { IndexPageQuery } from '../graphqlTypes'
import { Award } from '../types'

import { t, mq, linearScale } from '../theme'
import { View } from '../components/View'
import { EntryCard } from '../components/EntryCard'
import { PersonCard } from '../components/PersonCard'
import { Heading } from '../components/Heading'
import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
import { CallToAction } from '../components/CallToAction'
import { CardList } from '../components/CardList'

type IndexPageProps = React.ComponentProps<typeof Layout> & {
  data: IndexPageQuery
}

export const IndexPage: React.FC<IndexPageProps> = ({ data, ...props }) => {
  const bestOfEntries = data.bestOfEntries.nodes
  const judgesEntries = data.judgesEntries.nodes
  const adPeople = data.adPeople.nodes

  return (
    <Layout {...props}>
      <BoundedBox css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}>
        <View
          css={mq({ display: 'grid', gap: linearScale('0.625rem', '1.75rem') })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            <Anchor href="/winners/">Best of Show Winners</Anchor>
          </Heading>
          <CardList columns={[1, 2]}>
            {bestOfEntries.map((entry) => (
              <EntryCard
                key={entry?.fields?.url}
                variant="featuredWide"
                href={entry?.fields?.url!}
                title={entry?.data?.name}
                subtitle={entry?.data?.special_award}
                award={entry?.data?.award?.toLowerCase?.() as Award}
                imageFluid={
                  entry?.data?.images?.localFiles?.[0]?.childCloudinaryAsset
                    ?.fluid
                }
                isSpecialAward={true}
              />
            ))}
          </CardList>
        </View>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}>
        <View
          css={mq({ display: 'grid', gap: linearScale('0.625rem', '1.75rem') })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            <Anchor href="/ad-people/">People of the Year</Anchor>
          </Heading>
          <CardList columns={[1, 3]}>
            {adPeople.map((person) => (
              <PersonCard
                key={person?.fields?.url}
                href={person?.fields?.url!}
                name={person?.data?.name!}
                title={person?.data?.title!}
                company={person?.data?.company}
                award={person?.data?.award!}
                imageFluid={
                  person?.data?.photo?.localFiles?.[0]?.childCloudinaryAsset
                    ?.fluid
                }
                isSpecialAward={true}
              />
            ))}
          </CardList>
        </View>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <View
          css={mq({ display: 'grid', gap: linearScale('0.625rem', '1.75rem') })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            <Anchor href="/winners/">Judge&rsquo;s Choice Awards</Anchor>
          </Heading>
          <CardList columns={[1, 3]}>
            {judgesEntries.map((entry) => (
              <EntryCard
                key={entry?.fields?.url}
                variant="featured"
                href={entry?.fields?.url!}
                title={entry?.data?.name}
                subtitle={entry?.data?.special_award}
                award={entry?.data?.award?.toLowerCase?.() as Award}
                imageFluid={
                  entry?.data?.images?.localFiles?.[0]?.childCloudinaryAsset
                    ?.fluid
                }
                isSpecialAward={true}
              />
            ))}
          </CardList>
        </View>
      </BoundedBox>
      <CallToAction buttonText="Learn more" buttonHref={EVENT_SITE_URL}>
        <Heading
          css={mq({
            fontSize: t.f.xl,
            marginBottom: linearScale('0.375rem', '1rem'),
          })}
        >
          Get ready to enter for 2021!
        </Heading>
        <View as="p">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Curabitur blandit tempus porttitor. Maecenas sed diam eget risus
          varius blandit sit amet non magna. Maecenas faucibus mollis interdum.
        </View>
      </CallToAction>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    bestOfEntries: allAirtableEntry(
      filter: { data: { special_award: { regex: "/^Best of Show - /" } } }
    ) {
      nodes {
        ...SpecialAwardEntry
      }
    }
    adPeople: allAirtableAdPerson {
      nodes {
        fields {
          url
        }
        data {
          name
          title
          company
          award
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
    judgesEntries: allAirtableEntry(
      filter: { data: { special_award: { regex: "/^Judge's Award - /" } } }
    ) {
      nodes {
        ...SpecialAwardEntry
      }
    }
  }

  fragment SpecialAwardEntry on AirtableEntry {
    fields {
      url
    }
    data {
      name
      award
      special_award
      images {
        localFiles {
          childCloudinaryAsset {
            fluid(maxWidth: 1000) {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
    }
  }
`
