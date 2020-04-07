import React, { useState } from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import { negateScale } from 'styled-system-scale'
import VisuallyHidden from '@reach/visually-hidden'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'

const ASPECT_RATIO = { x: [4, 16], y: [3, 9] }

export type ImageGalleryProps = ViewProps & {
  images: FluidObject[]
}

export const ImageGallery = ({ images, ...props }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]
  const hasMultipleImages = images.length > 1

  return (
    <View
      {...props}
      css={mq({ display: 'grid', gap: linearScale('0.8125rem', '1.5rem') })}
    >
      <GatsbyImage fluid={activeImage} />
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
