import { createGlobalTheme, globalKeyframes } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    background: {
      white: '#FFFFFF',
      light: '#F5F7FA',
      dark: '#303030',
      darkest: '#28292B'
    },
    primary: {
      regular: '#435061',
      medium: '#92A2B6',
      light: '#C5D0D5'
    },
    black: '#000000',
    regular: '#222223',
    transparent: 'transparent',
    pureWhite: '#FFFFFF',
    error: '#FF6A5F'
  },
  fonts: {
    heading: 'haboro-contrast-condensed',
    body: 'neue-haas-unica'
  },
  fontSizes: {
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
  lineHeights: {
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
    height: '275px',
    mobileHeight: '260px'
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
