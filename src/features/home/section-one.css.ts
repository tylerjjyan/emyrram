import { style } from '@vanilla-extract/css'

export const sectionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column'
    }
  }
})

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '48px',
  flex: 1,

  '@media': {
    'screen and (max-width: 767px)': {
      margin: '0 0 56px 0'
    }
  }
})

export const imageContainer = style({
  width: '100%',
  flex: 1
})

export const imageStyle = style({
  width: '100%',
  height: '100%',
  minHeight: '362px',
  objectFit: 'contain'
})
