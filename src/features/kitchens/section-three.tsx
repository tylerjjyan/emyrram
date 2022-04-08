import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import ComparisonTable from './comparison-table'
import ComparisonAccordion from './comparison-accordion'
import { useTranslation } from 'next-i18next'
import { sectionWrapper, headingWrapper } from './section-three.css'
import useMediaQuery from '@/hooks/use-media-query'

const SectionThree = (): JSX.Element => {
  const { t } = useTranslation()
  const displayMobile = useMediaQuery(`(max-width: 767px)`)
  return (
    <div className={sectionWrapper}>
      <div className={headingWrapper}>
        <Heading
          variant="h2"
          text={t(
            'kitchens.section.3.1a.title',
            'Club Kitchen vs Traditional Restaurants'
          )}
          marginBottom="16px"
          textAlign="center"
          style={textSprinkles({
            fontSize: ['h2', 'h4'],
            lineHeight: ['h2', 'h4']
          })}
        />
        <Paragraph
          variant="medium"
          textAlign="center"
          text={t(
            'kitchens.section.3.1a.text',
            `Fewer costs and a shortened launch window mean your business will see profits faster.`
          )}
          style={textSprinkles({ textAlign: ['center', 'left'] })}
        />
      </div>
      {displayMobile ? <ComparisonAccordion /> : <ComparisonTable />}
    </div>
  )
}

export default SectionThree
