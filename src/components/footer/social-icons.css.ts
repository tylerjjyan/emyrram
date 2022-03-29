import { style, globalStyle } from '@vanilla-extract/css'
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

export const wechatImgStyle = style({
  visibility: 'hidden',
  position: 'absolute',
  transform: 'scale(5)',
  bottom: 75
})

globalStyle(`${socialWrapper} > :not(:last-child)`, {
  marginRight: '8px'
})

globalStyle(`${socialItem}:hover > svg `, {
  opacity: 0.7,
  transition: vars.transitions.opacity
})
