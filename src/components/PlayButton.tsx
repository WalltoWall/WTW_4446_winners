import React from 'react'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { ReactComponent as AssetIconPlaySVG } from '../assets/icon-play.svg'

export type PlayButtonProps = ViewProps

export const PlayButton = (props: PlayButtonProps) => (
  <View
    as="button"
    {...props}
    css={mq({
      height: linearScale('2rem', '3rem', 'space'),
      width: linearScale('2rem', '3rem', 'space'),
      alignItems: 'center',
      backgroundColor: t.colors.Gray10 + '99',
      borderRadius: '50%',
      color: t.colors.White,
      display: 'flex',
      justifyContent: 'center',
      outline: 'none',
      transitionProperty: 'background-color',
    })}
  >
    <AssetIconPlaySVG
      css={mq({
        color: 'inherit',
        height: '50%',
        transform: 'translateX(10%)',
        width: '50%',
      })}
    />
  </View>
)
