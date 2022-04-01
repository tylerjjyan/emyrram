import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const contentWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '100%'
})

export const leftWrapper = style({
  width: '100%',
  maxWidth: '536px',
  paddingTop: '128px',
  marginRight: '24px',

  '@media': {
    'screen and (max-width: 767px)': {
      marginRight: '0',
      maxWidth: 'unset',
      padding: 0
    }
  }
})

export const imageWrapper = style({
  width: '100%',
  maxWidth: '670px',
  height: '100%',
  background: vars.colors.neutral10,
  borderRadius: '0px 0px 0px 160px',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none'
    }
  }
})

export const offerImageWrapper = style({
  display: 'none',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'block',
      width: '100%',
      height: '100%',
      maxHeight: '400px',
      background: vars.colors.neutral10,
      borderRadius: '40px 0px 0px 0px',
      objectFit: 'cover',
      marginBottom: '24px'
    }
  }
})
