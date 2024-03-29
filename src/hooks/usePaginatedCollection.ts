import { useRef, useMemo, useState, useCallback, useLayoutEffect } from 'react'

import { chunk } from '../utils'

const IS_BROWSER = typeof window !== 'undefined'

type UsePaginatedCollectionArgs<T> = {
  collection: T[]
  perPage?: number
  initialPage?: number
  paramKey?: string
}

export const usePaginatedCollection = <Container extends Element, T>({
  collection,
  perPage = 20,
  initialPage = 1,
  paramKey = 'page',
}: UsePaginatedCollectionArgs<T>) => {
  const containerRef = useRef<Container>()

  const chuckedCollection = useMemo(() => chunk(perPage, collection), [
    perPage,
    collection,
  ])

  const totalPages = chuckedCollection.length

  const [page, set] = useState(() => {
    if (!IS_BROWSER) return initialPage

    const searchParams = new URLSearchParams(location.search)
    const currPage = searchParams.get(paramKey)

    if (currPage)
      return Math.max(Math.min(Number.parseInt(currPage), totalPages), 1)

    return initialPage
  })

  const paginatedCollection = chuckedCollection[page - 1] || []

  const setPage = useCallback(
    idx => {
      const searchParams = new URLSearchParams(location.search)
      searchParams.set(paramKey, idx)

      history.pushState(
        null,
        '',
        `${window.location.pathname}?${searchParams.toString()}`,
      )

      set(idx)
    },
    [paramKey],
  )

  const incPage = useCallback(
    (amount = 1) => setPage(Math.min(page + amount, totalPages)),
    [page, setPage, totalPages],
  )

  const decPage = useCallback(
    (amount = 1) => setPage(Math.max(page - amount, 1)),
    [page, setPage],
  )

  useLayoutEffect(() => {
    const readPageFromURL = () => {
      const containerEl = containerRef?.current
      if (!containerEl) return

      const searchParams = new URLSearchParams(location.search)
      const currPage = searchParams.get(paramKey)

      if (!currPage) return

      containerEl.scrollIntoView({ behavior: 'smooth' })
      set(Math.max(Math.min(Number.parseInt(currPage), totalPages), 1))
    }

    readPageFromURL()
    window.addEventListener('popstate', readPageFromURL)

    return () => window.removeEventListener('popstate', readPageFromURL)
  }, [containerRef, page, paramKey, totalPages])

  return {
    paginatedCollection,
    page,
    totalPages,
    hasNextPage: page + 1 <= totalPages,
    hasPreviousPage: page > 1,
    incPage,
    decPage,
    setPage,
    containerRef,
  }
}
