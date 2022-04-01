import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import {
  contentWrapper,
  leftWrapper,
  offerImageWrapper,
  imageWrapper
} from './section-four.css'
import Slideshow from '@/components/slideshow'
import HomeSection41 from '@/images/home/home.section.4.1.jpg'
import HomeSection42 from '@/images/home/home.section.4.2.jpg'
import HomeSection43 from '@/images/home/home.section.4.3.jpg'
import SectionImage from '@/components/section-image'
import { useTranslation } from 'next-i18next'

const SectionFour = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <div className={contentWrapper}>
        <div className={leftWrapper}>
          <Heading
            variant="h2"
            text={t('home.section.4.1a.title', 'What we offer')}
            marginBottom="48px"
            style={textSprinkles({ typeSize: ['h2', 'h4'] })}
          />
          <SectionImage
            src={HomeSection41}
            mobileSrc={HomeSection41}
            alt="ultra efficient kitchens"
            customStyle={offerImageWrapper}
          />
          <Heading
            variant="h5"
            text={t('home.section.4.2a.title', 'Ultra-Efficient Kitchens')}
            marginBottom="8px"
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.4.2a.text',
              `We go beyond the ordinary commissary with kitchen spaces designed by
            chefs, for chefs. Our turnkey kitchens come loaded with over $40,000
            worth of high-quality appliances and equipment, so you can start
            prepping food right away.`
            )}
            marginBottom="40px"
          />
          <SectionImage
            src={HomeSection42}
            mobileSrc={HomeSection42}
            alt="fresher food"
            customStyle={offerImageWrapper}
          />
          <Heading
            variant="h5"
            text={t(
              'home.section.4.3a.title',
              'Fresher Food, Lower Delivery Fees'
            )}
            marginBottom="8px"
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.4.3a.text',
              `Club Kitchen’s location in the heart of densely populated Yaletown
            gives you access to over 100,000 potential customers within 3km,
            ensuring that your product arrives fresh, with lower delivery fees for
            your customers.`
            )}
            marginBottom="40px"
          />
          <SectionImage
            src={HomeSection43}
            mobileSrc={HomeSection43}
            alt="purpose built"
            customStyle={offerImageWrapper}
          />
          <Heading
            variant="h5"
            text={t('home.section.4.4a.title', 'Purpose-Built')}
            marginBottom="8px"
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.4.4a.text',
              `From top to bottom, Club Kitchen is designed for efficient
          delivery-based service. Purpose-built kitchens let you focus on
          developing and executing your concept, while our concierge team takes
          care of food hand-offs while you handle the cooking.`
            )}
          />
        </div>
        <Slideshow
          images={[HomeSection41, HomeSection42, HomeSection43]}
          customContainer={imageWrapper}
        />
      </div>
    </>
  )
}

export default SectionFour
