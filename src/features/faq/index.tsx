import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import Hero from './hero'
import FAQSection from './section-one'
import SectionTwo from './section-two'
import { useTranslation } from 'next-i18next'
import { useContactForm } from '@/hooks/use-contact-form'
import ContactUsSidebar from '../contact-us'

const FAQ = (): JSX.Element => {
  const { t } = useTranslation()
  const { isFormOpen, toggleForm } = useContactForm()

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
      path="/faq"
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
      <PageSection
        customStyle={sprinkles({
          paddingX: ['64px', '64px', '24px', '24px'],
          paddingY: ['112px', '80px', '64px', '64px']
        })}
      >
        <SectionTwo />
      </PageSection>
      <ContactUsSidebar isOpen={isFormOpen} toggleSidebar={toggleForm} />
    </Layout>
  )
}

export default FAQ
