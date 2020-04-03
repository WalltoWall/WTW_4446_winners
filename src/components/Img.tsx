import React from 'react'

import { View, ViewProps } from './View'

type ImgProps = ViewProps & {
  src: string
  alt?: string
}

export const Img: React.FC<ImgProps> = ({ src, alt }) => {
  return (
    <View
      as="img"
      loading="lazy"
      src={src}
      alt={alt}
      css={{
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
      }}
    />
  )
}
