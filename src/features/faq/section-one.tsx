import { useTranslation } from 'next-i18next'
import React from 'react'
import FAQAccordion from './accordion'
import { wrapper } from './section-one.css'

const FAQSection = (): JSX.Element => {
  const { t } = useTranslation()
  const ACCORDION_DATA = [
    {
      title: t('faq.section.1.1a.title', 'How does it work?'),
      content: t(
        'faq.section.1.1a.text',
        `EmyrRam provides you with a fully functional turn-key kitchen space
        outfitted with major appliances and the technology to receive orders on a
        single tablet. You do what you do best and worry about cooking great food.
        Our FOH team will handle all of the logistics and order hand-off
        procedures`
      )
    },
    {
      title: t(
        'faq.section.1.2a.title',
        'What if I want to bring my own specialized equipment?'
      ),
      content: t(
        'faq.section.1.2a.text',
        `Our kitchens are designed with flexible areas purpose built so that
        equipment is easily interchangeable. If you wish to bring your own
        specialized equipment just let us know. All costs associated with install
        and upkeep of customized equipment will be the responsibility of the
        member.`
      )
    },
    {
      title: t(
        'faq.section.1.3a.title',
        'What benefits to EmyrRam Members enjoy?'
      ),
      content: t(
        'faq.section.1.3a.text',
        `By working with our industry partners and combining the purchasing power
        of multiple operations under a single roof, EmyrRam has negotiated
        preferred pricing for services like 3rd Party Delivery Commission Fees,
        Sysco and GFS specialty pricing programs, Purchase Rebate Programs,
        Janitorial, Waste Removal, Smallwares Packages from Russel Hendrix, Repair
        & Maintenance programs, and more. By working together EmyrRam can
        offer significantly lower operating costs to our individual members.`
      )
    },
    {
      title: t('faq.section.1.4a.title', 'How will my customers find me?'),
      content: t(
        'faq.section.1.4a.text',
        `We encourage all of our members to work with our partners Uber Eats, Skip
        the Dishes, and DoorDash to reach as many new customers as possible. We
        will also have a direct ordering link to each of our members ordering
        platforms embedded within our EmyrRam website, which we will be
        actively marketing on your behalf.`
      )
    },
    {
      title: t('faq.section.1.5a.title', 'What are Shared Operating Costs?'),
      content: t(
        'faq.section.1.5a.text',
        `Shared operating costs are the costs incurred for operating the Club
        Kitchen space. These costs would typically be billed directly to you in a
        brick and mortar location. Because we are able to split these costs across
        multiple brands there is significant savings in overhead. This includes
        janitorial, operating systems, facilities management, waste removal, R&M,
        FOH staff, and more. Each kitchen unit is individually metered for
        utilities and will be billed back their share of usage on a monthly basis.`
      )
    }
  ]

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
