import React from 'react'
import classNames from 'classnames'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '@/theme.css'
import { variants, textVars } from './heading.css'

interface HeadingProps {
  text: string
  marginTop?: string
  marginBottom?: string
  textAlign?: string
  textColor?: string
  fontFamily?: string
  fontWeight?: string
  variant: keyof typeof variants
  style?: string
}

const Heading: React.FC<HeadingProps> = ({
  text = '',
  marginTop = '0px',
  marginBottom = '0px',
  textAlign = 'left',
  textColor = vars.colors.black,
  fontFamily = vars.fonts.heading,
  fontWeight = vars.fontWeights.regular,
  variant,
  style = ''
}) => {
  const styleWrapper = classNames(variants[variant], style)

  return (
    <p
      style={{
        ...assignInlineVars(textVars.margin, {
          top: marginTop,
          bottom: marginBottom
        }),
        ...assignInlineVars(textVars.text, {
          textAlign: textAlign,
          textColor: textColor,
          fontFamily: fontFamily,
          fontWeight: fontWeight
        })
      }}
      className={styleWrapper}
    >
      {text}
    </p>
  )
}

export default Heading
