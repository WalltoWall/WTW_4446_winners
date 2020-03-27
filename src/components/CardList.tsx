import React from 'react'

import { mq, linearScale } from '../theme'
import { View } from './View'

type CardListProps = React.ComponentProps<typeof View> & {
  columns?: number[]
}

export const CardList: React.FC<CardListProps> = ({
  children,
  columns = [1],
  ...props
}) => (
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
      <View as="li" key={i} css={{ display: 'flex' }}>
        {child}
      </View>
    ))}
  </View>
)
