import React from 'react'

import { t, mq } from '../theme'
import { HTMLContent } from '../components/HTMLContent'
import { View } from '../components/View'
import { BoundedBox } from '../components/BoundedBox'

type MessageSliceProps = {
  textHTML?: string
  quotee?: string
}

export const MessageSlice = ({ textHTML, quotee }: MessageSliceProps) => {
  if (!textHTML) return null

  return (
    <BoundedBox
      css={{
        backgroundColor: t.colors.Red40,
        color: t.colors.White,
        textAlign: 'center',
      }}
    >
      <HTMLContent
        html={textHTML}
        css={mq({ color: t.colors.White, marginBottom: t.spaceScales.m })}
        componentOverrides={{
          h1: Comp => props => (
            <View
              as={Comp}
              {...props}
              css={mq({
                fontSize: t.f.xl,
                marginBottom: t.spaceScales.m,
                color: t.colors.White,
              })}
            />
          ),
          p: () => props => (
            <p
              {...props}
              css={{
                maxWidth: '70ch',
                margin: '0 auto',
              }}
            />
          ),
        }}
      />
      {quotee && <p css={{ fontWeight: 'bold' }}>- {quotee}</p>}
    </BoundedBox>
  )
}
