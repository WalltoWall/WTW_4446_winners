import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { Award, Tag } from '../types'
import { WinnerTemplateQuery } from '../graphqlTypes'
import { compact } from '../utils'

import { t, mq, linearScale } from '../theme'
import { View } from '../components/View'
import { Layout } from '../components/Layout'
import { Heading } from '../components/Heading'
import { BoundedBox } from '../components/BoundedBox'
import { Anchor } from '../components/Anchor'
import { NextPrevious } from '../components/NextPrevious'
import { ImageGallery } from '../components/ImageGallery'
import { WinnerInfo } from '../components/WinnerInfo'

type WinnerTemplateProps = React.ComponentProps<typeof Layout> & {
  data: WinnerTemplateQuery
}

export const WinnerTemplate: React.FC<WinnerTemplateProps> = ({
  data,
  ...props
}) => {
  const winner = data.airtableWinner
  const category = winner?.data?.category?.[0]?.data
  const agency = winner?.data?.agency?.[0]
  const agencyAvatarFluid =
    agency?.data?.avatar?.localFiles?.[0]?.childCloudinaryAsset?.fluid
  const images = compact(
    winner?.data?.images?.localFiles?.map(
      (localFile) => localFile?.childCloudinaryAsset?.fluid,
    ) ?? [],
  )
  const hasImages = images.length > 0

  const nextWinner = data.nextAirtableWinner
  const previousWinner = data.previousAirtableWinner

  return (
    <Layout {...props}>
      <Helmet>
        <title>{winner?.data?.name}</title>
      </Helmet>
      <BoundedBox forwardedAs="section" css={{ backgroundColor: t.c.Gray95 }}>
        <View
          css={mq({
            display: 'grid',
            gap: linearScale('1.875rem', '4rem'),
            justifyItems: 'center',
          })}
        >
          <View css={{ textAlign: 'center' }}>
            <View
              as="p"
              css={mq({
                color: t.c.Gray60,
                fontSize: t.f['b-'],
                marginBottom: linearScale('0.5rem', '0.8125rem'),
              })}
            >
              <Anchor href="/winners/">Winners</Anchor>
            </View>
            <Heading css={mq({ fontSize: t.f.xl })}>
              {winner?.data?.name}
            </Heading>
          </View>
          {hasImages && (
            <View
              css={{
                width: '100%',
                maxWidth: t.sz.Xlarge,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <ImageGallery images={images} />
            </View>
          )}
          <WinnerInfo
            award={winner?.data?.award?.toLowerCase?.() as Award}
            specialAward={winner?.data?.special_award}
            year={winner?.data?.year}
            categoryLine1={category?.line_1}
            categoryLine2={category?.line_2}
            tags={winner?.fields?.tags as Tag[]}
            creditsHTML={winner?.data?.credits?.childMarkdownRemark?.html}
            entrantType="agency"
            entrantName={agency?.data?.name}
            entrantHref={agency?.fields?.url}
            entrantAvatarFluid={agencyAvatarFluid}
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
        </View>
      </BoundedBox>
    </Layout>
  )
}

export default WinnerTemplate

export const query = graphql`
  query WinnerTemplate(
    $recordId: String!
    $nextRecordId: String
    $previousRecordId: String
  ) {
    airtableWinner(recordId: { eq: $recordId }) {
      fields {
        tags {
          tag
          url
        }
      }
      data {
        name
        year
        award
        special_award
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
          }
          data {
            name
            avatar {
              localFiles {
                childCloudinaryAsset {
                  fluid(maxWidth: 50) {
                    ...CloudinaryAssetFluid
                  }
                }
              }
            }
          }
        }
        credits {
          childMarkdownRemark {
            html
          }
        }
        images {
          localFiles {
            childCloudinaryAsset {
              fluid(maxWidth: 1600) {
                ...CloudinaryAssetFluid
              }
            }
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
  }
`
