import React from 'react'

import { t, mq } from '../theme'
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
      paddingLeft: [t.S[3], null, t.S[4], null, t.S[6]],
      paddingRight: [t.S[3], null, t.S[4], null, t.S[6]],
      paddingTop: [t.S[4], t.S[5], t.S[6]],
      paddingBottom: [t.S[4], t.S[5], t.S[6]],
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
