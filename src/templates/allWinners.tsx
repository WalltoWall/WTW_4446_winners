import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { getURLParam } from '../utils'
import { AllWinnersTemplateQuery } from '../graphqlTypes'

import { Layout, LayoutProps } from '../components/Layout'
import { PaginatedSearchResults } from '../components/PaginatedSearchResults'
import { WinnerFilters } from '../components/WinnerFilters'
import { LoadMoreWinners } from '../components/LoadMoreWinners'
import { SpecialWinners } from '../components/SpecialWinners'
import { useYears } from '../hooks/useYears'
import { withLightbox } from '../components/Lightbox'

export type AllWinnersProps = LayoutProps & {
  data: AllWinnersTemplateQuery
  pageContext: {
    year: string
    hideSpecialAwards: boolean
  }
}

export const AllWinnersTemplate = ({
  data,
  pageContext,
  ...props
}: AllWinnersProps) => {
  const [query, setQuery] = useState(getURLParam)
  const years = useYears()
  const { year, hideSpecialAwards } = pageContext

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
        <title>{year} Winners</title>
      </Helmet>

      <WinnerFilters
        years={years}
        initialYear={year}
        firstPages={firstPages}
        initialPage={initialPage}
        query={query}
        onQueryChange={handleQueryChange}
      />

      {query.length >= 1 ? (
        <PaginatedSearchResults query={query} />
      ) : (
        <LoadMoreWinners firstPageId={firstPageId} initialPage={initialPage}>
          {isInitialPageSelected && !hideSpecialAwards && (
            <>
              {bestOfWinners.length > 0 && (
                <SpecialWinners
                  columns={[1, 2]}
                  winners={bestOfWinners}
                  variant="featuredWide"
                />
              )}

              {judgesWinners.length > 0 && (
                <SpecialWinners
                  columns={[1, 3]}
                  winners={judgesWinners}
                  variant="featured"
                />
              )}
            </>
          )}
        </LoadMoreWinners>
      )}
    </Layout>
  )
}

export default withLightbox(AllWinnersTemplate)

export const query = graphql`
  query AllWinnersTemplate(
    $collectionName: String!
    $collectionRegex: String!
    $year: String!
  ) {
    paginatedCollectionPage(
      collection: { name: { eq: $collectionName } }
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
        collection: { name: { regex: $collectionRegex } }
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
          year: { eq: $year }
        }
      }
    ) {
      nodes {
        ...SpecialAwardWinner
      }
    }
    judgesWinners: allAirtableWinner(
      filter: {
        data: {
          special_award: { regex: "/^Judge's Award - /" }
          year: { eq: $year }
        }
      }
    ) {
      nodes {
        ...SpecialAwardWinner
      }
    }
  }
`
