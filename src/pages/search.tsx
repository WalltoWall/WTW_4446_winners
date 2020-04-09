import React, { useState, useCallback, useRef, useEffect } from 'react'
import { withPrefix } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { useLunr } from 'react-lunr'

import { WinnerSearchResult, Award } from '../types'
import { usePaginatedCollection } from '../hooks/usePaginatedCollection'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { FormSearchInput } from '../components/FormSearchInput'
import { CardList } from '../components/CardList'
import { WinnerCard } from '../components/WinnerCard'
import { PaginationControls } from '../components/PaginationControls'
import { EmptyMessage } from '../components/EmptyMessage'

const RESULTS_PER_PAGE = 8

const fetchJson = async (url: string) => {
  const req = await fetch(url)

  return await req.json()
}

export type SearchPageProps = LayoutProps

export const SearchPage = (props: SearchPageProps) => {
  const queryRef = useRef<HTMLInputElement>()
  const [query, setQuery] = useState('')
  const [store, setStore] = useState<Record<string, WinnerSearchResult>>()
  const [index, setIndex] = useState<string>()

  useEffect(() => {
    const asyncEffect = async () => {
      const urls = [
        withPrefix('/local-search/winners.index.json'),
        withPrefix('/local-search/winners.store.json'),
      ]

      const [winnersIndex, winnersStore] = await Promise.all(
        urls.map(fetchJson),
      )

      setIndex(winnersIndex)
      setStore(winnersStore)
    }

    asyncEffect()
  }, [])

  const winnersResults = useLunr(query, index, store) as WinnerSearchResult[]

  const {
    paginatedCollection,
    page,
    totalPages,
    setPage,
    containerRef,
  } = usePaginatedCollection({
    collection: winnersResults,
    perPage: 8,
  })

  const handleSubmit = useCallback(event => {
    event.preventDefault()
    queryRef.current?.blur?.()
    const newQuery = queryRef.current?.value?.trim?.()?.replace?.('*', '')
    setQuery(newQuery ?? '')
  }, [])

  return (
    <Layout {...props}>
      <Helmet>
        <title>Search</title>
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
      <BoundedBox ref={containerRef} css={{ backgroundColor: t.c.Gray95 }}>
        {winnersResults.length > 0 ? (
          <div
            css={mq({
              display: 'grid',
              gap: linearScale('3rem', '6.25rem'),
            })}
          >
            <CardList columns={[1, 2, 3, 3, 4]}>
              {paginatedCollection.map(result => (
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
            <div
              css={mq({
                display: 'grid',
                gap: linearScale('0.5rem', '0.875rem'),
                justifyContent: 'center',
              })}
            >
              <span css={mq({ fontSize: t.f['b-'] })}>
                Showing {(page - 1) * RESULTS_PER_PAGE + 1}–
                {Math.min(page * RESULTS_PER_PAGE, winnersResults.length)} of{' '}
                {winnersResults.length} results
              </span>
              <PaginationControls
                totalPages={totalPages}
                currentPage={page}
                setPage={setPage}
                css={{ justifySelf: 'center' }}
              />
            </div>
          </div>
        ) : query.length > 0 ? (
          <EmptyMessage heading="Looks like there aren't any winners here.">
            Please try a different search term.
          </EmptyMessage>
        ) : (
          <EmptyMessage heading="Enter a search term above">
            Results will appear here.
          </EmptyMessage>
        )}
      </BoundedBox>
    </Layout>
  )
}

export default SearchPage
