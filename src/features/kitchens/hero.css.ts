import { style } from '@vanilla-extract/css'

export const contentWrapper = style({
  position: 'absolute',
  top: '80%',
  left: '0',
  transform: 'translate(0, -50%)',
  padding: '0 0 0 64px',
  maxWidth: '600px',
  zIndex: 1,

  '@media': {
    'screen and (max-width: 1280px)': {
      top: '65%',
      padding: '0 0 0 32px'
    }
  }
})
