import { vars } from '@/theme.css'
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

  '@media': {
    'screen and (max-width: 767px)': {
      margin: '0 0 56px 0'
    }
  }
})

export const videoContainer = style({
  width: '100%',
  height: '362px',
  background: vars.colors.neutral10,
  borderRadius: '0px 80px 0px 0px',

  '@media': {
    'screen and (max-width: 767px)': {
      borderRadius: '0px 40px 0px 0px'
    }
  }
})
