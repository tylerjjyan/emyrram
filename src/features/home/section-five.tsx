import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import {
  sectionWrapper,
  textWrapper,
  imageContainer,
  backImageWrapper,
  forwardImageWrapper
} from './section-five.css'
import { useTranslation } from 'next-i18next'

const SectionFive = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h5"
          text={t('home.section.5.1a.title', 'Our Technology')}
          marginBottom="8px"
          style={textSprinkles({ typeSize: ['h5', 'h6'] })}
        />
        <Heading
          variant="h2"
          text={t(
            'home.section.5.1b.title',
            'Helping you achieve maximum efficiency'
          )}
          marginBottom="24px"
          style={textSprinkles({ typeSize: ['h2', 'h4'] })}
        />
        <Paragraph
          variant="medium"
          text={t(
            'home.section.5.1a.text',
            `One tablet lets you manage all your orders with a built-in operating
          system, payment solutions, and order tracking so you can streamline your
          behind-the-scenes operations. Our on-site concierge team is there to make
          sure food goes out efficiently and accurately, every time.`
          )}
        />
      </div>
      <div className={imageContainer}>
        <div className={backImageWrapper}></div>
        <div className={forwardImageWrapper}></div>
      </div>
    </div>
  )
}

export default SectionFive
