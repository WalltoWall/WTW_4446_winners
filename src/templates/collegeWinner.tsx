import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { Award, Tag } from '../types'
import { CollegeWinnerTemplateQuery } from '../graphqlTypes'
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

type CollegeWinnerTemplateProps = React.ComponentProps<typeof Layout> & {
  data: CollegeWinnerTemplateQuery
}

export const CollegeWinnerTemplate: React.FC<CollegeWinnerTemplateProps> = ({
  data,
  ...props
}) => {
  const winner = data.airtableCollegeWinner
  const category = winner?.data?.category?.[0]?.data
  const images = compact(
    winner?.data?.images?.localFiles?.map(
      (localFile) => localFile?.childCloudinaryAsset?.fluid,
    ) ?? [],
  )
  const hasImages = images.length > 0

  const nextWinner = data.nextAirtableCollegeWinner
  const previousWinner = data.previousAirtableCollegeWinner

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
            entrantType="student"
            entrantName={winner?.data?.entrant_name}
            school={winner?.data?.school}
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

export default CollegeWinnerTemplate

export const query = graphql`
  query CollegeWinnerTemplate(
    $recordId: String!
    $nextRecordId: String
    $previousRecordId: String
  ) {
    airtableCollegeWinner(recordId: { eq: $recordId }) {
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
        school
        entrant_name
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
    nextAirtableCollegeWinner: airtableCollegeWinner(
      recordId: { eq: $nextRecordId }
    ) {
      fields {
        url
      }
      data {
        name
      }
    }
    previousAirtableCollegeWinner: airtableCollegeWinner(
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
