import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import AnimateIn from '@/components/animate-in'
import { useContactForm } from '@/hooks/use-contact-form'
import useMediaQuery from '@/hooks/use-media-query'
import HeroSection from './hero'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import SectionFour from './section-four'
import ContactUsSidebar from '../contact-us'
import { useTranslation } from 'next-i18next'

const Efficiency = (): JSX.Element => {
  const { t } = useTranslation()
  const { isFormOpen, toggleForm } = useContactForm()
  const displayMobile = useMediaQuery(`(max-width: 767px)`)

  return (
    <Layout
      path="/efficiency"
      headerConfig={{
        background: displayMobile ? 'transparent' : 'secondary',
        position: 'fixed'
      }}
      title={t(
        'efficiency.head.title',
        `Club Kitchen | Commercial and Commissary Kitchen Vancouver`
      )}
      description={t(
        'efficiency.head.text',
        `Club Kitchen will handle all front-of-house operations - order logistics,
        food hand-offs, building services. So you can focus on cooking & growing
        your business.`
      )}
    >
      <HeroSection />
      <PageSection
        customStyle={sprinkles({
          paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
      >
        <AnimateIn>
          <SectionOne />
        </AnimateIn>
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
        backgroundTheme="light"
      >
        <AnimateIn>
          <SectionTwo />
        </AnimateIn>
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
      >
        <AnimateIn>
          <SectionThree />
        </AnimateIn>
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['64px', '64px', '24px', '24px'],
          paddingBottom: ['80px', '48px', '48px', '24px']
        })}
      >
        <AnimateIn>
          <SectionFour />
        </AnimateIn>
      </PageSection>
      <ContactUsSidebar isOpen={isFormOpen} toggleSidebar={toggleForm} />
    </Layout>
  )
}

export default Efficiency
