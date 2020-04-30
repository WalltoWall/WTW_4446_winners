import React, { useState, useEffect } from 'react'
import Player from '@vimeo/player'

import { convertVimeoLinkToIframeSrc } from '../utils'
import { View, ViewProps } from './View'
import { t, mq } from '../theme'
import { AspectRatio } from './AspectRatio'
import { ReactComponent as AssetIconMuteSVG } from '../assets/icon-sound-off.svg'
import { ReactComponent as AssetIconUnmuteSVG } from '../assets/icon-sound-on.svg'

export type HeroVideoProps = ViewProps & {
  src: string
}

const VolumeController = ({ children }) => {
  return (
    <View
      css={{
        display: 'flex',
        position: 'absolute',
        bottom: '2rem',
        left: '1.75rem',
      }}
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </View>
  )
}

export const HeroVideo = ({ src, ...props }: HeroVideoProps) => {
  let player: any

  const [mute, setMute] = useState(true)

  useEffect(() => {
    player = new Player('home-hero-pele-video')

    if (mute) {
      player.setVolume(0)
      return
    }
    player.setVolume(1)
  }, [mute, setMute])

  const handleClick = () => {
    setMute(prevMute => !prevMute)
  }

  return (
    <View
      css={mq({
        margin: '0 auto',
        position: 'relative',
      })}
    >
      <AspectRatio
        x={16}
        y={9}
        css={{ backgroundColor: t.c.Black, height: '100%' }}
      >
        <iframe
          id="home-hero-pele-video"
          src={
            convertVimeoLinkToIframeSrc(src) +
            '?autoplay=1&loop=1&autopause=0&muted=1&background=1'
          }
          frameBorder="0"
          allow="autoplay; fullscreen; muted"
          allowFullScreen
          {...props}
          css={{ height: '100%', width: '100%' }}
        />
      </AspectRatio>
      {mute && (
        <VolumeController>
          <AssetIconMuteSVG
            css={{
              width: '2.25rem',
              cursor: 'pointer',
              opacity: 0.7,
            }}
            onClick={handleClick}
          />
        </VolumeController>
      )}
      {!mute && (
        <VolumeController>
          <AssetIconUnmuteSVG
            css={{
              width: '2.25rem',
              cursor: 'pointer',
              opacity: 0.7,
            }}
            onClick={handleClick}
          />
        </VolumeController>
      )}
    </View>
  )
}
