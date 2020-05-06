import React, { useRef, useState, useEffect } from 'react'
import Player from '@vimeo/player'
import VisuallyHidden from '@reach/visually-hidden'

import { convertVimeoLinkToIframeSrc, uniqueId } from '../utils'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from '../components/View'
import { AspectRatio } from '../components/AspectRatio'
import { ReactComponent as AssetIconSoundOffSVG } from '../assets/icon-sound-off.svg'
import { ReactComponent as AssetIconSoundOnSVG } from '../assets/icon-sound-on.svg'
import { ReactComponent as AssetIconReplaySVG } from '../assets/icon-replay-video.svg'

export type HeroVideoSliceProps = ViewProps & {
  src: string
}

export const HeroVideoSlice = ({ src, ...props }: HeroVideoSliceProps) => {
  const [elementId] = useState(() => `hero-video-${uniqueId()}`)
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
    if (!player.current) player.current = new Player(elementId)
    player.current.setVolume(mute ? 0 : 1)

    player.current.on('ended', function () {
      setVideoEnded(true)
    })
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
        css={{
          backgroundColor: t.c.Black,
          height: '100%',
        }}
      >
        <iframe
          id={elementId}
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
      {videoEnded && (
        <View
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: t.c.Black,
            opacity: 0.3,
          }}
        />
      )}
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
            display: 'flex',
            position: 'absolute',
            top: '50%',
            right: '50%',
            marginRight: '-3rem',
            marginTop: '-2rem',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7,
            transitionProperty: 'opacity',
            '&:hover, &:focus': {
              opacity: 1,
            },
          })}
        >
          <VisuallyHidden>replay video</VisuallyHidden>
          <View
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <AssetIconReplaySVG
              css={mq({
                width: '2rem',
                fill: t.c.White,
                marginBottom: '0.25rem',
              })}
            />
            <View
              css={{ color: t.c.White, fontSize: '1rem', fontWeight: '500' }}
            >
              Replay Video
            </View>
          </View>
        </button>
      )}
      {/* {true && (
        <button
          onClick={skipToEnd}
          css={mq({
            display: 'flex',
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            transitionProperty: 'opacity',
            '&:hover, &:focus': {
              opacity: 1,
            },
          })}
        >
          <VisuallyHidden>
            {mute ? 'Unmute video' : 'Mute video'}
          </VisuallyHidden>
          <View
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <View
              css={{ color: t.c.White, fontSize: '1rem', fontWeight: '500' }}
            >
              Skip to End
            </View>
          </View>
        </button>
      )} */}
    </View>
  )
}
