import React from 'react'

import { View, ViewProps } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { mq, t, linearScale } from '../theme'

const Box: React.FC = ({ children, ...props }) => {
  const p = linearScale('40px', '80px', 'space')

  return (
    <View
      css={mq({
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: p,
        minHeight: [null, null, '25rem', '32rem'],
      })}
      {...props}
    >
      {children}
    </View>
  )
}

type ColoredBoxesSliceProps = ViewProps & {
  whiteBoxChildren: React.ReactNode
  redBoxChildren: React.ReactNode
}

export const ColoredBoxesSlice: React.FC<ColoredBoxesSliceProps> = ({
  whiteBoxChildren,
  redBoxChildren,
}) => {
  return (
    <BoundedBox
      forwardedAs="section"
      maxWidth="Xlarge"
      css={{ background: t.c.Gray95 }}
    >
      <View
        css={mq({
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
        })}
      >
        <Box css={{ background: t.colors.White }}>{whiteBoxChildren}</Box>
        <Box
          css={{
            color: t.colors.White,
            background: t.colors.Red40,
          }}
        >
          {redBoxChildren}
        </Box>
      </View>
    </BoundedBox>
  )
}