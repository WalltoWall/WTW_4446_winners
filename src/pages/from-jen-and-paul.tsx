import React from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql, PageProps } from 'gatsby'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { OrganizerMessagesPageQuery } from '../graphqlTypes'
import { Layout } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { ImageContainer } from '../components/ImageContainer'
import { HTMLContent } from '../components/HTMLContent'

export type OrganizerMessageProps = {
  textHTML?: string
  name?: string
  titleHTML?: string
  imageFluid?: FluidObject
  withQuotes?: boolean
}

const OrganizerMessage = ({
  textHTML,
  name,
  titleHTML,
  imageFluid,
}: OrganizerMessageProps) => (
  <BoundedBox
    maxWidth="Small"
    css={mq({
      backgroundColor: t.c.White,
    })}
  >
    <div
      css={mq({
        display: 'grid',
        gridTemplateColumns: [null, 'auto 1fr'],
        gap: linearScale('1rem', '2.25rem'),
        justifyItems: 'center',
      })}
    >
      <ImageContainer
        css={mq({
          width: linearScale('4rem', '6rem'),
          height: linearScale('4rem', '6rem'),
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: t.c.White,
        })}
      >
        {imageFluid && (
          <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
        )}
      </ImageContainer>
      <div
        css={mq({
          display: 'grid',
          gap: linearScale('0.75rem', '1.5rem'),
        })}
      >
        {textHTML && <HTMLContent html={textHTML} />}
        {(name || titleHTML) && (
          <div css={{ lineHeight: t.lh.Copy }}>
            {name && <p css={{ fontWeight: t.fw.Semibold }}>{name}</p>}
            {titleHTML && <HTMLContent html={titleHTML} />}
          </div>
        )}
      </div>
    </div>
  </BoundedBox>
)

export const OrganizerMessagesPage = ({
  data,
}: PageProps<OrganizerMessagesPageQuery>) => {
  return (
    <Layout>
      <Helmet>
        <title>A Message from Jen & Paul</title>
      </Helmet>
      <BoundedBox
        maxWidth="Large"
        css={{
          backgroundColor: t.c.Gray95,
        }}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('1rem', '1.75rem', 'space'),
          })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            A Message from Jen & Paul
          </Heading>
          <div
            css={mq({
              display: 'grid',
              gap: linearScale('0.8125rem', '1.5rem'),
            })}
          >
            <OrganizerMessage
              textHTML={
                data.organizer1Letter?.data?.rich_text?.childMarkdownRemark
                  ?.html
              }
              titleHTML={
                data?.organizer1Title?.data?.rich_text?.childMarkdownRemark
                  ?.html
              }
              imageFluid={data?.organizer1Headshot?.fields?.image?.fluid}
              name={data?.organizer1Name?.data?.plain_text}
            />
            <OrganizerMessage
              textHTML={
                data.organizer2Letter?.data?.rich_text?.childMarkdownRemark
                  ?.html
              }
              titleHTML={
                data?.organizer2Title?.data?.rich_text?.childMarkdownRemark
                  ?.html
              }
              imageFluid={data?.organizer2Headshot?.fields?.image?.fluid}
              name={data?.organizer2Name?.data?.plain_text}
            />
          </div>
        </div>
      </BoundedBox>
    </Layout>
  )
}

export default OrganizerMessagesPage

export const query = graphql`
  query OrganizerMessagesPage {
    organizer1Letter: airtableTextField(
      data: { uid: { eq: "Organizer 1 Letter" } }
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
    organizer2Letter: airtableTextField(
      data: { uid: { eq: "Organizer 2 Letter" } }
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
  }
`
