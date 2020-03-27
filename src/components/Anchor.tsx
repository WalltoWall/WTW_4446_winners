import React from 'react'

import { t } from '../theme'
import { Link } from './Link'

type AnchorProps = React.ComponentProps<typeof Link>

export const Anchor: React.FC<AnchorProps> = (props) => (
  <Link
    {...props}
    css={{
      color: 'inherit',
      transitionProperty: 'color',
      '&:hover, &:focus': { color: t.c.Red40 },
    }}
  />
)
