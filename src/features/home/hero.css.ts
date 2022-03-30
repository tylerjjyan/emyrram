import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const heroTextWrapper = style({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translate(0, -50%)',
  padding: '0px 32px',
  maxWidth: '644px',
  zIndex: vars.zIndex.header
})