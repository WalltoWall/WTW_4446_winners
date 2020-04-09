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
            <ArrowButton variant="previous" onClick={prevImage} />
            <ArrowButton variant="next" onClick={nextImage} />
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
