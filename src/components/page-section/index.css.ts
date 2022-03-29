import { style, styleVariants, createThemeContract } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const containerVars = createThemeContract({
  container: {
    maxWidth: '1440px'
  }
})

export const outerWrapper = style({
  width: '100%'
})

export const outerVariants = styleVariants({
  white: [
    outerWrapper,
    {
      background: vars.colors.background.white
    }
  ],
  light: [
    outerWrapper,
    {
      background: vars.colors.background.light
    }
  ],
  dark: [
    outerWrapper,
    {
      background: vars.colors.background.dark
    }
  ]
})

export const innerWrapper = style({
  maxWidth: containerVars.container.maxWidth,
  margin: '0 auto'
})
