import React from 'react'

import { t, mq } from '../theme'

export type RibbonProps = {
  children: string
}

export const Ribbon = ({ children, ...props }: RibbonProps) => {
  return (
    <span
      css={mq({
        display: 'flex',
        position: 'absolute',
        color: t.colors.White,
        zIndex: t.zIndices.Ribbon,
        fontWeight: t.fontWeights.Bold,
      })}
      {...props}
    >
      <span
        css={mq({
          background: 'transparent',
          width: '10px',
          borderTop: `19px solid ${t.colors.Red40}`,
          borderBottom: `19px solid ${t.colors.Red40}`,
          borderLeft: '10px solid transparent',
        })}
      />
      <span
        css={mq({
          background: t.colors.Red40,
          padding: '.75rem',
          fontSize: '.875rem',
        })}
      >
        {children}
      </span>
    </span>
  )
}
