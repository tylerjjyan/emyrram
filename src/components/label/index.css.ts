import { style } from '@vanilla-extract/css'
import { formVars, vars } from '@/theme.css'

export const label = style({
  display: 'block',
  position: 'absolute',
  opacity: 0,
  bottom: '10px',
  color: formVars.text.label,
  fontFamily: vars.fonts.body,
  fontSize: vars.fontSizes.medium,
  lineHeight: vars.fontSizes.medium
})
