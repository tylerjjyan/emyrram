import React from 'react'
import {
  contentWrapper,
  textWrapper,
  button,
  imageStyle,
  title,
  description,
  warning
} from './section-four.css'
import { useTranslation } from 'next-i18next'
import chips from '@/images/home/home.section.4.1.png'
const SectionFour = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <div className={contentWrapper}>
        <div className={textWrapper}>
          <p className={title}>Can't decide?</p>
          <p className={description}>
            Order our 3-pack sampler featuring our most sought-after flavours:
            Original, Charcoal Smoked BBQ and Saffron Black Truffle.
          </p>
          <p className={warning}>
            Please note: Our samplers are smaller in size (1.5 oz) than our
            regular-sized chips (8.5oz).
          </p>
          <button className={button}>SOLD OUT!</button>
        </div>
        <img className={imageStyle} src={chips} />
      </div>
    </>
  )
}

export default SectionFour
