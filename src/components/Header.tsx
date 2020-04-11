import React, { useState, useCallback, useRef } from 'react'
import { navigate, graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import { LogoImageQuery } from '../graphqlTypes'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Link } from './Link'
import { Anchor, AnchorProps } from './Anchor'
import { HamburgerIcon } from './HamburgerIcon'
import { FormSearchInput } from './FormSearchInput'
import { Overlay } from './Overlay'
import { Icon } from './Icon'
import { FormInput } from './FormInput'

type NavItemsProps = ViewProps & {
  href: AnchorProps['href']
}

const NavItem = ({ href, children, ...props }: NavItemsProps) => (
  <View as="li" {...props}>
    <Anchor href={href} css={{ fontWeight: t.fw.Medium }}>
      {children}
    </Anchor>
  </View>
)

export type HeaderProps = ViewProps

export const Header = (props: HeaderProps) => {
  const searchInputRef = useRef<HTMLInputElement>()

  const [isMobileOpen, setIsMenuOpen] = useState(false)
  const toggleMobile = useCallback(() => setIsMenuOpen(state => !state), [])
  const closeMobile = useCallback(() => setIsMenuOpen(false), [])

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const toggleSearch = useCallback(() => {
    setIsSearchOpen(state => !state)

    // Opposite since current state is before the setIsSearchOpen call.
    if (!isSearchOpen) searchInputRef.current?.focus?.()
    else searchInputRef.current?.blur?.()
  }, [isSearchOpen])

  const logoImageData: LogoImageQuery = useStaticQuery(graphql`
    query LogoImage {
      airtableImageField(data: { uid: { eq: "Header Logo" } }) {
        data {
          image {
            localFiles {
              childCloudinaryAsset {
                fluid(maxWidth: 128) {
                  ...CloudinaryAssetFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const logoImageFluid =
    logoImageData.airtableImageField?.data?.image?.localFiles?.[0]
      ?.childCloudinaryAsset?.fluid

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      query: { value: string }
    }
    const params = new URLSearchParams()
    params.set('query', target.query.value.trim())
    navigate(`/search/?${params.toString()}`)
  }

  return (
    <>
      <div css={mq({ height: linearScale('3rem', '4rem') })} />
      <View
        as="header"
        {...props}
        css={{
          position: 'fixed',
          zIndex: t.z.Header,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <nav
          css={mq({
            alignItems: 'center',
            backgroundColor: t.c.White,
            boxShadow: `0 1px 0 rgba(0, 0, 0, ${isMobileOpen ? 0 : 0.1})`,
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateColumns: [null, 'auto 1fr'],
            justifyContent: ['space-between', 'start'],
            position: 'relative',
            zIndex: t.z.HeaderBar,
          })}
        >
          <Link href="/">
            <div
              css={mq({
                backgroundColor: t.c.Gray10,
                height: linearScale('3rem', '4rem'),
                width: linearScale('3rem', '4rem'),
              })}
            >
              {logoImageFluid && (
                <GatsbyImage fluid={logoImageFluid} alt="Pele Awards" />
              )}
            </div>
          </Link>
          <div
            css={mq({
              display: ['none', 'grid'],
              gap: '1.5rem',
              gridAutoFlow: 'column',
              justifyContent: 'start',
              paddingLeft: '2rem',
              paddingRight: '2rem',
            })}
          >
            <ul
              css={mq({
                display: 'grid',
                gridAutoFlow: 'column',
                justifyContent: 'start',
                gap: '2rem',
                alignItems: 'center',
              })}
            >
              <NavItem href="/winners/">Winners</NavItem>
              <NavItem href="/ad-people/">Ad People</NavItem>
              <NavItem href="/high-school/">High School</NavItem>
              <NavItem href="/college/">College</NavItem>
              <NavItem href="/about/">About</NavItem>
            </ul>
            <div css={{ position: 'relative' }}>
              <button
                onClick={toggleSearch}
                css={mq({
                  left: linearScale('0.75rem', '1rem', 'space'),
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-45%)',
                  zIndex: 2,
                })}
              >
                <Icon
                  name="search"
                  css={mq({ width: linearScale('0.875rem', '1.125rem') })}
                />
              </button>
              <FormInput
                ref={searchInputRef}
                name="search"
                type="search"
                placeholder="Search…"
                css={mq({
                  opacity: isSearchOpen ? 1 : 0,
                  transitionProperty: 'opacity',
                  transitionDuration: t.td.Fast,
                  paddingLeft: linearScale('2rem', '2.5rem', 'space'),
                  pointerEvents: isSearchOpen ? 'auto' : 'none',
                  zIndex: 1,
                })}
              />
            </div>
          </div>
          <button
            onClick={toggleMobile}
            css={mq({
              color: t.c.Gray60,
              display: [null, 'none'],
              height: '100%',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              transitionProperty: 'color',
              '&:hover, &:focus': {
                color: t.c.Gray10,
              },
            })}
          >
            <HamburgerIcon
              isOpen={isMobileOpen}
              css={{ width: '1.25rem', height: '0.75rem' }}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          css={mq({
            display: 'grid',
            gap: '1.5rem',
            backgroundColor: t.c.Gray95,
            padding: '1.5rem',
            fontSize: t.f['l+'],
            position: 'absolute',
            left: 0,
            right: 0,
            boxShadow: isMobileOpen
              ? '0 2px 6px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.15)'
              : 'none',
            transform: `translateY(${isMobileOpen ? '0%' : '-100%'})`,
            transitionProperty: 'transform',
            zIndex: t.z.HeaderMobileMenu,
            justifyContent: 'center',
          })}
        >
          <form onSubmit={handleSearchSubmit}>
            <FormSearchInput
              name="query"
              css={{ textAlign: 'center', fontSize: 'inherit' }}
            />
          </form>
          <ul
            css={mq({
              display: 'grid',
              gap: '1rem',
              textAlign: 'center',
            })}
          >
            <NavItem href="/winners/">Winners</NavItem>
            <NavItem href="/ad-people/">Ad People</NavItem>
            <NavItem href="/high-school/">High School</NavItem>
            <NavItem href="/college/">College</NavItem>
            <NavItem href="/about/">About</NavItem>
          </ul>
        </div>
      </View>
      <Overlay
        isActive={isMobileOpen}
        onClick={closeMobile}
        css={{ zIndex: t.z.HeaderOverlay }}
      />
    </>
  )
}
