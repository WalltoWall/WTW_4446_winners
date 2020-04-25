import React, { useState, useMemo, useEffect, useCallback } from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { VimeoVideo } from './VimeoVideo'
import { AspectRatio } from './AspectRatio'
import { useKeyPress } from '../hooks/useKeyPress'

export enum LIGHTBOX_TYPE {
  IMAGE,
  VIDEO,
  NONE,
}

type State = {
  src: string | null | FluidObject
  type: LIGHTBOX_TYPE
}
type ContextValue = State & {
  isLightboxVisible: boolean
  setLightbox: (src: string | null | FluidObject, type: LIGHTBOX_TYPE) => void
}

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
const createContext = <A extends {} | null>() => {
  const ctx = React.createContext<A | undefined>(undefined)

  const useCtx = () => {
    const c = React.useContext(ctx)
    if (c === undefined)
      throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}

const [useLightbox, LightboxProvider] = createContext<ContextValue>()

type OverlayProps = {
  isVisible: boolean
  children: React.ReactNode
}

const Overlay = ({ isVisible, children }: OverlayProps) => {
  const { setLightbox } = useLightbox()

  const closeLightbox = () => setLightbox(null, LIGHTBOX_TYPE.NONE)

  useKeyPress('Escape', closeLightbox)

  return (
    <div
      onClick={closeLightbox}
      css={mq({
        padding: linearScale('1rem', '4rem'),
        position: 'fixed',
        display: 'grid',
        placeItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        zIndex: t.zIndices.Lightbox,
        transition: 'opacity .2s linear',
      })}
    >
      {children}
    </div>
  )
}

const Media = () => {
  const { src, type } = useLightbox()

  switch (type) {
    case LIGHTBOX_TYPE.VIDEO:
      return (
        <AspectRatio
          x={16}
          y={9}
          css={mq({
            width: '100%',
            background: t.colors.Black,
          })}
        >
          <VimeoVideo src={src! as string} />
        </AspectRatio>
      )
    case LIGHTBOX_TYPE.IMAGE:
      return (
        <GatsbyImage
          fluid={src as FluidObject}
          css={mq({
            width: '100%',
            maxHeight: '100%',
            cursor: 'zoom-out',
          })}
          imgStyle={{ objectFit: 'contain' }}
        />
      )
    default:
      return null
  }
}

type Props = {
  children: React.ReactNode
}

export const Lightbox = ({ children }: Props) => {
  const [state, setState] = useState<State>({
    src: null,
    type: LIGHTBOX_TYPE.NONE,
  })
  const isLightboxVisible = Boolean(state.src)

  const setLightbox = useCallback(
    (src: string | null | FluidObject, type: LIGHTBOX_TYPE) =>
      setState({ src, type }),
    [],
  )

  const value = useMemo(
    () => ({
      ...state,
      isLightboxVisible,
      setLightbox,
    }),
    [state, setLightbox, isLightboxVisible],
  )

  useEffect(() => {
    const htmlNode = document.querySelector('html')
    if (!htmlNode) return

    if (isLightboxVisible) htmlNode.style.overflowY = 'hidden'
    else htmlNode.style.overflowY = 'auto'
  }, [isLightboxVisible])

  return (
    <LightboxProvider value={value}>
      {children}
      <Overlay isVisible={isLightboxVisible}>
        <Media />
      </Overlay>
    </LightboxProvider>
  )
}

export const withLightbox = <T extends object>(
  Component: React.ComponentType<T>,
) => {
  const WithLightbox = (props: any) => {
    return (
      <Lightbox>
        <Component {...(props as T)} />
      </Lightbox>
    )
  }
  WithLightbox.displayName = `withLightbox(${Component.displayName})`

  return WithLightbox
}

export { useLightbox }
