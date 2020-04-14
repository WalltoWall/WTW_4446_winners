import React from 'react'

import { mq, t, linearScale } from '../theme'

import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { View, ViewProps } from '../components/View'
import { negateScale } from 'styled-system-scale'

export type Sponsor = {
  url?: string
  type?: 'high school' | 'professional'
  name?: string
}
type SponsorsSliceProps = {
  highSchool: Sponsor[]
  professional: Sponsor[]
}

type SponsorsProps = ViewProps & {
  sponsors: Sponsor[]
}

// TODO: Extract to component.
const GAP = t.spaceScales.l
const NEGATIVE_GAP = negateScale(GAP)
const WIDTHS = ['25%', '20%', '16.66%']
const ITEM_WIDTHS = Array.from({
  length: Math.max(GAP.length, WIDTHS.length),
}).map((_, i) => `calc(${WIDTHS[i]} - ${GAP[i]})`)

const Sponsors = ({ sponsors, ...props }: SponsorsProps) => {
  return (
    <View
      {...props}
      css={mq({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginRight: NEGATIVE_GAP,
        marginBottom: NEGATIVE_GAP,
      })}
    >
      {sponsors.map(s => (
        <img
          alt={s.name}
          src={s.url}
          key={s.name}
          loading="lazy"
          css={mq({
            marginRight: GAP,
            marginBottom: GAP,
            width: ITEM_WIDTHS,
            maxHeight: linearScale('3.25rem', '6rem'),
          })}
        />
      ))}
    </View>
  )
}

export const SponsorsSlice = ({
  highSchool,
  professional,
}: SponsorsSliceProps) => {
  return (
    <BoundedBox
      forwardedAs="section"
      maxWidth="Xlarge"
      css={{ background: t.colors.Gray95 }}
    >
      <Heading
        css={mq({
          fontSize: t.fontSizeScales.xl,
          textAlign: 'center',
          marginBottom: t.spaceScales.l,
        })}
      >
        Mahalo to Our Sponsors
      </Heading>

      <Sponsors
        sponsors={professional}
        css={mq({ marginBottom: t.spaceScales.l })}
      />

      <Heading
        css={mq({
          fontSize: t.fontSizeScales.l,
          textAlign: 'center',
          marginBottom: t.spaceScales.m,
        })}
      >
        High School Sponsors
      </Heading>
      <Sponsors sponsors={highSchool} />
    </BoundedBox>
  )
}
