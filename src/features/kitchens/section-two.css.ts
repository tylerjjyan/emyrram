import { style } from '@vanilla-extract/css'

export const sectionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column'
    }
  }
})

export const iconListWrapper = style({
  maxWidth: '600px',
  paddingTop: '128px',
  flex: 1,

  '@media': {
    'screen and (max-width: 767px)': {
      paddingTop: '0',
      maxWidth: 'unset'
    }
  }
})

export const imageContainer = style({
  width: '100%',
  marginLeft: '48px',
  flex: 1,

  '@media': {
    'screen and (max-width: 767px)': {
      margin: '0 0 56px 0'
    }
  }
})

export const imageStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0 0 80px 0'
})
