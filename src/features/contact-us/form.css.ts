import { style, globalStyle } from '@vanilla-extract/css'
import { formVars, vars } from '@/theme.css'

export const formContainer = style({
  padding: 0
})

export const wrapper = style({
  position: 'relative',
  width: '100%',
  marginBottom: '25px'
})

export const input = style({
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  height: 24,
  color: formVars.text.value,
  fontSize: vars.fontSizes.medium,
  padding: 0,
  borderRadius: 'none',
  border: 'none',
  borderBottom: `1px solid ${formVars.base.default}`,
  outline: 'none',
  cursor: 'text',

  ':focus': {
    borderBottom: `1px solid ${formVars.base.focus}`
  },

  ':disabled': {
    borderBottom: `1px solid ${formVars.base.disabled}`
  }
})

export const label = style({
  fontFamily: vars.fonts.body,
  fontSize: vars.fontSizes.xSmall,
  lineHeight: vars.fontSizes.xSmall,
  color: vars.colors.neutral50
})

export const buttonBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  boxSizing: 'border-box',
  borderRadius: '24px',
  padding: '8px 32px',
  textTransform: 'uppercase',
  fontFamily: vars.fonts.heading,
  color: vars.colors.pureWhite,
  background: vars.colors.neutral80,
  border: `1px solid ${vars.colors.neutral80}`,
  margin: `0 !important`,

  ':hover': {
    color: vars.colors.black,
    background: vars.colors.pureWhite,
    border: `1px solid ${vars.colors.black}`
  },

  ':disabled': {
    color: vars.colors.neutral5,
    background: vars.colors.neutral50,
    border: `1px solid ${vars.colors.neutral50}`
  }
})

globalStyle(`${input}:placeholder-shown + label`, {
  visibility: 'hidden',
  zIndex: -1,
  transition: ' 0.2s ease-in-out'
})

globalStyle(`${input}:not(:placeholder-shown) + label`, {
  visibility: 'visible',
  opacity: 1,
  transform: 'translateY(-40px)',
  transition: '0.2s ease-in-out transform'
})

globalStyle(`${input}:focus:not(:placeholder-shown) + label`, {
  visibility: 'visible',
  opacity: 1,
  transform: 'translateY(-40px)',
  transition: '0.2s ease-in-out transform'
})
