import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { Link } from './Link'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { Anchor } from './Anchor'

export type PersonCardProps = ViewProps & {
  href: string
  name: string
  title: string
  agencyName?: string
  award: string
  imageFluid?: FluidObject
}

export const PersonCard = ({
  href,
  name,
  title,
  agencyName,
  award,
  imageFluid,
  ...props
}: PersonCardProps) => (
  <View
    {...props}
    css={mq({
      backgroundColor: t.c.White,
      display: 'grid',
      gridTemplateColumns: ['1fr 2fr', 'repeat(2, 1fr)'],
      width: '100%',
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
    <div
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
      <div css={{ lineHeight: t.lh.Title }}>
        <p>{title}</p>
        <p>{agencyName}</p>
      </div>
    </div>
  </View>
)
