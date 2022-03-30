import { style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/theme.css'

export const wrapper = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    zIndex: vars.zIndex.header
  },
  variants: {
    open: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: vars.colors.neutral5
      },
      false: {
        height: '100%'
      }
    }
  }
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
    zIndex: vars.zIndex.header
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
        background: vars.colors.neutral10
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

export type HeaderVariants = RecipeVariants<typeof header>

export const navigationWrapper = style({
  display: 'flex',
  alignItems: 'center'
})

export const customButtonStyle = style({
  marginLeft: '16px'
})
