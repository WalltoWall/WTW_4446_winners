import React from 'react'
import { negateScale } from 'styled-system-scale'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Heading } from './Heading'
import { BoundedBox } from './BoundedBox'
import { Anchor, AnchorProps } from './Anchor'

type NavItemProps = ViewProps & {
  href: AnchorProps['href']
  target?: AnchorProps['target']
}

const NavItem = ({ href, target, children, ...props }: NavItemProps) => (
  <View
    as="li"
    {...props}
    css={mq({
      marginRight: linearScale('1rem', '3rem'),
      paddingBottom: linearScale('0.375rem', '0.875rem'),
      '&:last-child': { marginRight: 0 },
    })}
  >
    <Anchor href={href} target={target}>
      {children}
    </Anchor>
  </View>
)

export type FooterProps = ViewProps

export const Footer = (props: FooterProps) => (
  <BoundedBox
    forwardedAs="footer"
    {...props}
    css={mq({
      boxShadow: `0 -1px 0 rgba(0, 0, 0, 0.1)`,
      paddingBottom: linearScale('1.25rem', '2rem'),
      paddingTop: linearScale('1.25rem', '2rem'),
      paddingLeft: linearScale('1rem', '2rem'),
      paddingRight: linearScale('1rem', '2rem'),
      position: 'relative',
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
        <Anchor href="/">Pele Awards Winners</Anchor>
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
            marginBottom: negateScale(linearScale('0.375rem', '0.875rem')),
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
          color: t.c.Gray50,
          fontSize: t.f['b-'],
          gridColumn: [null, 1],
          gridRow: [null, 2],
        })}
      >
        &copy; {new Date(Date.now()).getFullYear()} Pele Awards. All rights reserved.
      </View>
    </View>
  </BoundedBox>
)
