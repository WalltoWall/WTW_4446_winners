import React, { useState, useCallback, useRef, useMemo } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { useLunr } from 'react-lunr'
// import { usePaginatedCollection } from '@walltowall/hooks'

import { WinnerSearchResult, Award } from '../types'
import { SearchPageQuery } from '../graphqlTypes'
import { chunk } from '../utils'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { FormSearchInput } from '../components/FormSearchInput'
import { CardList } from '../components/CardList'
import { WinnerCard } from '../components/WinnerCard'
import { PaginationControls } from '../components/PaginationControls'

export type SearchPageProps = LayoutProps & {
  data: SearchPageQuery
}

export const SearchPage = ({ data, ...props }: SearchPageProps) => {
  const containerRef = useRef<typeof BoundedBox>()
  const queryRef = useRef<HTMLInputElement>()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const winnersResults: WinnerSearchResult[] = useLunr(
    query,
    data?.localSearchWinners?.index,
    data?.localSearchWinners?.store,
  )

  // const { page, totalPages, setPage } = usePaginatedCollection({
  //   collection: winnersResults,
  //   perPage: 8,
  //   containerRef,
  // })

  const winnersResultsPages = useMemo(() => chunk(8, winnersResults), [
    winnersResults,
  ])
  const winnersResultsCurrentPage = winnersResultsPages[page - 1] ?? []

  const handleSubmit = useCallback(event => {
    event.preventDefault()
    const newQuery = queryRef.current?.value?.trim?.()?.replace?.('*', '')
    setQuery(newQuery ?? '')
  }, [])

  return (
    <Layout {...props}>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <BoundedBox
        ref={containerRef}
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
            Search
          </Heading>
          <form
            onSubmit={handleSubmit}
            css={mq({
              display: 'grid',
              gap: linearScale('0.625rem', '1.875rem', 'space'),
              justifyContent: 'center',
              justifyItems: 'center',
            })}
          >
            <FormSearchInput
              innerRef={queryRef}
              css={mq({ gridColumn: ['1 / -1', 'auto'] })}
            />
          </form>
        </div>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        {winnersResults.length > 0 && (
          <div
            css={mq({
              display: 'grid',
              gap: linearScale('3rem', '6.25rem'),
            })}
          >
            <CardList columns={[1, 2, 3, 3, 4]}>
              {winnersResultsCurrentPage.map(result => (
                <WinnerCard
                  key={result.url}
                  title={result.name}
                  subtitle={result.categoryLine1}
                  award={result.award.toLowerCase() as Award}
                  href={result.url}
                  imageFluid={result.imageFluid}
                  agencyName={result.agencyName!}
                  agencyHref={result.agencyUrl!}
                  agencyAvatarFluid={result.agencyAvatarFluid}
                />
              ))}
            </CardList>
            <PaginationControls
              totalPages={winnersResultsPages.length}
              currentPage={page}
              setPage={number => setPage(number)}
              css={{ justifySelf: 'center' }}
            />
          </div>
        )}
      </BoundedBox>
    </Layout>
  )
}

export default SearchPage

export const query = graphql`
  query SearchPage {
    localSearchWinners {
      index
      store
    }
  }
`
