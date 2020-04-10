import React from 'react'

import { SVG, SVGProps } from './SVG'
import { ReactComponent as AssetIconAwardSVG } from '../assets/icon-award.svg'
import { ReactComponent as AssetIconSearchSVG } from '../assets/icon-search.svg'
import { ReactComponent as AssetIconChevronDownSVG } from '../assets/icon-chevron-down.svg'
import { ReactComponent as AssetIconChevronLeftSVG } from '../assets/icon-chevron-left.svg'
import { ReactComponent as AssetIconChevronRightSVG } from '../assets/icon-chevron-right.svg'
import { ReactComponent as AssetIconFacebookSVG } from '../assets/icon-facebook.svg'
import { ReactComponent as AssetIconTwitterSVG } from '../assets/icon-twitter.svg'
import { ReactComponent as AssetIconInstagramSVG } from '../assets/icon-instagram.svg'
import { ReactComponent as AssetIconLinkedinSVG } from '../assets/icon-linkedin.svg'

const icons = {
  award: AssetIconAwardSVG,
  search: AssetIconSearchSVG,
  chevronDown: AssetIconChevronDownSVG,
  chevronLeft: AssetIconChevronLeftSVG,
  chevronRight: AssetIconChevronRightSVG,
  facebook: AssetIconFacebookSVG,
  twitter: AssetIconTwitterSVG,
  instagram: AssetIconInstagramSVG,
  linkedin: AssetIconLinkedinSVG,
} as const

export type IconProps = Omit<SVGProps, 'svg'> & {
  name: keyof typeof icons
}

export const Icon = ({ name, ...props }: IconProps) => {
  const Icon = icons[name]

  return <SVG svg={Icon} role="presentation" {...props} />
}
