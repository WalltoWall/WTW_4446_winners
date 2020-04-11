import React from 'react'

import { t, mq, linearScale } from '../theme'
import { BoundedBox, BoundedBoxProps } from './BoundedBox'
import { View, ViewProps } from './View'
import { Heading } from './Heading'
import { Anchor } from './Anchor'

export type HeaderDropdownProps = BoundedBoxProps

export const HeaderDropdown = ({ children, ...props }: HeaderDropdownProps) => {
  return (
    <BoundedBox
      {...props}
      css={mq({
        backgroundColor: t.c.Gray95,
        paddingLeft: linearScale('4rem', '6.5rem'),
        paddingBottom: '3rem',
        paddingTop: '2rem',
      })}
    >
      <div
        css={mq({
          alignItems: 'start',
          display: 'grid',
          fontSize: t.f['b-'],
          gap: linearScale('2rem', '5rem'),
          gridTemplateColumns: ['1fr', 'auto auto'],
          justifyContent: [null, 'start'],
        })}
      >
        {children}
      </div>
    </BoundedBox>
  )
}

export type HeaderDropdownSectionProps = ViewProps & {
  heading: string
  headingHref: string
}

export const HeaderDropdownSection = ({
  heading,
  headingHref,
  children,
  ...props
}: HeaderDropdownSectionProps) => {
  return (
    <View {...props} css={{ display: 'grid', gap: '1rem' }}>
      <Heading
        forwardedAs="h3"
        css={mq({ fontSize: t.f.b, fontWeight: t.fw.Medium })}
      >
        <Anchor href={headingHref}>{heading}</Anchor>
      </Heading>
      {children}
    </View>
  )
}
