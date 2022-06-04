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
      padding: '0px',
      paddingTop: vars.header.height
    }
  }
})

export const heroTextWrapper = style({
  maxWidth: '720px',
  animation: `${appear} 1s`,
  flex: 0.8,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  '@media': {
    'screen and (max-width: 935px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '30%'
    }
  }
})

globalStyle(`${heroTextWrapper} > p`, {
  '@media': {
    'screen and (max-width: 935px)': {
      textAlign: 'center'
    }
  }
})

export const heroImage = style({
  flex: 1,
  width: '100%',
  transform: 'translateY(25%)',
  objectFit: 'contain',
  maxWidth: 800,
  '@media': {
    'screen and (max-width: 935px)': {}
  }
})
