import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import SectionImage from '@/components/section-image'
import { useTranslation } from 'next-i18next'
import {
  sectionWrapper,
  textWrapper,
  imageContainer,
  imageStyle
} from './section-one.css'
import HomeSection11 from '@/images/home/home.section.1.1.png'
import HomeSection11Mobile from '@/images/home/home.section.1.1.mobile.png'

const Section01 = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text={t(
            'home.section.1.1a.title',
            'A faster way to achieve your business goals'
          )}
          marginBottom="16px"
          style={textSprinkles({
            fontSize: ['h2', 'h4'],
            lineHeight: ['h2', 'h4']
          })}
        />
        <Paragraph
          variant="medium"
          text={t(
            'home.section.1.1a.text',
            `Our purpose-built kitchens are designed for delivery, optimally located
        in high population density areas, and at a fraction of the cost and time
        needed to open a traditional brick & mortar restaurant.`
          )}
        />
      </div>
      <div className={imageContainer}>
        <SectionImage
          alt="cost comparison"
          src={HomeSection11}
          mobileSrc={HomeSection11Mobile}
          customStyle={imageStyle}
        />
      </div>
    </div>
  )
}

export default Section01
