import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import Hero from './hero'
import FAQSection from './faq'

const FAQ = (): JSX.Element => {
  return (
    <Layout headerConfig={{ background: 'secondary', position: 'fixed' }}>
      <Hero />
      <PageSection
        customStyle={sprinkles({
          // paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['112px', '80px', '64px', '64px']
        })}
      >
        <FAQSection />
      </PageSection>
    </Layout>
  )
}

export default FAQ
