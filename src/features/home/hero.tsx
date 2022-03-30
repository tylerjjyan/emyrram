import React from 'react'
import HeroImage from '@/components/hero-image'
import { Heading, Paragraph } from '@/components/typography'
import Hero from '@/images/home/home.hero.png'
import { vars } from '@/theme.css'
import { heroTextWrapper } from './hero.css'
import { ArrowButton } from '@/components/button'

const HeroSection = (): JSX.Element => {
  return (
    <HeroImage src={Hero}>
      <div className={heroTextWrapper}>
        <Heading
          variant="h1"
          textColor={vars.colors.pureWhite}
          text="Next generation food service has arrived"
          marginBottom="16px"
        />
        <Paragraph
          variant="large"
          textColor={vars.colors.pureWhite}
          text={`Club Kitchen was designed to help restaurant owners like you achieve your
          goals faster through technology and turnkey solutions with our move-in
          ready kitchens.`}
          marginBottom="48px"
        />
        <ArrowButton
          text="Contact Us"
          variant={{ type: 'secondary', size: 'large' }}
          arrowVariant="right"
        />
      </div>
    </HeroImage>
  )
}

export default HeroSection
