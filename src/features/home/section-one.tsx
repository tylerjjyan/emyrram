import React from 'react'
import SectionImage from '@/components/section-image'
import { useTranslation } from 'next-i18next'
import { sectionWrapper, imageStyle } from './section-one.css'
import HomeSection11 from '@/images/home/home.section.1.1.jpg'

const Section01 = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={sectionWrapper}>
      <SectionImage
        alt="cost comparison"
        src={HomeSection11}
        customStyle={imageStyle}
      />
    </div>
  )
}

export default Section01
