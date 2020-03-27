import React from 'react'

import { t, mq } from '../theme'
import { View } from './View'

type SubheadingProps = React.ComponentProps<typeof View>

export const Subheading: React.FC<SubheadingProps> = (props) => (
  <View
    as="h3"
    {...props}
    css={mq({
      color: t.c.Red40,
      fontSize: t.f['b+'],
      fontWeight: t.fw.Semibold,
      lineHeight: t.lh.Title,
    })}
  />
)
