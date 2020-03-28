import React, { useState, useCallback } from 'react'

import { navigation, EVENT_SITE_URL } from '../constants'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { Heading } from './Heading'
import { BoundedBox } from './BoundedBox'
import { HamburgerIcon } from './HamburgerIcon'
import { Anchor } from './Anchor'
import { Link } from './Link'
import { Overlay } from './Overlay'
import { Button } from './Button'
import { Icon } from './Icon'
import { SVG } from './SVG'
import { ReactComponent as AssetLogo2020SVG } from '../assets/logo-2020.svg'

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
  <View as="li" {...props} css={mq({ textAlign: 'center' })}>
    <Anchor
      href={href}
      target={target}
      css={mq({ fontSize: linearScale('0.875rem', '1.125rem') })}
    >
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
          boxShadow: `0 1px 0 rgba(0, 0, 0, ${isMenuOpen ? 0 : 0.1})`,
          paddingBottom: linearScale('0.75rem', '1.25rem'),
          paddingTop: linearScale('0.75rem', '1.25rem'),
          paddingLeft: linearScale('1rem', '2rem'),
          paddingRight: linearScale('1rem', '2rem'),
          position: 'relative',
          zIndex: t.z.HeaderMobileBar,
          transitionProperty: 'boxShadow',
        })}
      >
        <View
          css={mq({
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: linearScale('1rem', '2rem'),
          })}
        >
          <Anchor
            href="/"
            css={{
              display: 'grid',
              gap: t.S[3],
              gridAutoFlow: 'column',
              justifySelf: 'start',
              alignItems: 'center',
            }}
          >
            <View
              css={mq({
                borderRadius: '50%',
                marginLeft: '-0.125rem',
                overflow: 'hidden',
                height: linearScale('2rem', '3.625rem'),
                width: linearScale('2rem', '3.625rem'),
              })}
            >
              <SVG svg={AssetLogo2020SVG} x={1} y={1} css={{ width: '100%' }} />
            </View>
            <Heading
              css={mq({
                fontSize: t.f.m,
                fontWeight: t.fw.Medium,
                display: ['none', null, null, 'block'],
              })}
            >
              Pele Awards Winners
            </Heading>
          </Anchor>
          <Heading
            css={mq({
              fontSize: t.f.b,
              textAlign: 'center',
              display: [null, 'none'],
            })}
          >
            <Anchor href="/">Pele Awards Winners</Anchor>
          </Heading>
          <View
            as="ul"
            css={mq({
              display: ['none', 'grid'],
              gap: '2.5rem',
              gridAutoFlow: 'column',
            })}
          >
            {navigation.map((item) => (
              <NavItem key={item.name} href={item.href}>
                {item.name}
              </NavItem>
            ))}
          </View>
          <View css={{ justifySelf: 'end' }}>
            <View
              as="button"
              onClick={toggleMenu}
              css={mq({
                width: '1.5rem',
                height: '0.9rem',
                display: [null, null, 'none'],
              })}
            >
              <HamburgerIcon isOpen={isMenuOpen} css={{ height: '100%' }} />
            </View>
            <View
              css={mq({
                display: ['none', null, 'grid'],
                gap: '2.125rem',
                gridAutoFlow: 'column',
                alignItems: 'center',
              })}
            >
              <View as="button">
                <Icon name="search" css={{ width: '1.25rem' }} />
              </View>
              <Button as={Link} href={EVENT_SITE_URL}>
                Enter{' '}
                <View
                  as="span"
                  css={mq({ display: ['none', null, null, 'inline'] })}
                >
                  the 2021 Pele Awards
                </View>
              </Button>
            </View>
          </View>
        </View>
      </BoundedBox>

      {/* Mobile Nav */}
      <View css={mq({ display: [null, null, 'none'] })}>
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
          <View as="ul" css={{ display: 'grid', gap: '0.75rem' }}>
            {navigation.map((item) => (
              <NavItem key={item.name} href={item.href}>
                {item.name}
              </NavItem>
            ))}
          </View>
        </BoundedBox>
        <Overlay
          isActive={isMenuOpen}
          onClick={closeMenu}
          css={{ zIndex: t.z.HeaderMobileBackdrop }}
        />
      </View>
    </View>
  )
}
