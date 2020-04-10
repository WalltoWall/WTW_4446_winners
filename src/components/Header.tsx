import React, { useState, useCallback, useRef } from 'react'
import { navigate } from 'gatsby'
import VisuallyHidden from '@reach/visually-hidden'
import { negateScale } from 'styled-system-scale'

import { navigation } from '../constants'
import { t, mq, linearScale } from '../theme'
import { getSearchQuery } from '../utils'

import { View, ViewProps } from './View'
import { Heading } from './Heading'
import { BoundedBox } from './BoundedBox'
import { HamburgerIcon } from './HamburgerIcon'
import { Anchor, AnchorProps } from './Anchor'
import { Overlay } from './Overlay'
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
  const searchInputRef = useRef<HTMLInputElement>()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsMenuOpen(state => !state), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(state => !state)

    // Opposite since current state is before the setIsSearchOpen call.
    if (!isSearchOpen) searchInputRef.current?.focus?.()
    else searchInputRef.current?.blur?.()
  }, [isSearchOpen])

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
              <SVG svg={AssetLogo2020SVG} css={{ width: '100%' }} />
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
                justifyContent: 'end',
              })}
            >
              <button
                onClick={toggleSearch}
                css={{
                  // Search input zIndex = 1
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                <VisuallyHidden>Search field toggle</VisuallyHidden>
                <Icon
                  name="search"
                  css={mq({ width: linearScale('0.875rem', '1.125rem') })}
                />
              </button>

              <form
                onSubmit={handleSubmit}
                css={mq({
                  position: 'absolute',
                  zIndex: 1,
                  top: 0,
                  left: negateScale(linearScale('0.75rem', '1rem', 'space')),
                  right: 0,
                  bottom: 0,
                  background: t.colors.White,
                  transition: 'opacity .2s linear',
                  opacity: isSearchOpen ? 1 : 0,
                  transitionDuration: t.td.Fast,
                })}
              >
                <FormInput
                  ref={searchInputRef}
                  defaultValue={getSearchQuery()}
                  name="search"
                  type="search"
                  aria-label="Search"
                  aria-hidden={!isSearchOpen}
                  placeholder="Search all winners…"
                  css={mq({
                    height: '100%',
                    paddingLeft: linearScale('2rem', '2.5rem', 'space'),
                  })}
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
