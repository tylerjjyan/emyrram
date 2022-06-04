import React from 'react'
import { useTranslation } from 'next-i18next'
import { ArrowButton } from '@/components/button'
import Hero from '@/images/home/home.hero.png'
import {
  heroTextWrapper,
  heroWrapper,
  heroImage,
  title,
  button
} from './hero.css'

const HeroSection = (): JSX.Element => {
  const { t } = useTranslation()

  const goToViolation = () => {
    const shop = document.getElementById('shop')

    shop?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  return (
    <>
      <div className={heroWrapper}>
        <div className={heroTextWrapper}>
          <p className={title}>
            {t('home.hero.1.1a.title', 'A taste of Canada’s best potato chips')}
          </p>
          <button className={button} onClick={goToViolation}>
            {t('home.hero.1.1a.button', 'Contact Us')}
          </button>
        </div>
        <img src={Hero} className={heroImage} />
      </div>
    </>
  )
}

export default HeroSection
