import React from 'react'

import { t } from '../theme'
import { View } from './View'

type BoundedBoxProps = React.ComponentProps<typeof View> & {
  maxWidth?: keyof typeof t.sz
  innerProps?: React.ComponentProps<typeof View>
}

export const BoundedBox: React.FC<BoundedBoxProps> = ({
  maxWidth = 'Xlarge',
  innerProps,
  children,
  ...props
}) => (
  <View {...props}>
    <View
      {...innerProps}
      css={{
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: t.sz[maxWidth],
      }}
    >
      {children}
    </View>
  </View>
)
