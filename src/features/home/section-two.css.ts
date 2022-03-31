import { style } from '@vanilla-extract/css'

export const sectionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column'
    }
  }
})

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '48px',
  maxWidth: '470px',
  width: '100%',

  '@media': {
    'screen and (max-width: 1096px)': {
      marginRight: '24px'
    },
    'screen and (max-width: 767px)': {
      maxWidth: 'unset',
      margin: '0 0 56px 0'
    }
  }
})

export const iconListWrapper = style({
  maxWidth: '600px',
  width: '100%',

  '@media': {
    'screen and (max-width: 767px)': {
      maxWidth: 'unset'
    }
  }
})
