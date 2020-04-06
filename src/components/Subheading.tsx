import React from 'react'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'

type SubheadingProps = ViewProps

export const Subheading = (props: SubheadingProps) => (
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
