import React from 'react'
import { Paragraph } from '@/components/typography'
import { vars } from '@/theme.css'
import {
  footerWrapper,
  wrapper,
  contentWrapper,
  customTextStyle,
  emailLinkStyle,
  description,
  logoWrapper
} from './index.css'
import { ReactComponent as LogoSVG } from './logo.svg'
import Socials from './socials'
import { useTranslation } from 'next-i18next'

const DefaultFooter = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={wrapper}>
      <div className={footerWrapper}>
        <div className={logoWrapper}>
          <LogoSVG />
          <p className={description}>
            We believe that luxury can be enjoyed anytime, anywhere. We are
            dedicated to creating and bringing you the most seductive gourmet
            snacks… all made from the finest ingredients.
          </p>
        </div>
        <div className={contentWrapper}>
          <div>
            <Paragraph
              variant="medium"
              text={t('component.footer.contact_us.text', 'Contact Us')}
              marginBottom="16px"
              style={customTextStyle}
              textColor={vars.colors.pureWhite}
            />
            <a
              href="mailto:info@emyrram.ca?subject=[Info Request] EmyrRam"
              className={emailLinkStyle}
            >
              <Paragraph
                variant="xSmall"
                text="Email: info@emyrram.ca"
                textColor={vars.colors.pureWhite}
              />
            </a>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  )
}

export default DefaultFooter
