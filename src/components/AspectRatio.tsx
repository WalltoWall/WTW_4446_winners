import React from 'react'
import warning from 'tiny-warning'

import { mq } from '../theme'
import { castArray, zipFirstLeftWith } from '../utils'
import { View, ViewProps } from './View'

const zipper = (x: number | null, y: number | null) => {
  warning(
    typeof x === 'number' && typeof y === 'number',
    `x, y pairs cannot have mixed types. The following pair is invalid and will be treated as null: [${x}, ${y}]`,
  )

  return typeof x === 'number' && typeof y === 'number'
    ? `${(y / x) * 100}%`
    : null
}

export type AspectRatioProps = ViewProps & {
  x: number | (number | null)[]
  y: number | (number | null)[]
}

export const AspectRatio = ({ x, y, children, ...props }: AspectRatioProps) => (
  <View {...props} css={{ position: 'relative' }}>
    <div
      aria-hidden={true}
      css={mq({
        paddingTop: zipFirstLeftWith(zipper, castArray(x), castArray(y)),
      })}
    />
    <div css={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      {children}
    </div>
  </View>
)
