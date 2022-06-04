import React from 'react'
import Layout from '@/components/layout'
import PageSection, { sprinkles } from '@/components/page-section'
import { Paragraph } from '@/components/typography'
import Hero from './hero'
import TermsSection from './terms-section'
import { textLink } from './index.css'

const TERMS_CONTENT = [
  {
    title: 'Overview',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`This website is operated by EmyrRam Management Inc.. Throughout the site, the
          terms “we”, “us” and “our” refer to EmyrRam Management Inc.. EmyrRam Management Inc. offers
          this website, including all information, tools and services available
          from this site to you, the user, conditioned upon your acceptance of
          all terms, conditions, policies and notices stated here.`}
        />
        <Paragraph
          variant="medium"
          text={`By visiting our site and/ or purchasing something from us, you engage in
          our “Service” and agree to be bound by the following terms and
          conditions (as they may be amended from time to time, these “Terms of
          Service”, “Terms”), including those additional terms and conditions and
          policies referenced herein and/or available by hyperlink. These Terms of
          Service apply to all users of the site, including without limitation
          users who are browsers, vendors, customers, merchants, and/ or
          contributors of content.`}
        />
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`Please read these Terms of Service carefully before accessing or using
          our website. By accessing or using any part of the site, you agree to be
          bound by these Terms of Service. If you do not agree to all the terms
          and conditions of this agreement, then you may not access the website or
          use any services. If these Terms of Service are considered an offer,
          acceptance is expressly limited to these Terms of Service.`}
        />
        <Paragraph
          variant="medium"
          text={`These Terms of Service do not set out all the terms and conditions that
          apply to customers of our EmyrRam service. Those terms and
          conditions would be set out in a separate contract, and these Terms of
          Service are subject to any such written contract that may be entered
          into between us and a customer of our EmyrRam service.`}
        />
        <Paragraph
          variant="medium"
          text={`Any new features or tools which are added to our site shall also be
          subject to the Terms of Service. You can review the most current version
          of the Terms of Service at any time on this page. We reserve the right
          to update, change or replace any part of these Terms of Service by
          posting updates and/or changes to our website. It is your responsibility
          to check this page periodically for changes. Your continued use of or
          access to the website following the posting of any changes constitutes
          acceptance of those changes.`}
        />
      </>
    )
  },

  {
    title: 'Section 1 - Online Store Terms',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`By agreeing to these Terms of Service, you represent that you are at
          least the age of majority in your state or province of residence.`}
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          text={`You may not use our Service for any illegal or unauthorized purpose nor
          may you, in the use of the Service, violate any laws in your
          jurisdiction (including but not limited to copyright laws).`}
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`You must not transmit any worms or viruses or any code of a destructive
          nature.`}
        />
        <Paragraph
          variant="medium"
          text={`A breach or violation of any of the Terms will result in an immediate
          termination of your access to our Services.`}
        />
      </>
    )
  },
  {
    title: 'Section 2 - General Conditions',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`We reserve the right to refuse service to anyone for any reason at any
          time.`}
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`You agree not to reproduce, duplicate, copy, sell, resell or exploit any
          portion of the Service, use of the Service, or access to the Service or
          any contact on the website through which the service is provided,
          without express written permission by us.`}
        />
        <Paragraph
          variant="medium"
          text={`The headings used in this agreement are included for convenience only
          and will not limit or otherwise affect these Terms.`}
        />
      </>
    )
  },
  {
    title: 'Section 3 - Accuracy, Completeness and Timeliness of Information',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`We are not responsible if information made available on this site is not
          accurate, complete or current. The material on this site is provided for
          general information only and should not be relied upon or used as the
          sole basis for making decisions without consulting primary, more
          accurate, more complete or more timely sources of information. Any
          reliance on the material on this site is at your own risk.`}
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          text={`This site may contain certain historical information. Historical
          information, necessarily, is not current and is provided for your
          reference only. We reserve the right to modify the contents of this site
          at any time, but we have no obligation to update any information on our
          site. You agree that it is your responsibility to monitor changes to our
          site.`}
        />
      </>
    )
  },
  {
    title: 'Section 4 - Modifications to the Service and Prices',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`Prices for our Service are subject to change without notice.`}
          marginBottom="24px"
        />
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`We reserve the right at any time to modify or discontinue the Service
          (or any part or content thereof) without notice at any time.`}
        />
        <Paragraph
          variant="medium"
          text={`We shall not be liable to you or to any third-party for any
          modification, price change, suspension or discontinuance of the Service.`}
        />
      </>
    )
  },
  {
    title: 'Section 5 - Personal Information',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`Your submission of personal information through the store is governed by
          our `}
        >
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="/privacy-policy"
              className={textLink}
            >
              Privacy Policy.
            </a>
          </span>
          <span>
            {' '}
            To view our{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="/privacy-policy"
              className={textLink}
            >
              Privacy Policy.
            </a>
          </span>
        </Paragraph>
      </>
    )
  },
  {
    title: 'Section 6 - Errors, Inaccuracies and Omissions',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`Occasionally there may be information on our site or in the Service that
          contains typographical errors, inaccuracies or omissions that may relate
          to pricing, promotions, offers, and availability. We reserve the right
          to correct any errors, inaccuracies or omissions, and to change or
          update information or cancel orders if any information in the Service or
          on any related website is inaccurate at any time without prior notice
          (including after you have submitted your order).`}
        />
        <Paragraph
          variant="medium"
          text={`We undertake no obligation to update, amend or clarify information in
          the Service or on any related website, including without limitation,
          pricing information, except as required by law. No specified update or
          refresh date applied in the Service or on any related website, should be
          taken to indicate that all information in the Service or on any related
          website has been modified or updated.`}
        />
      </>
    )
  },
  {
    title: 'Section 7 - Prohibited uses',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`In addition to other prohibitions as set forth in the Terms of Service,
          you are prohibited from using our Service, or the site or its content:`}
        />
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`(a) for any unlawful purpose; (b) to solicit others to perform or
          participate in any unlawful acts; (c) to violate any international,
          federal, provincial or state regulations, rules, laws, or local
          ordinances; (d) to infringe upon or violate our intellectual property
          rights or the intellectual property rights of others; (e) to harass,
          abuse, insult, harm, defame, slander, disparage, intimidate, or
          discriminate based on gender, sexual orientation, religion, ethnicity,
          race, age, national origin, or disability; (f) to submit false or
          misleading information; (g) to upload or transmit viruses or any other
          type of malicious code that will or may be used in any way that will
          affect the functionality or operation of the Service or of any related
          website, other websites, or the Internet; (h) to collect or track the
          personal information of others; (i) to spam, phish, pharm, pretext,
          spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k)
          to interfere with or circumvent the security features of the Service or
          any related website, other websites, or the Internet. We reserve the
          right to terminate your use of the Service or any related website for
          violating any of the prohibited uses.`}
        />
      </>
    )
  },
  {
    title: 'Section 8 - Disclaimer of Warranties, Limitation of Liability',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`We do not guarantee, represent or warrant that your use of our Service
          will be uninterrupted, timely, secure or error-free.`}
        />
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`We do not warrant that the results that may be obtained from the use of
          the service will be profitable or reliable.`}
        />
        <Paragraph
          variant="medium"
          text={`You agree that from time to time we may remove the service for
        indefinite periods of time or cancel the service at any time, without
        notice to you.`}
        />
        <Paragraph
          variant="medium"
          text={`You expressly agree that your use of, or inability to use, the service
          is at your sole risk. The Service is (except as expressly stated by us)
          provided 'as is' and 'as available' for your use, without any
          representation, warranties or conditions of any kind, either express or
          implied, including all implied warranties or conditions of
          merchantability, merchantable quality, fitness for a particular purpose,
          durability, title, and non-infringement.`}
        />
        <Paragraph
          variant="medium"
          text={`In no case shall EmyrRam Management Inc., our directors, officers,
          employees, affiliates, agents, contractors, interns, suppliers, service
          providers or licensors be liable for any injury, loss, claim, or any
          direct, indirect, incidental, punitive, special, or consequential
          damages of any kind, including, without limitation lost profits, lost
          revenue, lost savings, loss of data, replacement costs, or any similar
          damages, whether based in contract, tort (including negligence), strict
          liability or otherwise, arising from your use of the Service, or for any
          other claim related in any way to your use of the Service, including,
          but not limited to, any errors or omissions in any content, or any loss
          or damage of any kind incurred as a result of the use of the service
          even if advised of their possibility.`}
        />
        <Paragraph
          variant="medium"
          text={`Because some states or jurisdictions do not allow the exclusion or the
          limitation of liability for consequential or incidental damages, in such
          states or jurisdictions, our liability shall be limited to the maximum
          extent permitted by law.`}
        />
      </>
    )
  },
  {
    title: 'Section 9 - Indemnification',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`You agree to indemnify, defend and hold harmless EmyrRam Management
          Inc. and our parent, subsidiaries, affiliates, partners, officers,
          directors, agents, contractors, licensors, service providers,
          subcontractors, suppliers, interns and employees, harmless from any
          claim or demand, including reasonable attorneys’ fees, made by any
          third-party due to or arising out of your use of our Services, or
          provision of food, drinks or other products or services to your
          customers, any breach of these Terms of Service or any documents they
          incorporate by reference, or your violation of any law or the rights of
          a third-party.`}
        />
      </>
    )
  },
  {
    title: 'Section 10 - Severability',
    content: (
      <>
        <Paragraph
          variant="medium"
          text={`In the event that any provision of these Terms of Service is determined
          to be unlawful, void or unenforceable, such provision shall nonetheless
          be enforceable to the fullest extent permitted by applicable law, and
          the unenforceable portion shall be deemed to be severed from these Terms
          of Service, such determination shall not affect the validity and
          enforceability of any other remaining provisions.`}
        />
      </>
    )
  },
  {
    title: 'Section 11 - Termination',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`The obligations and liabilities of the parties incurred prior to the
          termination date shall survive the termination of this agreement for all
          purposes.`}
        />
        <Paragraph
          variant="medium"
          text={`These Terms of Service are effective unless and until terminated by us.`}
        />
        <Paragraph
          variant="medium"
          text={`If in our sole judgment you fail, or we suspect that you have failed, to
          comply with any term or provision of these Terms of Service, we also may
          terminate any agreement we have with you at any time without notice and
          you will remain liable for all amounts due up to and including the date
          of termination; and/or accordingly may deny you access to our Services
          (or any part thereof).`}
        />
      </>
    )
  },
  {
    title: 'Section 12 - Entire Agreement',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`The failure of us to exercise or enforce any right or provision of these
          Terms of Service shall not constitute a waiver of such right or
          provision.`}
        />
        <Paragraph
          variant="medium"
          text={`These Terms of Service and any policies or operating rules posted by us
          on this site or in respect to the Service, together with any written
          contract we may enter into that governs your use of the Service,
          constitutes the entire agreement and understanding between you and us
          and govern your use of the Service, superseding any prior or
          contemporaneous agreements, communications and proposals, whether oral
          or written, between you and us (including, but not limited to, any prior
          versions of the Terms of Service). Provided, however, for clarity, that
          any written contract we may enter into that governs your use of the
          Service supersedes these Terms of Service in the event of any
          inconsistency.`}
        />
        <Paragraph
          variant="medium"
          text={`Any ambiguities in the interpretation of these Terms of Service shall
          not be construed against the drafting party.`}
        />
      </>
    )
  },
  {
    title: 'Section 13 - Governing Law',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`These Terms of Service and any separate agreements whereby we provide
          you Services shall be governed by and construed in accordance with the
          laws of British Columbia.`}
        />
      </>
    )
  },
  {
    title: 'Section 14 - Changes to Terms of Service',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`You can review the most current version of the Terms of Service at any
          time at this page.`}
        />
        <Paragraph
          variant="medium"
          text={`We reserve the right, at our sole discretion, to update, change or
          replace any part of these Terms of Service by posting updates and
          changes to our website. It is your responsibility to check our website
          periodically for changes. Your continued use of or access to our website
          or the Service following the posting of any changes to these Terms of
          Service constitutes acceptance of those changes.`}
        />
      </>
    )
  },
  {
    title: 'Section 15 - Contact Information',
    content: (
      <>
        <Paragraph
          variant="medium"
          marginBottom="24px"
          text={`Questions about the Terms of Service should be sent to us at support@clubkitchen.ca.`}
        />
      </>
    )
  },
  {
    title: '',
    content: (
      <>
        <Paragraph variant="medium" text={`EmyrRam Management Inc.`} />
        <Paragraph
          variant="medium"
          text={`988 Expo Blvd, Vancouver, BC, V67 0G2, Canada`}
        />
      </>
    )
  }
]

const TermsOfService = (): JSX.Element => {
  return (
    <Layout
      headerConfig={{ background: 'secondary', position: 'static' }}
      path="/terms"
    >
      <Hero />
      <PageSection
        customStyle={sprinkles({
          paddingY: ['152px', '80px'],
          paddingX: ['24px']
        })}
        maxWidth="856px"
      >
        {TERMS_CONTENT.map(({ title, content }, index) => {
          return (
            <TermsSection key={index} title={title}>
              {content}
            </TermsSection>
          )
        })}
      </PageSection>
    </Layout>
  )
}

export default TermsOfService
