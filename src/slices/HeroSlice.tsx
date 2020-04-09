import React from 'react'

import { Hero, HeroProps } from '../components/Hero'
import { t, mq, linearScale } from '../theme'
import { View } from '../components/View'
import { Anchor } from '../components/Anchor'
import { HTMLContent } from '../components/HTMLContent'

type HeroSliceProps = HeroProps & {
  textHTML?: string
}

export const HeroSlice = ({
  textHTML,
  imageFluid,
  imageAlt,
  imageSrc,
}: HeroSliceProps) => {
  return (
    <Hero imageFluid={imageFluid} imageAlt={imageAlt} imageSrc={imageSrc}>
      <HTMLContent
        html={textHTML}
        componentOverrides={{
          h1: Comp => props => (
            <View
              as={Comp}
              {...props}
              css={mq({
                fontSize: t.f.xl,
                lineHeight: t.lh.Title,
                marginTop: linearScale('2.25rem', '3rem'),
                marginBottom: linearScale('1rem', '1.5rem'),
                color: t.c.Black,
                ...t.boxStyles.firstLastNoMargin,
              })}
            />
          ),
          a: () => (props: any) => <Anchor {...props} />,
        }}
      />
    </Hero>
  )
}
