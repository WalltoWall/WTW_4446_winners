import React, { useRef } from 'react'
import { navigate } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

import { t, mq, linearScale } from '../theme'
import { WinnersTemplateQuery } from '../graphqlTypes'
import { trimCollectionNamespace } from '../utils'

import { Heading } from '../components/Heading'
import { FormSelect } from '../components/FormSelect'
import { FormSearchInput } from '../components/FormSearchInput'
import { BoundedBox } from '../components/BoundedBox'

export type WinnerFiltersProps = {
  years: string[]
  firstPages: WinnersTemplateQuery['allPaginatedCollectionPage']['nodes']
  initialPage: WinnersTemplateQuery['paginatedCollectionPage']
  query: string
  onQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  initialYear: string
}

export const WinnerFilters = ({
  years,
  firstPages,
  initialPage,
  initialYear,
  query,
  onQueryChange,
}: WinnerFiltersProps) => {
  const yearRef = useRef<HTMLSelectElement>(null)
  const categoryRef = useRef<HTMLSelectElement>(null)

  const firstPageId = initialPage!.id

  const getCategorySlugFromPageId = (pageId: string) => {
    const page = firstPages.find(fp => fp.id === pageId)

    return kebabCase(page?.collection.name.split('/')[1]).replace(
      'advertising',
      'ad',
    )
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageId = categoryRef.current?.value
    if (!pageId) return

    const categorySlug = getCategorySlugFromPageId(pageId)

    navigate(`/winners/${e.target.value}/${categorySlug}`)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categorySlug = getCategorySlugFromPageId(e.target.value)
    const year = yearRef.current?.value

    if (!year) return

    navigate(`/winners/${year}/${categorySlug}/`)
  }

  return (
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
          Winners
        </Heading>
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.625rem', '1.875rem', 'space'),
            gridTemplateColumns: ['repeat(2, auto)', 'repeat(3, auto)'],
            justifyContent: 'center',
            justifyItems: 'center',
          })}
        >
          <FormSelect
            value={initialYear}
            onChange={handleYearChange}
            ref={yearRef}
          >
            {years.map(y => (
              <option value={y} key={y}>
                {y}
              </option>
            ))}
          </FormSelect>
          <FormSelect
            defaultValue={firstPageId}
            value={firstPageId}
            ref={categoryRef}
            onChange={handleCategoryChange}
          >
            <option value="/">All categories</option>
            {firstPages.map(firstPage => (
              <option key={firstPage.id} value={firstPage.id}>
                {trimCollectionNamespace(firstPage.collection.name)}
              </option>
            ))}
          </FormSelect>
          <FormSearchInput
            value={query}
            onChange={onQueryChange}
            css={mq({ gridColumn: ['1 / -1', 'auto'] })}
          />
        </div>
      </div>
    </BoundedBox>
  )
}
