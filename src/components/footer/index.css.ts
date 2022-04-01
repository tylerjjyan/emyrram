import { vars } from '@/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const footerWrapper = style({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '56px 64px',
  background: vars.colors.black,

  '@media': {
    'screen and (max-width: 767px)': {
      padding: '56px 24px'
    }
  }
})

export const upperWrapper = style({
  display: 'flex',
  paddingBottom: '48px',
  marginBottom: '32px',
  borderBottom: `1px solid ${vars.colors.neutral60}`,

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column'
    }
  }
})

export const contentWrapper = style({
  display: 'flex',

  '@media': {
    'screen and (max-width: 767px)': {
      marginTop: '40px'
    }
  }
})

export const lowerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between'
})

globalStyle(`${upperWrapper} > :not(:last-child)`, {
  marginRight: '64px'
})

globalStyle(`${contentWrapper} > :not(:last-child)`, {
  marginRight: '64px'
})

export const customTextStyle = style({
  textTransform: 'uppercase',
  fontFamily: vars.fonts.heading
})

export const emailLinkStyle = style({
  textDecoration: 'none',
  cursor: 'pointer',

  ':hover': {
    opacity: 0.7,
    transition: vars.transitions.opacity
  }
})
