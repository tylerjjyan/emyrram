import React from 'react'
import classNames from 'classnames'
import { defaultStyle } from './index.css'

interface ImageProps {
  src: string
  mobileSrc?: string
  alt: string
  customStyle?: string
}

const SectionImage: React.FC<ImageProps> = ({
  src,
  mobileSrc,
  alt,
  customStyle
}): JSX.Element => {
  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 767px)" />
      <img
        src={src}
        alt={alt}
        className={classNames(defaultStyle, customStyle)}
      />
    </picture>
  )
}

export default SectionImage
