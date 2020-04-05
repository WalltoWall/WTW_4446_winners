import React from 'react'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

export type CardListProps = ViewProps & {
  columns?: number[]
}

export const CardList = ({
  children,
  columns = [1],
  ...props
}: CardListProps) => (
  <View
    as="ul"
    {...props}
    css={mq({
      display: 'grid',
      gap: linearScale('0.8125rem', '1.5rem'),
      gridTemplateColumns: columns.map((qty) => `repeat(${qty}, 1fr)`),
      alignItems: 'stretch',
    })}
  >
    {React.Children.map(children, (child, i) => (
      <li key={i} css={{ display: 'flex' }}>
        {child}
      </li>
    ))}
  </View>
)
