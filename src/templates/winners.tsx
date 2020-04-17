import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql } from 'gatsby'

import { WinnersTemplateQuery } from '../graphqlTypes'
import { getURLParam, trimCollectionNamespace } from '../utils'

import { Layout, LayoutProps } from '../components/Layout'
import { PaginatedSearchResults } from '../components/PaginatedSearchResults'
import { LoadMoreWinners } from '../components/LoadMoreWinners'
import { WinnerFilters } from '../components/WinnerFilters'

export type WinnersTemplateProps = LayoutProps & {
  data: WinnersTemplateQuery
}

export const WinnersTemplate = ({ data, ...props }: WinnersTemplateProps) => {
  const [query, setQuery] = useState(getURLParam)

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const firstPages = data.allPaginatedCollectionPage.nodes
  const initialPage = data!.paginatedCollectionPage
  const firstPageId = initialPage!.id
  const initialCollection = firstPages.find(fp => fp.id === firstPageId)
    ?.collection

  const years = data.years.distinct

  return (
    <Layout {...props}>
      <Helmet>
        <title>Winners</title>
      </Helmet>

      <WinnerFilters
        years={years}
        initialYear={years[0]}
        firstPages={firstPages}
        initialPage={initialPage}
        query={query}
        onQueryChange={handleQueryChange}
      />

      {query.length >= 1 ? (
        <PaginatedSearchResults
          query={query}
          filterOptions={{
            category: trimCollectionNamespace(initialCollection?.name),
          }}
        />
      ) : (
        <LoadMoreWinners firstPageId={firstPageId} initialPage={initialPage} />
      )}
    </Layout>
  )
}

export default WinnersTemplate

export const query = graphql`
  query WinnersTemplate($categoryId: String!) {
    paginatedCollectionPage(
      collection: { id: { eq: $categoryId } }
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
    years: allAirtableWinner(sort: { fields: data___year }) {
      distinct(field: data___year)
    }
  }
`
