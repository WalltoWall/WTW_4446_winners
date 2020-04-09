import React from 'react'

import { mq } from '../theme'
import { View, ViewProps } from './View'

export type CardListProps = ViewProps & {
  columns?: number[]
}

const margin = [0.8125, 1.5]
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
        margin: margin.map(m => `-${m}rem`),
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
            margin: margin.map(m => `${m}rem`),
            width: columns.map(
              (qty, i) =>
                `calc(${(100 / qty).toPrecision(4)}% - ${
                  (i === 0 ? margin[0] : margin[1]) * 2
                }rem)`,
            ),
          })}
        >
          {child}
        </li>
      ))}
    </View>
  )
}
