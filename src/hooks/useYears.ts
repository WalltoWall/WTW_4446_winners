import { useStaticQuery, graphql } from 'gatsby'

import { YearsQuery } from '../graphqlTypes'
import { useMemo } from 'react'

export const useYears = () => {
  const data = useStaticQuery<YearsQuery>(graphql`
    query Years {
      allAirtableWinner(sort: { fields: data___year, order: DESC }) {
        distinct(field: data___year)
      }
    }
  `)

  return useMemo(
    () =>
      data.allAirtableWinner.distinct
        .slice()
        .sort((a, b) => Number.parseInt(b) - Number.parseInt(a)),
    [data.allAirtableWinner.distinct],
  )
}
