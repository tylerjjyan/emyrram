import { style } from '@vanilla-extract/css'

export const textWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '24px 0'
})

export const headingText = style({
  maxWidth: '130px'
})

export const columnWrapper = style({
  display: 'flex',
  flexDirection: 'column'
})
