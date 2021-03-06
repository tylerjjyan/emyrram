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
    <Layout
      path="/"
      headerConfig={{ background: 'transparent', position: 'fixed' }}
    >
      <HeroSection />

      <AnimateIn>
        <SectionOne />
      </AnimateIn>
      <PageSection
        customStyle={sprinkles({
          paddingX: ['152px', '72px', '48px', '24px'],
          paddingY: ['128px', '80px', '64px', '64px']
        })}
        backgroundTheme="dark"
      >
        <AnimateIn>
          <SectionTwo />
        </AnimateIn>
      </PageSection>
      <PageSection
        customStyle={sprinkles({
          paddingRight: ['152px', '72px', '48px', '24px'],
          paddingLeft: ['152px', '72px', '48px', '24px'],
          paddingY: ['80px', '80px', '64px', '64px']
        })}
        backgroundTheme="dark"
      >
        <AnimateIn>
          <SectionThree />
        </AnimateIn>
      </PageSection>

      <AnimateIn>
        <SectionFour />
      </AnimateIn>
    </Layout>
  )
}

export default Home
