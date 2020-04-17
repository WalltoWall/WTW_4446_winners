import React, { useCallback } from 'react'
import { Helmet } from 'react-helmet-async'

import { getURLParam } from '../utils'

import { t, mq, linearScale } from '../theme'
import { Layout, LayoutProps } from '../components/Layout'
import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { FormSearchInput } from '../components/FormSearchInput'
import { FormSelect } from '../components/FormSelect'
import { useURLParamState } from '../hooks/useURLParamState'
import { PaginatedSearchResults } from '../components/PaginatedSearchResults'
import { useYears } from '../hooks/useYears'

export type SearchPageProps = LayoutProps & {
  initialQuery: string
}

export const SearchPage = ({
  initialQuery = '',
  data,
  ...props
}: SearchPageProps) => {
  const years = useYears()
  const initialYear = years[0]

  const [query, setQuery] = useURLParamState('query', getURLParam())
  const [year, setYear] = useURLParamState(
    'year',
    getURLParam('year') || initialYear,
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const target = e.target as typeof e.target & {
        search: HTMLInputElement
      }
      target.search.blur()

      setQuery(target.search.value)
    },
    [setQuery],
  )

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(e.target.value)

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
              gridAutoFlow: 'column',
            })}
          >
            <FormSelect value={year} onChange={handleYearChange}>
              {years.map(y => (
                <option value={y} key={y}>
                  {y}
                </option>
              ))}
            </FormSelect>
            <FormSearchInput
              name="search"
              defaultValue={query}
              css={mq({ gridColumn: ['1 / -1', 'auto'] })}
            />
          </form>
        </div>
      </BoundedBox>

      <PaginatedSearchResults query={query} filterOptions={{ year }} />
    </Layout>
  )
}

export default SearchPage
