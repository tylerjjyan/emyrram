import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from '@/theme.css'

const margins = ['0px', '8px', '12px', '16px', '32px', '40px', '48px', '56px']

const responsiveProperties = defineProperties({
  conditions: {
    phone: { '@media': '(max-width: 599px)' },
    ipadMini: { '@media': '(max-width: 767px)' },
    largeDesktop: { '@media': '(max-width: 1280px)' },
    default: {}
  },
  defaultCondition: 'default',
  responsiveArray: ['default', 'phone'],
  properties: {
    marginTop: margins,
    marginBottom: margins,
    fontFamily: vars.fonts,
    fontSize: vars.fontSizes,
    lineHeight: vars.lineHeights,
    textAlign: ['center', 'left', 'right']
  },
  shorthands: {
    typeSize: ['fontSize', 'lineHeight']
  }
})

export const textSprinkles = createSprinkles(responsiveProperties)
