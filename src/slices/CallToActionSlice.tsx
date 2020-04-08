import React from 'react'

import { t, mq, linearScale } from '../theme'
import { CallToAction, CallToActionProps } from '../components/CallToAction'
import { HTMLContent } from '../components/HTMLContent'
import { View } from '../components/View'

type CallToActionSliceProps = CallToActionProps & {
  textHTML?: string
}

export const CallToActionSlice = ({
  buttonHref,
  buttonText,
  textHTML,
}: CallToActionSliceProps) => {
  return (
    <CallToAction buttonHref={buttonHref} buttonText={buttonText}>
      <HTMLContent
        html={textHTML}
        componentOverrides={{
          h1: Comp => props => (
            <View
              as={Comp}
              {...props}
              css={mq({
                fontSize: t.f.xl,
                marginBottom: linearScale('0.375rem', '1rem'),
              })}
            />
          ),
        }}
      />
    </CallToAction>
  )
}
