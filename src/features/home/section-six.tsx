import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import { sectionWrapper, textWrapper } from './section-six.css'

const SectionSix = (): JSX.Element => {
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text="Ready to get started?"
          marginBottom="16px"
          style={textSprinkles({
            typeSize: ['h2', 'h4'],
            textAlign: ['center', 'left']
          })}
        />
        <Paragraph
          variant="medium"
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo suspendisse
        maecenas fermentum, hac id dignissim dui. Vitae ut nisi nibh pellentesque
        nunc, ultrices mauris.`}
          marginBottom="48px"
          style={textSprinkles({ textAlign: ['center', 'left'] })}
        />
        <ArrowButton
          text="join the club"
          arrowVariant="right"
          variant={{ type: 'primary', size: 'large' }}
        />
      </div>
    </div>
  )
}

export default SectionSix
