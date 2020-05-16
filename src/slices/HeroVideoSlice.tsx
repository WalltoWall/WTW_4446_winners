import React, { useRef, useState, useEffect } from 'react'
import Player from '@vimeo/player'
import VisuallyHidden from '@reach/visually-hidden'

import { convertVimeoLinkToIframeSrc } from '../utils'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from '../components/View'
import { AspectRatio } from '../components/AspectRatio'
import { ReactComponent as AssetIconSoundOffSVG } from '../assets/icon-sound-off.svg'
import { ReactComponent as AssetIconSoundOnSVG } from '../assets/icon-sound-on.svg'
import { ReactComponent as AssetIconReplaySVG } from '../assets/icon-replay-video.svg'

export type HeroVideoSliceProps = ViewProps & {
  src: string
  videoPlayerId: string
}

export const HeroVideoSlice = ({
  src,
  videoPlayerId,
  ...props
}: HeroVideoSliceProps) => {
  const player = useRef<Player>()

  const [mute, setMute] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)

  const toggleMute = () => setMute(state => !state)

  const replayVideo = () => {
    if (!player.current) return

    player.current.play()
    setVideoEnded(false)
  }

  // const skipToEnd = () => {
  //   if (!player.current) return

  //   player.current.setCurrentTime(39)
  // }

  useEffect(() => {
    try {
      if (!player.current) player.current = new Player(videoPlayerId)
      player.current.setVolume(mute ? 0 : 1)

      player.current.on('ended', function () {
        setVideoEnded(true)
      })
    } catch (error) {
      console.error(error)
      // Ignore
    }
  }, [mute, videoPlayerId])

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
        css={{
          backgroundColor: t.c.Black,
          height: '100%',
        }}
      >
        <iframe
          id={videoPlayerId}
          src={
            convertVimeoLinkToIframeSrc(src) +
            '?autoplay=1&loop=0&autopause=0&muted=1&background=1'
          }
          frameBorder="0"
          allow="autoplay; fullscreen; muted"
          allowFullScreen={true}
          css={{ height: '100%', width: '100%' }}
        />
      </AspectRatio>

      <View
        css={mq({
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: linearScale('2.75rem', '4rem'),
          backgroundColor: t.c.Black,
          background: `linear-gradient(0deg, rgba(0,0,0,1) 9%, rgba(255,255,255,0) 100%)`,
          opacity: videoEnded ? 0.3 : 0,
          transitionProperty: 'opacity',
          transitionDuration: '400ms',
        })}
      />

      <View
        css={mq({
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          left: linearScale('0.75rem', '1.5rem'),
          alignItems: 'center',
          width: '100%',
          height: linearScale('2.75rem', '4rem'),
        })}
      >
        <button
          onClick={toggleMute}
          css={mq({
            opacity: 0.7,
            transitionProperty: 'opacity',
            transitionDuration: '200ms',
            marginRight: linearScale('0.5rem', '1rem'),
            '&:hover, &:focus': {
              opacity: 1,
            },
          })}
        >
          <VisuallyHidden>
            {mute ? 'Unmute video' : 'Mute video'}
          </VisuallyHidden>
          {mute ? (
            <AssetIconSoundOffSVG
              css={mq({
                width: linearScale('1.5rem', '2rem'),
                color: t.c.White,
              })}
            />
          ) : (
            <AssetIconSoundOnSVG
              css={mq({
                width: linearScale('1.5rem', '2rem'),
                color: t.c.White,
              })}
            />
          )}
        </button>
        {videoEnded && (
          <button
            onClick={replayVideo}
            css={mq({
              opacity: videoEnded ? 0.7 : 0,
              transitionProperty: 'opacity',
              transitionDuration: '400ms',
              '&:hover, &:focus': {
                opacity: 1,
              },
            })}
          >
            <VisuallyHidden>replay video</VisuallyHidden>
            <AssetIconReplaySVG
              css={mq({
                width: linearScale('1.5rem', '1.75rem'),
                fill: t.c.White,
              })}
            />
          </button>
        )}
      </View>
      {/* <button
        onClick={skipToEnd}
        css={{ position: 'absolute', top: 0, left: 0 }}
      >
        SKIP TO END
      </button> */}
    </View>
  )
}
