import styled from 'styled-components'

export type ViewProps = React.AllHTMLAttributes<HTMLElement> & {
  as?: React.ComponentProps<typeof View>['as']
  forwardedAs?: React.ComponentProps<typeof View>['forwardedAs']
  children?: React.ComponentProps<typeof View>['children']
}

// export type ViewProps = React.ComponentProps<typeof View>

export const View = styled.div({})

// import React from 'react'

// export type ViewProps = React.AllHTMLAttributes<HTMLElement> & {
//   as?: React.ElementType
//   forwardedAs?: React.ElementType
//   children?: React.ReactNode
// }

// export const View = ({ as = 'div', forwardedAs, ...props }: ViewProps) =>
//   React.createElement(forwardedAs ?? as, props)
