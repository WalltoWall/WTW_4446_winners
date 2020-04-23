import React from 'react'

import { convertVimeoLinkToIframeSrc } from '../utils'

export type VimeoVideoProps = {
  src: string
}

export const VimeoVideo = ({ src, ...props }: VimeoVideoProps) => {
  return (
    <iframe
      src={convertVimeoLinkToIframeSrc(src)}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      {...props}
      css={{ height: '100%', width: '100%' }}
    />
  )
}
