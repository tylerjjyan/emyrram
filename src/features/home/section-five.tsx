import React from 'react'
import { Heading, Paragraph } from '@/components/typography'
import {
  sectionWrapper,
  textWrapper,
  imageContainer,
  backImageWrapper,
  forwardImageWrapper
} from './section-five.css'

const SectionTwo = (): JSX.Element => {
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading variant="h5" text="How it works" marginBottom="8px" />
        <Heading
          variant="h2"
          text="Helping you achieve maximum efficiency"
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          text={`One tablet lets you manage all your orders with a built-in operating
          system, payment solutions, and order tracking so you can streamline your
          behind-the-scenes operations. Our on-site concierge team is there to make
          sure food goes out efficiently and accurately, every time.`}
        />
      </div>
      <div className={imageContainer}>
        <div className={backImageWrapper}></div>
        <div className={forwardImageWrapper}></div>
      </div>
    </div>
  )
}

export default SectionTwo
