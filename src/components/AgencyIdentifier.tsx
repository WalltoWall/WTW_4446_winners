import React from 'react'
import { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { Anchor, AnchorProps } from './Anchor'
import { Avatar } from './Avatar'

const variants = {
  small: {
    fontSize: t.f['b-'],
    gap: linearScale('0.25rem', '0.4rem', 'space'),
    avatarVariant: 'tiny',
    avatarDisplay: 'block',
  },
  base: {
    fontSize: t.f['b'],
    gap: linearScale('0.25rem', '0.4rem', 'space'),
    avatarVariant: 'small',
    avatarDisplay: 'block',
  },
  smallNoAvatarOnMobile: {
    fontSize: t.f['b-'],
    gap: linearScale('0.25rem', '0.4rem', 'space'),
    avatarVariant: 'tiny',
    avatarDisplay: ['none', 'block'],
  },
} as const

export type AgencyIdentifierProps = AnchorProps & {
  variant?: keyof typeof variants
  name: string
  avatarFluid?: FluidObject
}

export const AgencyIdentifier = ({
  variant: variantName = 'base',
  name,
  avatarFluid,
  ...props
}: AgencyIdentifierProps) => {
  const variant = variants[variantName]

  return (
    <Anchor
      {...props}
      css={mq({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: variant.gap,
        alignItems: 'center',
        fontSize: variant.fontSize,
        fontWeight: t.fw.Medium,
      })}
    >
      <Avatar
        variant={variant.avatarVariant}
        flavorSeed={name}
        fluid={avatarFluid}
        css={mq({
          display: variant.avatarDisplay,
        })}
      />
      {name}
    </Anchor>
  )
}
