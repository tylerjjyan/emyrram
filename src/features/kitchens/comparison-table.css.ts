import { vars } from '@/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const tableWrapper = style({
  width: '100%',
  borderCollapse: 'collapse'
})

export const tableHeaderCell = style({
  padding: '24px',
  maxWidth: '380px'
})

export const tableCell = style({
  padding: '24px',
  maxWidth: '380px'
})

export const tableBody = style({})

globalStyle(`${tableBody} tr:nth-child(odd)`, {
  background: vars.colors.neutral5,
  borderTop: `1px solid ${vars.colors.neutral20}`,
  borderBottom: `1px solid ${vars.colors.neutral20}`
})
