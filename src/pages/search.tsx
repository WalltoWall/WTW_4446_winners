import React, { useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { useLunr } from 'react-lunr'

import { WinnerSearchResult, Award } from '../types'
import { SearchPageQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { FormSearchInput } from '../components/FormSearchInput'
import { CardList } from '../components/CardList'
import { WinnerCard } from '../components/WinnerCard'

export type SearchPageProps = LayoutProps & {
  data: SearchPageQuery
}

export const SearchPage = ({ data, ...props }: SearchPageProps) => {
  const [query, setQuery] = useState('')
  const [bufferedQuery, setBufferedQuery] = useState(query)
  const winnersResults: WinnerSearchResult[] = useLunr(
    bufferedQuery,
    data?.localSearchWinners?.index,
    data?.localSearchWinners?.store,
  )

  const handleQueryInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setQuery(event.target.value.trim())
    },
    [],
  )

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      setBufferedQuery(query?.trim?.())
    },
    [query],
  )

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
              value={query}
              onChange={handleQueryInputChange}
              css={mq({ gridColumn: ['1 / -1', 'auto'] })}
            />
          </form>
        </div>
      </BoundedBox>
      <BoundedBox css={{ backgroundColor: t.c.Gray95 }}>
        <CardList columns={[1, 2, 3, 3, 4]}>
          {winnersResults.map(result => (
            <WinnerCard
              key={result.url}
              title={result.name}
              subtitle={result.categoryLine1}
              award={result.award.toLowerCase() as Award}
              href={result.url}
              imageFluid={result.imageFluid}
              agencyName="A"
              agencyHref="/"
            />
          ))}
        </CardList>
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
