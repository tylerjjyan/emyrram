import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import ThankYouContent from './content'
import { layoutStyle } from './index.css'

const ThankYou = (): JSX.Element => {
  return (
    <Layout
      headerConfig={{
        background: 'secondary',
        position: 'sticky',
        isButtonVisible: false
      }}
      layoutStyle={layoutStyle}
      customSeoTags={<meta name="robots" content="noindex,nofollow"></meta>}
      path="/thank-you"
    >
      <PageSection
        backgroundTheme="light"
        maxWidth="912px"
        customStyle={sprinkles({
          paddingY: ['152px'],
          paddingX: '24px'
        })}
      >
        <ThankYouContent />
      </PageSection>
    </Layout>
  )
}

export default ThankYou
