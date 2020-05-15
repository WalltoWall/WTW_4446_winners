import React from 'react'

import { t, mq, linearScale } from '../theme'
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
      }}
    >
      <div css={mq({ display: 'grid', gap: linearScale('1rem', '1.5rem') })}>
        <HTMLContent
          html={textHTML}
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
            a: Comp => props => (
              <View
                as={Comp}
                {...props}
                css={mq({
                  textDecoration: 'underline',
                  '&:hover, &:focus': {
                    color: 'inherit',
                  },
                })}
              />
            ),
          }}
          css={{
            margin: '0 auto',
            maxWidth: '75ch',
            textAlign: 'center',
          }}
        />
        {quotee && <p css={{ fontWeight: 'bold' }}>- {quotee}</p>}
      </div>
    </BoundedBox>
  )
}
