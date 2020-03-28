import React from 'react'

import { t } from '../theme'
import { View } from './View'

type OverlayProps = React.ComponentProps<typeof View> & {
  isActive?: boolean
}

export const Overlay: React.FC<OverlayProps> = ({
  isActive = true,
  ...props
}) => (
  <View
    {...props}
    css={{
      backgroundColor: t.c.Black,
      bottom: 0,
      left: 0,
      opacity: isActive ? 0.5 : 0,
      pointerEvents: isActive ? 'auto' : 'none',
      position: 'fixed',
      right: 0,
      top: 0,
      transitionProperty: 'opacity',
    }}
  />
)
