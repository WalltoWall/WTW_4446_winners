import React from 'react'
import { negateScale } from 'styled-system-scale'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

export type CardListProps = ViewProps & {
  columns?: number[]
}

const GAP = linearScale('0.8125rem', '1.5rem')

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
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: negateScale(GAP),
        marginBottom: negateScale(GAP),
        alignItems: 'stretch',
        // If we have enough items to create more than one row, left align.
        justifyContent: columns.map(qty =>
          listItems.length >= qty + 1 ? 'flex-start' : 'center',
        ),
      })}
    >
      {listItems.map((child, i) => (
        <li
          key={i}
          css={mq({
            display: 'flex',
            marginRight: GAP,
            marginBottom: GAP,
            width: columns.map(
              (qty, i) => `calc(${100 / qty}% - ${GAP[Math.min(i, 2)]})`,
            ),
          })}
        >
          {child}
        </li>
      ))}
    </View>
  )
}
