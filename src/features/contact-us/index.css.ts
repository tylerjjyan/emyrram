import { style } from '@vanilla-extract/css'

export const wrapper = style({
  width: '100%',
  padding: '20px'
})

export const inputWrapper = style({
  position: 'relative',
  margin: '20px auto'
})

export const sidebarContainer = style({
  width: '100vw',
  padding: '48px 64px',

  '@media': {
    'screen and (max-width: 1096px)': {
      padding: '48px'
    },
    'screen and (max-width: 599px)': {
      padding: '24px'
    }
  }
})

export const formWrapper = style({
  display: 'flex',
  flexDirection: 'column'
})

export const svgWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginBottom: '80px',

  '@media': {
    'screen and (max-width: 1096px)': {
      marginBottom: '40px'
    }
  }
})
