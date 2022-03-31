import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const buttonBase = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  background: 'none',
  minWidth: '35px',
  padding: 0,
  margin: '0 20px',

  fontSize: vars.fontSizes.medium,
  fontWeight: vars.fontWeights.regular,
  textAlign: 'center',

  animation: `fadeIn 2s`,
  cursor: 'pointer',

  ':hover': {
    opacity: 0.5
  },

  '@media': {
    'screen and (max-width: 935px)': {
      margin: '0 10px'
    }
  }
})

export const buttonVariants = styleVariants({
  dark: [
    buttonBase,
    {
      color: vars.colors.black
    }
  ],
  light: [
    buttonBase,
    {
      color: vars.colors.pureWhite
    }
  ]
})
