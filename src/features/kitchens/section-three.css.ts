import { style } from '@vanilla-extract/css'

export const sectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column'
    }
  }
})

export const headingWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '48px',

  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: '16px'
    }
  }
})
