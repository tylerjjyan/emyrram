import { vars } from '@/theme.css'
import { style } from '@vanilla-extract/css'

export const listWrapper = style({
  listStyleType: '-'
})

export const privacySectionWrapper = style({
  marginBottom: '32px'
})

export const textLink = style({
  color: vars.colors.link,
  textDecoration: 'underline'
})
