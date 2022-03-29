import { style } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const wrapper = style({
  position: 'relative',
  minHeight: '100vh',
  overflowX: 'hidden'
})

export const main = style({
  width: '100%',
  height: '100%',
  paddingBottom: vars.footer.height,

  '@media': {
    'screen and (max-width: 767px)': {
      paddingBottom: vars.footer.mobileHeight
    }
  }
})
