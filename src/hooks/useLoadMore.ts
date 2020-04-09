import { useReducer, useCallback, useEffect, useState } from 'react'
import { withPrefix } from 'gatsby'
import { ExpandedPageNode } from 'gatsby-paginated-collection-json-files'

enum ActionType {
  RestartWithInitialPage,
  Begin,
  Failed,
  Completed,
}

interface Action {
  type: ActionType
  payload?: Partial<ExpandedPageNode> | Error
}

enum StateType {
  Loading,
  Rest,
  Failed,
}

interface State {
  type: StateType
  items: unknown[]
  latestPage?: Partial<ExpandedPageNode>
  error?: Error
}

const createInitialState = (
  initialPage?: Partial<ExpandedPageNode>,
): State => ({
  type: StateType.Rest,
  items: initialPage?.nodes ?? [],
  latestPage: initialPage,
})

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.RestartWithInitialPage:
      return createInitialState(action.payload as Partial<ExpandedPageNode>)

    case ActionType.Begin:
      return { ...state, type: StateType.Loading, error: undefined }

    case ActionType.Failed:
      return {
        ...state,
        type: StateType.Failed,
        error: action.payload as Error,
      }

    case ActionType.Completed:
      return {
        ...state,
        type: StateType.Rest,
        items: [
          ...state.items,
          ...((action.payload as Partial<ExpandedPageNode>)?.nodes ?? []),
        ],
        latestPage: action.payload as Partial<ExpandedPageNode>,
        error: undefined,
      }
  }
}

export interface UseLoadMoreArgs {
  firstPageId: string
  initialPage?: Partial<ExpandedPageNode>
  directory?: string
}

export const useLoadMore = (args: UseLoadMoreArgs) => {
  const {
    firstPageId,
    initialPage,
    directory = '___paginated-collections',
  } = args

  const [state, dispatch] = useReducer(reducer, initialPage, createInitialState)

  const loadPage = useCallback(
    async (id: string, successAction: ActionType = ActionType.Completed) => {
      const path = withPrefix(`/${directory}/${id}.json`)

      try {
        dispatch({ type: ActionType.Begin })
        const res = await fetch(path)
        const json = await res.json()
        dispatch({ type: successAction, payload: json })
      } catch (error) {
        console.error(error)
        dispatch({ type: ActionType.Failed, payload: error })
      }
    },
    [directory],
  )

  const loadMore = useCallback(async () => {
    if (state.latestPage?.nextPage) await loadPage(state.latestPage.nextPage.id)
  }, [state.latestPage, loadPage])

  const loadAndReset = useCallback(
    async (id: string) => {
      await loadPage(id, ActionType.RestartWithInitialPage)
    },
    [loadPage],
  )

  const [previousFirstPageId, setPreviousFirstPageId] = useState(firstPageId)
  useEffect(() => {
    if (firstPageId === previousFirstPageId) return

    loadPage(firstPageId, ActionType.RestartWithInitialPage)
    setPreviousFirstPageId(firstPageId)
  }, [loadPage, firstPageId, previousFirstPageId])

  return [state, loadMore, loadAndReset] as const
}
