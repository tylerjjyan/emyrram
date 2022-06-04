import { vars } from '@/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '20px 90px',
  background: vars.colors.background.dark,
  transform: 'translateX(calc(50vw - 50%))',
  maxWidth: 1400,
  '@media': {
    'screen and (max-width: 767px)': {
      padding: '56px 24px'
    },

    'screen and (max-width: 600px)': {
      flexDirection: 'column'
    }
  }
})

export const footerWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  marginBottom: 50,
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column'
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

export const description = style({
  color: vars.colors.pureWhite
})

export const logoWrapper = style({
  width: '50%',
  paddingRight: 50,

  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%'
    }
  }
})
