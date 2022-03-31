import { style } from '@vanilla-extract/css'

export const thankYouWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
  }
})

export const svgWrapper = style({
  marginRight: '48px',

  '@media': {
    'screen and (max-width: 767px)': {
      margin: '0 0 32px 0'
    }
  }
})
