import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Heading } from './Heading'

export type EmptyMessageProps = ViewProps & {
  heading?: string
}

export const EmptyMessage = ({
  children,
  heading,
  ...props
}: EmptyMessageProps) => (
  <View
    {...props}
    css={mq({
      display: 'grid',
      gap: linearScale('0.5rem', '1rem'),
      margin: '0 auto',
      maxWidth: '45ch',
      textAlign: 'center',
    })}
  >
    {heading && (
      <Heading css={mq({ lineHeight: t.lineHeights.TitleWide })}>
        {heading}
      </Heading>
    )}
    {children && (
      <div
        css={mq({
          color: t.c.Gray60,
          fontSize: t.f['b-'],
          textAlign: 'center',
        })}
      >
        {children}
      </div>
    )}
  </View>
)
