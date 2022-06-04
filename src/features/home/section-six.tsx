import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import { sectionWrapper, textWrapper } from './section-six.css'
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
          text={t('home.section.6.1a.title', 'Ready to get started?')}
          marginBottom="16px"
          style={textSprinkles({
            typeSize: ['h2', 'h4'],
            textAlign: ['center', 'left']
          })}
        />
        <Paragraph
          variant="medium"
          text={t(
            'home.section.6.1a.text',
            `We’d love to tell you more about what EmyrRam can offer your
          growing business. Get in touch with us today for inquiries about
          pricing, getting started, or anything else you might be curious about.`
          )}
          marginBottom="48px"
          style={textSprinkles({ textAlign: ['center', 'left'] })}
        />
        <ArrowButton
          text={t('home.section.6.1a.button', 'get in touch')}
          id="club-kitchen-get-in-touch"
          arrowVariant="right"
          variant={{ type: 'primary', size: 'large' }}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
    </div>
  )
}

export default SectionSix
