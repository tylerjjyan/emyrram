import { style, styleVariants, createThemeContract } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const textVars = createThemeContract({
  margin: {
    top: '0px',
    bottom: '0px'
  },
  text: {
    fontFamily: vars.fonts.body,
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
  large: [
    baseText,
    {
      fontSize: vars.fontSizes.large,
      lineHeight: vars.lineHeights.large
    }
  ],
  medium: [
    baseText,
    {
      fontSize: vars.fontSizes.medium,
      lineHeight: vars.lineHeights.medium
    }
  ],
  small: [
    baseText,
    {
      fontSize: vars.fontSizes.small,
      lineHeight: vars.lineHeights.small
    }
  ],
  xSmall: [
    baseText,
    {
      fontSize: vars.fontSizes.xSmall,
      lineHeight: vars.lineHeights.xSmall
    }
  ]
})

export const textAlignVariants = styleVariants({
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  }
})
