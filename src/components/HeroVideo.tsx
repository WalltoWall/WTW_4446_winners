import React, { useRef, useState, useEffect } from 'react'
import Player from '@vimeo/player'
import VisuallyHidden from '@reach/visually-hidden'

import { convertVimeoLinkToIframeSrc, uniqueId } from '../utils'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { ReactComponent as AssetIconSoundOffSVG } from '../assets/icon-sound-off.svg'
import { ReactComponent as AssetIconSoundOnSVG } from '../assets/icon-sound-on.svg'

export type HeroVideoProps = ViewProps & {
  src: string
}

export const HeroVideo = ({ src, ...props }: HeroVideoProps) => {
  const [elementId] = useState(() => `hero-video-${uniqueId()}`)
  const player = useRef<Player>()

  const [mute, setMute] = useState(true)
  const toggleMute = () => setMute(state => !state)

  useEffect(() => {
    if (!player.current) player.current = new Player(elementId)
    player.current.setVolume(mute ? 0 : 1)
  }, [mute, elementId])

  return (
    <View
      {...props}
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
          id={elementId}
          src={
            convertVimeoLinkToIframeSrc(src) +
            '?autoplay=1&loop=1&autopause=0&muted=1&background=1'
          }
          frameBorder="0"
          allow="autoplay; fullscreen; muted"
          allowFullScreen={true}
          css={{ height: '100%', width: '100%' }}
        />
      </AspectRatio>
      <button
        onClick={toggleMute}
        css={mq({
          display: 'flex',
          position: 'absolute',
          bottom: linearScale('0.5rem', '1.25rem'),
          left: linearScale('0.75rem', '1.5rem'),
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.5,
          transitionProperty: 'opacity',
          '&:hover, &:focus': {
            opacity: 1,
          },
        })}
      >
        <VisuallyHidden>{mute ? 'Unmute video' : 'Mute video'}</VisuallyHidden>
        {mute ? (
          <AssetIconSoundOffSVG
            css={mq({ width: linearScale('1.5rem', '2rem'), color: t.c.White })}
          />
        ) : (
          <AssetIconSoundOnSVG
            css={mq({ width: linearScale('1.5rem', '2rem'), color: t.c.White })}
          />
        )}
      </button>
    </View>
  )
}
