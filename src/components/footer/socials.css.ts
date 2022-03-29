import { style, globalStyle } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between'
})

export const copyrightWrapper = style({
  display: 'flex'
})

globalStyle(`${copyrightWrapper} > :not(:last-child)`, {
  marginRight: '16px'
})
