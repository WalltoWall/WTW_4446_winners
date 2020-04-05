import React from 'react'

import { mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { SocialAnchor, SocialAnchorProps } from './SocialAnchor'
import { Icon } from './Icon'

export type SocialIconProps = SocialAnchorProps

const SocialIconAnchor = ({ platform, ...props }: SocialIconProps) => (
  <SocialAnchor platform={platform} {...props}>
    <Icon
      name={platform}
      css={mq({
        width: linearScale('0.75rem', '1.125rem'),
        height: linearScale('0.75rem', '1.125rem'),
      })}
    />
  </SocialAnchor>
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
      <SocialIconAnchor platform="facebook" handle={facebookHandle} />
    )}
    {instagramHandle && (
      <SocialIconAnchor platform="instagram" handle={instagramHandle} />
    )}
    {twitterHandle && (
      <SocialIconAnchor platform="twitter" handle={twitterHandle} />
    )}
    {linkedinHandle && (
      <SocialIconAnchor platform="linkedin" handle={linkedinHandle} />
    )}
  </View>
)
