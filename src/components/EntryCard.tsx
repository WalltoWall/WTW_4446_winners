import React from 'react'
import GatsbyImage from 'gatsby-image'

import { CloudinaryAssetFluidFragment } from '../graphqlTypes'

import { t, mq } from '../theme'
import { View } from './View'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { AwardIcon } from './AwardIcon'
import { AspectRatio } from './AspectRatio'

const variants = {
  base: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
    padding: [t.S[3], null, t.S[4]],
    subtitleFontSize: t.f['b-'],
  },
  featured: {
    imageAspectRatioX: 4,
    imageAspectRatioY: 3,
    padding: [t.S[3], null, t.S[4]],
    subtitleFontSize: t.f['b+'],
  },
  featuredWide: {
    imageAspectRatioX: 8,
    imageAspectRatioY: 5,
    padding: [t.S[3], null, t.S[4]],
    subtitleFontSize: t.f['b+'],
  },
} as const

type EntryCardProps = React.ComponentProps<typeof View> & {
  variant?: keyof typeof variants
  title?: string
  subtitle?: string
  award?: React.ComponentProps<typeof AwardIcon>['type']
  isSpecialAward?: boolean
  imageFluid?: CloudinaryAssetFluidFragment
}

export const EntryCard: React.FC<EntryCardProps> = ({
  variant: variantName = 'base',
  title,
  subtitle,
  award,
  isSpecialAward = false,
  imageFluid,
  ...props
}) => {
  const variant = variants[variantName]

  return (
    <View {...props} css={{ display: 'flex', flexDirection: 'column' }}>
      <AspectRatio
        x={variant.imageAspectRatioX}
        y={variant.imageAspectRatioY}
        css={{ backgroundColor: 'black' }}
      >
        {imageFluid && (
          <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
        )}
      </AspectRatio>
      <View
        css={mq({
          backgroundColor: t.c.White,
          display: 'grid',
          flexGrow: '1',
          gap: [t.S[1], null, t.S[2]],
          gridTemplateColumns: '1fr auto',
          gridTemplateRows: 'auto 1fr',
          padding: variant.padding,
        })}
      >
        {subtitle && isSpecialAward ? (
          <Subheading
            forwardAs="h4"
            css={mq({ fontSize: variant.subtitleFontSize })}
          >
            {subtitle}
          </Subheading>
        ) : (
          <View
            as="p"
            css={mq({ color: t.c.Gray60, fontSize: variant.subtitleFontSize })}
          >
            {subtitle}
          </View>
        )}
        {title && (
          <Heading forwardAs="h3" css={{ lineHeight: t.lh.Title }}>
            {title}
          </Heading>
        )}
        {award && (
          <AwardIcon
            type={award}
            css={mq({
              gridColumn: '2',
              gridRow: '1 / 3',
              alignSelf: 'end',
              width: ['0.8125rem', '1.25rem'],
            })}
          />
        )}
      </View>
    </View>
  )
}
