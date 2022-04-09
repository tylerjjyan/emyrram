import React from 'react'
import { useTranslation } from 'next-i18next'
import { ArrowButton } from '@/components/button'
import SectionImage from '@/components/section-image'
import { useContactForm } from '@/hooks/use-contact-form'
import EfficiencyHero from '@/images/efficiency/efficiency.hero.1.1.jpg'
import { Heading, textSprinkles } from '@/components/typography'
import {
  heroWrapper,
  contentWrapper,
  imageContainer,
  imageStyle,
  shapeVariants
} from './hero.css'
import useMediaQuery from '@/hooks/use-media-query'
import { vars } from '@/theme.css'

const Hero = (): JSX.Element => {
  const { t } = useTranslation()
  const { setIsFormOpen } = useContactForm()
  const displayMobile = useMediaQuery(`(max-width: 767px)`)
  return (
    <div className={heroWrapper}>
      <div className={imageContainer}>
        <SectionImage
          src={EfficiencyHero}
          mobileSrc={EfficiencyHero}
          alt="efficiency hero"
          customStyle={imageStyle}
        />
      </div>
      <div className={shapeVariants['top']}></div>
      <div className={shapeVariants['bottom']}></div>

      <div className={contentWrapper}>
        <Heading
          variant="h1"
          text={t(
            'efficiency.hero.1.1a.title',
            'Helping you achieve maximum efficiency'
          )}
          textColor={displayMobile ? vars.colors.pureWhite : undefined}
          style={textSprinkles({
            typeSize: { desktop: 'h3' },
            marginBottom: ['32px', '24px']
          })}
        />
        <ArrowButton
          variant={{
            type: displayMobile ? 'secondary' : 'primary',
            size: 'large'
          }}
          text={t('efficiency.hero.1.1a.button', 'Join the club')}
          arrowVariant="right"
          id="club-kitchen-efficiency-join-club"
          onClick={() => setIsFormOpen(true)}
        />
      </div>
    </div>
  )
}

export default Hero
