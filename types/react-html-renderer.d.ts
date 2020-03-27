interface Props {
  html?: string
  components?: Record<string, React.ComponentType>
  componentOverrides?: Record<
    string,
    (originalComponent: React.ComponentType) => React.ComponentType
  >
}

declare module 'react-html-renderer' {
  class HTMLRenderer extends React.Component<Props, any> {}

  export = HTMLRenderer
}
