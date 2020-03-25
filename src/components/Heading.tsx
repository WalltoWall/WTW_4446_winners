import React from 'react'

import { t, mq } from '../theme'
import { View } from './View'

type HeadingProps = React.ComponentProps<typeof View>

export const Heading: React.FC<HeadingProps> = props => (
  <View
    as="h2"
    {...props}
    css={mq({
      fontSize: t.f.l,
      fontWeight: t.fw.Semibold,
    })}
  />
)
