import React from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { AspectRatio } from './AspectRatio'
import { BoundedBox } from './BoundedBox'
import { Subheading } from './Subheading'
import { Heading } from './Heading'
import { HTMLContent } from './HTMLContent'
import { Anchor } from './Anchor'

export type LargePersonCardProps = ViewProps & {
  name: string
  title: string
  agencyName?: string
  agencyHref?: string
  award: string
  descriptionHTML?: string
  imageFluid?: FluidObject
}

export const LargePersonCard = ({
  name,
  title,
  agencyName,
  agencyHref,
  award,
  imageFluid,
  descriptionHTML,
  children,
  ...props
}: LargePersonCardProps) => (
  <View
    {...props}
    css={mq({
      display: 'grid',
      gridTemplateColumns: [null, 'repeat(2, 1fr)'],
      backgroundColor: t.c.White,
      alignItems: 'center',
      justifyItems: 'center',
    })}
  >
    <div
      css={mq({
        height: [null, '100%'],
        paddingLeft: ['1.5rem', 0],
        paddingRight: ['1.5rem', 0],
        paddingTop: ['1.5rem', 0],
        width: ['50%', '100%'],
        minWidth: '14rem',
      })}
    >
      <AspectRatio
        x={[3, 8]}
        y={[4, 7]}
        css={mq({
          backgroundColor: t.c.Black,
          width: '100%',
        })}
      >
        {imageFluid && (
          <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
        )}
      </AspectRatio>
    </div>
    <BoundedBox css={{ textAlign: 'center' }}>
      <div
        css={mq({
          maxWidth: '70ch',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: t.lh.Copy,
          display: 'grid',
          gap: linearScale('1rem', '1.5rem', 'space'),
        })}
      >
        <div
          css={mq({
            display: 'grid',
            gap: linearScale('0.5rem', '0.75rem', 'space'),
          })}
        >
          <Subheading>{award}</Subheading>
          <Heading css={mq({ fontSize: t.f.xl })}>{name}</Heading>
          <p>
            {agencyHref && (
              <Anchor href={agencyHref}>
                {title}, {agencyName}
              </Anchor>
            )}
          </p>
        </div>
        {descriptionHTML && (
          <HTMLContent html={descriptionHTML} css={{ textAlign: 'left' }} />
        )}
      </div>
    </BoundedBox>
  </View>
)
