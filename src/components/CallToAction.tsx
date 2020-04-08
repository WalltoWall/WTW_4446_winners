import React from 'react'

import { t, mq, linearScale } from '../theme'
import { BoundedBox, BoundedBoxProps } from './BoundedBox'
import { Button } from './Button'
import { Link } from './Link'

export type CallToActionProps = BoundedBoxProps & {
  buttonHref?: string
  buttonText?: string
}

export const CallToAction = ({
  children,
  buttonHref,
  buttonText = 'Learn more',
  ...props
}: CallToActionProps) => (
  <BoundedBox
    forwardedAs="section"
    {...props}
    css={{ backgroundColor: t.c.White, textAlign: 'center' }}
  >
    <div
      css={mq({
        display: 'grid',
        gap: linearScale('0.625rem', '2rem', 'space'),
        justifyItems: 'center',
      })}
    >
      <div css={mq({ maxWidth: ['45ch', '80ch'], lineHeight: t.lh.Copy })}>
        {children}
      </div>
      {buttonHref && (
        // @ts-ignore
        <Button as={Link} href={buttonHref}>
          {buttonText}
        </Button>
      )}
    </div>
  </BoundedBox>
)
