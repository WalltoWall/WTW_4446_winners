import styled from 'styled-components'

import { t } from '../theme'

// I've found that this results in *much* better
// performance over deriving the types from
// typeof View repeatedly
export type ViewProps<
  T extends HTMLElement = HTMLDivElement
> = React.HTMLAttributes<T>

export const View = styled.div({
  transitionDuration: t.td.Normal,
  transitionProperty: 'none',
  transitionTimingFunction: 'ease-out',
})
