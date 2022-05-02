import React from 'react'
import { Heading, Paragraph } from '@/components/typography'
import { useTranslation } from 'next-i18next'
import {
  tableWrapper,
  tableHeaderCell,
  tableCell,
  tableBody
} from './comparison-table.css'

const SectionThree = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <table className={tableWrapper}>
      <thead>
        <tr>
          <th></th>
          <th className={tableCell}>
            <Heading
              variant="h5"
              text={t('kitchens.section.3.2a.title', `Club Kitchen`)}
            />
          </th>
          <th className={tableCell}>
            <Heading
              variant="h5"
              text={t(
                'kitchens.section.3.2b.title',
                `Traditional Brick & Mortar Restaurant`
              )}
            />
          </th>
        </tr>
      </thead>
      <tbody className={tableBody}>
        <tr>
          <td className={tableHeaderCell}>
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.3a.title', `Real Estate`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.3a.text', `250 - 300 sq ft.`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.3b.text', `2,000 sq ft.`)}
            />
          </td>
        </tr>

        <tr>
          <td className={tableHeaderCell}>
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.4a.title', `Staff Required`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.4a.text', `2 - 3`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.4b.text', `7+`)}
            />
          </td>
        </tr>

        <tr>
          <td className={tableHeaderCell}>
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.5a.title', `Capital Investment`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.5a.text', `$50k`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.5b.text', `$1M`)}
            />
          </td>
        </tr>

        <tr>
          <td className={tableHeaderCell}>
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.6a.title', `Weeks to Launch`)}
            />
          </td>
          <td className={tableCell}>
            <Heading variant="h6" text={t('kitchens.section.3.6a.text', `1`)} />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.6b.text', `52`)}
            />
          </td>
        </tr>

        <tr>
          <td className={tableHeaderCell}>
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.7a.title', `Terms`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.7a.text', `No Rent`)}
            />
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.7b.text', `Equipment Lease`)}
            />
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.7c.text', `Shared Operating Costs`)}
            />
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.7d.text', `Revenue Share`)}
            />
          </td>
          <td className={tableCell}>
            <Heading
              variant="h6"
              text={t('kitchens.section.3.7e.text', `5+ years`)}
            />
            <Paragraph
              variant="large"
              text={t('kitchens.section.3.7f.text', `Up to $30,000/month`)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default SectionThree
