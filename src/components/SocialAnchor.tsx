import React from 'react'

import { Anchor, AnchorProps } from './Anchor'

const platforms = {
  facebook: (handle: string) => `https://facebook.com/${handle}/`,
  twitter: (handle: string) => `https://twitter.com/${handle}/`,
  instagram: (handle: string) => `https://instagram.com/${handle}/`,
  linkedin: (handle: string) => `https://linkedin.com/company/${handle}/`,
}

export type SocialAnchorProps = Omit<AnchorProps, 'href'> & {
  platform: keyof typeof platforms
  handle: string
}

export const SocialAnchor = ({
  platform,
  handle,
  ...props
}: SocialAnchorProps) => {
  const href = platforms[platform](handle)

  return <Anchor href={href} {...props} />
}
