import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/theme.css'

export const navigationWrapper = style({
  display: 'flex'
})

export const navigationWrapperVariants = styleVariants({
  horizontal: {
    display: 'flex',
    flexDirection: 'row'
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column'
  }
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
    horizontal: {
      true: {},
      false: {
        fontSize: vars.fontSizes.h5,
        lineHeight: vars.fontSizes.h5,
        textTransform: 'none',
        textDecoration: 'none',

        selectors: {
          '&:not(:last-child)': {
            margin: '0 0 40px 0'
          }
        }
      }
    },
    active: {
      true: {
        borderBottom: `solid 2px ${vars.colors.pureWhite}`
      },
      false: {
        borderBottom: 'none'
      }
    }
  },
  defaultVariants: {
    horizontal: true,
    active: false
  }
})

globalStyle(`${itemBase}:hover:after`, {
  transform: 'scaleX(1)'
})
