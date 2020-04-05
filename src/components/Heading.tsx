import React from 'react'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'

export type HeadingProps = ViewProps

export const Heading = (props: HeadingProps) => (
  <View
    as="h2"
    {...props}
    css={mq({
      fontSize: t.f.l,
      fontWeight: t.fw.Semibold,
      lineHeight: t.lh.Title,
    })}
  />
)
