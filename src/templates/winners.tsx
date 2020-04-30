import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql } from 'gatsby'

import { WinnersTemplateQuery } from '../graphqlTypes'
import { getURLParam, trimCollectionNamespace } from '../utils'

import { Layout, LayoutProps } from '../components/Layout'
import { PaginatedSearchResults } from '../components/PaginatedSearchResults'
import { LoadMoreWinners } from '../components/LoadMoreWinners'
import { WinnerFilters } from '../components/WinnerFilters'
import { useYears } from '../hooks/useYears'
import { withLightbox } from '../components/Lightbox'

export type WinnersTemplateProps = LayoutProps & {
  data: WinnersTemplateQuery
  pageContext: {
    year: string
    type: 'professional' | 'college' | 'high school'
  }
}

export const WinnersTemplate = ({
  data,
  pageContext,
  ...props
}: WinnersTemplateProps) => {
  const [query, setQuery] = useState(getURLParam)
  const years = useYears()

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const firstPages = data.allPaginatedCollectionPage.nodes
  const initialPage = data!.paginatedCollectionPage
  const firstPageId = initialPage!.id
  const initialCollection = firstPages.find(fp => fp.id === firstPageId)
    ?.collection

  return (
    <Layout {...props}>
      <Helmet>
        <title>Winners</title>
      </Helmet>

      <WinnerFilters
        variant={pageContext.type}
        years={years}
        initialYear={pageContext.year}
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

export default withLightbox(WinnersTemplate)

export const query = graphql`
  query WinnersTemplate($firstPageId: String, $collectionRegex: String!) {
    paginatedCollectionPage(id: { eq: $firstPageId }) {
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
  }
`
