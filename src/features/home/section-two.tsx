import React from 'react'
import { Heading, textSprinkles } from '@/components/typography'
import { ArrowButton } from '@/components/button'
import IconList from '@/components/icon-list'
import { sectionWrapper, textWrapper, iconListWrapper } from './section-two.css'
import { useContactForm } from '@/hooks/use-contact-form'
import { useTranslation } from 'next-i18next'
import { ReactComponent as LightningSVG } from './icons/lightning.svg'
import { ReactComponent as HandoffSVG } from './icons/handoff.svg'
import { ReactComponent as ProfitsSVG } from './icons/profits.svg'

const SectionTwo = (): JSX.Element => {
  const { t } = useTranslation()
  const { setIsFormOpen } = useContactForm()

  const ICON_LIST = [
    {
      title: t('home.section.2.2a.title', 'Lightning-Fast Setup'),
      content: t(
        'home.section.2.2a.text',
        `Open your kitchen in as little as 7 days. We take care of construction
    and equipment, and assist with permitting to make it faster and more
    affordable to open a delivery-ready restaurant, complete with
    top-of-the-line equipment and appliances.`
      ),
      icon: LightningSVG
    },
    {
      title: t('home.section.2.2b.title', 'Expedited Order Hand-Offs'),
      content: t(
        'home.section.2.2b.text',
        `Our in-house concierge team is dedicated to making sure your orders are
    completed accurately and efficiently. We handle all front of house
    operations including hand-offs, logistics and order fulfilment so you can
    spend more time focused on cooking and growing your business.`
      ),
      icon: HandoffSVG
    },
    {
      title: t('home.section.2.2c.title', 'Maximize Profits'),
      content: t(
        'home.section.2.2c.text',
        `With an affordable, one-time license fee and shared overhead costs, Club Kitchen makes it easier and more affordable to create the business you’ve dreamed of. We handle all the day-to-day management of the facility, like cleaning services and equipment maintenance.`
      ),
      icon: ProfitsSVG
    }
  ]

  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h5"
          text={t('home.section.2.1a.title', 'How it works')}
          marginBottom="8px"
          style={textSprinkles({
            typeSize: ['h5', 'h6']
          })}
        />
        <Heading
          variant="h2"
          text={t(
            'home.section.2.1b.title',
            `A sleek new approach to food service`
          )}
          marginBottom="40px"
          style={textSprinkles({ typeSize: ['h2', 'h4'] })}
        />
        <ArrowButton
          text={t('home.section.2.1a.button', `Get Started`)}
          arrowVariant="right"
          id="club-kitchen-get-started"
          variant={{ type: 'primary', size: 'large' }}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
      <div className={iconListWrapper}>
        <IconList listItems={ICON_LIST} />
      </div>
    </div>
  )
}

export default SectionTwo
