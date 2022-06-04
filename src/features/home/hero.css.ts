import { vars } from '@/theme.css'
import { keyframes, style, globalStyle } from '@vanilla-extract/css'
import HeroBackground from '@/images/home/home.hero-background.png'

const appear = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(100px, -50%)'
  },

  '75%': {
    opacity: 0.6,
    transform: 'translate(0px, -50%)'
  },

  '100%': {
    opacity: 1
  }
})

export const heroWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  height: '80vh',
  overflow: 'hidden',
  backgroundImage: `url(${HeroBackground})`,
  padding: '0px 40px',
  '@media': {
    'screen and (max-width: 935px)': {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }
})

export const heroTextWrapper = style({
  maxWidth: '720px',
  animation: `${appear} 1s`,
  display: 'flex',
  width: '50%',
  justifyContent: 'center',
  flexDirection: 'column',
  '@media': {
    'screen and (max-width: 935px)': {
      width: '100%',
      alignItems: 'center'
    }
  }
})

export const heroImage = style({
  width: '50%',
  transform: 'translateY(25%)',
  objectFit: 'contain',
  maxWidth: 800,
  '@media': {
    'screen and (max-width: 935px)': {
      width: '100vw',
      maxWidth: 600,
      maxHeight: '60%',
      objectFit: 'cover',
      objectPosition: 'top',
      transform: 'translateY(15%)'
    }
  }
})

export const title = style({
  color: vars.colors.pureWhite,
  fontFamily: 'DM Serif Display',
  fontSize: 60,
  lineHeight: '60px',
  '@media': {
    'screen and (max-width: 935px)': {
      textAlign: 'center',
      fontSize: 40,
      lineHeight: '42px'
    }
  }
})
