import { style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/theme.css'

export const wrapper = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  background: vars.colors.neutral5,
  zIndex: vars.zIndex.header
})

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
  height: '100px',
  padding: '24px 64px'
})

export const headerVariants = styleVariants({
  transparent: [
    headerContainer,
    {
      background: vars.colors.transparent
    }
  ],
  primary: [
    headerContainer,
    {
      background: vars.colors.pureWhite
    }
  ],
  secondary: [
    headerContainer,
    {
      background: vars.colors.neutral10
    }
  ]
})

export const header = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    height: '100px',
    padding: '24px 64px',
    zIndex: vars.zIndex.header,
    transition: 'background 0.5s ease-in-out',

    '@media': {
      'screen and (max-width: 767px)': {
        padding: '24px'
      },
      'screen and (max-width: 599px)': {
        height: '60px',
        padding: '8px 24px'
      }
    }
  },
  variants: {
    background: {
      transparent: {
        background: vars.colors.transparent
      },
      primary: {
        background: vars.colors.pureWhite
      },
      secondary: {
        background: vars.colors.neutral5
      }
    },
    position: {
      fixed: {
        position: 'fixed',
        top: 0,
        left: 0
      },
      static: {
        position: 'static'
      },
      sticky: {
        position: 'sticky',
        top: 0,
        left: 0
      }
    }
  },
  defaultVariants: {
    background: 'transparent',
    position: 'sticky'
  }
})

export const logoWrapper = style({
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 599px)': {
      transform: 'scale(0.7)'
    }
  },

  ':hover': {
    opacity: 0.7,
    transition: vars.transitions.opacity
  }
})

export type HeaderVariants = RecipeVariants<typeof header>

export const navigationWrapper = style({
  display: 'flex',
  alignItems: 'center'
})

export const customButtonStyle = style({
  marginLeft: '16px'
})

export const customButtion = style({
  margin: '32px 0'
})

export const contentWrapper = style({
  padding: '32px 24px'
})
