import React from 'react'
import { graphql } from 'gatsby'

import { IndexPageQuery } from '../graphqlTypes'
import { t, mq, linearScale } from '../theme'

import { PersonCard } from '../components/PersonCard'
import { Heading } from '../components/Heading'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
import { CardList } from '../components/CardList'
import { HTMLContent } from '../components/HTMLContent'
import { View } from '../components/View'
import { SpecialWinners } from '../components/SpecialWinners'
import { SVG } from '../components/SVG'
import { Button } from '../components/Button'
import { Link } from '../components/Link'
import { withLightbox } from '../components/Lightbox'
import { HeroVideo } from '../components/HeroVideo'
import { HeroSlice } from '../slices/HeroSlice'
import { CallToActionSlice } from '../slices/CallToActionSlice'
import { ColoredBoxesSlice } from '../slices/ColoredBoxesSlice'
import { MessageSlice } from '../slices/MessageSlice'
import { ReactComponent as AssetAAALogoSVG } from '../assets/aaa-logo.svg'

export type IndexPageProps = LayoutProps & {
  data: IndexPageQuery
}

export const IndexPage = ({ data, ...props }: IndexPageProps) => {
  const bestOfWinners = data.bestOfWinners.nodes
  const overallJudgesWinner = data.overallJudgesWinner
  const judgesWinners = data.judgesWinners.nodes
  const adPeople = data.adPeople.nodes
  const archives = data.archives.nodes

  return (
    <Layout {...props}>
      {data.heroVideoHref?.data?.href && (
        <HeroVideo src={data.heroVideoHref?.data?.href} />
      )}
      <HeroSlice
        textHTML={data.homeHeroText?.data?.rich_text?.childMarkdownRemark?.html}
        imageFluid={data.homeHeroImage?.fields?.image?.fluid}
      />

      <MessageSlice
        textHTML={data.homeMessage?.data?.rich_text?.childMarkdownRemark?.html}
        quotee={data.homeMessage?.data?.plain_text}
      />

      <BoundedBox
        maxWidth="Xlarge"
        css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.75rem', 'space'),
          })}
        >
          <SpecialWinners
            heading="Best of Show Winners"
            headingHref="/winners/"
            columns={[1, 2]}
            winners={bestOfWinners}
            variant="featuredWide"
          />
        </div>
      </BoundedBox>

      <BoundedBox
        maxWidth="Xlarge"
        css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}
      >
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
                imageFluid={person?.fields?.photo?.fluid}
              />
            ))}
          </CardList>
        </div>
      </BoundedBox>

      <BoundedBox
        maxWidth="Xlarge"
        css={{ backgroundColor: t.c.Gray95, paddingBottom: 0 }}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.75rem', 'space'),
          })}
        >
          <SpecialWinners
            heading="Judge's Choice Awards"
            headingHref="/winners/"
            columns={[1, 3]}
            variant="featured"
            overallWinner={overallJudgesWinner}
            winners={judgesWinners}
          />
        </div>
      </BoundedBox>

      <ColoredBoxesSlice
        css={{ paddingBottom: 0 }}
        leftBackgroundColor="Black"
        leftBoxChildren={
          <SVG
            svg={AssetAAALogoSVG}
            css={mq({ width: ['6rem', '8rem', '10rem', '12rem'] })}
          />
        }
        rightBackgroundColor="White"
        rightBoxChildren={
          <>
            <HTMLContent
              html={
                data.homeNationalWinners?.data?.rich_text?.childMarkdownRemark
                  ?.html
              }
              css={mq({ color: t.colors.Black, marginBottom: t.spaceScales.s })}
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

            {data.homeButtonHref?.data?.href && (
              // @ts-ignore
              <Button as={Link} href={data.homeButtonHref.data.href}>
                {data.homeButtonText?.data?.plain_text}
              </Button>
            )}
          </>
        }
      />

      <ColoredBoxesSlice
        leftBoxChildren={
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
        rightBoxChildren={
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
        isVisible={data.homeCtaText?.data?.visible}
      />
    </Layout>
  )
}

export default withLightbox(IndexPage)

export const query = graphql`
  query IndexPage {
    bestOfWinners: allAirtableWinner(
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
          photo {
            fluid(maxWidth: 500) {
              ...GatsbyImgixFluid
            }
          }
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
        }
      }
    }
    overallJudgesWinner: airtableWinner(
      data: { special_award: { eq: "Judge's Award - Overall" } }
    ) {
      ...SpecialAwardWinner
    }
    judgesWinners: allAirtableWinner(
      filter: {
        data: { special_award: { regex: "/^Judge's Award - (?!Overall)/" } }
      }
    ) {
      nodes {
        ...SpecialAwardWinner
      }
    }

    homeNationalWinners: airtableTextField(
      data: { uid: { eq: "Home National Winners" } }
    ) {
      data {
        plain_text
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    homeNationalWinnersHref: airtableLink(
      data: { uid: { eq: "Home National Winners" } }
    ) {
      data {
        href
      }
    }
    homeMessage: airtableTextField(data: { uid: { eq: "Home Message" } }) {
      data {
        plain_text
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    homeCtaText: airtableTextField(data: { uid: { eq: "Home CTA" } }) {
      data {
        visible
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
    heroVideoHref: airtableLink(data: { uid: { eq: "Hero Video" } }) {
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
      fields {
        image {
          fluid(maxWidth: 500) {
            ...GatsbyImgixFluid
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
      featured_image {
        fluid(maxWidth: 600) {
          ...GatsbyImgixFluid
        }
      }
    }
    data {
      name
      award
      national_winner
      special_award
      special_award_video
      agency {
        fields {
          url
          avatar {
            fluid(maxWidth: 80) {
              ...GatsbyImgixFluid
            }
          }
        }
        data {
          name
        }
      }
    }
  }
`
