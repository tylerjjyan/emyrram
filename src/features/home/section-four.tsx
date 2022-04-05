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
            text={t('home.section.4.2a.title', 'Ready when you are')}
            marginBottom="8px"
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.4.2a.text',
              `We go beyond the ordinary commissary with commercial-ready kitchen
              spaces designed by chefs, for chefs. Our turnkey kitchens are ready
              for action as soon as you are, outfitted with all the appliances and
              equipment you need to start prepping food right away.`
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
            text={t('home.section.4.3a.title', 'Fresher Food Faster')}
            marginBottom="8px"
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.4.3a.text',
              `Club Kitchen’s premier location in the heart of densely populated
              Yaletown allows us to deliver fresher food, faster. You'll have access
              to over 100,000 potential customers within a 3km radius, ensuring that
              your product arrives fresh every time.`
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
