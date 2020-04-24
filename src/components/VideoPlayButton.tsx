import React from 'react'

import { t, mq } from '../theme'

import { ReactComponent as AssetIconPlaySVG } from '../assets/icon-play.svg'
import { useLightbox, LIGHTBOX_TYPE } from './Lightbox'

export type VideoPlayButtonProps = {
  src: string
}

export const VideoPlayButton = ({ src, ...props }: VideoPlayButtonProps) => {
  const { setLightbox } = useLightbox()

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setLightbox(src, LIGHTBOX_TYPE.VIDEO)
  }

  return (
    <button
      onClick={onClick}
      {...props}
      css={{
        display: 'flex',
        width: '3rem',
        height: '3rem',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: t.colors.White,
        borderRadius: '50%',
        outline: 'none',
        transition: 'background .2s ease',

        '&:hover, &:focus': {
          backgroundColor: t.colors.Gray85,
        },
      }}
    >
      <AssetIconPlaySVG
        css={{
          width: '.75rem',
          color: t.colors.Black,
          transform: 'translateX(2px)',
        }}
      />
    </button>
  )
}
