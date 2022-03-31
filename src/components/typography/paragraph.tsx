import React from 'react'
import classNames from 'classnames'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '@/theme.css'
import { variants, textVars } from './paragraph.css'

interface ParagraphProps {
  text?: string
  marginTop?: string
  marginBottom?: string
  textAlign?: string
  textColor?: string
  fontFamily?: string
  fontWeight?: string
  variant: keyof typeof variants
  style?: string
}

const Paragraph: React.FC<ParagraphProps> = ({
  text = '',
  marginTop = '0px',
  marginBottom = '0px',
  textAlign = 'left',
  textColor = vars.colors.black,
  fontFamily = vars.fonts.body,
  fontWeight = vars.fontWeights.regular,
  variant,
  style = '',
  children
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
      {children}
    </p>
  )
}

export default Paragraph
