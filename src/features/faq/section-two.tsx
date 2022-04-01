import React from 'react'
import { Heading, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import { sectionWrapper, textWrapper } from './section-two.css'
import { useContactForm } from '@/hooks/use-contact-form'
import { useTranslation } from 'next-i18next'

const SectionSix = (): JSX.Element => {
  const { setIsFormOpen } = useContactForm()
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text={t('faq.section.2.1a.title', 'More questions?')}
          marginBottom="40px"
          style={textSprinkles({
            typeSize: ['h2', 'h4'],
            textAlign: ['center', 'left'],
            marginBottom: ['40px', '32px']
          })}
        />
        <ArrowButton
          text={t('faq.section.2.1a.button', 'get in touch')}
          arrowVariant="right"
          variant={{ type: 'primary', size: 'large' }}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
    </div>
  )
}

export default SectionSix
