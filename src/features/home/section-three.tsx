import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import SectionImage from '@/components/section-image'
import {
  contentWrapper,
  leftWrapper,
  imageWrapper,
  imageStyle
} from './section-three.css'
import HomeSection31 from '@/images/home/home.section.3.1.png'
import HomeSection31Mobile from '@/images/home/home.section.3.1.mobile.png'
import { useTranslation } from 'next-i18next'

const SectionThree = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
      <Heading
        variant="h2"
        text={t('home.section.3.1a.title', 'Our Location')}
        marginBottom="16px"
        style={textSprinkles({ typeSize: ['h2', 'h4'] })}
      />
      <div className={contentWrapper}>
        <div className={leftWrapper}>
          <Paragraph
            variant="medium"
            marginBottom="24px"
            text={t(
              'home.section.3.1a.text',
              `Club Kitchen is conveniently located in a high-density urban centre,
        giving you access to over 100,000 potential customers within a 10 minute
        delivery radius.`
            )}
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.3.1b.text',
              `Situated in Vancouver’s vibrant Yaletown neighbourhood,
        Club Kitchen’s ideal setting in a bustling downtown core enables you to
        capture both foot traffic and a vast network of customers who frequent
        Yaletown for work, life, and play. This means exponential growth for
        your brand and potential customer list.`
            )}
          />
        </div>
        <div>
          <Heading
            variant="h5"
            text={t('home.section.3.2a.title', '100,000+')}
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.3.2a.text',
              'potential customers within a 3km delivery radius'
            )}
            marginBottom="16px"
          />
          <Heading
            variant="h5"
            text={t('home.section.3.3a.title', '10 min.')}
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={t(
              'home.section.3.3a.text',
              'walking distance from BC Place, Rogers Arena, Yaletown & more'
            )}
            marginBottom="16px"
          />
          <Heading
            variant="h5"
            text={t('home.section.3.4a.title', 'Lower fees')}
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={t('home.section.3.4a.text', 'through strategic locations')}
          />
        </div>
      </div>
      <div className={imageWrapper}>
        <SectionImage
          alt="location map"
          src={HomeSection31}
          mobileSrc={HomeSection31Mobile}
          customStyle={imageStyle}
        />
      </div>
    </>
  )
}

export default SectionThree
