import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import SectionImage from '@/components/section-image'
import { Button } from '@/components/button'
import { useTranslation } from 'next-i18next'
import {
  sectionWrapper,
  textWrapper,
  imageContainer,
  imageStyle
} from './section-one.css'
import KitchensSection11 from '@/images/kitchens/kitchens.section.1.1.jpg'
import { ReactComponent as GlobeSVG } from './icons/globe.svg'

const Section01 = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <div className={imageContainer}>
        <SectionImage
          alt="cost comparison"
          src={KitchensSection11}
          mobileSrc={KitchensSection11}
          customStyle={imageStyle}
        />
      </div>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text={t('kitchens.section.1.1a.title', 'Start cooking right away')}
          marginBottom="16px"
          style={textSprinkles({
            fontSize: ['h2', 'h4'],
            lineHeight: ['h2', 'h4']
          })}
        />
        <Paragraph
          variant="medium"
          text={t(
            'kitchens.section.1.1a.text',
            `EmyrRam’s in-house concierge team is here to assist with your order
            management and fulfillment. Run with a smaller back-of-house team and
            save on labour costs – we'll handle all the front-of-house operations
            like food hand-offs, logistics, building services & maintenance, and
            more so you can focus on cooking and scaling your business.`
          )}
          marginBottom="40px"
        />
        <Button
          variant={{ type: 'primary', size: 'large' }}
          text={t('kitchens.section.1.1a.button', '360-View')}
          endIcon={GlobeSVG}
          id="club-kitchen-kitchens-360-view"
          onClick={() =>
            window.open('https://panoraven.com/en/embed/VkB6LmA2w1', '_blank')
          }
        />
      </div>
    </div>
  )
}

export default Section01
