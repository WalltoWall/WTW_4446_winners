import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

import { WinnersPageQuery } from '../graphqlTypes'
import { Award } from '../types'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { FormSelect } from '../components/FormSelect'
import { FormSearchInput } from '../components/FormSearchInput'
import { PaginatedWinners } from '../components/PaginatedWinners'
import { CardList } from '../components/CardList'
import { WinnerCard } from '../components/WinnerCard'

export type WinnersPage = LayoutProps & {
  data: WinnersPageQuery
}

export const WinnersPage = ({ data, ...props }: WinnersPage) => {
  const bestOfWinners = data.bestOfWinners.nodes
  const judgesWinners = data.judgesWinners.nodes

  const initialPage: WinnersPageQuery['paginatedCollectionPage'] | undefined =
    data?.paginatedCollectionPage
  const firstPages = data.allPaginatedCollectionPage.nodes

  const [firstPageId, setFirstPageId] = useState(initialPage?.id!)
  const isInitialPageSelected = firstPageId === initialPage?.id

  const handleCategoryChange = useCallback(event => {
    const newFirstPageId = event.target.value
    setFirstPageId(newFirstPageId)
  }, [])

  return (
    <Layout {...props}>
      <Helmet>
        <title>Winners</title>
      </Helmet>
      <BoundedBox
        css={mq({
          backgroundColor: t.c.White,
          paddingTop: linearScale('1.5rem', '3.5rem'),
          paddingBottom: linearScale('1.5rem', '3.5rem'),
        })}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.6875rem', '1.375rem', 'space'),
          })}
        >
          <Heading css={mq({ textAlign: 'center', fontSize: t.f.xl })}>
            Winners
          </Heading>
          <div
            css={mq({
              display: 'grid',
              gap: linearScale('0.625rem', '1.875rem', 'space'),
              gridTemplateColumns: ['repeat(2, auto)', 'repeat(3, auto)'],
              justifyContent: 'center',
              justifyItems: 'center',
            })}
          >
            <FormSelect>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
            </FormSelect>
            <FormSelect value={firstPageId} onChange={handleCategoryChange}>
              <option value={initialPage?.id}>All categories</option>
              {firstPages.map(firstPage => (
                <option key={firstPage.id} value={firstPage.id}>
                  {firstPage.collection.name.split('/')[1]}
                </option>
              ))}
            </FormSelect>
            <FormSearchInput css={mq({ gridColumn: ['1 / -1', 'auto'] })} />
          </div>
        </div>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <div
          css={mq({ display: 'grid', gap: linearScale('0.8125rem', '1.5rem') })}
        >
          {isInitialPageSelected && (
            <>
              <CardList columns={[1, 2]}>
                {bestOfWinners.map(winner => {
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
                        winner?.data?.images?.localFiles?.[0]
                          ?.childCloudinaryAsset?.fluid
                      }
                      isSpecialAward={true}
                      agencyName={agency?.data?.name!}
                      agencyHref={agency?.fields?.url!}
                      agencyAvatarFluid={
                        agency?.data?.avatar?.localFiles?.[0]
                          ?.childCloudinaryAsset?.fluid
                      }
                    />
                  )
                })}
              </CardList>
              <CardList columns={[1, 3]}>
                {judgesWinners.map(winner => {
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
                        winner?.data?.images?.localFiles?.[0]
                          ?.childCloudinaryAsset?.fluid
                      }
                      isSpecialAward={true}
                      agencyName={agency?.data?.name!}
                      agencyHref={agency?.fields?.url!}
                      agencyAvatarFluid={
                        agency?.data?.avatar?.localFiles?.[0]
                          ?.childCloudinaryAsset?.fluid
                      }
                    />
                  )
                })}
              </CardList>
            </>
          )}
          <PaginatedWinners
            firstPageId={firstPageId}
            initialPage={initialPage as Partial<ExpandedPageNode>}
            showingCountAddend={5}
            totalCountAddend={5}
          />
        </div>
      </BoundedBox>
    </Layout>
  )
}

export default WinnersPage

export const query = graphql`
  query WinnersPage {
    paginatedCollectionPage(
      collection: { name: { eq: "winners" } }
      index: { eq: 0 }
    ) {
      id
      nodes
      nextPage {
        id
      }
      collection {
        id
        nodeCount
      }
    }
    allPaginatedCollectionPage(
      filter: {
        collection: { name: { regex: "/^winners//" } }
        index: { eq: 0 }
      }
    ) {
      nodes {
        id
        collection {
          id
          name
        }
      }
    }
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
    judgesWinners: allAirtableWinner(
      filter: { data: { special_award: { regex: "/^Judge's Award - /" } } }
    ) {
      nodes {
        ...SpecialAwardWinner
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
