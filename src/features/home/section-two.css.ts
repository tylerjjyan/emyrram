import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const sectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 885,
  margin: 'auto',
  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column'
    }
  }
})

export const headerText = style({
  color: vars.colors.pureWhite,
  fontSize: 34,
  textAlign: 'center',
  marginBottom: 10,
  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: 20
    }
  }
})

export const bodyText = style({
  color: vars.colors.pureWhite,
  fontSize: 16,
  textAlign: 'center',
  margin: 0,
  fontWeight: 0,
  fontFamily: 'PT Serif'
})

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginRight: '48px',
  maxWidth: '470px',
  width: '100%',

  '@media': {
    'screen and (max-width: 1096px)': {
      marginRight: '24px'
    },
    'screen and (max-width: 767px)': {
      maxWidth: 'unset',
      margin: '0 0 56px 0'
    }
  }
})

export const iconListWrapper = style({
  maxWidth: '600px',
  width: '100%',

  '@media': {
    'screen and (max-width: 767px)': {
      maxWidth: 'unset'
    }
  }
})
