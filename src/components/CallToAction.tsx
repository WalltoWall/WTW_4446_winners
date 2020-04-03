import React from 'react'
import { linearScale } from 'styled-system-scale'

import { t, mq } from '../theme'
import { View, ViewProps } from './View'
import { BoundedBox } from './BoundedBox'
import { Button } from './Button'
import { Link } from './Link'

export type CallToActionProps = ViewProps & {
  buttonHref?: string
  buttonText?: string
}

export const CallToAction: React.FC<CallToActionProps> = ({
  children,
  buttonHref,
  buttonText = 'Learn more',
  ...props
}) => (
  <BoundedBox
    forwardedAs="section"
    {...props}
    css={{ backgroundColor: t.c.White, textAlign: 'center' }}
  >
    <View
      css={mq({
        display: 'grid',
        gap: linearScale('0.625rem', '2rem', { count: 3 }),
        justifyItems: 'center',
      })}
    >
      <View css={mq({ maxWidth: ['45ch', '80ch'], lineHeight: t.lh.Copy })}>
        {children}
      </View>
      {buttonHref && (
        <Button as={Link} href={buttonHref}>
          {buttonText}
        </Button>
      )}
    </View>
  </BoundedBox>
)
