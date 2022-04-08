import React from 'react'
import { Heading, Paragraph } from '@/components/typography'
import Accordion from '@/components/accordion'
import { useTranslation } from 'next-i18next'
import {
  textWrapper,
  headingText,
  columnWrapper
} from './comparison-accordion.css'

const ComparisonAccordion = (): JSX.Element => {
  const { t } = useTranslation()

  const ACCORDION_DATA = [
    {
      title: t('kitchens.section.3.3a.title', `Real Estate`),
      content: (
        <>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t('kitchens.section.3.2a.title', `Club Kitchen`)}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.3a.text', `250 - 300 sq ft.`)}
              textAlign="right"
            />
          </div>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t(
                'kitchens.section.3.2b.title',
                `Traditional Brick & Mortar Restaurant`
              )}
              style={headingText}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.3b.text', `2,000 sq ft.`)}
              textAlign="right"
            />
          </div>
        </>
      )
    },
    {
      title: t('kitchens.section.3.4a.title', `Staff Required`),
      content: (
        <>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t('kitchens.section.3.2a.title', `Club Kitchen`)}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.4a.text', `2 - 3`)}
              textAlign="right"
            />
          </div>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t(
                'kitchens.section.3.2b.title',
                `Traditional Brick & Mortar Restaurant`
              )}
              style={headingText}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.4b.text', `7+`)}
              textAlign="right"
            />
          </div>
        </>
      )
    },
    {
      title: t('kitchens.section.3.5a.title', `Capital Investment`),
      content: (
        <>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t('kitchens.section.3.2a.title', `Club Kitchen`)}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.5a.text', `$40k`)}
              textAlign="right"
            />
          </div>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t(
                'kitchens.section.3.2b.title',
                `Traditional Brick & Mortar Restaurant`
              )}
              style={headingText}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.5b.text', `$1M`)}
              textAlign="right"
            />
          </div>
        </>
      )
    },
    {
      title: t('kitchens.section.3.6a.title', `Weeks to Launch`),
      content: (
        <>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t('kitchens.section.3.2a.title', `Club Kitchen`)}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.6a.text', `1`)}
              textAlign="right"
            />
          </div>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t(
                'kitchens.section.3.2b.title',
                `Traditional Brick & Mortar Restaurant`
              )}
              style={headingText}
            />
            <Heading
              variant="h6"
              text={t('kitchens.section.3.6b.text', `52`)}
              textAlign="right"
            />
          </div>
        </>
      )
    },
    {
      title: t('kitchens.section.3.7a.title', `Terms`),
      content: (
        <>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t('kitchens.section.3.2a.title', `Club Kitchen`)}
            />
            <div className={columnWrapper}>
              <Heading
                variant="h6"
                text={t('kitchens.section.3.7a.text', `No Rent`)}
                textAlign="right"
              />
              <Paragraph
                variant="large"
                text={t('kitchens.section.3.7b.text', `Equipment Lease`)}
                textAlign="right"
              />
              <Paragraph
                variant="large"
                text={t('kitchens.section.3.7c.text', `Shared Operating Costs`)}
                textAlign="right"
              />
              <Paragraph
                variant="large"
                text={t('kitchens.section.3.7d.text', `Revenue Share`)}
                textAlign="right"
              />
            </div>
          </div>
          <div className={textWrapper}>
            <Paragraph
              variant="medium"
              text={t(
                'kitchens.section.3.2b.title',
                `Traditional Brick & Mortar Restaurant`
              )}
              style={headingText}
            />
            <div className={columnWrapper}>
              <Heading
                variant="h6"
                text={t('kitchens.section.3.7e.text', `5+ years`)}
                textAlign="right"
              />
              <Paragraph
                variant="large"
                text={t('kitchens.section.3.7f.text', `Up to $30,000/month`)}
                textAlign="right"
              />
            </div>
          </div>
        </>
      )
    }
  ]

  return (
    <>
      {ACCORDION_DATA.map(({ title, content }, index) => {
        return (
          <Accordion
            key={`kitchen-accordion-${index}`}
            title={title}
            content={content}
          />
        )
      })}
    </>
  )
}

export default ComparisonAccordion
