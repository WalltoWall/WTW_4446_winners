import React from 'react'
import { graphql } from 'gatsby'

import { EVENT_SITE_URL } from '../constants'
import { IndexPageQuery } from '../graphqlTypes'
import { Award } from '../types'

import { t, mq, linearScale } from '../theme'
import { WinnerCard } from '../components/WinnerCard'
import { PersonCard } from '../components/PersonCard'
import { Heading } from '../components/Heading'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
import { CallToAction } from '../components/CallToAction'
import { CardList } from '../components/CardList'
import { Hero } from '../components/Hero'

export type IndexPage = LayoutProps & {
  data: IndexPageQuery
}

export const IndexPage = ({ data, ...props }: IndexPage) => {
  const bestOfEntries = data.bestOfEntries.nodes
  const judgesEntries = data.judgesEntries.nodes
  const adPeople = data.adPeople.nodes

  return (
    <Layout {...props}>
      {/* TODO: Convert to CMS/Airtable + HTMLContent */}
      <Hero>
        <Heading
          css={mq({
            fontSize: t.f.xl,
            lineHeight: t.lh.Title,
            marginTop: linearScale('2.25rem', '3rem', 'space'),
            marginBottom: linearScale('1rem', '1.5rem', 'space'),
            color: t.c.Black,
            ...t.boxStyles.firstLastNoMargin,
          })}
        >
          <Anchor href="/winners/">
            2020 Pele Awards Winners Have Been Announced!
          </Anchor>
        </Heading>
        <p>
          This year’s Pele Awards Winners have been selected. Have a look at the
          very best design and advertising work in Hawai‘i. Mahalo to all
          participants and congratulations to all the winners.
        </p>
      </Hero>
      <BoundedBox css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}>
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.75rem', 'space'),
          })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            <Anchor href="/winners/">Best of Show Winners</Anchor>
          </Heading>
          <CardList columns={[1, 2]}>
            {bestOfEntries.map((winner) => {
              const agency = winner?.data?.agency?.[0]

              return (
                <WinnerCard
                  key={winner?.fields?.url}
                  variant="featuredWide"
                  href={winner?.fields?.url!}
                  title={winner?.data?.name}
                  subtitle={winner?.data?.special_award}
                  award={winner?.data?.award?.toLowerCase?.() as Award}
                  imageFluid={
                    winner?.data?.images?.localFiles?.[0]?.childCloudinaryAsset
                      ?.fluid
                  }
                  isSpecialAward={true}
                  agencyName={agency?.data?.name!}
                  agencyHref={agency?.fields?.url!}
                  agencyAvatarFluid={
                    agency?.data?.avatar?.localFiles?.[0]?.childCloudinaryAsset
                      ?.fluid
                  }
                />
              )
            })}
          </CardList>
        </div>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}>
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.75rem', 'space'),
          })}
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
                agencyName={person?.data?.agency?.[0]?.data?.name}
                award={person?.data?.award!}
                imageFluid={
                  person?.data?.photo?.localFiles?.[0]?.childCloudinaryAsset
                    ?.fluid
                }
              />
            ))}
          </CardList>
        </div>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.75rem', 'space'),
          })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            <Anchor href="/winners/">Judge&rsquo;s Choice Awards</Anchor>
          </Heading>
          <CardList columns={[1, 3]}>
            {judgesEntries.map((winner) => {
              const agency = winner?.data?.agency?.[0]

              return (
                <WinnerCard
                  key={winner?.fields?.url}
                  variant="featured"
                  href={winner?.fields?.url!}
                  title={winner?.data?.name}
                  subtitle={winner?.data?.special_award}
                  award={winner?.data?.award?.toLowerCase?.() as Award}
                  imageFluid={
                    winner?.data?.images?.localFiles?.[0]?.childCloudinaryAsset
                      ?.fluid
                  }
                  isSpecialAward={true}
                  agencyName={agency?.data?.name!}
                  agencyHref={agency?.fields?.url!}
                  agencyAvatarFluid={
                    agency?.data?.avatar?.localFiles?.[0]?.childCloudinaryAsset
                      ?.fluid
                  }
                />
              )
            })}
          </CardList>
        </div>
      </BoundedBox>
      <CallToAction buttonText="Learn more" buttonHref={EVENT_SITE_URL}>
        <Heading
          css={mq({
            fontSize: t.f.xl,
            marginBottom: linearScale('0.375rem', '1rem', 'space'),
          })}
        >
          Get ready to enter for 2021!
        </Heading>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Curabitur blandit tempus porttitor. Maecenas sed diam eget risus
          varius blandit sit amet non magna. Maecenas faucibus mollis interdum.
        </p>
      </CallToAction>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    bestOfEntries: allAirtableWinner(
      filter: {
        data: {
          special_award: { regex: "/^Best of Show - /" }
          type: { eq: "Professional" }
        }
      }
    ) {
      nodes {
        ...SpecialAwardWinner
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
          agency {
            data {
              name
            }
          }
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
    judgesEntries: allAirtableWinner(
      filter: { data: { special_award: { regex: "/^Judge's Award - /" } } }
    ) {
      nodes {
        ...SpecialAwardWinner
      }
    }
  }

  fragment SpecialAwardWinner on AirtableWinner {
    fields {
      url
    }
    data {
      name
      award
      special_award
      agency {
        fields {
          url
        }
        data {
          name
          avatar {
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
