import React, { useState } from 'react'
import GatsbyImage from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import { CloudinaryAssetFluidFragment } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { AspectRatio } from './AspectRatio'
import { negateScale } from 'styled-system-scale'

const ASPECT_RATIO = { x: [4, 16], y: [3, 9] }

type ImageGalleryProps = React.ComponentProps<typeof View> & {
  images: CloudinaryAssetFluidFragment[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]
  const hasMultipleImages = images.length > 1

  return (
    <View
      {...props}
      css={mq({ display: 'grid', gap: linearScale('0.8125rem', '1.5rem') })}
    >
      <AspectRatio
        x={ASPECT_RATIO.x}
        y={ASPECT_RATIO.y}
        css={{ backgroundColor: t.c.Black }}
      >
        <GatsbyImage fluid={activeImage} css={{ height: '100%' }} />
      </AspectRatio>
      {hasMultipleImages && (
        <View
          as="ul"
          css={mq({
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginRight: negateScale(linearScale('0.5rem', '1.625rem')),
            marginBottom: negateScale(linearScale('0.5rem', '1.625rem')),
          })}
        >
          {images.map((image, i) => (
            <View
              as="li"
              key={image.src}
              css={mq({
                marginRight: linearScale('0.5rem', '1.625rem'),
                marginBottom: linearScale('0.5rem', '1.625rem'),
              })}
            >
              <View
                as="button"
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
                <VisuallyHidden>Image ${i + 1}</VisuallyHidden>
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
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}
