import { useState, useMemo, useLayoutEffect } from 'react'

import { IS_BROWSER } from '../utils'

type UseURLParamStateOptions = {
  updateType?: 'replace' | 'push'
}

export const useURLParamState = (
  key: string,
  initialValue?: string,
  options: UseURLParamStateOptions = {},
) => {
  const { updateType = 'replace' } = options

  const [state, setState] = useState(() => {
    if (!IS_BROWSER) return initialValue as string

    const params = new URLSearchParams(location.search)
    const paramValue = params.get(key)

    return paramValue ?? (initialValue as string)
  })

  useLayoutEffect(() => {
    const url = new URL(location.href)

    if (state && state.length > 0) url.searchParams.set(key, state)
    else url.searchParams.delete(key)

    if (updateType === 'replace') history.replaceState(undefined, '', url.href)
    else if (updateType === 'push') history.pushState(undefined, '', url.href)
  }, [key, updateType, state])

  return useMemo(() => [state, setState] as const, [state])
}
