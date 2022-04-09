import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import { sectionWrapper, textWrapper } from './section-four.css'
import { useContactForm } from '@/hooks/use-contact-form'
import { useTranslation } from 'next-i18next'

const SectionFour = (): JSX.Element => {
  const { setIsFormOpen } = useContactForm()
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text={t('kitchens.section.4.1a.title', 'Ready to get started?')}
          marginBottom="48px"
          style={textSprinkles({
            typeSize: ['h2', 'h4'],
            textAlign: ['center', 'left']
          })}
        />
        <Paragraph
          variant="medium"
          text={t(
            'kitchens.section.4.1a.text',
            `We’d love to tell you more about what Club Kitchen can offer your
          growing business. Get in touch with us today for inquiries about
          pricing, getting started, or anything else you might be curious about.`
          )}
          marginBottom="48px"
          style={textSprinkles({ textAlign: ['center', 'left'] })}
        />
        <ArrowButton
          text={t('kitchens.section.4.1a.button', 'get in touch')}
          id="club-kitchen-kitchens-get-in-touch"
          arrowVariant="right"
          variant={{ type: 'primary', size: 'large' }}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
    </div>
  )
}

export default SectionFour
