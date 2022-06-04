import { style } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const heroWrapper = style({
  position: 'relative',
  height: '80vh',
  width: '100vw'
})

export const image = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'right',
  transition: vars.transitions.opacity,
  zIndex: 1,
  '@media': {
    'screen and (max-width: 767px)': {
      objectPosition: 'center'
    }
  }
})
