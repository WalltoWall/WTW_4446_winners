import React from 'react'

import { t } from '../theme'
import { Icon } from './Icon'

const colors = {
  gold: t.c.Gold40,
  silver: t.c.Gray70,
  bronze: t.c.Bronze40,
} as const

type AwardIconProps = Omit<React.ComponentProps<typeof Icon>, 'icon'> & {
  type: 'gold' | 'silver' | 'bronze'
}

export const AwardIcon: React.FC<AwardIconProps> = ({ type, ...props }) => (
  <Icon icon="award" {...props} css={{ color: colors[type] }} />
)
