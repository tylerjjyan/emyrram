import { style } from '@vanilla-extract/css'
import { vars } from '@/theme.css'
export const contentWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '72px',

  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '0 24px 0 0'
    }
  }
})

export const imageStyle = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain'
})

export const wrapper = style({
  // background: vars.colors.background.dark,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  maxWidth: 1200
})

export const itemWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  background: vars.colors.background.white,
  padding: 10,
  width: '30%',
  borderRadius: 8,
  '@media': {
    'screen and (max-width: 850px)': {
      width: '100%',
      margin: '0 0 20px 0'
    }
  }
})

export const itemImage = style({
  width: '100%',
  objectFit: 'cover'
})

export const itemName = style({
  fontSize: 16,
  color: vars.colors.background.dark,
  fontWeight: 700,
  marginBottom: 5
})

export const itemPrice = style({
  fontSize: 16,
  color: vars.colors.background.dark,
  margin: 0
})

export const itemQuantity = style({
  fontSize: 16,
  color: vars.colors.background.dark,
  marginBottom: 0
})

export const itemQuantityInput = style({
  padding: '5px 10px',
  background: vars.colors.neutral10,
  border: `1px solid ${vars.colors.neutral50}`,
  borderRadius: 4,
  color: vars.colors.neutral50,
  cursor: 'not-allowed'
})

export const button = style({
  borderRadius: 8,
  background: vars.colors.neutral50,
  height: 48,
  color: vars.colors.pureWhite,
  cursor: 'not-allowed'
})
