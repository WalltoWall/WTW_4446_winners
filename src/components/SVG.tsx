import React from 'react'

import { View } from './View'
import { AspectRatio } from './AspectRatio'

type SVGProps = React.ComponentProps<typeof AspectRatio> & {
  svg: React.ComponentType
}

export const SVG: React.FC<SVGProps> = ({ svg: SvgComp, x, y, ...props }) => (
  <AspectRatio x={x} y={y} {...props}>
    <View as={SvgComp} css={{ width: '100%', height: '100%' }} />
  </AspectRatio>
)
