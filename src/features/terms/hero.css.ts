import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const headerWrapper = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  maxHeight: '400px',
  borderRadius: '0px 0px 160px 0px',
  background: vars.colors.neutral5,

  '@media': {
    'screen and (max-width: 767px)': {
      borderRadius: '0px 0px 80px 0px'
    }
  }
})

export const textWrapper = style({
  padding: '152px 152px 110px 152px',

  '@media': {
    'screen and (max-width: 767px)': {
      padding: '52px 24px'
    }
  }
})
