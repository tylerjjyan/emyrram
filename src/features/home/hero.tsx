import React from 'react'
import { useTranslation } from 'next-i18next'
import { vars } from '@/theme.css'
import { Heading, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import Hero from '@/images/home/home.hero.png'
import { heroTextWrapper, heroWrapper, heroImage } from './hero.css'

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
          <Heading
            variant="h1"
            textColor={vars.colors.pureWhite}
            text={t(
              'home.hero.1.1a.title',
              'A taste of Canada’s best potato chips'
            )}
            marginBottom="16px"
            style={textSprinkles({
              fontSize: ['h1', 'h3'],
              lineHeight: ['h1', 'h3']
            })}
          />
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
