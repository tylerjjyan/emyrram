import { vars } from '@/theme.css'
import { style, globalStyle } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    'screen and (max-width: 599px)': {
      flexDirection: 'column'
    }
  }
})

export const copyrightWrapper = style({
  display: 'flex',

  '@media': {
    'screen and (max-width: 599px)': {
      marginBottom: '8px'
    }
  }
})

globalStyle(`${copyrightWrapper} > :not(:last-child)`, {
  marginRight: '16px'
})

export const customTextStyle = style({
  textDecoration: 'none',
  cursor: 'pointer',

  ':hover': {
    opacity: 0.7,
    transition: vars.transitions.opacity
  }
})
