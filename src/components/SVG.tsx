import React from 'react'

import { View } from './View'
import { AspectRatio, AspectRatioProps } from './AspectRatio'

export type SVGProps = AspectRatioProps & {
  svg: React.ComponentType
}

export const SVG = ({ svg: SvgComp, x, y, ...props }: SVGProps) => (
  <AspectRatio x={x} y={y} {...props}>
    <View as={SvgComp} css={{ width: '100%', height: '100%' }} />
  </AspectRatio>
)
