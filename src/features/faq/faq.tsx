import React from 'react'
import FAQAccordion from './accordion'
import { wrapper } from './faq.css'

const ACCORDION_DATA = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo suspendisse maecenas fermentum, hac id dignissim dui. Vitae ut nisi nibh pellentesque nunc, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo suspendisse maecenas fermentum, hac id dignissim dui. '
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo suspendisse maecenas fermentum, hac id dignissim dui. Vitae ut nisi nibh pellentesque nunc, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo suspendisse maecenas fermentum, hac id dignissim dui. '
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo suspendisse maecenas fermentum, hac id dignissim dui. Vitae ut nisi nibh pellentesque nunc, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo suspendisse maecenas fermentum, hac id dignissim dui. '
  }
]

const FAQSection = (): JSX.Element => {
  return (
    <div className={wrapper}>
      {ACCORDION_DATA.map(({ title, content }, index) => {
        return (
          <FAQAccordion
            key={`faq-accordion-${index}`}
            title={title}
            content={content}
          />
        )
      })}
    </div>
  )
}

export default FAQSection
