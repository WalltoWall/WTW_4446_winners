import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'

import { Award } from '../types'

import { t } from '../theme'
import { View } from './View'
import { Icon } from './Icon'

const colors = {
  gold: t.c.Gold40,
  silver: t.c.Gray70,
  bronze: t.c.Bronze50,
} as const

type AwardIconProps = Omit<React.ComponentProps<typeof Icon>, 'icon'> & {
  type: Award
}

export const AwardIcon: React.FC<AwardIconProps> = ({ type, ...props }) => (
  <View {...props}>
    <Icon name="award" css={{ color: colors[type] }} />
    <VisuallyHidden>{type}</VisuallyHidden>
  </View>
)
