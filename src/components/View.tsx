import styled from 'styled-components'

import { t } from '../theme'

export type View = React.ComponentProps<typeof View>

export const View = styled.div({
  transitionDuration: t.td.Normal,
  transitionProperty: 'none',
  transitionTimingFunction: 'ease-out',
})
