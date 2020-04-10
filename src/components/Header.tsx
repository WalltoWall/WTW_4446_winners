import React, { useState, useCallback, useReducer } from 'react'
import { navigate } from 'gatsby'
import VisuallyHidden from '@reach/visually-hidden'

import { navigation, EVENT_SITE_URL } from '../constants'
import { t, mq, linearScale } from '../theme'
import { getSearchQuery } from '../utils'

import { View, ViewProps } from './View'
import { Heading } from './Heading'
import { BoundedBox } from './BoundedBox'
import { HamburgerIcon } from './HamburgerIcon'
import { Anchor, AnchorProps } from './Anchor'
import { Link } from './Link'
import { Overlay } from './Overlay'
import { Button } from './Button'
import { Icon } from './Icon'
import { SVG } from './SVG'
import { FormInput } from './FormInput'
import { ReactComponent as AssetLogo2020SVG } from '../assets/logo-2020.svg'

type NavItemProps = ViewProps & {
  href: AnchorProps['href']
  target?: AnchorProps['target']
}

const NavItem = ({ href, target, children, ...props }: NavItemProps) => (
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

export type HeaderProps = ViewProps

export const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsMenuOpen(state => !state), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])
  const [isSearchOpen, toggleSearch] = useReducer(isOpen => !isOpen, false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    const params = new URLSearchParams(`query=${target.search.value}`)
    navigate(`/search/?${params.toString()}`)
  }

  return (
    <View
      as="header"
      {...props}
      css={{ position: 'relative', zIndex: t.z.Header }}
    >
      <BoundedBox
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
        <div
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
            <div
              css={mq({
                borderRadius: '50%',
                marginLeft: '-0.125rem',
                overflow: 'hidden',
                height: linearScale('2rem', '3.625rem'),
                width: linearScale('2rem', '3.625rem'),
              })}
            >
              <VisuallyHidden>Pele Winner's Home</VisuallyHidden>
              <SVG svg={AssetLogo2020SVG} x={1} y={1} css={{ width: '100%' }} />
            </div>
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
          <ul
            css={mq({
              display: ['none', 'grid'],
              gap: '2.5rem',
              gridAutoFlow: 'column',
            })}
          >
            {navigation.map(item => (
              <NavItem key={item.name} href={item.href}>
                {item.name}
              </NavItem>
            ))}
          </ul>
          <div css={{ justifySelf: 'end' }}>
            <button
              onClick={toggleMenu}
              css={mq({
                width: '1.5rem',
                height: '0.9rem',
                display: [null, null, 'none'],
              })}
            >
              <VisuallyHidden>Mobile menu toggle</VisuallyHidden>
              <HamburgerIcon isOpen={isMenuOpen} css={{ height: '100%' }} />
            </button>

            <div
              css={mq({
                position: 'relative',
                display: ['none', null, 'grid'],
                gap: '2.125rem',
                gridAutoFlow: 'column',
                alignItems: 'center',
              })}
            >
              <button
                onClick={toggleSearch}
                css={{ zIndex: 2, position: 'relative' }}
              >
                <VisuallyHidden>Search field toggle</VisuallyHidden>
                <Icon name="search" css={{ width: '1.25rem' }} />
              </button>

              <Button as={Link} href={EVENT_SITE_URL}>
                Enter{' '}
                <span css={mq({ display: ['none', null, null, 'inline'] })}>
                  the 2021 Pele Awards
                </span>
              </Button>

              <form
                onSubmit={handleSubmit}
                css={mq({
                  position: 'absolute',
                  zIndex: 1,
                  top: 0,
                  left: '-0.5rem',
                  right: 0,
                  bottom: 0,
                  background: t.colors.White,
                  transition: 'opacity .2s linear',
                  opacity: isSearchOpen ? 1 : 0,
                })}
              >
                <FormInput
                  defaultValue={getSearchQuery()}
                  name="search"
                  type="search"
                  aria-label="Search"
                  aria-hidden={!isSearchOpen}
                  css={{ height: '100%', paddingLeft: '2.5rem' }}
                />
              </form>
            </div>
          </div>
        </div>
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
            {navigation.map(item => (
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
