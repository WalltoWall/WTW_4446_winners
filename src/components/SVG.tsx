import React from 'react'

import { View, ViewProps } from './View'

export type SVGProps = ViewProps & {
  svg: React.ComponentType
}

export const SVG = ({ svg: SvgComp, ...props }: SVGProps) => (
  <View as={SvgComp} {...props} />
)
