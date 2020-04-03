import React from 'react'
import GatsbyImage from 'gatsby-image'

import { CloudinaryAssetFluidFragment } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { AspectRatio } from './AspectRatio'
import { BoundedBox } from './BoundedBox'
import { Subheading } from './Subheading'
import { Heading } from './Heading'
import { HTMLContent } from './HTMLContent'
import { Anchor } from './Anchor'

type LargePersonCardProps = React.ComponentProps<typeof View> & {
  name: string
  title: string
  agencyName?: string
  agencyHref?: string
  award: string
  descriptionHTML?: string
  imageFluid?: CloudinaryAssetFluidFragment
}

export const LargePersonCard: React.FC<LargePersonCardProps> = ({
  name,
  title,
  agencyName,
  agencyHref,
  award,
  imageFluid,
  descriptionHTML,
  children,
  ...props
}) => (
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
    <View
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
          height: '100%',
          width: '100%',
        })}
      >
        {imageFluid && (
          <GatsbyImage fluid={imageFluid} css={{ height: '100%' }} />
        )}
      </AspectRatio>
    </View>
    <BoundedBox css={{ textAlign: 'center' }}>
      <View
        css={mq({
          maxWidth: '45ch',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: t.lh.Copy,
          display: 'grid',
          gap: linearScale('1rem', '1.5rem', 'space'),
        })}
      >
        <View
          css={mq({
            display: 'grid',
            gap: linearScale('0.5rem', '0.75rem', 'space'),
          })}
        >
          <Subheading>{award}</Subheading>
          <Heading css={mq({ fontSize: t.f.xl })}>{name}</Heading>
          <View as="p">
            {agencyHref && (
              <Anchor href={agencyHref}>
                {title}, {agencyName}
              </Anchor>
            )}
          </View>
        </View>
        {descriptionHTML && <HTMLContent html={descriptionHTML} />}
      </View>
    </BoundedBox>
  </View>
)
