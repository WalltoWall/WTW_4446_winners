import { useReducer, useCallback } from 'react'
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

interface UseLoadMoreArgs {
  initialPage?: Partial<ExpandedPageNode>
  directory?: string
}

export const useLoadMore = (args: UseLoadMoreArgs) => {
  const { initialPage, directory = 'paginated-collections' } = args

  const [state, dispatch] = useReducer(reducer, initialPage, createInitialState)

  const loadPage = useCallback(
    async (id: string) => {
      const path = withPrefix(`/${directory}/${id}.json`)

      try {
        dispatch({ type: ActionType.Begin })
        const res = await fetch(path)
        const json = await res.json()
        dispatch({ type: ActionType.Completed, payload: json })
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
      const path = withPrefix(`/${directory}/${id}.json`)

      try {
        dispatch({ type: ActionType.Begin })
        const res = await fetch(path)
        const json = await res.json()
        dispatch({ type: ActionType.RestartWithInitialPage, payload: json })
      } catch (error) {
        console.error(error)
        dispatch({ type: ActionType.Failed, payload: error })
      }
    },
    [directory],
  )

  return [state, loadMore, loadAndReset] as const
}
