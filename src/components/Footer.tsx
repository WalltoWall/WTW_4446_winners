import React from 'react'
import { Link } from 'gatsby'
import { linearScale, negateScale } from 'styled-system-scale'

import { t, mq } from '../theme'
import { View } from './View'
import { Heading } from './Heading'
import { BoundedBox } from './BoundedBox'

type NavItemProps = React.ComponentProps<typeof View> & {
  href: string
  target?: string
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  target,
  children,
  ...props
}) => (
  <View
    as="li"
    {...props}
    css={mq({
      marginRight: linearScale('1rem', '3rem', { count: 3 }),
      paddingBottom: linearScale('0.375rem', '0.875rem', { count: 3 }),
      '&:last-child': { marginRight: 0 },
    })}
  >
    <View
      as={Link}
      to={href}
      target={target}
      css={{
        color: t.c.Black,
        transitionProperty: 'color',
        '&:hover': { color: t.c.Red40 },
      }}
    >
      {children}
    </View>
  </View>
)

type FooterProps = React.ComponentProps<typeof View>

export const Footer: React.FC<FooterProps> = (props) => (
  <BoundedBox
    forwardedAs="footer"
    {...props}
    css={mq({
      borderTop: `1px solid ${t.c.Gray80}`,
      paddingBottom: linearScale('1.25rem', '2rem', { count: 3 }),
      paddingTop: linearScale('1.25rem', '2rem', { count: 3 }),
      textAlign: ['center', 'left'],
    })}
  >
    <View
      css={mq({
        display: 'grid',
        gap: [t.S[3], t.S[2]],
        gridTemplateColumns: [null, 'auto 1fr'],
        gridTemplateRows: [null, 'auto auto'],
        alignItems: 'center',
      })}
    >
      <Heading
        forwardedAs="p"
        css={mq({
          fontSize: t.f.b,
          gridColumn: [null, 1],
          gridRow: [null, 1],
        })}
      >
        Pele Awards Winners
      </Heading>
      <View
        as="nav"
        css={mq({
          gridColumn: [null, 2],
          gridRow: [null, '1 / 3'],
          justifySelf: [null, 'end'],
        })}
      >
        <View
          as="ul"
          css={mq({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: negateScale(
              linearScale('0.375rem', '0.875rem', { count: 3 }),
            ),
          })}
        >
          <NavItem href="/winners/">Winners</NavItem>
          <NavItem href="/ad-people/">Ad People</NavItem>
          <NavItem href="/high-school/">High School</NavItem>
          <NavItem href="/college/">College</NavItem>
          <NavItem href="/about/">About</NavItem>
        </View>
      </View>
      <View
        as="p"
        css={mq({
          color: t.c.Gray60,
          fontSize: t.f['b-'],
          gridColumn: [null, 1],
          gridRow: [null, 2],
        })}
      >
        &copy; 2020 Pele Awards. All rights reserved.
      </View>
    </View>
  </BoundedBox>
)
