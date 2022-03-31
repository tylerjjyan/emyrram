import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import {
  contentWrapper,
  leftWrapper,
  offerImageWrapper,
  imageWrapper
} from './section-four.css'
import Slideshow from '@/components/slideshow'
import Dog01 from '@/images/home/dog-01.jpeg'
import Dog02 from '@/images/home/dog-02.jpeg'
import Dog03 from '@/images/home/dog-03.jpeg'

const SectionFour = (): JSX.Element => {
  return (
    <>
      <div className={contentWrapper}>
        <div className={leftWrapper}>
          <Heading
            variant="h2"
            text="What we offer"
            marginBottom="48px"
            style={textSprinkles({ typeSize: ['h2', 'h4'] })}
          />
          <div className={offerImageWrapper}></div>
          <Heading
            variant="h5"
            text="Ultra-Efficient Kitchens"
            marginBottom="8px"
          />
          <Paragraph
            variant="medium"
            text={`We go beyond the ordinary commissary with kitchen spaces designed by
            chefs, for chefs. Our turnkey kitchens come loaded with over $40,000
            worth of high-quality appliances and equipment, so you can start
            prepping food right away.`}
            marginBottom="40px"
          />
          <div className={offerImageWrapper}></div>
          <Heading
            variant="h5"
            text="Fresher Food, Lower Delivery Fees"
            marginBottom="8px"
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={`Club Kitchen’s location in the heart of densely populated Yaletown
            gives you access to over 100,000 potential customers within 3km,
            ensuring that your product arrives fresh, with lower delivery fees for
            your customers.`}
            marginBottom="40px"
          />
          <div className={offerImageWrapper}></div>
          <Heading
            variant="h5"
            text="Purpose-Built"
            marginBottom="8px"
            style={textSprinkles({ typeSize: ['h5', 'h6'] })}
          />
          <Paragraph
            variant="medium"
            text={`From top to bottom, Club Kitchen is designed for efficient
          delivery-based service. Purpose-built kitchens let you focus on
          developing and executing your concept, while our concierge team takes
          care of food hand-offs while you handle the cooking.`}
          />
        </div>
        <Slideshow
          images={[Dog01, Dog02, Dog03]}
          customContainer={imageWrapper}
        />
      </div>
    </>
  )
}

export default SectionFour
