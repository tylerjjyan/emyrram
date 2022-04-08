import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import SectionImage from '@/components/section-image'
import { useTranslation } from 'next-i18next'
import {
  sectionWrapper,
  textWrapper,
  imageContainer,
  imageStyle
} from './section-three.css'
import EfficiencySection31 from '@/images/efficiency/efficiency.section.3.1.png'

const Section01 = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={imageContainer}>
        <SectionImage
          alt="cost comparison"
          src={EfficiencySection31}
          mobileSrc={EfficiencySection31}
          customStyle={imageStyle}
        />
      </div>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text={t(
            'efficiency.section.3.1a.title',
            'Efficient order management'
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
            'efficiency.section.3.1a.text',
            `Manage delivery orders from multiple platforms with a single,
            centralized tablet. Through our strategic partnerships, Club Kitchen
            provides operators with cutting-edge POS technology while allowing you
            to save significantly on monthly costs. You'll be in complete control of
            your data including payment solutions, order tracking & more.`
          )}
        />
      </div>
    </div>
  )
}

export default Section01
