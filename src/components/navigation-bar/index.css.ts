import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/theme.css'

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
    borderColor: vars.colors.black,

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
    borderColor: vars.colors.pureWhite,

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
  width: 'fit-content',
  fontSize: vars.fontSizes.medium,
  lineHeight: vars.lineHeights.medium,
  fontFamily: vars.fonts.heading,
  textTransform: 'uppercase',
  textDecoration: 'none',

  selectors: {
    '&:not(:last-child)': {
      marginRight: '16px'
    }
  }
})

globalStyle(`${itemBase}`, {
  width: '-moz-fit-content'
})

globalStyle(`${itemBase}`, {
  width: 'intrinsic'
})

export const navigationItem = recipe({
  base: itemBase,
  variants: {
    horizontal: {
      true: {
        letterSpacing: '0.08em'
      },
      false: {
        fontSize: vars.fontSizes.h5,
        lineHeight: vars.fontSizes.h5,
        letterSpacing: '0.005em',

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
        borderBottom: `solid 2px`,

        ':after': {
          display: 'none'
        }
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
