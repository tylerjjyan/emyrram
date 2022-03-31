import React, { useState } from 'react'
import HeroImage from '@/components/hero-image'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import ContactUsSidebar from '../contact-us'
import Hero from '@/images/home/home.hero.png'
import { vars } from '@/theme.css'
import { heroTextWrapper } from './hero.css'

const HeroSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HeroImage src={Hero}>
        <div className={heroTextWrapper}>
          <Heading
            variant="h1"
            textColor={vars.colors.pureWhite}
            text="Next generation food service has arrived"
            marginBottom="16px"
            style={textSprinkles({
              fontSize: ['h1', 'h3'],
              lineHeight: ['h1', 'h3']
            })}
          />
          <Paragraph
            variant="large"
            textColor={vars.colors.pureWhite}
            text={`Club Kitchen was designed to help restaurant owners like you achieve your
          goals faster through technology and turnkey solutions with our move-in
          ready kitchens.`}
            style={textSprinkles({
              fontSize: ['large', 'medium'],
              lineHeight: ['large', 'medium'],
              marginBottom: ['48px', '40px']
            })}
          />
          <ArrowButton
            text="Contact Us"
            variant={{ type: 'secondary', size: 'large' }}
            arrowVariant="right"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </HeroImage>
      <ContactUsSidebar isOpen={isOpen} toggleSidebar={toggleDrawer} />
    </>
  )
}

export default HeroSection
