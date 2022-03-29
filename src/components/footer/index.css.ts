import { vars } from '@/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const footerWrapper = style({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '56px 64px',
  background: vars.colors.black
})

export const upperWrapper = style({
  display: 'flex',
  paddingBottom: '48px',
  marginBottom: '32px',
  borderBottom: `1px solid ${vars.colors.neutral60}`
})

export const contentWrapper = style({
  display: 'flex'
})

export const lowerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between'
})

globalStyle(`${upperWrapper} > :not(:last-child)`, {
  marginRight: '64px'
})

globalStyle(`${contentWrapper} > :not(:last-child)`, {
  marginRight: '64px'
})

export const customTextStyle = style({
  textTransform: 'uppercase'
})
