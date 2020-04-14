import React, { useState } from 'react'
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
  years = ['2020', '2019', '2018'],
  firstPages,
  initialPage,
  initialYear,
  query,
  onQueryChange,
}: WinnerFiltersProps) => {
  const [year, setYear] = useState(initialYear)

  const firstPageId = initialPage!.id

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(e.target.value)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageId = e.target.value
    const page = firstPages.find(fp => fp.id === pageId)
    const categorySlug = kebabCase(page?.collection.name.split('/')[1]).replace(
      'advertising',
      'ad',
    )

    navigate(`/winners/${year}/${categorySlug}`)
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
          <FormSelect value={year} onChange={handleYearChange}>
            {years.map(y => (
              <option value={y} selected={year === y} key={y}>
                {y}
              </option>
            ))}
          </FormSelect>
          <FormSelect value={firstPageId} onChange={handleCategoryChange}>
            <option value="/">All categories</option>
            {firstPages.map(firstPage => (
              <option
                key={firstPage.id}
                value={firstPage.id}
                selected={firstPage.id === initialPage!.id}
              >
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
