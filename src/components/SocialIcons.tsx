import React from 'react'

import { mq, linearScale } from '../theme'
import { View } from './View'
import { SocialAnchor } from './SocialAnchor'
import { Icon } from './Icon'

type SocialIconProps = React.ComponentProps<typeof SocialAnchor>

const SocialIcon: React.FC<SocialIconProps> = ({
  platform,
  handle,
  ...props
}) => (
  <SocialAnchor platform={platform} handle={handle} {...props}>
    <Icon
      name={platform}
      css={mq({
        width: linearScale('0.75rem', '1.125rem'),
        height: linearScale('0.75rem', '1.125rem'),
      })}
    />
  </SocialAnchor>
)

type SocialIconsProps = React.ComponentProps<typeof View> & {
  facebookHandle?: string
  instagramHandle?: string
  twitterHandle?: string
  linkedinHandle?: string
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
  facebookHandle,
  instagramHandle,
  twitterHandle,
  linkedinHandle,
}) => (
  <View
    css={mq({
      display: 'grid',
      alignItems: 'center',
      gap: linearScale('0.75rem', '1rem', 'space'),
      gridAutoFlow: 'column',
    })}
  >
    {facebookHandle && (
      <SocialIcon platform="facebook" handle={facebookHandle} />
    )}
    {instagramHandle && (
      <SocialIcon platform="instagram" handle={instagramHandle} />
    )}
    {twitterHandle && <SocialIcon platform="twitter" handle={twitterHandle} />}
    {linkedinHandle && (
      <SocialIcon platform="linkedin" handle={linkedinHandle} />
    )}
  </View>
)
