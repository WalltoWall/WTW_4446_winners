import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { AgencyTemplateQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { PaginatedWinners } from '../components/PaginatedWinners'
import { Anchor } from '../components/Anchor'
import { Avatar } from '../components/Avatar'
import { SocialIcons } from '../components/SocialIcons'

export type AgencyTemplate = LayoutProps & {
  data: AgencyTemplateQuery
}

export const AgencyTemplate = ({ data, ...props }: AgencyTemplate) => {
  const agency = data.airtableAgency
  const avatarFluid =
    agency?.data?.avatar?.localFiles?.[0]?.childCloudinaryAsset?.fluid
  const initialPage = data?.paginatedCollectionPage

  const cleanWebsite = useMemo(() => {
    if (!agency?.data?.website) return
    const url = new URL(agency.data.website)
    return url.host
  }, [agency])

  return (
    <Layout {...props}>
      <Helmet>
        <title>{agency?.data?.name}</title>
      </Helmet>
      <BoundedBox
        css={mq({
          backgroundColor: t.c.Gray95,
          paddingBottom: 0,
        })}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('1.25rem', '1.75rem', 'space'),
            justifyItems: 'center',
          })}
        >
          <div
            css={mq({
              display: 'grid',
              gap: linearScale('0.625rem', '0.75rem', 'space'),
              justifyItems: 'center',
            })}
          >
            <Avatar fluid={avatarFluid} />
            <Heading
              css={mq({
                textAlign: 'center',
                fontSize: t.f.xl,
                lineHeight: t.lh.Solid,
              })}
            >
              {agency?.data?.name}
            </Heading>
            {agency?.data?.website && (
              <Anchor
                href={agency?.data?.website}
                css={mq({ color: t.c.Gray60, fontSize: t.f['b-'] })}
              >
                {cleanWebsite}
              </Anchor>
            )}
          </div>
          <SocialIcons
            facebookHandle={agency?.data?.facebook_handle}
            instagramHandle={agency?.data?.instagram_handle}
            twitterHandle={agency?.data?.twitter_handle}
            linkedinHandle={agency?.data?.linkedin_handle}
          />
        </div>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <PaginatedWinners
          firstPageId={initialPage?.id!}
          initialPage={initialPage as Partial<ExpandedPageNode>}
        />
      </BoundedBox>
    </Layout>
  )
}

export default AgencyTemplate

export const query = graphql`
  query AgencyTemplate($recordId: String!, $paginatedCollectionName: String!) {
    airtableAgency(recordId: { eq: $recordId }) {
      data {
        name
        website
        facebook_handle
        twitter_handle
        instagram_handle
        linkedin_handle
        avatar {
          localFiles {
            childCloudinaryAsset {
              fluid(maxWidth: 100) {
                ...CloudinaryAssetFluid
              }
            }
          }
        }
      }
    }
    paginatedCollectionPage(
      collection: { name: { eq: $paginatedCollectionName } }
      index: { eq: 0 }
    ) {
      id
      nodes
      nextPage {
        id
      }
      collection {
        nodeCount
      }
    }
  }
`
