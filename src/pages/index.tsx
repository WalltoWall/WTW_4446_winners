import React from 'react'
import { graphql } from 'gatsby'

import { IndexPageQuery } from '../graphqlTypes'
import { Award } from '../types'

import { t, mq, linearScale } from '../theme'
import { WinnerCard } from '../components/WinnerCard'
import { PersonCard } from '../components/PersonCard'
import { Heading } from '../components/Heading'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
import { CardList } from '../components/CardList'
import { HeroSlice } from '../slices/HeroSlice'
import { CallToActionSlice } from '../slices/CallToActionSlice'
import { ColoredBoxesSlice } from '../slices/ColoredBoxesSlice'
import { HTMLContent } from '../components/HTMLContent'
import { View } from '../components/View'

export type IndexPage = LayoutProps & {
  data: IndexPageQuery
}

export const IndexPage = ({ data, ...props }: IndexPage) => {
  const bestOfEntries = data.bestOfEntries.nodes
  const judgesEntries = data.judgesEntries.nodes
  const adPeople = data.adPeople.nodes
  const archives = data.archives.nodes

  return (
    <Layout {...props}>
      <HeroSlice
        textHTML={data.homeHeroText?.data?.rich_text?.childMarkdownRemark?.html}
        imageFluid={
          data.homeHeroImage?.data?.image?.localFiles?.[0]?.childCloudinaryAsset
            ?.fluid
        }
      />

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
            {bestOfEntries.map(winner => {
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
            {adPeople.map(person => (
              <PersonCard
                key={person?.fields?.url}
                href="/ad-people/"
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
      <BoundedBox css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}>
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
            {judgesEntries.map(winner => {
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
          </CardList>{' '}
        </div>
      </BoundedBox>

      <ColoredBoxesSlice
        whiteBoxChildren={
          <HTMLContent
            html={`
              <h1>Archives</h1>
              <p>Browse Pele Awards Winners from previous years.</p>
            `}
            componentOverrides={{
              h1: Comp => props => (
                <View
                  as={Comp}
                  {...props}
                  css={mq({
                    fontSize: t.f.xl,
                    lineHeight: t.lh.Title,
                    marginTop: linearScale('2.25rem', '3rem'),
                    marginBottom: linearScale('1rem', '1.5rem'),
                    color: t.c.Black,
                    ...t.boxStyles.firstLastNoMargin,
                  })}
                />
              ),
            }}
          />
        }
        redBoxChildren={
          <View
            as="ul"
            css={mq({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: t.spaceScales.m,
              fontWeight: t.fontWeights.Semibold,
              fontSize: t.fontSizeScales.xl,
            })}
          >
            {archives.map(a => (
              <li key={a.data?.year}>
                <Anchor
                  href={a.data?.link!}
                  css={{
                    '&:hover, &:focus': {
                      color: t.colors.White,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {a.data?.year}
                </Anchor>
              </li>
            ))}
          </View>
        }
      />

      <CallToActionSlice
        buttonHref={data.homeButtonHref?.data?.href}
        buttonText={data.homeButtonText?.data?.plain_text}
        textHTML={data.homeCtaText?.data?.rich_text?.childMarkdownRemark?.html}
      />
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
    homeCtaText: airtableTextField(data: { uid: { eq: "Home CTA" } }) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    homeButtonText: airtableTextField(
      data: { uid: { eq: "Home CTA Button" } }
    ) {
      data {
        plain_text
      }
    }
    homeButtonHref: airtableLink(data: { uid: { eq: "Home CTA Button" } }) {
      data {
        href
      }
    }
    homeHeroText: airtableTextField(data: { uid: { eq: "Home Hero Text" } }) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    homeHeroImage: airtableImageField(
      data: { uid: { eq: "Home Hero Image" } }
    ) {
      data {
        image {
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
    archives: allAirtableArchive {
      nodes {
        data {
          link
          year
        }
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
