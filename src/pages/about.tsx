import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { Layout, LayoutProps } from '../components/Layout'
import { View } from '../components/View'
import { HTMLContent } from '../components/HTMLContent'
import { SVG } from '../components/SVG'

import { HeroSlice } from '../slices/HeroSlice'
import { CallToActionSlice } from '../slices/CallToActionSlice'
import { ColoredBoxesSlice } from '../slices/ColoredBoxesSlice'
import { SponsorsSlice, Sponsor } from '../slices/SponsorsSlice'

import { t, mq, linearScale } from '../theme'
import { AboutPageQuery } from '../graphqlTypes'
import { ReactComponent as AssetAAFLogoSVG } from '../assets/aaf-logo.svg'

type AboutPageProps = LayoutProps & {
  data: AboutPageQuery
}

export const AboutPage = ({ data }: AboutPageProps) => {
  let highSchoolSponsors: Sponsor[] = []
  let professionalSponsors: Sponsor[] = []

  data.aboutSponsors.nodes.forEach(node => {
    const sponsor: Sponsor = {
      src: node.data?.logo?.localFiles?.[0]?.url,
      type: node.data?.type as Sponsor['type'],
      name: node.data?.name,
      url: node.data?.url,
    }

    switch (node.data?.type) {
      case 'high school':
        return highSchoolSponsors.push(sponsor)
      case 'professional':
        return professionalSponsors.push(sponsor)
      default:
        return
    }
  })

  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>

      <HeroSlice
        textHTML={
          data.aboutHeroText?.data?.rich_text?.childMarkdownRemark?.html
        }
        imageFluid={
          data.aboutHeroImage?.data?.image?.localFiles?.[0]
            ?.childCloudinaryAsset?.fluid
        }
      />

      <ColoredBoxesSlice
        css={{ paddingBottom: 0 }}
        leftBoxChildren={
          <HTMLContent
            html={
              data.aboutWhiteColoredBox?.data?.rich_text?.childMarkdownRemark
                ?.html
            }
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
          <SVG
            svg={AssetAAFLogoSVG}
            css={mq({ width: ['6rem', '8rem', '10rem', '12rem'] })}
          />
        }
      />

      <SponsorsSlice
        highSchool={highSchoolSponsors}
        professional={professionalSponsors}
      />

      <CallToActionSlice
        buttonHref={data.aboutButtonHref?.data?.href}
        buttonText={data.aboutButtonText?.data?.plain_text}
        textHTML={data.aboutCtaText?.data?.rich_text?.childMarkdownRemark?.html}
      />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPage {
    aboutHeroText: airtableTextField(data: { uid: { eq: "About Hero Text" } }) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    aboutHeroImage: airtableImageField(
      data: { uid: { eq: "About Hero Image" } }
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
    aboutWhiteColoredBox: airtableTextField(
      data: { uid: { eq: "About White Colored Box" } }
    ) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    aboutCtaText: airtableTextField(data: { uid: { eq: "About CTA" } }) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    aboutButtonText: airtableTextField(data: { uid: { eq: "About Button" } }) {
      data {
        plain_text
      }
    }
    aboutButtonHref: airtableLink(data: { uid: { eq: "About CTA Button" } }) {
      data {
        href
      }
    }
    aboutSponsors: allAirtableSponsors(
      filter: { data: { year: { eq: "2020" } } }
      sort: { fields: data___type }
    ) {
      nodes {
        data {
          url
          name
          logo {
            localFiles {
              url
            }
          }
          type
        }
      }
    }
  }
`
