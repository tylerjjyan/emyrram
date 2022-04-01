import { style } from '@vanilla-extract/css'

export const contentWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '72px',

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '0 24px 0 0'
    }
  }
})

export const leftWrapper = style({
  width: '100%',
  maxWidth: '536px',

  '@media': {
    'screen and (max-width: 1096px)': {
      marginRight: '24px'
    },

    'screen and (max-width: 767px)': {
      margin: '0 0 32px 0'
    }
  }
})

export const imageWrapper = style({
  width: '100%',
  height: '100%',

  '@media': {
    'screen and (max-width: 1096px)': {
      marginRight: '24px'
    },

    'screen and (max-width: 767px)': {
      margin: '0 0 32px 0'
    }
  }
})

export const imageStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
})
