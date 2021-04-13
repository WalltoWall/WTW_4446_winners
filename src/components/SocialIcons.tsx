import React from 'react'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Anchor, AnchorProps } from './Anchor'
import { Icon } from './Icon'

export type SocialIconProps = {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin'
} & AnchorProps

const SocialIconAnchor = ({ href, platform }: SocialIconProps) => (
  <Anchor href={href}>
    <Icon
      name={platform}
      css={mq({
        display: 'block',
        width: linearScale('0.75rem', '1.125rem'),
        height: linearScale('0.75rem', '1.125rem'),
      })}
    />
  </Anchor>
)

export type SocialIconsProps = ViewProps & {
  facebookHandle?: string
  instagramHandle?: string
  twitterHandle?: string
  linkedinHandle?: string
}

export const SocialIcons = ({
  facebookHandle,
  instagramHandle,
  twitterHandle,
  linkedinHandle,
}: SocialIconsProps) => (
  <View
    css={mq({
      display: 'grid',
      alignItems: 'center',
      gap: linearScale('0.75rem', '1rem', 'space'),
      gridAutoFlow: 'column',
    })}
  >
    {facebookHandle && (
      <SocialIconAnchor platform="facebook" href={facebookHandle} />
    )}
    {instagramHandle && (
      <SocialIconAnchor platform="instagram" href={instagramHandle} />
    )}
    {twitterHandle && (
      <SocialIconAnchor platform="twitter" href={twitterHandle} />
    )}
    {linkedinHandle && (
      <SocialIconAnchor platform="linkedin" href={linkedinHandle} />
    )}
  </View>
)
