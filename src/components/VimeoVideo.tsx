import React from 'react'

import { convertVimeoLinkToIframeSrc } from '../utils'

export type VimeoVideoProps = {
  src: string
  autoplay?: boolean
}

export const VimeoVideo = ({
  src,
  autoplay = false,
  ...props
}: VimeoVideoProps) => {
  return (
    <iframe
      src={convertVimeoLinkToIframeSrc(src, { autoplay })}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      {...props}
      css={{ height: '100%', width: '100%' }}
    />
  )
}
