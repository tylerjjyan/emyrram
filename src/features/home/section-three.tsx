import React from 'react'
import { Heading, Paragraph } from '@/components/typography'
import { contentWrapper, leftWrapper, imageWrapper } from './section-three.css'

const SectionThree = (): JSX.Element => {
  return (
    <>
      <Heading variant="h2" text="Our Location" marginBottom="16px" />
      <div className={contentWrapper}>
        <div className={leftWrapper}>
          <Paragraph
            variant="medium"
            marginBottom="24px"
            text={`Club Kitchen is conveniently located in a high-density urban centre,
        giving you access to over 100,000 potential customers within a 10 minute
        delivery radius.`}
          />
          <Paragraph
            variant="medium"
            text={`Situated in Vancouver’s vibrant Yaletown neighbourhood,
        Club Kitchen’s ideal setting in a bustling downtown core enables you to
        capture both foot traffic and a vast network of customers who frequent
        Yaletown for work, life, and play. This means exponential growth for
        your brand and potential customer list.`}
          />
        </div>
        <div>
          <Heading variant="h5" text="100,000+" />
          <Paragraph
            variant="medium"
            text="potential customers within a 3km delivery radius"
            marginBottom="16px"
          />
          <Heading variant="h5" text="10 min." />
          <Paragraph
            variant="medium"
            text="walking distance from BC Place, Rogers Arena, Yaletown & more"
            marginBottom="16px"
          />
          <Heading variant="h5" text="Lower fees" />
          <Paragraph variant="medium" text="through strategic locations" />
        </div>
      </div>
      <div className={imageWrapper}></div>
    </>
  )
}

export default SectionThree
