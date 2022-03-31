import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const accordionWrapper = style({
  width: '100%',
  borderBottom: `1px solid ${vars.colors.neutral20}`,
  transition: 'all 0.3s ease-in-out'
})

export const titleBase = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  padding: '32px 16px',
  margin: '0 auto',
  cursor: 'pointer'
})

export const contentWrapper = style({
  padding: '0 16px 32px 16px'
})

export const titleVariants = styleVariants({
  active: [titleBase],
  inactive: [titleBase]
})

export const svgWrapper = style({
  marginLeft: '20px'
})

globalStyle(`${titleVariants['active']} > svg`, {
  transition: 'all 0.3s ease-in-out',
  transform: 'rotate(-180deg)'
})
