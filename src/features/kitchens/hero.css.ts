import { keyframes, style } from '@vanilla-extract/css'

const appear = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(50px, -50%)'
  },

  '75%': {
    opacity: 0.6,
    transform: 'translate(0px, -50%)'
  },

  '100%': {
    opacity: 1
  }
})

export const contentWrapper = style({
  position: 'absolute',
  top: '80%',
  left: '0',
  transform: 'translate(0, -50%)',
  padding: '0 0 0 64px',
  maxWidth: '600px',
  animation: `${appear} 1s`,
  zIndex: 1,

  '@media': {
    'screen and (max-width: 1280px)': {
      top: '65%',
      padding: '0 0 0 32px'
    }
  }
})
