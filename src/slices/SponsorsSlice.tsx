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
const WIDTHS = ['25%', '19%', '15%']
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
        alignItems: 'center',
        marginRight: NEGATIVE_GAP,
        marginBottom: NEGATIVE_GAP,
      })}
    >
      {sponsors.map(s => (
        <div
          css={mq({ width: ITEM_WIDTHS, marginBottom: GAP, marginRight: GAP })}
          key={s.name}
        >
          <img
            alt={s.name}
            src={s.url}
            loading="lazy"
            css={mq({
              display: 'block',
              maxHeight: linearScale('3rem', '6rem'),
              margin: '0 auto',
              maxWidth: linearScale('4rem', '8rem'),
            })}
          />
        </div>
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
