import React from 'react'

import { t, mq, linearScale } from '../theme'

export type RibbonProps = {
  children: string
  variant?: keyof typeof variants
}

const variants = {
  red: {
    borderColor: t.colors.Red40,
    backgroundColor: t.colors.Red40,
  },
  teal: {
    borderColor: t.colors.Teal40,
    backgroundColor: t.colors.Teal40,
  },
}

export const Ribbon = ({
  children,
  variant: variantName = 'red',
  ...props
}: RibbonProps) => {
  const variant = variants[variantName]

  return (
    <span
      {...props}
      css={mq({
        display: 'flex',
        color: t.colors.White,
        fontWeight: t.fontWeights.Bold,
        fontSize: linearScale('0.625rem', '0.875rem'),
      })}
    >
      <span
        css={mq({
          backgroundColor: 'transparent',
          width: '10px',
          borderTop: `1.5em solid ${variant.borderColor}`,
          borderBottom: `1.5em solid ${variant.borderColor}`,
          borderLeft: '1em solid transparent',
        })}
      />
      <span
        css={mq({
          display: 'flex',
          alignItems: 'center',
          backgroundColor: variant.backgroundColor,
          padding: linearScale('0.5rem', '0.75rem'),
        })}
      >
        {children}
      </span>
    </span>
  )
}
