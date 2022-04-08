import { vars } from '@/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const heroWrapper = style({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  background: vars.colors.background.light,
  overflow: 'hidden'
})

export const contentWrapper = style({
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translate(0, -50%)',
  padding: '0 0 0 64px',
  maxWidth: '600px',

  '@media': {
    'screen and (max-width: 1280px)': {
      padding: '0 0 0 32px'
    },
    'screen and (max-width: 1096px)': {
      maxWidth: '336px'
    },
    'screen and (max-width: 767px)': {
      top: '60%',
      maxWidth: '600px',
      padding: '0 32px'
    }
  }
})

export const imageContainer = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  maxWidth: '55%',
  height: '80%',

  '@media': {
    'screen and (max-width: 1280px)': {
      maxWidth: '50%'
    },

    'screen and (max-width: 1096px)': {
      maxWidth: '550px',
      maxHeight: '458px',
      bottom: '50%',
      transform: 'translate(0, 50%)'
    },

    'screen and (max-width: 767px)': {
      height: '100%',
      width: '100%',
      maxWidth: 'unset',
      maxHeight: 'unset'
    }
  }
})

export const imageStyle = style({
  aspectRatio: '4/3',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center center',
  borderRadius: '160px 0px 0px 0px',

  '@media': {
    'screen and (max-width: 767px)': {
      borderRadius: '0'
    }
  }
})

export const imageBorder = style({
  position: 'absolute',
  top: vars.header.height,
  right: 0,
  width: '848px',
  height: '385px',
  borderRadius: '160px 0 0 0',
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='80' ry='80' stroke='%23D1D1D1FF' stroke-width='3' stroke-dasharray='12%2c 24' stroke-dashoffset='9' stroke-linecap='round'/%3e%3c/svg%3e")`,
  zIndex: 2
})

export const shapeBase = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  borderRadius: '0 80px 0 0',
  backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='80' ry='80' stroke='%23D1D1D1FF' stroke-width='3' stroke-dasharray='12%2c 24' stroke-dashoffset='9' stroke-linecap='round'/%3e%3c/svg%3e")`,
  zIndex: 3,

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none'
    }
  }
})

export const shapeVariants = styleVariants({
  top: [
    shapeBase,
    {
      width: '375px',
      height: '190px',
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='80' ry='80' stroke='%23D1D1D1FF' stroke-width='3' stroke-dasharray='12%2c 24' stroke-dashoffset='9' stroke-linecap='round'/%3e%3c/svg%3e")`,
      transform: 'translate(-50%, 50%)'
    }
  ],
  bottom: [
    shapeBase,
    {
      width: '190px',
      height: '375px',
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='80' ry='80' stroke='%23D1D1D1FF' stroke-width='3' stroke-dasharray='12%2c 24' stroke-dashoffset='9' stroke-linecap='round'/%3e%3c/svg%3e")`,
      transform: 'translate(-60%, 40%)'
    }
  ]
})
