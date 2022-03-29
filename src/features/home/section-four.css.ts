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

  '@media': {
    'screen and (max-width: 1096px)': {
      marginRight: '24px'
    },
    'screen and (max-width: 767px)': {
      maxWidth: 'unset',
      padding: 0
    }
  }
})

export const imageWrapper = style({
  width: '100%',
  maxWidth: '670px',
  height: 'auto',
  background: vars.colors.neutral10,
  borderRadius: '0px 0px 0px 160px',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none'
    }
  }
})
