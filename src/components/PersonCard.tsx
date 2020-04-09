import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'
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
      gridTemplateColumns: ['1fr 2fr', '1fr', null, 'repeat(2, 1fr)'],
      gridTemplateRows: ['1fr', '1fr auto', null, '1fr'],
      width: '100%',
    })}
  >
    <Link href={href}>
      <VisuallyHidden>{name}</VisuallyHidden>
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
        padding: linearScale('1rem', '1.5rem'),
        alignContent: 'center',
        textAlign: 'center',
        minHeight: ['inherit', '13rem', null, 'inherit'],
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
