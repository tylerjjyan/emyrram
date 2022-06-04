import { createGlobalTheme, globalKeyframes } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    background: {
      white: '#FFFFFF',
      light: '#F8F8F8',
      dark: '#0B0B0B',
      darkest: '#28292B'
    },
    primary: {
      regular: '#435061',
      medium: '#92A2B6',
      light: '#C5D0D5'
    },
    neutral5: '#F8F8F8',
    neutral10: '#EEEDED',
    neutral20: '#D1D1D1',
    neutral50: '#A6A2A6',
    neutral60: '#817E81',
    neutral80: '#2A2A2E',
    black: '#000000',
    transparent: 'transparent',
    pureWhite: '#FFFFFF',
    error: '#DC1D1D',
    link: '#1d74dc'
  },
  fonts: {
    heading: 'DM Serif Display',
    body: 'PT Serif'
  },
  lineHeights: {
    xSmall: '16px',
    small: '20px',
    medium: '24px',
    large: '25px',
    h6: '28px',
    h5: '29px',
    h4: '38px',
    h3: '48px',
    h2: '56px',
    h1: '64px'
  },
  fontSizes: {
    xSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    h6: '20px',
    h5: '24px',
    h4: '32px',
    h3: '40px',
    h2: '48px',
    h1: '56px'
  },
  fontWeights: {
    regular: '400',
    semibold: '600',
    bold: '700',
    heavy: '900'
  },
  textAlign: {
    center: 'center',
    left: 'left',
    right: 'right'
  },
  zIndex: {
    header: '11',
    hero: '3',
    modal: '15'
  },
  header: {
    height: '96px',
    mobileHeight: '76px'
  },
  footer: {
    height: '285px',
    mobileHeight: '395px'
  },
  breakpoints: {
    phoneSmall: '450px',
    phone: '599px',
    ipadMini: '767px',
    tablet: '935px',
    desktop: '1096px'
  },
  transitions: {
    opacity: '0.2s ease-in-out'
  }
})

export const formVars = createGlobalTheme(':root', {
  base: {
    default: vars.colors.neutral60,
    hover: vars.colors.black,
    focus: '#1D74DC',
    disabled: vars.colors.neutral50,
    error: '#DC1D1D'
  },
  text: {
    label: vars.colors.neutral60,
    value: vars.colors.neutral80,
    disabled: vars.colors.neutral50,
    error: '#DC1D1D'
  }
})

globalKeyframes('fadeIn', {
  from: { opacity: 0 },
  to: { opacity: 1 }
})

globalKeyframes('appear', {
  '0%': {
    opacity: 0,
    transform: 'translateX(100px)'
  },

  '75%': {
    opacity: 0.6,
    transform: 'translateX(0px)'
  },

  '100%': {
    opacity: 1
  }
})
