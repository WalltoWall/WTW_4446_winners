import React from 'react'

import { SVG } from './SVG'
import { ReactComponent as AssetIconAwardSVG } from '../assets/icon-award.svg'
import { ReactComponent as AssetIconSearchSVG } from '../assets/icon-search.svg'
import { ReactComponent as AssetIconChevronDownSVG } from '../assets/icon-chevron-down.svg'

interface Icon {
  svg: React.ComponentType
  x: number
  y: number
}

const icons = {
  award: { svg: AssetIconAwardSVG, x: 20, y: 20 },
  search: { svg: AssetIconSearchSVG, x: 20, y: 20 },
  chevronDown: { svg: AssetIconChevronDownSVG, x: 14, y: 7 },
} as const

type IconProps = Omit<React.ComponentProps<typeof SVG>, 'svg'> & {
  icon: keyof typeof icons
}

export const Icon: React.FC<IconProps> = ({ icon: iconName, ...props }) => {
  const icon: Icon = icons[iconName]

  return <SVG svg={icon.svg} x={icon.x} y={icon.y} {...props} />
}
