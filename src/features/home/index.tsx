import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import { useContactForm } from '@/hooks/use-contact-form'
import AnimateIn from '@/components/animate-in'
import HeroSection from './hero'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import SectionFour from './section-four'
import SectionFive from './section-five'
import SectionSix from './section-six'
import ContactUsSidebar from '../contact-us'

const Home = (): JSX.Element => {
  const { isFormOpen, toggleForm } = useContactForm()
  return (
    <Layout path="/">
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
          paddingRight: ['152px', '72px', '48px', '0px'],
          paddingLeft: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
      >
        <AnimateIn>
          <SectionThree />
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
          <SectionFour />
        </AnimateIn>
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingRight: ['60px', '0px', '32px'],
          paddingLeft: ['152px', '72px', '32px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
      >
        <SectionFive />
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['64px', '64px', '24px', '24px'],
          paddingBottom: ['80px', '48px', '48px', '24px']
        })}
      >
        <AnimateIn>
          <SectionSix />
        </AnimateIn>
      </PageSection>
      <ContactUsSidebar isOpen={isFormOpen} toggleSidebar={toggleForm} />
    </Layout>
  )
}

export default Home
