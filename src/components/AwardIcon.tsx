import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'

import { Award } from '../types'

import { t } from '../theme'
import { View, ViewProps } from './View'
import { Icon } from './Icon'

const colors = {
  gold: t.c.Gold40,
  silver: t.c.Gray70,
  bronze: t.c.Bronze50,
} as const

export type AwardIconProps = ViewProps & {
  type: Award
}

export const AwardIcon = ({ type, ...props }: AwardIconProps) => (
  <View {...props}>
    <Icon name="award" css={{ color: colors[type] }} />
    <VisuallyHidden>{type}</VisuallyHidden>
  </View>
)
