import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { AgencyTemplateQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { Layout } from '../components/Layout'
import { View } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { PaginatedWinners } from '../components/PaginatedWinners'
import { Anchor } from '../components/Anchor'

type AgencyTemplateProps = React.ComponentProps<typeof Layout> & {
  data: AgencyTemplateQuery
}

export const AgencyTemplate: React.FC<AgencyTemplateProps> = ({ data }) => {
  const agency = data.airtableAgency
  const cleanWebsite = useMemo(() => {
    if (!agency?.data?.website) return
    const url = new URL(agency.data.website)
    return url.host
  }, [agency])

  const initialPage = data?.paginatedCollectionPage

  return (
    <Layout>
      <Helmet>
        <title>{agency?.data?.name}</title>
      </Helmet>
      <BoundedBox
        css={mq({
          backgroundColor: t.c.Gray95,
          paddingBottom: 0,
        })}
      >
        <View
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '0.75rem', 'space'),
            justifyItems: 'center',
          })}
        >
          <View
            css={mq({
              backgroundColor: t.c.Black,
              width: linearScale('1.875rem', '2.5rem'),
              height: linearScale('1.875rem', '2.5rem'),
              borderRadius: '50%',
            })}
          />
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
        </View>
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
