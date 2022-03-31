import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const headerWrapper = style({
  position: 'relative',
  width: '100%',
  height: '400px',
  borderRadius: '0px 0px 160px 0px',
  background: vars.colors.neutral5
})

export const textWrapper = style({
  padding: '220px 152px 110px 152px'
})
