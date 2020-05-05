import React from 'react'

import { t, linearScale, mq } from '../theme'

import { ReactComponent as AssetIconPlaySVG } from '../assets/icon-play.svg'
import { useLightbox, LIGHTBOX_TYPE } from './Lightbox'

export type VideoPlayButtonProps = {
  src: string
}

const SIZE = linearScale('2rem', '2.25rem', 'space')

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
      {...props}
      css={mq({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE,
        height: SIZE,
        backgroundColor: t.colors.Gray10,
        borderRadius: '50%',
        outline: 'none',
        transition: 'color .2s ease, background .2s ease',
        color: t.colors.White,

        '&:hover, &:focus': {
          color: t.colors.Red40,
        },
      })}
    >
      <AssetIconPlaySVG
        css={mq({
          width: linearScale('.6rem', '.7rem', 'space'),
          color: 'inherit',

          transform: 'translateX(2px)',
        })}
      />
    </button>
  )
}
