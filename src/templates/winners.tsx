import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql, navigate } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

import { t, mq, linearScale } from '../theme'
import { WinnersTemplateQuery } from '../graphqlTypes'
import { getSearchQuery } from '../utils'

import { Layout, LayoutProps } from '../components/Layout'
import { Heading } from '../components/Heading'
import { FormSelect } from '../components/FormSelect'
import { FormSearchInput } from '../components/FormSearchInput'
import { BoundedBox } from '../components/BoundedBox'

export type WinnersTemplateProps = LayoutProps & {
  data: WinnersTemplateQuery
}

const trimCollectionNamespace = (collectionName: string | undefined) =>
  collectionName?.split('/')[1]

export const WinnersTemplate = ({ data, ...props }: WinnersTemplateProps) => {
  const [query, setQuery] = useState(getSearchQuery)
  const [year, setYear] = useState('2020')

  const firstPages = data.allPaginatedCollectionPage.nodes
  const initialPage: WinnersTemplateQuery['paginatedCollectionPage'] =
    data?.paginatedCollectionPage
  const firstPageId = initialPage!.id

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageId = e.target.value
    const page = firstPages.find(fp => fp.id === pageId)
    const categorySlug = kebabCase(page?.collection.name.split('/')[1])

    navigate(`/winners/${year}/${categorySlug}`)
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(e.target.value)

  return (
    <Layout {...props}>
      <Helmet>
        <title>Winners</title>
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
              {['2020', '2019', '2018'].map(y => (
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
              onChange={handleQueryChange}
              css={mq({ gridColumn: ['1 / -1', 'auto'] })}
            />
          </div>
        </div>
      </BoundedBox>

      {/* {TODO: Paginated winners} */}
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
  }
`
