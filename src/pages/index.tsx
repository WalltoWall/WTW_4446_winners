import React from 'react'
import { graphql } from 'gatsby'

import { IndexPageQuery } from '../graphqlTypes'
import { t, mq, linearScale } from '../theme'

import { withLightbox } from '../components/Lightbox'
// import { PersonCard } from '../components/PersonCard'
import { Heading } from '../components/Heading'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
// import { CardList } from '../components/CardList'
import { HTMLContent } from '../components/HTMLContent'
import { View } from '../components/View'
import { SpecialWinners } from '../components/SpecialWinners'
import { SVG } from '../components/SVG'
import { Button } from '../components/Button'
import { Link } from '../components/Link'
import { ReactComponent as AssetAAALogoSVG } from '../assets/aaa-logo.svg'

import { HeroVideoSlice } from '../slices/HeroVideoSlice'
import { HeroSlice } from '../slices/HeroSlice'
// import { CallToActionSlice } from '../slices/CallToActionSlice'
import { ColoredBoxesSlice } from '../slices/ColoredBoxesSlice'
import { VideoMessageSlice } from '../slices/VideoMessageSlice'
import { OrganizerMessagesSlice } from '../slices/OrganizerMessagesSlice'

export type IndexPageProps = LayoutProps & {
  data: IndexPageQuery
}

export const IndexPage = ({ data, ...props }: IndexPageProps) => {
  const bestOfWinners = data.bestOfWinners.nodes
  const overallJudgesWinner = data.overallJudgesWinner
  const judgesWinners = data.judgesWinners.nodes
  // const adPeople = data.adPeople.nodes
  const archives = data.archives.nodes

  return (
    <Layout {...props}>
      {data.heroVideoHref?.data?.href && (
        <HeroVideoSlice
          videoPlayerId="hero"
          src={data.heroVideoHref?.data?.href}
        />
      )}
      <HeroSlice
        textHTML={data.homeHeroText?.data?.rich_text?.childMarkdownRemark?.html}
      />

      <OrganizerMessagesSlice
        textHTML={data.homeMessage?.data?.rich_text?.childMarkdownRemark?.html}
      >
        <OrganizerMessagesSlice.Message
          name={data.organizer1Name?.data?.plain_text}
          titleHTML={
            data.organizer1Title?.data?.rich_text?.childMarkdownRemark?.html
          }
          textHTML={
            data.organizer1LetterExcerpt?.data?.rich_text?.childMarkdownRemark
              ?.html
          }
          imageFluid={data.organizer1Headshot?.fields?.image?.fluid}
        />
        <OrganizerMessagesSlice.Message
          name={data.organizer2Name?.data?.plain_text}
          titleHTML={
            data.organizer2Title?.data?.rich_text?.childMarkdownRemark?.html
          }
          textHTML={
            data.organizer2LetterExcerpt?.data?.rich_text?.childMarkdownRemark
              ?.html
          }
          imageFluid={data.organizer2Headshot?.fields?.image?.fluid}
        />
      </OrganizerMessagesSlice>

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

      {/* Disabled due to postponed ad people awards announcement */}
      {/*
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
      */}

      <BoundedBox
        maxWidth="Xlarge"
        css={mq({
          backgroundColor: t.c.Gray95,
          paddingBottom: linearScale('0.625rem', '1.75rem', 'space'),
        })}
      >
        <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
          <Anchor href="/winners/">Judge's Choice Awards</Anchor>
        </Heading>
      </BoundedBox>

      <VideoMessageSlice
        textHTML={
          data.meetTheJudgesText?.data?.rich_text?.childMarkdownRemark?.html
        }
        buttonHref="https://peleawards.com/#judges"
        buttonText="Read their bios"
        videoUrl={data.meetTheJudgesVideoLink?.data?.href}
        videoThumbnailFluid={data.meetTheJudgesThumbnail?.fields?.image?.fluid}
        css={mq({
          paddingTop: 0,
          paddingBottom: linearScale('0.8125rem', '1.5rem'),
        })}
      />

      <BoundedBox
        maxWidth="Xlarge"
        css={{ backgroundColor: t.c.Gray95, paddingTop: 0, paddingBottom: 0 }}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.75rem', 'space'),
          })}
        >
          <SpecialWinners
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
                data.homeNationalWinnersText?.data?.rich_text
                  ?.childMarkdownRemark?.html
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

            {data.homeNationalWinnersLink?.data?.href && (
              <Button
                forwardedAs={Link}
                href={data.homeNationalWinnersLink.data.href}
                css={{ display: 'inline-block' }}
              >
                {data.homeNationalWinnersButtonText?.data?.plain_text}
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

      {/*
      <CallToActionSlice
        buttonHref={data.homeButtonHref?.data?.href}
        buttonText={data.homeButtonText?.data?.plain_text}
        textHTML={data.homeCtaText?.data?.rich_text?.childMarkdownRemark?.html}
        isVisible={data.homeCtaText?.data?.visible}
      />
     */}
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
          year: { eq: "2021" }
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
      data: {
        special_award: { eq: "Judge's Award - Overall" }
        year: { eq: "2021" }
        type: { eq: "Professional" }
      }
    ) {
      ...SpecialAwardWinner
    }
    judgesWinners: allAirtableWinner(
      filter: {
        data: {
          special_award: { regex: "/^Judge's Award - (?!Overall)/" }
          year: { eq: "2021" }
          type: { eq: "Professional" }
        }
      }
    ) {
      nodes {
        ...SpecialAwardWinner
      }
    }

    ###
    # Archives
    ###
    archives: allAirtableArchive {
      nodes {
        data {
          link
          year
        }
      }
    }

    ###
    # Home Video
    ###
    heroVideoHref: airtableLink(data: { uid: { eq: "Hero Video" } }) {
      data {
        href
      }
    }

    ###
    # Home Hero
    ###
    homeHeroText: airtableTextField(data: { uid: { eq: "Home Hero Text" } }) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }

    ###
    # Home Message
    ###
    homeMessage: airtableTextField(data: { uid: { eq: "Home Message" } }) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }

    ###
    # Organizer Messages
    ###
    organizer1LetterExcerpt: airtableTextField(
      data: { uid: { eq: "Organizer 1 Letter Excerpt" } }
    ) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    organizer1Name: airtableTextField(
      data: { uid: { eq: "Organizer 1 Name" } }
    ) {
      data {
        plain_text
      }
    }
    organizer1Title: airtableTextField(
      data: { uid: { eq: "Organizer 1 Title" } }
    ) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    organizer1Headshot: airtableImageField(
      data: { uid: { eq: "Organizer 1 Headshot" } }
    ) {
      fields {
        image {
          fluid(maxWidth: 100) {
            ...GatsbyImgixFluid
          }
        }
      }
    }
    organizer2LetterExcerpt: airtableTextField(
      data: { uid: { eq: "Organizer 2 Letter Excerpt" } }
    ) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    organizer2Name: airtableTextField(
      data: { uid: { eq: "Organizer 2 Name" } }
    ) {
      data {
        plain_text
      }
    }
    organizer2Title: airtableTextField(
      data: { uid: { eq: "Organizer 2 Title" } }
    ) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    organizer2Headshot: airtableImageField(
      data: { uid: { eq: "Organizer 2 Headshot" } }
    ) {
      fields {
        image {
          fluid(maxWidth: 100) {
            ...GatsbyImgixFluid
          }
        }
      }
    }

    ###
    # Meet the Judges
    ###
    meetTheJudgesText: airtableTextField(
      data: { uid: { eq: "Home Meet the Judges" } }
    ) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    meetTheJudgesVideoLink: airtableLink(
      data: { uid: { eq: "Home Meet the Judges Video" } }
    ) {
      data {
        href
      }
    }
    meetTheJudgesThumbnail: airtableImageField(
      data: { uid: { eq: "Meet the Judges Thumbnail" } }
    ) {
      fields {
        image {
          fluid(maxWidth: 500) {
            ...GatsbyImgixFluid
          }
        }
      }
    }

    ###
    # National Winners
    ###
    homeNationalWinnersLink: airtableLink(
      data: { uid: { eq: "Home National Winners" } }
    ) {
      data {
        href
      }
    }
    homeNationalWinnersText: airtableTextField(
      data: { uid: { eq: "Home National Winners" } }
    ) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    homeNationalWinnersButtonText: airtableTextField(
      data: { uid: { eq: "Home National Winners Button" } }
    ) {
      data {
        plain_text
      }
    }

    ###
    # Home CTA
    ###
    # homeCtaText: airtableTextField(data: { uid: { eq: "Home CTA" } }) {
    #   data {
    #     visible
    #     rich_text {
    #       childMarkdownRemark {
    #         html
    #       }
    #     }
    #   }
    # }
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
  }
`
