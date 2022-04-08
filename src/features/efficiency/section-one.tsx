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
import EfficiencySection11 from '@/images/efficiency/efficiency.section.1.1.jpg'

const Section01 = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={imageContainer}>
        <SectionImage
          alt="cost comparison"
          src={EfficiencySection11}
          mobileSrc={EfficiencySection11}
          customStyle={imageStyle}
        />
      </div>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text={t(
            'efficiency.section.1.1a.title',
            'Your own dedicated front-of-house team'
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
            'efficiency.section.1.1a.text',
            `Club Kitchen's in-house concierge team is here to assist with your order
            management and fulfillment. Run with a smaller back-of-house team and
            save on labour costs - we'll handle all the front-of-house operations
            like food hand-offs, building services & maintenance, as well as group
            sourcing and procurement opportunities so you can focus on cooking and
            scaling your business.`
          )}
        />
      </div>
    </div>
  )
}

export default Section01
