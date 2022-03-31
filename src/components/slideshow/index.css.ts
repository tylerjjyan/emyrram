import { style } from '@vanilla-extract/css'

export const slideshow = style({
  overflow: 'hidden'
})

export const slideshowSlider = style({
  whiteSpace: 'nowrap',
  transition: 'ease 1000ms'
})

export const slide = style({
  display: 'inline-block',
  height: '100%',
  width: '100%'
})

export const slideshowImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'fill',
  objectPosition: 'center center'
})
