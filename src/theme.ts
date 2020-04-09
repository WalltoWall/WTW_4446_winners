import facepaint from 'facepaint'
import { linearScale } from 'styled-system-scale'

export enum Size {
  Small = '48rem',
  Medium = '60rem',
  Large = '80rem',
  Xlarge = '100rem',
}
const breakpoints = Object.values(Size)

// Used for linearScale count
const count = 3

export enum Color {
  White = '#fff',
  Black = '#000',
  Bronze50 = '#c3724b',
  Gold40 = '#cd930d',
  Gray10 = '#161616',
  Gray50 = '#757575',
  Gray60 = '#9a9a9a',
  Gray70 = '#b4b4b4',
  Gray80 = '#cbcbcb',
  Gray85 = '#d8d8d8',
  Gray90 = '#e6e6e6',
  Gray95 = '#f5f5f5',
  Red30 = '#9b1229',
  Red40 = '#cf1837',
}

export enum Font {
  Sans = "'Work Sans', system-ui, Helvetica, Arial, sans-serif",
}

export enum FontWeight {
  Thin = 200,
  Light = 300,
  Normal = 400,
  Medium = 500,
  Semibold = 600,
  Bold = 700,
  Heavy = 800,
  Black = 900,
}

export enum LineHeight {
  Solid = 1,
  Title = 1.15,
  TitleWide = 1.25,
  Copy = 1.5,
}

export enum ZIndex {
  Base = 0,
  Header = 1,
  HeaderMobileBackdrop = 0,
  HeaderMobileMenu = 1,
  HeaderMobileBar = 2,
}

export enum TransitionDuration {
  Slow = '300ms',
  Normal = '200ms',
  Fast = '100ms',
}

export enum FontSize {
  S = '0.9rem',
}

export enum Space {
  B = '1rem',
}

const baseTheme = {
  // Sizes
  breakpoints,
  sizes: Size,

  // Colors
  colors: Color,

  // Fonts
  fonts: Font,
  fontSizes: FontSize,
  fontSizeScales: {
    'b-': linearScale('0.75rem', '0.875rem', { count }),
    b: linearScale('0.75rem', '1rem', { count }),
    'm-': linearScale('0.75rem', '1.125rem', { count }),
    m: linearScale('0.875rem', '1.125rem', { count }),
    l: linearScale('0.8125rem', '1.25rem', { count }),
    xl: linearScale('1.125rem', '2rem', { count }),
  },
  fontWeights: FontWeight,
  lineHeights: LineHeight,

  // Spacing
  space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
  spaceScales: {
    t: linearScale('10px', '16px', { count }),
    s: linearScale('12px', '24px', { count }),
    m: linearScale('18px', '32px', { count }),
    l: linearScale('32px', '48px', { count }),
  },

  // Z-Indicies
  zIndices: ZIndex,

  // Transitions
  transitionDurations: TransitionDuration,

  // Variants
  textStyles: {
    caps: {
      textTransform: 'uppercase',
    },
    lowercase: {
      textTransform: 'lowercase',
    },
    trackedCaps: {
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  },
  boxStyles: {
    lastNoMargin: {
      '&:last-child': {
        marginBottom: 0,
        marginRight: 0,
      },
    },
    firstLastNoMargin: {
      '&:first-child': {
        marginTop: 0,
        marginLeft: 0,
      },
      '&:last-child': {
        marginBottom: 0,
        marginRight: 0,
      },
    },
  },

  // Media queries
  // TODO: Fix type
  mediaQueries: Object.keys(Size).reduce((acc, key) => {
    // @ts-ignore
    acc[key] = `@media screen and (min-width: ${Size[key]})`

    return acc
  }, {} as Record<string, string>),
} as const

export const theme = {
  ...baseTheme,
  bp: baseTheme.breakpoints,
  sz: baseTheme.sizes,
  c: baseTheme.colors,
  ff: baseTheme.fonts,
  F: baseTheme.fontSizes,
  f: baseTheme.fontSizeScales,
  fw: baseTheme.fontWeights,
  lh: baseTheme.lineHeights,
  S: baseTheme.space,
  s: baseTheme.spaceScales,
  td: baseTheme.transitionDurations,
  z: baseTheme.zIndices,
  bs: baseTheme.boxStyles,
  ts: baseTheme.textStyles,
  mq: baseTheme.mediaQueries,
} as const
export { theme as t }

export type Theme = typeof theme

export const mq = facepaint(Object.values(theme.mediaQueries))

// let lsCache: Record<string, number> = {}
export const ls = (min: string, max: string, _type?: 'space' | 'font') => {
  // const stringified = `${min} / ${max}`
  // if (!lsCache[stringified]) lsCache[stringified] = 0
  // lsCache[stringified]++
  // console.log(lsCache)
  return linearScale(min, max, { count })
}
export { ls as linearScale }
