import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import { Paragraph } from '@/components/typography'
import PrivacySection from './privacy-section'
import { listWrapper } from './index.css'

const PRIVACY_CONTENT = [
  {
    title: 'Personal Information We Collect',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={` When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.” 
          We collect Device Information using the following technologies: `}
        />
        <ul className={listWrapper}>
          <li>
            <Paragraph
              variant="medium"
              text={`“Cookies” are data files that are placed on your device or computer and
              often include an anonymous unique identifier. For more information about
              cookies, and how to disable cookies, visit
              https://www.allaboutcookies.org.`}
            />
          </li>
          <li>
            <Paragraph
              variant="medium"
              text={`“Log files” track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service provider,
              referring/exit pages, and date/time stamps.`}
            />
          </li>
          <li>
            <Paragraph
              variant="medium"
              text={`“Web beacons,” “tags,” and “pixels” are electronic files used to
                  record information about how you browse the Site.`}
            />
          </li>
        </ul>
        <Paragraph
          variant="medium"
          text={`When we talk about “Personal Information” in this Privacy Policy, we are
        talking both about Device Information and Order Information.`}
        />
      </>
    )
  },

  {
    title: 'Sharing Your Personal Information',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`We may need to transfer your Personal Information to our subsidiaries
          and affiliates, as well as to our service providers, for processing.
          This processing supports our business. For example, we may transfer your
          Personal Information to our cloud hosting provider for storage and
          retention purposes. We ensure that these recipients of your Personal
          Information are contractually obligated to keep your Personal
          Information confidential, to use it only for the purposes for which we
          transfer it to them, and to process the Personal Information with
          standards at least as stringent as those set out in this policy.`}
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          text={`Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.`}
        />
      </>
    )
  },
  {
    title: 'Behavioural Advertising',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={` As described above, we use your Personal Information to provide you with
          targeted advertisements or marketing communications we believe may be of
          interest to you. For more information about how targeted advertising
          works, you can visit the Network Advertising Initiative’s (“NAI”)
          educational page at
          http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.`}
        />
      </>
    )
  },
  {
    title: 'Data Analytics',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`We use Google Analytics. Google Analytics is a web analytics service
          offered by Google that tracks and reports website traffic and provides
          insights related to the performance of our marketing, content, and
          products. Google uses the data collected to track and monitor the use of
          our Services. This data is shared with other Google services. Google may
          use the collected data to contextualize and personalize the ads of its
          own advertising network. We use the insights gained from Google
          Analytics to improve our services, assess further market need for
          additional research and development, and isolate key potential
          third-party advertisers and partners to work with in order to further
          develop the Services and our Services offered, among other things. `}
        />
        <Paragraph
          variant="medium"
          text={`For more information on the privacy practices of Google, please visit
          the Google Privacy Terms web page:
          https://www.google.com/intl/en/policies/privacy/.`}
        />
        <Paragraph
          variant="medium"
          text={`You can opt-out of having your activity on our Services made available
          to Google Analytics by installing the Google Analytics opt-out browser
          add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
          analytics.js, and dc.js) from sharing information with Google Analytics
          about your activity on the Services.`}
        />
        <Paragraph
          variant="medium"
          text={`We use Facebook interest-based advertising and Facebook Pixel. You can
          learn more about interest-based advertising from Facebook by visiting
          here. Facebook Pixel lets us know when someone visits our Services from
          an ad on Facebook and takes an action. This information is reported to
          us via Facebook’s use of Cookies. We use this information for conversion
          optimization and to improve our marketing.`}
        />
        <Paragraph
          variant="medium"
          text={`For more information on the privacy practices of Facebook, please visit
          Facebook's Data Policy page:
          https://www.facebook.com/privacy/explanation.`}
        />
      </>
    )
  },
  {
    title: 'Do Not Track',
    content: (
      <Paragraph
        variant="medium"
        text={`Please note that we do not alter our Site’s data collection and use
          practices when we see a Do Not Track signal from your browser.`}
      />
    )
  },
  {
    title: 'Your Rights',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={` If you are a European resident, you have the right to access personal
          information we hold about you and to ask that your personal information
          be corrected, updated, or deleted. If you would like to exercise this
          right, please contact us through the contact information below.`}
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          text={`Additionally, if you are a European resident we note that we are
          processing your information in order to fulfill contracts we might have
          with you (for example if you make an order through the Site), or
          otherwise to pursue our legitimate business interests listed above.
          Additionally, please note that your information will be transferred
          outside of Europe, including to Canada and the United States.`}
        />
      </>
    )
  },
  {
    title: 'Data Retention',
    content: (
      <Paragraph
        variant="medium"
        text={`When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.`}
      />
    )
  },
  {
    title: 'Minors',
    content: (
      <Paragraph
        variant="medium"
        text={`The Site is not intended for individuals under the age of 19.`}
      />
    )
  },
  {
    title: 'Changes',
    content: (
      <Paragraph
        variant="medium"
        text={`We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons.`}
      />
    )
  },
  {
    title: 'Contact Us',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e-mail at
        jj@clubkitchen.ca or by mail using the details provided below:`}
        />
        <Paragraph
          variant="medium"
          text={`900-1095 West Pender St, Vancouver, BC, V6E 2M6, Canada`}
        />
      </>
    )
  }
]

const PrivacyPolicy = (): JSX.Element => {
  return (
    <Layout headerConfig={{ background: 'secondary', position: 'static' }}>
      <PageSection
        customStyle={sprinkles({ paddingY: ['152px', '80px'] })}
        maxWidth="856px"
      >
        <Paragraph
          variant="medium"
          marginBottom="32px"
          text="This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.clubkitchen.ca (the “Site”). "
        />
        {PRIVACY_CONTENT.map(({ title, content }, index) => {
          return (
            <PrivacySection key={index} title={title}>
              {content}
            </PrivacySection>
          )
        })}
      </PageSection>
    </Layout>
  )
}

export default PrivacyPolicy
