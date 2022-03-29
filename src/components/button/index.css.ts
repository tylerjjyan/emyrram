import { vars } from '@/theme.css'
import { style, globalStyle } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const buttonBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  boxSizing: 'border-box',
  borderRadius: '24px',
  padding: '8px 32px',
  textTransform: 'uppercase',

  ':hover': {
    color: vars.colors.black,
    background: vars.colors.pureWhite,
    border: `1px solid ${vars.colors.black}`
  }
})

export const primaryBase = style({
  color: vars.colors.pureWhite,
  background: vars.colors.neutral80,
  border: `1px solid ${vars.colors.neutral80}`,

  ':disabled': {
    color: vars.colors.neutral5,
    background: vars.colors.neutral50,
    border: `1px solid ${vars.colors.neutral50}`
  }
})

export const secondaryBase = style({
  color: vars.colors.black,
  background: vars.colors.neutral10,
  border: `1px solid ${vars.colors.neutral10}`,

  ':disabled': {
    color: vars.colors.neutral50,
    background: vars.colors.neutral10,
    border: `1px solid ${vars.colors.neutral10}`
  }
})

export const button = recipe({
  base: buttonBase,
  variants: {
    type: {
      primary: primaryBase,
      secondary: secondaryBase
    },
    size: {
      large: {
        minWidth: '183px',
        height: '38px',
        fontSize: vars.fontSizes.medium,
        lineHeight: vars.lineHeights.medium
      },
      small: {
        width: '153px',
        height: '32px',
        fontSize: vars.fontSizes.xSmall,
        lineHeight: vars.lineHeights.xSmall
      }
    }
  },

  defaultVariants: {
    type: 'primary',
    size: 'large'
  }
})

globalStyle(`${buttonBase}`, {
  width: '-moz-fit-content'
})

globalStyle(`${buttonBase}`, {
  width: 'intrinsic'
})

globalStyle(`${primaryBase} svg path`, {
  fill: vars.colors.pureWhite
})

globalStyle(`${primaryBase}:hover svg path`, {
  fill: vars.colors.black
})

globalStyle(`${secondaryBase} svg path`, {
  fill: vars.colors.black
})

globalStyle(`${secondaryBase}:hover svg path`, {
  fill: vars.colors.black
})

export const startIconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px'
})

export const endIconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '10px'
})

export type ButtonVariants = RecipeVariants<typeof button>
