import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'

import { Award } from '../types'

import { t } from '../theme'
import { View, ViewProps } from './View'
import { Icon } from './Icon'

const types = {
  gold: {
    color: t.c.Gold40,
    name: 'award',
  },
  silver: {
    color: t.c.Gray70,
    name: 'medal',
  },
  bronze: {
    color: t.c.Bronze70,
    name: 'medal',
  },
} as const

export type AwardIconProps = ViewProps & {
  type: Award
}

export const AwardIcon = ({ type, ...props }: AwardIconProps) => (
  <View {...props}>
    <Icon name={types[type].name} css={{ color: types[type].color }} />
    <VisuallyHidden>{type}</VisuallyHidden>
  </View>
)
