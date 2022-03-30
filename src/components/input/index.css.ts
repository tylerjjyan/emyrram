import { style, globalStyle } from '@vanilla-extract/css'
import { vars, formVars } from '@/theme.css'

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
  },

  ':invalid': {
    borderBottom: `1px solid ${formVars.base.error}`
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
