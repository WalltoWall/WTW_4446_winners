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
}: CardListProps) => {
  const listItems = React.Children.toArray(children)

  return (
    <View
      as="ul"
      {...props}
      css={mq({
        display: 'grid',
        gap: linearScale('0.8125rem', '1.5rem'),
        gridTemplateColumns: columns.map(qty => `repeat(${qty}, 1fr)`),
        alignItems: 'stretch',
      })}
    >
      {listItems.map((child, i) => (
        <li key={i} css={{ display: 'flex' }}>
          {child}
        </li>
      ))}
    </View>
  )
}
