import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { Award, Tag } from '../types'
import { WinnerTemplateQuery } from '../graphqlTypes'
import { compact } from '../utils'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { Heading } from '../components/Heading'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor, AnchorProps } from '../components/Anchor'
import { NextPrevious } from '../components/NextPrevious'
import { MediaGallery } from '../components/MediaGallery'
import { WinnerInfo } from '../components/WinnerInfo'
import { CallToActionSlice } from '../slices/CallToActionSlice'
import { withLightbox } from '../components/Lightbox'

const breadcrumbVariants = {
  professional: {
    href: '/winners/',
    label: 'Winners',
  },
  college: {
    href: '/college/',
    label: 'College Winners',
  },
  highSchool: {
    href: '/high-school/',
    label: 'High School Winners',
  },
} as const

type BreadcrumbProps = Omit<AnchorProps, 'href'> & {
  variant?: keyof typeof breadcrumbVariants
}

const Breadcrumb = ({
  variant: variantName = 'professional',
  ...props
}: BreadcrumbProps) => {
  const variant = breadcrumbVariants[variantName]

  return (
    <Anchor href={variant.href} {...props}>
      {variant.label}
    </Anchor>
  )
}

export type WinnerTemplate = LayoutProps & {
  data: WinnerTemplateQuery
}

export const WinnerTemplate = ({ data, ...props }: WinnerTemplate) => {
  const winner = data.airtableWinner
  const category = winner?.data?.category?.[0]?.data

  const agencies = winner?.data?.agency?.map?.(agency => ({
    name: agency?.data?.name!,
    url: agency?.fields?.url!,
    avatarFluid: agency?.fields?.avatar?.fluid,
  }))

  const images = compact(
    winner?.fields?.images?.map(image => image?.fluid) ?? [],
  )
  const vimeoLink = winner?.data?.video
  const vimeoThumbnail = winner?.fields?.video_thumbnail?.fluid

  const hasMedia = images.length > 0 || Boolean(vimeoLink)

  const nextWinner = data.nextAirtableWinner
  const previousWinner = data.previousAirtableWinner

  const winnerCtaText =
    data.winnerCtaText?.data?.rich_text?.childMarkdownRemark?.html
  const winnerButtonText = data.winnerButtonText?.data?.plain_text
  const winnerButtonHref = data.winnerButtonHref?.data?.href

  return (
    <Layout {...props}>
      <Helmet>
        <title>{winner?.data?.name}</title>
      </Helmet>

      <BoundedBox forwardedAs="section" css={{ backgroundColor: t.c.Gray95 }}>
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('1.875rem', '4rem'),
            justifyItems: 'center',
          })}
        >
          <div css={{ textAlign: 'center' }}>
            <p
              css={mq({
                color: t.c.Gray60,
                fontSize: t.f['b-'],
                marginBottom: linearScale('0.5rem', '0.8125rem'),
              })}
            >
              <Breadcrumb
                variant={
                  winner?.data?.type?.toLowerCase?.() as keyof typeof breadcrumbVariants
                }
              />
            </p>
            <Heading css={mq({ fontSize: t.f.xl })}>
              {winner?.data?.name}
            </Heading>
          </div>
          {hasMedia && (
            <div
              css={{
                width: '100%',
                maxWidth: t.sz.Xlarge,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <MediaGallery
                images={images}
                vimeoLink={vimeoLink}
                vimeoThumbnail={vimeoThumbnail}
              />
            </div>
          )}
          <WinnerInfo
            variant={
              winner?.data?.type === 'Professional' ? 'professional' : 'student'
            }
            award={winner?.data?.award?.toLowerCase?.() as Award}
            specialAward={winner?.data?.special_award}
            year={winner?.data?.year}
            categoryLine1={category?.line_1}
            categoryLine2={category?.line_2}
            tags={winner?.fields?.tags as Tag[]}
            creditsHTML={winner?.data?.credits?.childMarkdownRemark?.html}
            agencies={agencies}
            client={winner?.data?.client}
            css={mq({
              maxWidth: t.sz.Large,
              width: '100%',
            })}
          />
          <NextPrevious
            previousHref={previousWinner?.fields?.url}
            previousLabel={previousWinner?.data?.name}
            nextHref={nextWinner?.fields?.url}
            nextLabel={nextWinner?.data?.name}
          />
        </div>
      </BoundedBox>
      <CallToActionSlice
        buttonHref={winnerButtonHref}
        buttonText={winnerButtonText}
        textHTML={winnerCtaText}
      />
    </Layout>
  )
}

export default withLightbox(WinnerTemplate)

export const query = graphql`
  query WinnerTemplate(
    $recordId: String!
    $nextRecordId: String
    $previousRecordId: String
  ) {
    airtableWinner(recordId: { eq: $recordId }) {
      fields {
        images {
          fluid(maxWidth: 1000) {
            ...GatsbyImgixFluid
          }
        }
        video_thumbnail {
          fluid(maxWidth: 200) {
            ...GatsbyImgixFluid
          }
        }
        tags {
          tag
          url
        }
      }
      data {
        name
        type
        year
        award
        special_award
        video
        category {
          data {
            line_1
            line_2
          }
        }
        client
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
        credits {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    nextAirtableWinner: airtableWinner(recordId: { eq: $nextRecordId }) {
      fields {
        url
      }
      data {
        name
      }
    }
    previousAirtableWinner: airtableWinner(
      recordId: { eq: $previousRecordId }
    ) {
      fields {
        url
      }
      data {
        name
      }
    }
    winnerCtaText: airtableTextField(data: { uid: { eq: "Winner CTA" } }) {
      data {
        rich_text {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    winnerButtonText: airtableTextField(
      data: { uid: { eq: "Winner CTA Button Text" } }
    ) {
      data {
        plain_text
      }
    }
    winnerButtonHref: airtableLink(data: { uid: { eq: "Winner CTA Button" } }) {
      data {
        href
      }
    }
  }
`
