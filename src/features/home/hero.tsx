import React from 'react'
import { useTranslation } from 'next-i18next'
import { ArrowButton } from '@/components/button'
import Hero from '@/images/home/home.hero.png'
import { heroTextWrapper, heroWrapper, heroImage, title } from './hero.css'

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
          <ArrowButton
            text={t('home.hero.1.1a.button', 'Contact Us')}
            id="club-kitchen-contact-us-hero"
            variant={{ type: 'secondary', size: 'large' }}
            arrowVariant="right"
            onClick={goToViolation}
          />
        </div>
        <img src={Hero} className={heroImage} />
      </div>
    </>
  )
}

export default HeroSection
