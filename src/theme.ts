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
const count = breakpoints.length + 1

export enum Color {
  White = '#fff',
  Black = '#000',
  Gray10 = '#222',
  Gray40 = '#888',
}

export enum Font {
  Sans = 'Inter, system-ui',
  SansAlt = 'Symphonie, system-ui',
  SansCond = '"Trade Gothic Std Cond", system-ui',
  Serif = '"Crimson Text", system-ui',
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
  Copy = 1.4,
  Code = 1.6,
}

export enum ZIndex {
  Base = 0,
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
    s: linearScale('0.7rem', '0.9rem', { count }),
    b: linearScale('1.1rem', '1.5rem', { count }),
    m: linearScale('1.25rem', '1.25rem', { count }),
    l: linearScale('1.5rem', '2rem', { count }),
    xl: linearScale('2rem', '3rem', { count }),
  },
  fontWeights: FontWeight,
  lineHeights: LineHeight,

  // Spacing
  space: Space,
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
  S: baseTheme.spaceScales,
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
