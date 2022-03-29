import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/theme.css'

export const navigationWrapper = style({
  display: 'flex'
})

export const itemVariants = styleVariants({
  dark: {
    color: vars.colors.black,

    ':after': {
      display: 'block',
      content: "''",
      borderBottom: `solid 2px ${vars.colors.black}`,
      transform: 'scaleX(0)',
      transition: 'transform 250ms ease-in-out'
    }
  },
  light: {
    color: vars.colors.pureWhite,

    ':after': {
      display: 'block',
      content: "''",
      borderBottom: `solid 2px ${vars.colors.pureWhite}`,
      transform: 'scaleX(0)',
      transition: 'transform 250ms ease-in-out'
    }
  }
})

const itemBase = style({
  fontSize: vars.fontSizes.medium,
  lineHeight: vars.lineHeights.medium,
  textTransform: 'uppercase',
  textDecoration: 'none',
  paddingBottom: '1px',

  selectors: {
    '&:not(:last-child)': {
      marginRight: '16px'
    }
  }
})

export const navigationItem = recipe({
  base: itemBase,
  variants: {
    active: {
      true: {
        borderBottom: `solid 2px ${vars.colors.pureWhite}`
      },
      false: {
        borderBottom: 'none'
      }
    }
  }
})

globalStyle(`${itemBase}:hover:after`, {
  transform: 'scaleX(1)'
})
