import React from 'react'
import HeroImage from '@/components/hero-image'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import { useContactForm } from '@/hooks/use-contact-form'
import Hero from '@/images/home/home.hero.png'
import { vars } from '@/theme.css'
import { heroTextWrapper } from './hero.css'
import { useTranslation } from 'next-i18next'

const HeroSection = (): JSX.Element => {
  const { t } = useTranslation()
  const { setIsFormOpen } = useContactForm()
  return (
    <>
      <HeroImage src={Hero}>
        <div className={heroTextWrapper}>
          <Heading
            variant="h1"
            textColor={vars.colors.pureWhite}
            text={t(
              'home.hero.1.1a.title',
              'Next generation food service has arrived'
            )}
            marginBottom="16px"
            style={textSprinkles({
              fontSize: ['h1', 'h3'],
              lineHeight: ['h1', 'h3']
            })}
          />
          <Paragraph
            variant="large"
            textColor={vars.colors.pureWhite}
            text={t(
              'home.hero.1.1a.text',
              `Club Kitchen was designed to help restaurant owners like you achieve your
          goals faster through technology and turnkey solutions with our move-in
          ready kitchens.`
            )}
            style={textSprinkles({
              fontSize: ['large', 'medium'],
              lineHeight: ['large', 'medium'],
              marginBottom: ['48px', '40px']
            })}
          />
          <ArrowButton
            text={t('home.hero.1.1a.button', 'Contact Us')}
            id="club-kitchen-contact-us-hero"
            variant={{ type: 'secondary', size: 'large' }}
            arrowVariant="right"
            onClick={() => setIsFormOpen(true)}
          />
        </div>
      </HeroImage>
    </>
  )
}

export default HeroSection
