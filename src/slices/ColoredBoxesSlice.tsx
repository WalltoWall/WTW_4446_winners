import React from 'react'

import { View, ViewProps } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'
import { mq, t } from '../theme'

const Box = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <BoundedBox
      css={mq({
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: [null, null, '25rem', '32rem'],
      })}
      innerProps={{
        style: {
          height: 'auto',
        },
      }}
      {...props}
    >
      {children}
    </BoundedBox>
  )
}

type ColoredBoxesSliceProps = ViewProps & {
  leftBoxChildren: React.ReactNode
  leftBackgroundColor?: keyof typeof t.colors
  rightBoxChildren: React.ReactNode
  rightBackgroundColor?: keyof typeof t.colors
}

export const ColoredBoxesSlice = ({
  leftBoxChildren,
  leftBackgroundColor = 'White',
  rightBoxChildren,
  rightBackgroundColor = 'Red40',
  ...props
}: ColoredBoxesSliceProps) => {
  return (
    <BoundedBox
      forwardedAs="section"
      maxWidth="Xlarge"
      css={{ background: t.c.Gray95 }}
      {...props}
    >
      <View
        css={mq({
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
        })}
      >
        <Box css={{ background: t.colors[leftBackgroundColor] }}>
          {leftBoxChildren}
        </Box>
        <Box
          css={{
            color: t.colors.White,
            background: t.colors[rightBackgroundColor],
          }}
        >
          {rightBoxChildren}
        </Box>
      </View>
    </BoundedBox>
  )
}
