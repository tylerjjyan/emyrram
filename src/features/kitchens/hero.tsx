import React from 'react'
import HeroImage from '@/components/hero-image'
import { useTranslation } from 'next-i18next'
import { ArrowButton } from '@/components/button'
import { Heading, textSprinkles } from '@/components/typography'
import { useContactForm } from '@/hooks/use-contact-form'
import { contentWrapper } from './hero.css'
import KitchensHero from '@/images/kitchens/kitchens.hero.1.1.jpg'
import { vars } from '@/theme.css'

const Hero = (): JSX.Element => {
  const { t } = useTranslation()
  const { setIsFormOpen } = useContactForm()

  return (
    <HeroImage src={KitchensHero}>
      <div className={contentWrapper}>
        <Heading
          variant="h1"
          text={t('kitchens.hero.1.1a.title', 'Kitchens')}
          textColor={vars.colors.pureWhite}
          style={textSprinkles({
            typeSize: ['h1', 'h3'],
            marginBottom: ['32px', '24px']
          })}
        />
        <ArrowButton
          variant={{ type: 'secondary', size: 'large' }}
          text={t('kitchens.hero.1.1a.button', 'Join the club')}
          arrowVariant="right"
          id="club-kitchen-kitchens-join-club"
          onClick={() => setIsFormOpen(true)}
        />
      </div>
    </HeroImage>
  )
}

export default Hero
