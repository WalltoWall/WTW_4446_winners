import styled from 'styled-components'

export type ViewProps = React.AllHTMLAttributes<HTMLElement> & {
  as?: React.ComponentProps<typeof View>['as']
  forwardedAs?: React.ComponentProps<typeof View>['forwardedAs']
  children?: React.ComponentProps<typeof View>['children']
}

export const View = styled.div({})
