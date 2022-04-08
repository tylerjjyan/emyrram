import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const accordionWrapper = style({
  width: '100%',
  borderBottom: `1px solid ${vars.colors.neutral20}`
})

export const titleBase = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  padding: '32px 16px',
  margin: '0 auto',
  cursor: 'pointer',

  ':hover': {
    // opacity: 0.7,
    background: vars.colors.background.light
  }
})

export const contentWrapper = styleVariants({
  active: [
    {
      padding: '0 16px 32px 16px',
      transition: 'all 0.2s ease-out',
      height: '100%',
      opacity: 1
    }
  ],
  inactive: [
    {
      padding: '0 16px',
      transition: 'all 0.2s cubic-bezier(0.6, 0.7, 1, 0.7)',
      height: 0,
      opacity: 0,
      overflow: 'hidden'
    }
  ]
})

export const titleVariants = styleVariants({
  active: [titleBase],
  inactive: [titleBase]
})

export const svgWrapper = style({
  marginLeft: '20px',

  '@media': {
    'screen and (max-width: 767px)': {
      marginLeft: '10px'
    }
  }
})

globalStyle(`${titleVariants['active']} svg`, {
  transform: 'rotate(-180deg)',
  transition: 'all 0.2s ease-in-out'
})

globalStyle(`${titleVariants['inactive']} svg`, {
  transform: 'rotate(0deg)',
  transition: 'all 0.2s ease-in-out'
})
