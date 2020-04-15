import React, { useState } from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { negateScale } from 'styled-system-scale'
import VisuallyHidden from '@reach/visually-hidden'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { ImageContainer } from './ImageContainer'
import { Icon } from './Icon'

const variants = {
  previous: {
    label: 'Previous image',
    iconName: 'chevronLeft',
    iconOffsetX: '-10%',
    left: ['.5rem', '1rem', '1.5rem'],
    right: undefined,
  },
  next: {
    label: 'Previous image',
    iconName: 'chevronRight',
    iconOffsetX: '10%',
    left: undefined,
    right: ['.5rem', '1rem', '1.5rem'],
  },
} as const

type ArrowButtonProps = ViewProps & {
  variant: keyof typeof variants
}

const ArrowButton = ({
  variant: variantName,
  label,
  ...props
}: ArrowButtonProps) => {
  const variant = variants[variantName]

  return (
    <View
      as="button"
      {...props}
      css={mq({
        alignItems: 'center',
        backgroundColor: t.colors.White,
        borderRadius: '50%',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        color: t.c.Gray10,
        display: 'flex',
        height: ['1.6rem', '2.15rem'],
        justifyContent: 'center',
        left: variant.left,
        position: 'absolute',
        right: variant.right,
        top: '50%',
        transform: 'translateY(-50%)',
        transitionProperty: 'color',
        width: ['1.6rem', '2.15rem'],
        '&:hover, &:focus': {
          color: t.c.Red40,
        },
      })}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon
        name={variant.iconName}
        css={mq({
          width: ['.4rem', '.5rem'],
          transform: `translateX(${variant.iconOffsetX})`,
        })}
      />
    </View>
  )
}

const ASPECT_RATIO = { x: [4, 16], y: [3, 9] }

export type MediaGalleryProps = ViewProps & {
  images: FluidObject[]
  vimeoLink?: string | null
  vimeoThumbnail?: FluidObject
}

export const MediaGallery = ({
  images,
  vimeoLink,
  vimeoThumbnail,
  ...props
}: MediaGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const media = [vimeoThumbnail, ...images].filter(Boolean)
  const activeMedia = media[activeIndex]
  const hasMultipleMedia = media.length > 1

  const isShowingVideo = activeIndex === 0 && Boolean(vimeoLink)

  const nextMedia = () =>
    setActiveIndex(idx => {
      if (idx === media.length - 1) return 0

      return idx + 1
    })

  const prevMedia = () =>
    setActiveIndex(idx => {
      if (idx === 0) return media.length - 1

      return idx - 1
    })

  return (
    <View
      {...props}
      css={mq({ display: 'grid', gap: linearScale('0.8125rem', '1.5rem') })}
    >
      <AspectRatio
        x={16}
        y={9}
        css={{
          position: 'relative',
          background: t.colors.Black,
        }}
      >
        {/* TODO: When plan is upgraded, add iframe query options for customization and privacy */}
        {isShowingVideo ? (
          <iframe
            src={`${vimeoLink?.replace('vimeo.com', 'player.vimeo.com/video')}`}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            css={{ height: '100%', width: '100%' }}
          />
        ) : (
          <ImageContainer>
            <GatsbyImage
              fluid={activeMedia as FluidObject}
              css={{ height: '100%' }}
            />
          </ImageContainer>
        )}
        {hasMultipleMedia && (
          <>
            <ArrowButton variant="previous" onClick={prevMedia} />
            <ArrowButton variant="next" onClick={nextMedia} />
          </>
        )}
      </AspectRatio>
      {hasMultipleMedia && (
        <ul
          css={mq({
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginRight: negateScale(linearScale('0.5rem', '1.625rem')),
            marginBottom: negateScale(linearScale('0.5rem', '1.625rem')),
          })}
        >
          {media.map((media, i) => (
            <li
              key={media.src}
              css={mq({
                marginRight: linearScale('0.5rem', '1.625rem'),
                marginBottom: linearScale('0.5rem', '1.625rem'),
              })}
            >
              <button
                onClick={() => setActiveIndex(i)}
                css={mq({
                  borderColor: activeIndex === i ? t.c.Gray60 : t.c.White,
                  borderStyle: 'solid',
                  borderWidth: [2, 3, 4],
                  transitionProperty: 'border-color',
                  '&:hover, &:focus': {
                    borderColor: t.c.Gray60,
                  },
                })}
              >
                <VisuallyHidden>Display image ${i + 1}</VisuallyHidden>
                <AspectRatio
                  x={ASPECT_RATIO.x}
                  y={ASPECT_RATIO.y}
                  css={mq({
                    backgroundColor: t.c.Black,
                    width: linearScale('4.25rem', '13rem'),
                  })}
                >
                  <GatsbyImage fluid={media} css={{ height: '100%' }} />
                </AspectRatio>
              </button>
            </li>
          ))}
        </ul>
      )}
    </View>
  )
}
