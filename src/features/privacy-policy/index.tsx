import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import { Paragraph } from '@/components/typography'
import Hero from './hero'
import PrivacySection from './privacy-section'
import { listWrapper, textLink } from './index.css'

const PRIVACY_CONTENT = [
  {
    title: 'Personal Information We Collect',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages that you view, what websites or search
          terms referred you to the Site, and information about how you interact
          with the Site. We refer to this automatically-collected information as
          “Device Information.”
         `}
        />
        <Paragraph
          variant="medium"
          text="We collect Device Information using the following technologies: "
        />
        <ul className={listWrapper}>
          <li>
            <Paragraph
              variant="medium"
              text={`“Cookies” are data files that are placed on your device or computer and
              often include an anonymous unique identifier. For more information about
              cookies, and how to disable cookies, visit `}
            >
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.allaboutcookies.org"
                  className={textLink}
                >
                  https://www.allaboutcookies.org
                </a>
              </span>
            </Paragraph>
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
      </>
    )
  },
  {
    title: 'How do we use your personal information?',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site (for example, by generating
        analytics about how our customers browse and interact with the Site, and
        to assess the success of our marketing and advertising campaigns).`}
        />
        <Paragraph
          variant="medium"
          text={`We use Personal Information you submit to us to process requests, and to
        keep you informed about your request status, respond to your inquiries,
        notify you of services or special offers that may be of interest to you,
        enforce our terms of use, and prevent potentially prohibited or illegal
        activities for security purposes.`}
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
          text={`We may use and/or disclose anonymous "aggregated data" to third parties
          to tailor your experience of the Site, help us analyze interest in areas
          of the Site, the browsing patterns of its users in order to improve the
          content, operation and design of the Site and get data for statistical
          purposes to improve the Site.`}
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
          `}
        >
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
              className={textLink}
            >
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </a>
          </span>
        </Paragraph>
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
          `}
        >
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/intl/en/policies/privacy/"
              className={textLink}
            >
              https://www.google.com/intl/en/policies/privacy/.
            </a>
          </span>
        </Paragraph>
        <Paragraph
          variant="medium"
          text={`You can opt-out of having your activity on our Services made available
          to Google Analytics by installing the Google Analytics`}
        >
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://tools.google.com/dlpage/gaoptout/"
              className={textLink}
            >
              opt-out browser add-on.
            </a>
          </span>
          <span>
            {' '}
            The add-on prevents the Google Analytics JavaScript (ga.js,
            analytics.js, and dc.js) from sharing information with Google
            Analytics about your activity on the Services.
          </span>
        </Paragraph>
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
          Facebook's Data Policy page: `}
        >
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/privacy/explanation"
              className={textLink}
            >
              https://www.facebook.com/privacy/explanation.
            </a>
          </span>
        </Paragraph>
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
        text={`The Site is not intended for individuals under the age of 19. Children
        are not permitted to use the Site or our services, and we request that
        persons under the age 19 not submit any Personal Information to us. If
        we learn we have collected or received Personal Information from a child
        under the age of 13, we will delete that information. Since information
        regarding children under the age of 13 is not collected, we do not
        knowingly distribute Personal Information regarding children under the
        age of 13.`}
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
        regulatory reasons. Modifications to the Policy will be posted on the
        Site and will become effective on the day that they are posted. Your use
        of the Site following any such change constitutes your agreement to be
        bound by this Policy, as modified, changed or amended. For this reason,
        we encourage you to review this Policy whenever you use the Site,
        especially when you provide any Personal Information.`}
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
          or if you would like to make a complaint, please contact our privacy
          compliance contact person by e-mail at `}
        >
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:support@clubkitchen.ca"
              className={textLink}
            >
              support@clubkitchen.ca
            </a>
          </span>{' '}
          <span>or by mail using the details provided below:</span>
        </Paragraph>
        <Paragraph
          variant="medium"
          text={`988 Expo Blvd, Vancouver, BC, V67 0G2, Canada`}
        />
      </>
    )
  },
  {
    title: 'Effective Date',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`This Privacy Policy was last revised on: April 11, 2022`}
        />
      </>
    )
  }
]

const PrivacyPolicy = (): JSX.Element => {
  return (
    <Layout
      headerConfig={{ background: 'secondary', position: 'static' }}
      path="/privacy-policy"
    >
      <Hero />
      <PageSection
        customStyle={sprinkles({
          paddingY: ['152px', '80px'],
          paddingX: ['24px']
        })}
        maxWidth="856px"
      >
        <Paragraph
          variant="medium"
          marginBottom="32px"
          text={`This is the online Privacy Policy of EmyrRam Management Inc. (“we”,
            “us” or “EmyrRam”). This Privacy Policy describes how your Personal
            Information is collected, used, and shared when you visit
            www.clubkitchen.ca (the “Site”) and applies only to information
            collected by EmyrRam through the Site and does not apply to
            information collected by EmyrRam otherwise. For the purpose of this
            Privacy Policy, the term "Personal Information" includes any information
            that identifies you as an individual such as your name, personal
            address, telephone number and e-mail address.`}
        />
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`Your use of the Site indicates that you have read and accept our privacy
          practices, as outlined in this Privacy Policy. If you do not agree to
          the terms of this Policy, please do not use the Site. Please note that
          your use of the Site is also subject to the Terms of Service also posted
          on the Site.`}
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
