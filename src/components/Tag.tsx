import React from 'react'

import { t, mq, linearScale } from '../theme'
import { Link, LinkProps } from './Link'

export type TagProps = LinkProps

export const Tag = (props: TagProps) => (
  <Link
    css={mq({
      backgroundColor: t.c.Gray85,
      borderRadius: linearScale('2px', '3px'),
      color: t.c.Black,
      display: 'inline-block',
      fontSize: t.f['b-'],
      paddingBottom: linearScale('0.3rem', '0.5rem'),
      paddingLeft: linearScale('0.625rem', '1rem'),
      paddingRight: linearScale('0.625rem', '1rem'),
      paddingTop: linearScale('0.3rem', '0.5rem'),
      transitionProperty: 'background-color',
      ...t.ts.lowercase,
      '&:hover, &:focus': {
        backgroundColor: t.c.Gray90,
      },
    })}
    {...props}
  />
)
