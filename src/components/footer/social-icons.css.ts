import { style, globalStyle, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const socialWrapper = style({
  display: 'flex'
})

export const socialItem = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '32px',
  height: '32px',
  border: `1px solid ${vars.colors.neutral80}`,
  borderRadius: '50%',
  cursor: 'pointer'
})

export const socialItemVariants = styleVariants({
  dark: [socialItem, { background: 'transparent' }],
  light: [socialItem, { background: 'transparent' }]
})

globalStyle(`${socialItemVariants['light']} svg path`, {
  fill: vars.colors.black
})

globalStyle(`${socialWrapper} > :not(:last-child)`, {
  marginRight: '8px'
})

globalStyle(`${socialItem}:hover > svg `, {
  opacity: 0.7,
  transition: vars.transitions.opacity
})
