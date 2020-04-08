import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'

export type BoundedBoxProps = ViewProps & {
  maxWidth?: keyof typeof t.sz
  innerProps?: ViewProps
}

export const BoundedBox = React.forwardRef(
  ({ maxWidth, innerProps, children, ...props }: BoundedBoxProps, ref) => (
    <View
      ref={ref}
      {...props}
      css={mq({
        paddingLeft: linearScale('1rem', '4rem'),
        paddingRight: linearScale('1rem', '4rem'),
        paddingTop: linearScale('2.5rem', '6.25rem'),
        paddingBottom: linearScale('2.5rem', '6.25rem'),
      })}
    >
      <div
        {...innerProps}
        css={{
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: maxWidth ? t.sz[maxWidth] : undefined,
        }}
      >
        {children}
      </div>
    </View>
  ),
)
