import React from 'react'

import { t } from '../theme'
import { Link, LinkProps } from './Link'

export type AnchorProps = LinkProps

export const Anchor = (props: AnchorProps) => (
  <Link
    {...props}
    css={{
      color: 'inherit',
      transitionProperty: 'color',
      '&:hover, &:focus': { color: t.c.Red40 },
    }}
  />
)
