import React from 'react'

import { View } from './View'
import { Anchor } from './Anchor'

const platforms = {
  facebook: (handle: string) => `https://facebook.com/${handle}/`,
  twitter: (handle: string) => `https://twitter.com/${handle}/`,
  instagram: (handle: string) => `https://instagram.com/${handle}/`,
  linkedin: (handle: string) => `https://linkedin.com/company/${handle}/`,
}

type SocialLinkProps = React.ComponentProps<typeof View> & {
  platform: keyof typeof platforms
  handle: string
  target?: React.ComponentProps<typeof Anchor>['target']
}

export const SocialAnchor: React.FC<SocialLinkProps> = ({
  platform,
  handle,
  ...props
}) => {
  const href = platforms[platform](handle)

  return <Anchor href={href} {...props} />
}
