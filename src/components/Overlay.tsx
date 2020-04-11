import React from 'react'

import { t } from '../theme'
import { View, ViewProps } from './View'

export type OverlayProps = ViewProps & {
  isActive?: boolean
}

export const Overlay = ({ isActive = true, ...props }: OverlayProps) => (
  <View
    {...props}
    css={{
      backgroundColor: t.c.Black,
      bottom: 0,
      left: 0,
      opacity: isActive ? 0.25 : 0,
      pointerEvents: isActive ? 'auto' : 'none',
      position: 'fixed',
      right: 0,
      top: 0,
      transitionProperty: 'opacity',
    }}
  />
)
