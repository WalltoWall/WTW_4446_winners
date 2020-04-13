import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { getSearchQuery } from '../utils'
import { AllWinnersTemplateQuery } from '../graphqlTypes'
import { Award } from '../types'

import { Layout, LayoutProps } from '../components/Layout'
import { PaginatedSearchResults } from '../components/PaginatedSearchResults'
import { WinnerFilters } from '../components/WinnerFilters'
import { LoadMoreWinners } from '../components/LoadMoreWinners'
import { CardList } from '../components/CardList'
import { WinnerCard } from '../components/WinnerCard'

export type AllWinnersProps = LayoutProps & {
  data: AllWinnersTemplateQuery
  pageContext: {
    year: string
  }
}

export const AllWinnersTemplate = ({
  data,
  pageContext,
  ...props
}: AllWinnersProps) => {
  const [query, setQuery] = useState(getSearchQuery)

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const bestOfWinners = data.bestOfWinners.nodes
  const judgesWinners = data.judgesWinners.nodes

  const firstPages = data.allPaginatedCollectionPage.nodes
  const initialPage = data!.paginatedCollectionPage!
  const firstPageId = initialPage.id
  const isInitialPageSelected = firstPageId === initialPage.id

  return (
    <Layout {...props}>
      <Helmet>
        <title>{pageContext.year} Winners</title>
      </Helmet>

      <WinnerFilters
        years={['2020', '2019', '2018']}
        initialYear="2020"
        firstPages={firstPages}
        initialPage={initialPage}
        query={query}
        onQueryChange={handleQueryChange}
      />

      {query.length >= 1 ? (
        <PaginatedSearchResults query={query} />
      ) : (
        <LoadMoreWinners firstPageId={firstPageId} initialPage={initialPage}>
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
        </LoadMoreWinners>
      )}
    </Layout>
  )
}

export default AllWinnersTemplate

export const query = graphql`
  query AllWinnersTemplate {
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
