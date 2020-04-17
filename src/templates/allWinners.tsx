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
  const [query, setQuery] = useState(getURLParam)

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
              <SpecialWinners
                columns={[1, 2]}
                winners={bestOfWinners}
                variant="featuredWide"
              />

              <SpecialWinners
                columns={[1, 3]}
                winners={judgesWinners}
                variant="featured"
              />
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
`
