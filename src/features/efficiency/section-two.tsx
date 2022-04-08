import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import SectionImage from '@/components/section-image'
import { useTranslation } from 'next-i18next'
import {
  sectionWrapper,
  textWrapper,
  imageContainer,
  imageStyle
} from './section-two.css'
import EfficiencySection21 from '@/images/efficiency/efficiency.section.2.1.png'

const Section01 = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text={t('efficiency.section.2.1a.title', 'Come join the club')}
          marginBottom="16px"
          style={textSprinkles({
            fontSize: ['h2', 'h4'],
            lineHeight: ['h2', 'h4']
          })}
        />
        <Paragraph
          variant="medium"
          text={t(
            'efficiency.section.2.1a.text',
            `In addition to providing a premier address with plenty of walk-in
            traffic, Club Kitchen has partnered with top food-delivery service
            providers like Uber Eats, DoorDash, and SkipTheDishes. This means access
            to over 100,000 potential customers within a 3km delivery radius,
            ensuring fresher food and lower delivery costs thanks to reduced travel
            time. Club Kitchen has also partnered with industry-leading service
            providers like Sysco, Gordon Food Service, Foodbuy Canada, and more to
            offer preferred pricing and cost savings to help lower your operating
            expenses.`
          )}
        />
      </div>
      <div className={imageContainer}>
        <SectionImage
          alt="cost comparison"
          src={EfficiencySection21}
          mobileSrc={EfficiencySection21}
          customStyle={imageStyle}
        />
      </div>
    </div>
  )
}

export default Section01
