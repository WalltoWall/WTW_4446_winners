import React from 'react'
import GatsbyImage from 'gatsby-image'

import { CloudinaryAssetFluidFragment } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { AspectRatio } from './AspectRatio'
import { Link } from './Link'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { Anchor } from './Anchor'

type PersonCardProps = React.ComponentProps<typeof View> & {
  href: string
  name: string
  title: string
  company?: string
  award: string
  imageFluid?: CloudinaryAssetFluidFragment
}

export const PersonCard: React.FC<PersonCardProps> = ({
  href,
  name,
  title,
  company,
  award,
  imageFluid,
  ...props
}) => (
  <View
    {...props}
    css={mq({
      backgroundColor: t.c.White,
      display: 'grid',
      gridTemplateColumns: ['1fr 2fr', 'repeat(2, 1fr)'],
    })}
  >
    <Link href={href}>
      <AspectRatio
        x={3}
        y={4}
        css={{ backgroundColor: 'black', height: '100%' }}
      >
        {imageFluid && (
          <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
        )}
      </AspectRatio>
    </Link>
    <View
      css={mq({
        display: 'grid',
        gap: linearScale('0.75rem', '1.5rem'),
        padding: linearScale('1.5rem', '2rem'),
        alignContent: 'center',
        textAlign: 'center',
      })}
    >
      <Subheading as="p">{award}</Subheading>
      <Heading as="h3">
        <Anchor href={href}>{name}</Anchor>
      </Heading>
      <View css={{ lineHeight: t.lh.Title }}>
        <View as="p">{title}</View>
        <View as="p">{company}</View>
      </View>
    </View>
  </View>
)
