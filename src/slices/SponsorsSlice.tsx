import React from 'react'
import { negateScale } from 'styled-system-scale'
import { undefIfEmpty } from '@walltowall/helpers'

import { mq, t, linearScale } from '../theme'

import { BoundedBox } from '../components/BoundedBox'
import { Heading } from '../components/Heading'
import { View, ViewProps } from '../components/View'
import { Link } from '../components/Link'

// TODO: Extract to component.
const GAP = t.spaceScales.l
const NEGATIVE_GAP = negateScale(GAP)
const WIDTHS = ['25%', '19%', '15%']
const ITEM_WIDTHS = Array.from({
  length: Math.max(GAP.length, WIDTHS.length),
}).map((_, i) => `calc(${WIDTHS[i]} - ${GAP[i]})`)

export type Sponsor = {
  url?: string
  type?: 'high school' | 'professional'
  name?: string
  src?: string
}

type SponsorsProps = ViewProps & {
  sponsors?: Sponsor[]
}

const Sponsors = ({ sponsors = [], ...props }: SponsorsProps) => {
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
        <Link
          href={s.url!}
          css={mq({ width: ITEM_WIDTHS, marginBottom: GAP, marginRight: GAP })}
          key={s.name}
        >
          <img
            alt={s.name}
            src={s.src}
            loading="lazy"
            css={mq({
              display: 'block',
              maxHeight: linearScale('3rem', '6rem'),
              margin: '0 auto',
              maxWidth: linearScale('4rem', '8rem'),
            })}
          />
        </Link>
      ))}
    </View>
  )
}

type SponsorsSliceProps = {
  highSchool?: Sponsor[]
  professional?: Sponsor[]
  virtual?: Sponsor[]
}

export const SponsorsSlice = ({
  highSchool,
  professional,
  virtual,
}: SponsorsSliceProps) => {
  return (
    <BoundedBox
      forwardedAs="section"
      maxWidth="Large"
      css={{ background: t.colors.Gray95 }}
    >
      <div css={mq({ display: 'grid', gap: t.spaceScales.xl })}>
        <div>
          <Heading
            css={mq({
              fontSize: t.fontSizeScales.xl,
              textAlign: 'center',
              marginBottom: t.spaceScales.l,
            })}
          >
            Mahalo to Our Sponsors
          </Heading>
          {undefIfEmpty(professional) && <Sponsors sponsors={professional} />}
        </div>

        {undefIfEmpty(highSchool) && (
          <div>
            <Heading
              css={mq({
                fontSize: t.fontSizeScales.l,
                textAlign: 'center',
                marginBottom: t.spaceScales.m,
              })}
            >
              High School Sponsor
            </Heading>
            <Sponsors sponsors={highSchool} />
          </div>
        )}

        {undefIfEmpty(virtual) && (
          <div>
            <Heading
              css={mq({
                fontSize: t.fontSizeScales.l,
                textAlign: 'center',
                marginBottom: t.spaceScales.m,
              })}
            >
              Virtual Pele Show Sponsor
            </Heading>
            <Sponsors sponsors={virtual} />
          </div>
        )}
      </div>
    </BoundedBox>
  )
}
