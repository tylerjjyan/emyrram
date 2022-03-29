import classNames from 'classnames'
import React from 'react'
import { CustomButtonProps } from './types'
import { button, startIconWrapper, endIconWrapper } from './index.css'

const Button: React.FC<CustomButtonProps> = ({
  text,
  variant,
  customStyle,
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...rest
}): JSX.Element => {
  const customClassName = classNames(button(variant), customStyle)

  return (
    <button className={customClassName} {...rest}>
      {StartIcon && (
        <div className={startIconWrapper}>
          <StartIcon />
        </div>
      )}
      {text}
      {EndIcon && (
        <div className={endIconWrapper}>
          <EndIcon />
        </div>
      )}
    </button>
  )
}

export default Button
