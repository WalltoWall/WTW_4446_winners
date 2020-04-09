import React, { useState } from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { negateScale } from 'styled-system-scale'
import VisuallyHidden from '@reach/visually-hidden'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { ImageContainer } from './ImageContainer'
import { Icon } from './Icon'

type ArrowButtonProps = {
  onClick: () => void
  side: 'left' | 'right'
}

const ArrowButton = ({ onClick, side, ...props }: ArrowButtonProps) => {
  const isOnLeft = side === 'left'

  return (
    <button
      onClick={onClick}
      {...props}
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2.15rem',
        height: '2.15rem',
        position: 'absolute',
        left: isOnLeft ? '2rem' : undefined,
        right: !isOnLeft ? '2rem' : undefined,
        top: '50%',
        transform: 'translateY(-50%)',
        background: t.colors.White,
        borderRadius: '50%',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'background .2s ease',

        '&:hover': {
          background: t.colors.Gray85,
        },
      }}
    >
      <Icon
        name={isOnLeft ? 'chevronLeft' : 'chevronRight'}
        css={{ width: '.5rem', color: t.colors.Black }}
      />
    </button>
  )
}

const ASPECT_RATIO = { x: [4, 16], y: [3, 9] }

export type ImageGalleryProps = ViewProps & {
  images: FluidObject[]
}

export const ImageGallery = ({ images, ...props }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]
  const hasMultipleImages = images.length > 1

  const nextImage = () =>
    setActiveIndex(idx => {
      if (idx === images.length - 1) return 0

      return idx + 1
    })

  const prevImage = () =>
    setActiveIndex(idx => {
      if (idx === 0) return images.length - 1

      return idx - 1
    })

  return (
    <View
      {...props}
      css={mq({ display: 'grid', gap: linearScale('0.8125rem', '1.5rem') })}
    >
      <ImageContainer css={{ maxHeight: '50rem', position: 'relative' }}>
        <GatsbyImage fluid={activeImage} css={{ height: '100%' }} />
        {hasMultipleImages && (
          <>
            <ArrowButton
              onClick={prevImage}
              side="left"
              aria-label="Previous image"
            />
            <ArrowButton
              onClick={nextImage}
              side="right"
              aria-label="Next image"
            />
          </>
        )}
      </ImageContainer>
      {hasMultipleImages && (
        <ul
          css={mq({
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginRight: negateScale(linearScale('0.5rem', '1.625rem')),
            marginBottom: negateScale(linearScale('0.5rem', '1.625rem')),
          })}
        >
          {images.map((image, i) => (
            <li
              key={image.src}
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
                  <GatsbyImage fluid={image} css={{ height: '100%' }} />
                </AspectRatio>
              </button>
            </li>
          ))}
        </ul>
      )}
    </View>
  )
}
