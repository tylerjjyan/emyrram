import { style, styleVariants, createThemeContract } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const textVars = createThemeContract({
  margin: {
    top: '0px',
    bottom: '0px'
  },
  text: {
    fontFamily: vars.fonts.heading,
    textColor: vars.colors.primary.regular,
    fontWeight: vars.fontWeights.regular,
    textAlign: vars.textAlign.left
  }
})

export const baseText = style({
  marginTop: textVars.margin.top,
  marginBottom: textVars.margin.bottom,
  fontFamily: textVars.text.fontFamily,
  fontWeight: textVars.text.fontWeight,
  color: textVars.text.textColor,
  textAlign: textVars.text.textAlign
})

export const variants = styleVariants({
  h1: [
    baseText,
    {
      fontSize: vars.fontSizes.h1,
      lineHeight: vars.lineHeights.h1
    }
  ],
  h2: [
    baseText,
    {
      fontSize: vars.fontSizes.h2,
      lineHeight: vars.lineHeights.h2
    }
  ],
  h3: [
    baseText,
    {
      fontSize: vars.fontSizes.h3,
      lineHeight: vars.lineHeights.h3
    }
  ],
  h4: [
    baseText,
    {
      fontSize: vars.fontSizes.h4,
      lineHeight: vars.lineHeights.h4
    }
  ],
  h5: [
    baseText,
    {
      fontSize: vars.fontSizes.h5,
      lineHeight: vars.lineHeights.h5
    }
  ],
  h6: [
    baseText,
    {
      fontSize: vars.fontSizes.h6,
      lineHeight: vars.lineHeights.h6
    }
  ]
})
