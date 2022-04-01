import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const sectionWrapper = style({
  width: '100%',
  background: vars.colors.neutral5,
  borderRadius: '80px 0px 0px 0px',
  boxSizing: 'border-box',
  padding: '80px 0',

  '@media': {
    'screen and (max-width: 767px)': {
      borderRadius: '40px 0px 0px 0px',
      padding: '40px 24px'
    }
  }
})

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '744px',
  width: '100%',
  margin: '0 auto',

  '@media': {
    'screen and (max-width: 599px)': {
      alignItems: 'flex-start'
    }
  }
})
