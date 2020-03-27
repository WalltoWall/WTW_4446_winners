import React, { useState, useCallback } from 'react'
import { linearScale } from 'styled-system-scale'

import { t, mq } from '../theme'
import { View } from './View'
import { Heading } from './Heading'
import { BoundedBox } from './BoundedBox'
import { HamburgerIcon } from './HamburgerIcon'
import { Anchor } from './Anchor'
import { Link } from './Link'

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
      marginBottom: linearScale('0.75rem', '0.875rem', { count: 3 }),
      textAlign: 'center',
      '&:last-child': { marginBottom: 0 },
    })}
  >
    <Anchor href={href} target={target} css={mq({ fontSize: t.f.m })}>
      {children}
    </Anchor>
  </View>
)

type HeaderProps = React.ComponentProps<typeof View>

export const Header: React.FC<HeaderProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsMenuOpen((state) => !state), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return (
    <View as="header" css={{ position: 'relative', zIndex: t.z.Header }}>
      <BoundedBox
        {...props}
        css={mq({
          backgroundColor: t.c.White,
          boxShadow: `0 0.5px 0 rgba(0, 0, 0, ${isMenuOpen ? 0 : 0.2})`,
          paddingBottom: linearScale('0.75rem', '2rem', { count: 3 }),
          paddingTop: linearScale('0.75rem', '2rem', { count: 3 }),
          position: 'relative',
          zIndex: t.z.HeaderMobileBar,
          transitionProperty: 'boxShadow',
        })}
      >
        <View
          css={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <View
              css={{
                backgroundColor: t.c.Gray10,
                borderRadius: '50%',
                height: '2rem',
                width: '2rem',
              }}
            />
          </Link>
          <Heading css={mq({ fontSize: t.f.b, textAlign: 'center' })}>
            <Anchor href="/">Pele Awards Winners</Anchor>
          </Heading>
          <View
            as="button"
            onClick={toggleMenu}
            css={{ width: '1.5rem', height: '0.9rem' }}
          >
            <HamburgerIcon isOpen={isMenuOpen} css={{ height: '100%' }} />
          </View>
        </View>
      </BoundedBox>
      <BoundedBox
        forwardedAs="nav"
        css={{
          backgroundColor: t.c.White,
          boxShadow: `0 3px 6px rgba(0, 0, 0, 0.25)`,
          left: 0,
          position: 'absolute',
          right: 0,
          transform: `translateY(${isMenuOpen ? '0%' : '-120%'})`,
          transitionProperty: 'transform',
          zIndex: t.z.HeaderMobileMenu,
        }}
      >
        <View as="ul">
          <NavItem href="/winners/">Winners</NavItem>
          <NavItem href="/ad-people/">Ad People</NavItem>
          <NavItem href="/high-school/">High School</NavItem>
          <NavItem href="/college/">College</NavItem>
          <NavItem href="/about/">About</NavItem>
        </View>
      </BoundedBox>
      <View
        onClick={closeMenu}
        css={{
          backgroundColor: t.c.Black,
          bottom: 0,
          left: 0,
          opacity: isMenuOpen ? 0.5 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none',
          position: 'fixed',
          right: 0,
          top: 0,
          transitionProperty: 'opacity',
          zIndex: t.z.HeaderMobileBackdrop,
        }}
      />
    </View>
  )
}
