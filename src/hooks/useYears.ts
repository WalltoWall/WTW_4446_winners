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

  const years = useMemo(() => {
    return data.allAirtableWinner.distinct.sort((a, b) => {
      const numA = Number.parseInt(a)
      const numB = Number.parseInt(b)

      if (numA === numB) return 0
      if (numA < numB) return 1

      return -1
    })
  }, [])

  return years
}
