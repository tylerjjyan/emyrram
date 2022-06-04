import {
  defineProperties,
  createSprinkles,
  ConditionalValue
} from '@vanilla-extract/sprinkles'
import { vars } from '@/theme.css'

const space = [
  '0px',
  '24px',
  '32px',
  '48px',
  '60px',
  '64px',
  '72px',
  '80px',
  '112px',
  '128px',
  '152px'
]

const responsiveProperties = defineProperties({
  conditions: {
    default: {},
    largeDesktop: { '@media': 'screen and (max-width: 1280px)' },
    ipadMini: { '@media': 'screen and (max-width: 767px)' },
    phone: { '@media': 'screen and (max-width: 599px)' }
  },
  defaultCondition: 'ipadMini',
  responsiveArray: ['default', 'largeDesktop', 'ipadMini', 'phone'],
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
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    fontFamily: vars.fonts,
    fontSize: vars.fontSizes,
    lineHeight: vars.lineHeights,
    textAlign: ['center', 'left', 'right'],
    maxWidth: ['unset']
  },
  shorthands: {
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    typeSize: ['fontSize', 'lineHeight']
  }
})

export const sprinkles = createSprinkles(responsiveProperties)
export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>
