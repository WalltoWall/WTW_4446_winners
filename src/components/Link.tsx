import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { View, ViewProps } from './View'

const isExternal = (url: string) => /^https?:\/\//.test(url)
const isAnchorOnly = (url: string) => /^https?:\/\/#/.test(url)
const extractAnchor = (url: string) => url.match(/#\S*$/)?.[0]

export type LinkProps = ViewProps & {
  href: string
  target?: string
}

export const Link = ({ href: rawHref, ...props }: LinkProps) => {
  const href = isAnchorOnly(rawHref) ? extractAnchor(rawHref) ?? '' : rawHref
  const rel = isExternal(href) ? 'nofollow noopener noreferrer' : undefined
  const target = isExternal(href) ? '_blank' : undefined

  return isExternal(href) ? (
    <View as="a" href={href} target={target} rel={rel} {...props} />
  ) : (
    <View as={GatsbyLink} to={href} target={target} rel={rel} {...props} />
  )
}
