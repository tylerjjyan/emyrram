import { style } from '@vanilla-extract/css'
import { vars } from '@/theme.css'

export const termsSectionWrapper = style({
  marginBottom: '32px'
})

export const textLink = style({
  color: vars.colors.link,
  textDecoration: 'underline'
})
