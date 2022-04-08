import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import { useContactForm } from '@/hooks/use-contact-form'
import useMediaQuery from '@/hooks/use-media-query'
import HeroSection from './hero'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import SectionFour from './section-four'
import ContactUsSidebar from '../contact-us'

const Efficiency = (): JSX.Element => {
  const { isFormOpen, toggleForm } = useContactForm()
  const displayMobile = useMediaQuery(`(max-width: 767px)`)

  return (
    <Layout
      path="/efficiency"
      headerConfig={{
        background: displayMobile ? 'transparent' : 'secondary',
        position: 'fixed'
      }}
    >
      <HeroSection />
      <PageSection
        customStyle={sprinkles({
          paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
      >
        <SectionOne />
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
        backgroundTheme="light"
      >
        <SectionTwo />
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
      >
        <SectionThree />
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['64px', '64px', '24px', '24px'],
          paddingBottom: ['80px', '48px', '48px', '24px']
        })}
      >
        <SectionFour />
      </PageSection>
      <ContactUsSidebar isOpen={isFormOpen} toggleSidebar={toggleForm} />
    </Layout>
  )
}

export default Efficiency