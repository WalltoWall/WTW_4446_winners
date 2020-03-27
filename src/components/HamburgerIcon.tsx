import React from 'react'
import { a, useSpring, config } from 'react-spring'
import delay from 'delay'

import { View } from './View'

type HamburgerIconProps = React.ComponentProps<typeof View> & {
  isOpen?: boolean
}

type BarProps = React.ComponentProps<typeof View>

const Bar: React.FC<BarProps> = (props) => (
  <View
    as={a(View)}
    {...props}
    css={{
      backgroundColor: 'currentColor',
      height: 2,
      position: 'absolute',
      width: '100%',
    }}
  />
)

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen = false,
  ...props
}) => {
  const topSpring = useSpring({
    from: {
      y: `translateY(${isOpen ? 45 : 0}%)`,
      rot: `rotate(${isOpen ? 45 : 0})`,
    },
    to: async (next) => {
      if (isOpen) {
        next({ y: `translateY(${isOpen ? 45 : 0}%)` })
        await delay(200)
        next({ rot: `rotate(${isOpen ? 45 : 0}deg)` })
      } else {
        next({ rot: `rotate(${isOpen ? 45 : 0}deg)` })
        await delay(200)
        next({ y: `translateY(${isOpen ? 45 : 0}%)` })
      }
    },
    config: config.stiff,
  })

  const bottomSpring = useSpring({
    from: {
      y: `translateY(${isOpen ? -45 : 0}%)`,
      rot: `rotate(${isOpen ? -45 : 0}deg)`,
    },
    to: async (next) => {
      if (isOpen) {
        next({ y: `translateY(${isOpen ? -45 : 0}%)` })
        await delay(200)
        next({ rot: `rotate(${isOpen ? -45 : 0}deg)` })
      } else {
        next({ rot: `rotate(${isOpen ? -45 : 0}deg)` })
        await delay(200)
        next({ y: `translateY(${isOpen ? -45 : 0}%)` })
      }
    },
    config: config.stiff,
  })

  return (
    <View {...props} css={{ position: 'relative' }}>
      <View
        as={a(View)}
        style={{ transform: topSpring.y }}
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      >
        <Bar style={{ transform: topSpring.rot }} css={{ left: 0, top: 0 }} />
      </View>
      <View
        as={a(View)}
        style={{ transform: bottomSpring.y }}
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      >
        <Bar
          style={{ transform: bottomSpring.rot }}
          css={{ left: 0, bottom: 0 }}
        />
      </View>
    </View>
  )
}
