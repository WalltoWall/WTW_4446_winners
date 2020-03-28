import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View } from './View'

type BoundedBoxProps = React.ComponentProps<typeof View> & {
  maxWidth?: keyof typeof t.sz
  innerProps?: React.ComponentProps<typeof View>
}

export const BoundedBox: React.FC<BoundedBoxProps> = ({
  maxWidth,
  innerProps,
  children,
  ...props
}) => (
  <View
    {...props}
    css={mq({
      paddingLeft: linearScale('1rem', '4rem'),
      paddingRight: linearScale('1rem', '4rem'),
      paddingTop: linearScale('2.5rem', '6.25rem'),
      paddingBottom: linearScale('2.5rem', '6.25rem'),
    })}
  >
    <View
      {...innerProps}
      css={{
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: maxWidth ? t.sz[maxWidth] : undefined,
      }}
    >
      {children}
    </View>
  </View>
)
