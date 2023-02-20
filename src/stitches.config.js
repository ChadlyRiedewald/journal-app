import { createStitches } from '@stitches/react';
import {
  crimson,
  crimsonA,
  mauve,
  mauveA,
  tomato,
  tomatoA,
} from '@radix-ui/colors';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      ...mauveA,
      ...crimson,
      ...crimsonA,
      ...tomato,
      ...tomatoA,

      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',

      // Primary
      primary1: '$crimson1',
      primary2: '$crimson2',
      primary3: '$crimson3',
      primary4: '$crimson4',
      primary5: '$crimson5',
      primary6: '$crimson6',
      primary7: '$crimson7',
      primary8: '$crimson8',
      primary9: '$crimson9',
      primary10: '$crimson10',
      primary11: '$crimson11',
      primary12: '$crimson12',
      primaryA1: '$crimsonA1',
      primaryA2: '$crimsonA2',
      primaryA3: '$crimsonA3',
      primaryA4: '$crimsonA4',
      primaryA5: '$crimsonA5',
      primaryA6: '$crimsonA6',
      primaryA7: '$crimsonA7',
      primaryA8: '$crimsonA8',
      primaryA9: '$crimsonA9',
      primaryA10: '$crimsonA10',
      primaryA11: '$crimsonA11',
      primaryA12: '$crimsonA12',

      // Gray
      gray1: '$mauve1',
      gray2: '$mauve2',
      gray3: '$mauve3',
      gray4: '$mauve4',
      gray5: '$mauve5',
      gray6: '$mauve6',
      gray7: '$mauve7',
      gray8: '$mauve8',
      gray9: '$mauve9',
      gray10: '$mauve10',
      gray11: '$mauve11',
      gray12: '$mauve12',
      grayA1: '$mauveA1',
      grayA2: '$mauveA2',
      grayA3: '$mauveA3',
      grayA4: '$mauveA4',
      grayA5: '$mauveA5',
      grayA6: '$mauveA6',
      grayA7: '$mauveA7',
      grayA8: '$mauveA8',
      grayA9: '$mauveA9',
      grayA10: '$mauveA10',
      grayA11: '$mauveA11',
      grayA12: '$mauveA12',

      // Error
      error1: '$tomato1',
      error2: '$tomato2',
      error3: '$tomato3',
      error4: '$tomato4',
      error5: '$tomato5',
      error6: '$tomato6',
      error7: '$tomato7',
      error8: '$tomato8',
      error9: '$tomato9',
      error10: '$tomato10',
      error11: '$tomato11',
      error12: '$tomato12',
      errorA1: '$tomatoA1',
      errorA2: '$tomatoA2',
      errorA3: '$tomatoA3',
      errorA4: '$tomatoA4',
      errorA5: '$tomatoA5',
      errorA6: '$tomatoA6',
      errorA7: '$tomatoA7',
      errorA8: '$tomatoA8',
      errorA9: '$tomatoA9',
      errorA10: '$tomatoA10',
      errorA11: '$tomatoA11',
      errorA12: '$tomatoA12',
    },
    space: {
      px: '1px',
      // Values in px
      '0.5px': '2px',
      '1px': '4px',
      '1.5px': '6px',
      '2px': '8px',
      '2.5px': '10px',
      '3px': '12px',
      '3.5px': '14px',
      '4px': '16px',
      '5px': '20px',
      '6px': '24px',
      '7px': '28px',
      '8px': '32px',
      '9px': '36px',
      '10px': '40px',
      '12px': '48px',
      '14px': '56px',
      '16px': '64px',
      '20px': '80px',
      '24px': '96px',
      '28px': '112px',
      '32px': '128px',
      '36px': '144px',
      '40px': '160px',
      '44px': '176px',
      '48px': '192px',
      '52px': '208px',
      '56px': '224px',
      '60px': '240px',
      '64px': '256px',
      '72px': '288px',
      '80px': '320px',
      '96px': '384px',

      // Values in rem
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    sizes: {
      max: 'max-content',
      min: 'min-content',
      fit: 'fit-content',
      full: '100%',
      '3xs': '14rem',
      '2xs': '16rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '90rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fonts: {
      euclid: 'Euclid Circular B, apple-system, sans-serif',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      none: 1,
      xs: 1.25,
      sm: 1.375,
      md: 1.5,
      lg: 1.625,
      xl: 2,
    },
    letterSpacings: {
      sm: '-0.02em',
      md: '0',
    },
    borderWidths: {
      none: '0',
      xs: '1px',
      sm: '2px',
      md: '4px',
      lg: '6px',
      xl: '8px',
      '2xl': '10px',
    },
    borderStyles: {},
    radii: {
      none: '0',
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    shadows: {},
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      dialog: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    transitions: {},
  },
  media: {},
  utils: {
    // Margin
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginBlockStart: value,
    }),
    mr: (value) => ({
      marginInlineEnd: value,
    }),
    mb: (value) => ({
      marginBlockEnd: value,
    }),
    ml: (value) => ({
      marginInlineStart: value,
    }),
    mx: (value) => ({
      marginInline: value,
    }),
    my: (value) => ({
      marginBlock: value,
    }),

    // Padding
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingBlockStart: value,
    }),
    pr: (value) => ({
      paddingInlineEnd: value,
    }),
    pb: (value) => ({
      paddingBlockEnd: value,
    }),
    pl: (value) => ({
      paddingInlineStart: value,
    }),
    px: (value) => ({
      paddingInline: value,
    }),
    py: (value) => ({
      paddingBlock: value,
    }),

    // Background
    bg: (value) => ({
      background: value,
    }),
    bgColor: (value) => ({
      backgroundColor: value,
    }),
    bgGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // Typography
    fs: (value) => ({
      fontSize: value,
    }),
    ff: (value) => ({
      fontFamily: value,
    }),
    fw: (value) => ({
      fontWeight: value,
    }),
    lh: (value) => ({
      lineHeight: value,
    }),
    ls: (value) => ({
      letterSpacing: value,
    }),
    ta: (value) => ({
      textAlign: value,
    }),
    td: (value) => ({
      textDecoration: value,
    }),
    tt: (value) => ({
      textTransform: value,
    }),
    va: (value) => ({
      verticalAlign: value,
    }),

    // Layout, width and height
    w: (value) => ({
      width: value,
    }),
    minW: (value) => ({
      minWidth: value,
    }),
    maxW: (value) => ({
      maxWidth: value,
    }),
    h: (value) => ({
      height: value,
    }),
    minH: (value) => ({
      minHeight: value,
    }),
    maxH: (value) => ({
      maxHeight: value,
    }),
    size: (value) => ({
      width: value,
      height: value,
    }),
    d: (value) => ({
      display: value,
    }),
    pos: (value) => ({
      position: value,
    }),
    br: (value) => ({
      borderRadius: value,
    }),
  },
  prefix: 'stitches',
});

export const globalStyles = globalCss({
  // Custom Fonts
  '@font-face': [
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-Regular.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-Regular.woff') format('woff') ",
      fontWeight: '400',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-RegularItalic.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-RegularItalic.woff') format('woff') ",
      fontWeight: '400',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-Medium.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-Medium.woff') format('woff') ",
      fontWeight: '500',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-MediumItalic.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-MediumItalic.woff') format('woff') ",
      fontWeight: '500',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-Semibold.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-Semibold.woff') format('woff') ",
      fontWeight: '600',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-SemiboldItalic.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-SemiboldItalic.woff') format('woff') ",
      fontWeight: '600',
      fontStyle: 'italic',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-Bold.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-Bold.woff') format('woff') ",
      fontWeight: '700',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Euclid Circular B',
      src: "url('/assets/fonts/EuclidCircularB-BoldItalic.woff2') format('woff2'), url('/assets/fonts/EuclidCircularB-BoldItalic.woff') format('woff') ",
      fontWeight: '700',
      fontStyle: 'italic',
    },
  ],

  // CSS Reset
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    m: '0',
  },

  'html, body': {
    h: '$full',
  },

  body: {
    bgColor: '$gray1',
    color: '$gray12',
    ff: '$euclid',
    lh: '$md',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'auto',
    textRendering: 'optimizeSpeed',
  },

  'img, picture, video, canvas, svg': {
    d: 'block',
    maxW: '$full',
  },

  'input, button, textarea, select, a': {
    font: 'inherit',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  '#__next': {
    isolation: 'isolate',
  },

  'html:focus-within': {
    scrollBehavior: 'smooth',
  },

  '@media (prefers-reduced-motion:reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
});