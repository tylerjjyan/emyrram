import React from 'react'
import { sectionWrapper, headerText, bodyText } from './section-two.css'
import { useTranslation } from 'next-i18next'

const SectionTwo = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className={sectionWrapper}>
      <p className={headerText}>
        {t(
          'home.section.3.1a.title',
          'Created for the sophisticated taste buds'
        )}
      </p>
      <p className={bodyText}>
        {t(
          'home.section.3.1a.text',
          'The aromatic affair begins with the finest Black Summer Truffles harvested from the Italian suburbs. We seal in the Black Truffle’s rich earthy and aromatic flavours into our special house recipe, then glaze them onto our hand-cooked chips.  Each piece is generously crowned with real, precious truffles. With each bite brings you the epitome of gastronomy!'
        )}
      </p>
    </div>
  )
}

export default SectionTwo
