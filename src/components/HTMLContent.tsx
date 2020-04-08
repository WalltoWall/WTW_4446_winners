import React from 'react'
import HTMLRenderer from 'react-html-renderer'

import { t, mq, linearScale } from '../theme'
import { View, ViewProps } from './View'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { Anchor } from './Anchor'

export const baseHeadingCss = {
  lineHeight: t.lh.Title,
  marginTop: linearScale('2.25rem', '3rem', 'space'),
  marginBottom: linearScale('1rem', '1.5rem', 'space'),
  color: t.c.Black,
  ...t.boxStyles.firstLastNoMargin,
} as const

export const baseTextCss = {
  marginBottom: linearScale('0.5rem', '0.875rem', 'space'),
  ...t.boxStyles.lastNoMargin,
} as const

const components: React.ComponentProps<typeof HTMLRenderer>['components'] = {
  h1: props => (
    <Heading forwardedAs="h3" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h2: props => (
    <Subheading forwardedAs="h4" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h3: props => (
    <Subheading forwardedAs="h5" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h4: props => (
    <Subheading forwardedAs="h6" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h5: props => (
    <Subheading forwardedAs="h6" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h6: props => (
    <Subheading forwardedAs="h6" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  p: props => <View as="p" {...props} css={mq({ ...baseTextCss })} />,
  ul: props => (
    <ul {...props} css={mq({ ...baseTextCss, listStyle: 'disc' })} />
  ),
  ol: props => (
    <ol {...props} css={mq({ ...baseTextCss, listStyle: 'decimal' })} />
  ),
  li: props => <li {...props} css={mq({ ...baseTextCss, marginBottom: 0 })} />,
  // @ts-ignore
  a: ({ href, ...props }: { href: string }) => (
    <Anchor href={href} {...props} />
  ),
}

export type HTMLContentProps = ViewProps & {
  html?: React.ComponentProps<typeof HTMLRenderer>['html']
  componentOverrides?: React.ComponentProps<
    typeof HTMLRenderer
  >['componentOverrides']
}

export const HTMLContent = ({
  html,
  componentOverrides,
  ...props
}: HTMLContentProps) => (
  <View {...props} css={{ lineHeight: t.lh.Copy }}>
    <HTMLRenderer
      html={html}
      components={components}
      componentOverrides={componentOverrides}
    />
  </View>
)
