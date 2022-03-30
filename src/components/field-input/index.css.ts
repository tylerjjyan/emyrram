import { formVars, vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'relative',
  width: '100%',
  height: 55
})

export const error = style({
  fontSize: vars.fontSizes.xSmall,
  lineHeight: vars.fontSizes.xSmall,
  color: formVars.text.error,
  marginTop: '2px'
})

export const helperText = style({
  fontSize: vars.fontSizes.xSmall,
  lineHeight: vars.fontSizes.xSmall,
  color: formVars.text.label,
  marginTop: '2px'
})
