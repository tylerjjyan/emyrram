import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import AnimateIn from '@/components/animate-in'
import { useContactForm } from '@/hooks/use-contact-form'
import HeroSection from './hero'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import SectionFour from './section-four'
import ContactUsSidebar from '../contact-us'

const Kitchens = (): JSX.Element => {
  const { isFormOpen, toggleForm } = useContactForm()
  return (
    <Layout
      path="/efficiency"
      headerConfig={{ background: 'transparent', position: 'fixed' }}
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
          paddingTop: ['0px', '0px', '64px', '64px'],
          paddingRight: ['0px', '0px', '48px', '24px'],
          paddingLeft: ['152px', '72px', '48px', '24px'],
          paddingBottom: ['128px', '80px', '64px', '64px']
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

export default Kitchens
