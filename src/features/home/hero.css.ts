import { vars } from '@/theme.css'
import { keyframes, style } from '@vanilla-extract/css'

const appear = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(100px, -50%)'
  },

  '75%': {
    opacity: 0.6,
    transform: 'translate(0px, -50%)'
  },

  '100%': {
    opacity: 1
  }
})

export const heroTextWrapper = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translate(0, -50%)',
  padding: '0px 32px',
  maxWidth: '720px',
  zIndex: vars.zIndex.hero,
  animation: `${appear} 1s`,

  '@media': {
    'screen and (max-width: 767px)': {
      padding: '0px 24px'
    }
  }
})
