import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import useAnimateOnInView from '@/hooks/use-animate-on-in-view'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import {
  sectionWrapper,
  textWrapper,
  imageContainer,
  backImageWrapper,
  forwardImageWrapper,
  imageStyle,
  deliveryIconContainer
} from './section-five.css'
import { useTranslation } from 'next-i18next'
import SectionImage from '@/components/section-image'
import HomeSection51 from '@/images/home/home.section.5.1.png'
import HomeSection52 from '@/images/home/home.section.5.2.jpg'
import Doordash from './icons/doordash.png'
import SkipTheDishes from './icons/skip-the-dishes.png'
import UberEats from './icons/uber-eats.png'

const backImageVariants = {
  visible: {
    x: 0,
    y: 0
  },
  hidden: {
    x: -25,
    y: 25
  }
}

const frontImageVariants = {
  visible: {
    x: 0,
    y: 0
  },
  hidden: {
    x: 25,
    y: 25
  }
}

const SectionFive = (): JSX.Element => {
  const { t } = useTranslation()
  const { ref: imageWrapperRef, controls } = useAnimateOnInView()

  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h5"
          text={t('home.section.5.1a.title', 'Our Technology')}
          marginBottom="8px"
          style={textSprinkles({ typeSize: ['h5', 'h6'] })}
        />
        <Heading
          variant="h2"
          text={t(
            'home.section.5.1b.title',
            'Helping you achieve maximum efficiency'
          )}
          marginBottom="24px"
          style={textSprinkles({ typeSize: ['h2', 'h4'] })}
        />
        <Paragraph
          variant="medium"
          text={t(
            'home.section.5.1a.text',
            `One tablet lets you manage all your orders with a built-in operating
          system, payment solutions, and order tracking so you can streamline your
          behind-the-scenes operations. Our on-site concierge team is there to make
          sure food goes out efficiently and accurately, every time.`
          )}
        />
      </div>
      <motion.div ref={imageWrapperRef} className={imageContainer}>
        <MotionConfig transition={{ duration: 1 }} reducedMotion="user">
          <motion.div
            className={backImageWrapper}
            variants={backImageVariants}
            initial="hidden"
            animate={controls}
          >
            <SectionImage
              src={HomeSection52}
              mobileSrc={HomeSection52}
              alt="efficiency"
              customStyle={imageStyle}
            />
          </motion.div>
        </MotionConfig>
        <MotionConfig transition={{ duration: 1 }} reducedMotion="user">
          <motion.div
            variants={frontImageVariants}
            initial="hidden"
            animate={controls}
            className={forwardImageWrapper}
          >
            <SectionImage
              src={HomeSection51}
              mobileSrc={HomeSection51}
              alt="efficiency"
              customStyle={imageStyle}
            />
          </motion.div>
        </MotionConfig>
        <div className={deliveryIconContainer}>
          <img src={SkipTheDishes} alt="skip the dishes icon" />
          <img src={Doordash} alt="doordash icon" />
          <img src={UberEats} alt="uber eats icon" />
        </div>
      </motion.div>
    </div>
  )
}

export default SectionFive
