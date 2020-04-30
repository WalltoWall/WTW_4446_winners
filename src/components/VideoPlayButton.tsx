import React from 'react'

import { t } from '../theme'

import { ReactComponent as AssetIconPlaySVG } from '../assets/icon-play.svg'
import { useLightbox, LIGHTBOX_TYPE } from './Lightbox'

export type VideoPlayButtonProps = {
  src: string
}

/**
 * This component breaks some good styling conventions like having `position`
 * on by default, but doing it this way was the only way I could think of to
 * have access to the Lightbox context without putting it in <WinnerCard>.
 *
 * I want to have access to Lightbox context outside of <WinnerCard> since
 * using context in <WinnerCard> will cause **all** <WinnerCard>'s to re-render
 * whenever the Lightbox Context's value changes. This could potentially be
 * over 15+ components in some views.
 *
 * Accessing context here instead will only force instances of this component
 * to re-render when the Lightbox context value changes. This is much less on
 * average since this component is conditionally rendered.
 */
export const VideoPlayButton = ({ src, ...props }: VideoPlayButtonProps) => {
  const { setLightbox } = useLightbox()

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setLightbox(src, LIGHTBOX_TYPE.VIDEO)
  }

  return (
    <button
      onClick={onClick}
      css={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        '&:hover, &:focus': {
          '.play-button': {
            backgroundColor: t.colors.Gray85,
          },
        },
      }}
    >
      <div
        {...props}
        className="play-button"
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
        }}
      >
        <AssetIconPlaySVG
          css={{
            width: '.75rem',
            color: t.colors.Black,
            transform: 'translateX(2px)',
          }}
        />
      </div>
    </button>
  )
}
