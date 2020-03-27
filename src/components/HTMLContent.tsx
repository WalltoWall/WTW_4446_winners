import React from 'react'
import HTMLRenderer from 'react-html-renderer'

import { t, mq, linearScale } from '../theme'
import { View } from './View'
import { Heading } from './Heading'
import { Subheading } from './Subheading'
import { Anchor } from './Anchor'

export const baseHeadingCss = {
  lineHeight: t.lh.Title,
  marginTop: linearScale('2.25rem', '3rem'),
  marginBottom: linearScale('1rem', '1.5rem'),
  color: t.c.Black,
  ...t.boxStyles.firstLastNoMargin,
}

export const baseTextCss = {
  marginBottom: linearScale('1rem', '1.5rem'),
  ...t.boxStyles.lastNoMargin,
}

const components: React.ComponentProps<typeof HTMLRenderer>['components'] = {
  h1: (props) => (
    <Heading forwardedAs="h3" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h2: (props) => (
    <Subheading forwardedAs="h4" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h3: (props) => (
    <Subheading forwardedAs="h5" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h4: (props) => (
    <Subheading forwardedAs="h6" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h5: (props) => (
    <Subheading forwardedAs="h6" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  h6: (props) => (
    <Subheading forwardedAs="h6" {...props} css={mq({ ...baseHeadingCss })} />
  ),
  p: (props) => <View as="p" {...props} css={mq({ ...baseTextCss })} />,
  ul: (props) => (
    <View
      as="ul"
      {...props}
      css={mq({
        ...baseTextCss,
        paddingLeft: linearScale('', ''),
        listStyle: 'disc',
      })}
    />
  ),
  ol: (props) => (
    <View
      as="ol"
      {...props}
      css={mq({
        ...baseTextCss,
        paddingLeft: linearScale('', ''),
        listStyle: 'disc',
      })}
    />
  ),
  li: (props) => (
    <View
      as="li"
      {...props}
      css={mq({
        ...baseTextCss,
        marginBottom: 0,
      })}
    />
  ),
  // @ts-ignore
  a: ({ href, ...props }: { href: string }) => (
    <Anchor href={href} {...props} />
  ),
}

type HTMLContentProps = React.ComponentProps<typeof View> & {
  html?: React.ComponentProps<typeof HTMLRenderer>['html']
  componentOverrides?: React.ComponentProps<
    typeof HTMLRenderer
  >['componentOverrides']
}

export const HTMLContent: React.FC<HTMLContentProps> = ({
  html,
  componentOverrides,
  ...props
}) => (
  <View {...props} css={{ lineHeight: t.lh.Copy }}>
    <HTMLRenderer
      html={html}
      components={components}
      componentOverrides={componentOverrides}
    />
  </View>
)
