import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const sectionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',

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
  maxWidth: '536px',
  width: '100%',

  '@media': {
    'screen and (max-width: 767px)': {
      maxWidth: 'unset',
      marginBottom: '80px'
    },

    'screen and (max-width: 599px)': {
      maxWidth: 'unset',
      marginBottom: '40px'
    }
  }
})

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: '417px',

  '@media': {
    'screen and (max-width: 767px)': {
      height: '453px'
    },
    'screen and (max-width: 375px)': {
      height: '243px'
    }
  }
})

export const backImageWrapper = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '64%',
  height: '85%',
  background: vars.colors.neutral5,
  borderRadius: '80px 0px 0px 0px',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 767px)': {
      borderRadius: '40px 0px 0px 0px'
    }
  }
})

export const forwardImageWrapper = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '51%',
  height: '73%',
  background: vars.colors.neutral10,
  borderRadius: '0px 0px 0px 80px',
  zIndex: 1,
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 767px)': {
      borderRadius: '0px 0px 0px 40px'
    }
  }
})

export const imageStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})
