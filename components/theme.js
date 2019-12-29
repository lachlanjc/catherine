import { base } from '@theme-ui/presets'
import { merge } from 'lodash'

export const breakpoints = [32, 48, 64, 96, 128].map(w => `${w}em`)

const heading = {
  // fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  letterSpacing: 'heading'
}

const textStyles = {
  color: 'text',
  fontFamily: 'body',
  fontSize: 1,
  fontWeight: 'body',
  lineHeight: 'body',
  h1: {
    ...heading,
    fontSize: 5
  },
  h2: {
    ...heading,
    fontSize: 3
  },
  h3: {
    ...heading,
    fontSize: 2
  },
  h4: {
    ...heading,
    fontSize: 2
  },
  a: {
    color: 'primary',
    cursor: 'pointer',
    WebkitTextUnderlinePosition: 'under',
    ':hover,:focus': {
      color: 'primaryLight'
    }
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  ul: { listStyle: 'square' },
  'li > p': { my: 0 }
}

export const palette = {
  darker: '#090909',
  dark: '#171717',
  darkless: '#252525',
  black: '#222',
  // steel: '#242424',
  // slate: '#444',
  smoke: '#eee',
  snow: '#fafafa',
  white: '#ffffff',
  // sand: '#f6f6ef',
  sand: '#f5efe6',
  primary: '#006CAB',
  primaryLight: '#128BD2',
  // lavendarLight: '#dcdaed',
  // primary: '#5545cc',
  // primaryLight: '#6551fc',
  // muted: '#4e496e',
  // mutedLight: '#757191',
  // primary: '#487849',
  // primaryLight: '#8EBB7D',
  muted: '#444',
  mutedLight: '#ccb',
  border: 'rgba(0,0,0,0.1)'
}

const theme = merge(base, {
  breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [16, 20, 24, 32, 48, 64, 96, 128],
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...palette,
    text: palette.black,
    background: palette.sand,
    elevated: palette.white,
    sunken: palette.smoke,
    border: palette.border,
    primary: palette.primary,
    muted: palette.muted,
    modes: {
      dark: {
        text: palette.sand,
        background: palette.dark,
        primary: palette.primaryLight,
        elevated: palette.darkless,
        sunken: palette.darker,
        border: palette.darkless,
        muted: palette.mutedLight
      }
    }
  },
  fonts: {
    body: '"Gentium Book Basic", Georgia, Times, serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: '"SFMono-Regular", "Roboto Mono", Menlo, Consolas, monospace'
  },
  lineHeights: {
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    body: 1.5
  },
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700
  },
  letterSpacings: {
    title: '-0.009em',
    heading: '0.009em'
  },
  sizes: {
    ultrawide: 2048,
    wide: 1536,
    container: 1200,
    subcontainer: 1024,
    narrowplus: 768,
    narrow: 512
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)'
  },
  text: {
    heading: {
      fontWeight: 'bold',
      lineHeight: 'heading'
    },
    title: {
      fontWeight: 'bold',
      lineHeight: 'title',
      letterSpacing: 'title',
      fontSize: [4, 5, 6]
    },
    subtitle: {
      fontSize: [2, 3, null, null, 4],
      fontWeight: 'body',
      letterSpacing: 'heading',
      lineHeight: 'subheading'
    },
    headline: {
      fontWeight: 'bold',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 4,
      mt: 3,
      mb: 3
    },
    caption: {
      color: 'muted',
      fontWeight: 'medium',
      letterSpacing: 'heading'
    }
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      cursor: 'pointer',
      lineHeight: 'body',
      svg: { ml: -1, mr: 2 }
    },
    muted: {
      cursor: 'pointer',
      bg: 'transparent',
      color: 'text',
      px: 0,
      fontWeight: 'body',
      display: 'flex',
      alignItems: 'center',
      svg: { ml: -1, mr: 2 }
    }
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      input: { boxShadow: 'none !important' }
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra',
      'input, a': { bg: 'header', boxShadow: 'none !important' }
    }
  },
  layout: {
    container: {
      width: '100%',
      maxWidth: ['container', null, null, null, 'wide'],
      mx: 'auto',
      px: 3,
      ...textStyles
    },
    copy: {
      width: '100%',
      maxWidth: ['narrowplus', null, null, null, 'container'],
      mx: 'auto',
      ...textStyles
    },
    wide: {
      width: '100%',
      maxWidth: ['wide', null, null, null, 'ultrawide'],
      mx: 'auto',
      px: 3
    },
    narrow: {
      width: '100%',
      maxWidth: ['narrow', null, null, null, 'container'],
      mx: 'auto',
      px: 3
    }
  },
  styles: {
    hr: {
      border: 0,
      my: [3, 4],
      borderBottom: '1px solid',
      borderColor: 'border'
    }
  }
})

export const root = theme => ({
  backgroundColor: theme.colors.background,
  margin: 0
})

export default theme
