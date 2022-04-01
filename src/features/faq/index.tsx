import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import Hero from './hero'
import FAQSection from './faq'
import { useTranslation } from 'next-i18next'

const FAQ = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <Layout
      title={t(
        'faq.head.title',
        `Club Kitchen | About Vancouver's Premier Commissary Kitchen`
      )}
      description={t(
        'faq.head.text',
        `Got questions about Club Kitchen? Find out how this commissary kitchen in
        Vancouver will take food service to the next level with its move-in ready
        kitchens.`
      )}
      headerConfig={{ background: 'secondary', position: 'sticky' }}
    >
      <Hero />
      <PageSection
        customStyle={sprinkles({
          paddingX: { ipadMini: '24px' },
          paddingY: ['112px', '80px', '64px', '64px']
        })}
      >
        <FAQSection />
      </PageSection>
    </Layout>
  )
}

export default FAQ
