import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'
import HeroBackground from '@/images/home/home.hero-background.png'

export const contentWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  backgroundImage: `url(${HeroBackground})`,
  padding: '40px 90px',
  '@media': {
    'screen and (max-width: 767px)': {
      padding: '50px 46px'
    },
    'screen and (max-width: 600px)': {
      flexDirection: 'column-reverse',
      padding: '50px 24px'
    }
  }
})

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.colors.pureWhite,
  width: '50%',
  justifyContent: 'center',
  maxWidth: 600,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%'
    }
  }
})

export const button = style({
  borderRadius: 8,
  background: vars.colors.neutral50,
  height: 48,
  color: vars.colors.pureWhite,
  cursor: 'not-allowed',
  width: 'fit-content',
  padding: '0 20px',
  marginTop: 20
})

export const imageStyle = style({
  width: '50%',
  objectFit: 'cover',
  maxWidth: 600,
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%'
    }
  }
})

export const title = style({
  fontFamily: 'DM Serif Display',
  fontSize: 34,
  fontWeight: 400
})

export const description = style({
  fontFamily: 'PT Serif',
  fontSize: 16
})

export const warning = style({
  fontFamily: 'PT Serif',
  fontSize: 13,
  fontStyle: 'italic'
})
