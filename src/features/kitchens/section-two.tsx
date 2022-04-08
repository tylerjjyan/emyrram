import React from 'react'
import { Heading, textSprinkles } from '@/components/typography'
import SectionImage from '@/components/section-image'
import IconList from '@/components/icon-list'
import {
  sectionWrapper,
  iconListWrapper,
  imageContainer,
  imageStyle
} from './section-two.css'
import { useTranslation } from 'next-i18next'
import KitchensSection21 from '@/images/kitchens/kitchens.section.2.1.jpg'
import { ReactComponent as RedTapeSVG } from './icons/icon-01.svg'
import { ReactComponent as CreativeCookingSVG } from './icons/icon-02.svg'
import { ReactComponent as PlugAndPlaySVG } from './icons/icon-03.svg'

const SectionTwo = (): JSX.Element => {
  const { t } = useTranslation()

  const ICON_LIST = [
    {
      title: t('kitchens.section.2.2a.title', 'Cut through the red tape'),
      content: t(
        'kitchens.section.2.2a.text',
        `Navigating the construction process is one of the hardest parts of
        opening a restaurant, and it can take up to 6+ months just to secure
        permits. All this has already been taken care of at Club Kitchen. Our
        kitchens are already built and ready for you to move in.`
      ),
      icon: RedTapeSVG
    },
    {
      title: t(
        'kitchens.section.2.3a.title',
        'A foundation for creative cooking'
      ),
      content: t(
        'kitchens.section.2.3a.text',
        `Our chef-designed kitchens come loaded with major appliances and equipment
        so you have all the tools you need to start cooking right away.`
      ),
      icon: CreativeCookingSVG
    },
    {
      title: t('kitchens.section.2.4a.title', 'Plug and play'),
      content: t(
        'kitchens.section.2.4a.text',
        `Our kitchens are configured to allow for flex areas where you can
        easily install or replace any additional appliances your new kitchen
        needs.`
      ),
      icon: PlugAndPlaySVG
    }
  ]

  return (
    <div className={sectionWrapper}>
      <div className={iconListWrapper}>
        <Heading
          variant="h2"
          text={t('kitchens.section.2.1a.title', 'Benefits')}
          marginBottom="48px"
          style={textSprinkles({
            typeSize: ['h2', 'h4']
          })}
        />
        <IconList listItems={ICON_LIST} />
      </div>
      <div className={imageContainer}>
        <SectionImage
          alt="benefits"
          src={KitchensSection21}
          mobileSrc={KitchensSection21}
          customStyle={imageStyle}
        />
      </div>
    </div>
  )
}

export default SectionTwo
