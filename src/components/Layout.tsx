import React from 'react'

import { View } from './View'

type LayoutProps = React.ComponentProps<typeof View>

export const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <View {...props}>{children}</View>
)
