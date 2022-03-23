import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from './theme.css'

const responsiveProperties = defineProperties({
  conditions: {
    phone: { '@media': 'screen and (max-width: 599px)' },
    ipadMini: { '@media': 'screen and (max-width: 767px)' },
    tablet: { '@media': 'screen and (max-width: 935px)' },
    desktop: { '@media': 'screen and (max-width: 1096px)' },
    default: {}
  },
  defaultCondition: 'default',
  properties: {
    display: ['none', 'flex'],
    flexDirection: ['row', 'column'],
    alignItems: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around'
    ],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around'
    ],
    // paddingTop: vars.space,
    // paddingBottom: vars.space,
    // paddingLeft: vars.space,
    // paddingRight: vars.space,
    width: ['100vw'],
    height: ['100vh'],
    fontFamily: vars.fonts,
    fontSize: vars.fontSizes,
    lineHeight: vars.lineHeights,
    textAlign: ['center', 'left', 'right']
  },
  shorthands: {
    // padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    // paddingX: ['paddingLeft', 'paddingRight'],
    // paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    typeSize: ['fontSize', 'lineHeight']
  }
})

export const sprinkles = createSprinkles(responsiveProperties)
