import { vars } from '@/theme.css'
import { style, globalStyle } from '@vanilla-extract/css'

export const list = style({
  padding: 0
})

export const listItem = style({
  position: 'relative',
  display: 'flex',
  listStyleType: 'none',
  zIndex: 2
})

export const listItemIconWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '56px',
  height: '56px',
  backgroundColor: vars.colors.neutral10,
  borderRadius: '50%',
  flex: '1'
})

export const listItemDash = style({
  width: '0px',
  border: `2px dashed ${vars.colors.neutral10}`
})

export const textWrapper = style({
  marginBottom: '56px'
})

globalStyle(`${listItem} > :not(:last-child)`, {
  marginRight: '32px'
})

globalStyle(`${listItem}:not(:last-child) :before`, {
  content: "''",
  position: 'absolute',
  top: 0,
  left: '28px',
  bottom: 0,
  width: '0px',
  border: `2px dashed ${vars.colors.neutral10}`,
  zIndex: 1
})
