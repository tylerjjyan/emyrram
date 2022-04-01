import { Heading, textSprinkles } from '@/components/typography'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { headerWrapper, textWrapper } from './hero.css'

const Hero = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={headerWrapper}>
      <div className={textWrapper}>
        <Heading
          text={t('terms.hero.1.1a.title', 'Terms of Service')}
          variant="h1"
          style={textSprinkles({ typeSize: ['h1', 'h3'] })}
        />
      </div>
    </div>
  )
}

export default Hero
