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
import { useTranslation } from 'next-i18next'

const Kitchens = (): JSX.Element => {
  const { t } = useTranslation()
  const { isFormOpen, toggleForm } = useContactForm()
  return (
    <Layout
      path="/kitchens"
      headerConfig={{ background: 'transparent', position: 'fixed' }}
      title={t(
        'kitchens.head.title',
        `EmyrRam | Commissary Kitchen For Rent Vancouver`
      )}
      description={t(
        'kitchens.head.text',
        `EmyrRam’s purpose-built kitchens make it quick & easy to create the
        food you’ve dreamed of. Equipped with all appliances, open your kitchen 7
        days or less.`
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
