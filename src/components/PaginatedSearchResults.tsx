import React, { useState, useEffect } from 'react'
import { withPrefix } from 'gatsby'
import { useLunr } from 'react-lunr'

import { WinnerSearchResult, Award } from '../types'
import { usePaginatedCollection } from '../hooks/usePaginatedCollection'

import { t, mq, linearScale } from '../theme'
import { BoundedBox } from '../components/BoundedBox'
import { CardList } from '../components/CardList'
import { WinnerCard } from '../components/WinnerCard'
import { PaginationControls } from '../components/PaginationControls'
import { EmptyMessage } from '../components/EmptyMessage'

type SearchResultsProps = {
  query: string
  filterOptions?: {}
}

const RESULTS_PER_PAGE = 8

const fetchJson = async (url: string) => {
  const req = await fetch(url)

  return await req.json()
}

export const PaginatedSearchResults = ({ query }: SearchResultsProps) => {
  const [store, setStore] = useState<Record<string, WinnerSearchResult>>()
  const [index, setIndex] = useState<string>()

  useEffect(() => {
    const asyncEffect = async () => {
      const urls = [
        withPrefix('/___local-search/winners.index.json'),
        withPrefix('/___local-search/winners.store.json'),
      ]

      const [winnersIndex, winnersStore] = await Promise.all(
        urls.map(fetchJson),
      )

      setIndex(winnersIndex)
      setStore(winnersStore)
    }

    asyncEffect()
  }, [setIndex])

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

  return (
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
                award={result.award?.toLowerCase() as Award}
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
      ) : query?.length ?? 0 > 0 ? (
        <EmptyMessage heading="Looks like there aren't any winners here.">
          Please try a different search term.
        </EmptyMessage>
      ) : (
        <EmptyMessage heading="Enter a search term above">
          Results will appear here.
        </EmptyMessage>
      )}
    </BoundedBox>
  )
}
