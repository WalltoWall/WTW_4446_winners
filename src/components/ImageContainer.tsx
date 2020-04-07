import React from 'react'
import { ViewProps, View } from './View'

export type ImageContainerProps = ViewProps

export const ImageContainer = (props: ImageContainerProps) => (
  <View
    {...props}
    css={{
      height: '100%',

      '.gatsby-image-outer-wrapper, .gatsby-image-wrapper': {
        height: '100%',
      },
    }}
  />
)
