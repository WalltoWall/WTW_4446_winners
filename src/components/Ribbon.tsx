import React from 'react'

import { t, mq, linearScale } from '../theme'

export type RibbonProps = {
  children: string
}

export const Ribbon = ({ children, ...props }: RibbonProps) => {
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
          borderTop: `1.5em solid ${t.colors.Red40}`,
          borderBottom: `1.5em solid ${t.colors.Red40}`,
          borderLeft: '1em solid transparent',
        })}
      />
      <span
        css={mq({
          display: 'flex',
          alignItems: 'center',
          backgroundColor: t.colors.Red40,
          padding: linearScale('0.5rem', '0.75rem'),
        })}
      >
        {children}
      </span>
    </span>
  )
}
