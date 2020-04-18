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
import { HeaderDropdown, HeaderDropdownSection } from './HeaderDropdown'

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

  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const toggleMobile = useCallback(() => setIsMobileOpen(state => !state), [])
  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isOverlayVisible = isDropdownOpen || isMobileOpen

  const logoImageData: LogoImageQuery = useStaticQuery(graphql`
    query LogoImage {
      airtableImageField(data: { uid: { eq: "Header Logo" } }) {
        fields {
          image {
            fluid(maxWidth: 100) {
              ...GatsbyImgixFluid
            }
          }
        }
      }
    }
  `)
  const logoImageFluid = logoImageData.airtableImageField?.fields?.image?.fluid

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
      <div css={mq({ height: linearScale('3rem', '4.5rem') })} />
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
                backgroundColor: t.c.Gray70,
                height: linearScale('3rem', '4.5rem'),
                width: linearScale('3rem', '4.5rem'),
              })}
            >
              {logoImageFluid && (
                <GatsbyImage
                  fluid={logoImageFluid}
                  alt="Pele Awards"
                  css={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
          </Link>
          <div
            css={mq({
              display: ['none', 'grid'],
              gridAutoFlow: 'column',
              alignItems: 'center',
              gap: linearScale('1rem', '2rem'),
              paddingLeft: linearScale('0.75rem', '2rem'),
              paddingRight: '1rem',
              gridTemplateColumns: '1fr auto',
            })}
          >
            <ul
              css={mq({
                display: 'grid',
                gridAutoFlow: 'column',
                justifyContent: 'start',
                gap: linearScale('1rem', '2rem'),
                alignItems: 'center',
              })}
            >
              <NavItem href="/winners/">Winners</NavItem>
              <NavItem href="/ad-people/">Ad People</NavItem>
              <NavItem href="/high-school/">High School</NavItem>
              <NavItem href="/college/">College</NavItem>
              <NavItem href="/about/">About</NavItem>
            </ul>
            <div
              css={mq({
                display: 'grid',
                gap: linearScale('0.75rem', '1.5rem'),
                gridAutoFlow: 'column',
                alignItems: 'center',
              })}
            >
              <ul
                css={mq({
                  display: 'grid',
                  gridAutoFlow: 'column',
                  justifyContent: 'start',
                  gap: linearScale('1rem', '2rem'),
                  alignItems: 'center',
                })}
              >
                <NavItem href="/">How to enter</NavItem>
              </ul>
              <form onSubmit={handleSearchSubmit}>
                <FormSearchInput
                  ref={searchInputRef}
                  name="query"
                  aria-label="Search"
                  css={mq({ width: [null, '8.5rem', '14rem'] })}
                />
              </form>
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
            gap: '1rem',
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
              aria-label="Search"
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
            <NavItem href="/">How to enter</NavItem>
          </ul>
        </div>

        {/* Dropdown menu */}
        <HeaderDropdown
          css={{
            display: 'none',
            boxShadow: isDropdownOpen
              ? '0 2px 6px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.15)'
              : 'none',
            position: 'relative',
            zIndex: t.z.HeaderMobileMenu,
          }}
        >
          <HeaderDropdownSection
            heading="See all winners"
            headingHref="/winners/"
          >
            <ul
              css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                rowGap: '0.875rem',
                columnGap: '3.5rem',
              }}
            >
              <li>
                <Anchor href="/">Advertising Industry Self-Promotion</Anchor>
              </li>
              <li>
                <Anchor href="/">Elements of Advertising</Anchor>
              </li>
              <li>
                <Anchor href="/">Film, Video & Sound</Anchor>
              </li>
              <li>
                <Anchor href="/">Integrated Advertising Campaign</Anchor>
              </li>
              <li>
                <Anchor href="/">Integrated Branded Content Campaign</Anchor>
              </li>
              <li>
                <Anchor href="/">Out-of-Home & Ambient Media</Anchor>
              </li>
              <li>
                <Anchor href="/">Radio Advertising</Anchor>
              </li>
            </ul>
          </HeaderDropdownSection>
          <HeaderDropdownSection heading="Past years" headingHref="/winners/">
            <ul
              css={{
                display: 'grid',
                rowGap: '0.875rem',
                columnGap: '3.5rem',
              }}
            >
              <li>
                <Anchor href="/">2019</Anchor>
              </li>
              <li>
                <Anchor href="/">2018</Anchor>
              </li>
              <li>
                <Anchor href="/">2017</Anchor>
              </li>
              <li>
                <Anchor href="/">2016</Anchor>
              </li>
            </ul>
          </HeaderDropdownSection>
        </HeaderDropdown>
      </View>
      <Overlay
        isActive={isOverlayVisible}
        onClick={closeMobile}
        css={{ zIndex: t.z.HeaderOverlay }}
      />
    </>
  )
}
