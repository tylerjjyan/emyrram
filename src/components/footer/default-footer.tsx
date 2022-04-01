import React from 'react'
import { Paragraph } from '@/components/typography'
import { vars } from '@/theme.css'
import {
  footerWrapper,
  upperWrapper,
  contentWrapper,
  customTextStyle,
  emailLinkStyle
} from './index.css'
import { ReactComponent as LogoSVG } from './icons/Logo.svg'
import Socials from './socials'
import { useTranslation } from 'next-i18next'

const DefaultFooter = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={footerWrapper}>
      <div className={upperWrapper}>
        <LogoSVG />
        <div className={contentWrapper}>
          <div>
            <Paragraph
              variant="xSmall"
              text={t('component.footer.location.text', 'Location')}
              marginBottom="16px"
              style={customTextStyle}
              textColor={vars.colors.pureWhite}
            />
            <Paragraph
              variant="xSmall"
              text="89 Nelson St."
              textColor={vars.colors.pureWhite}
            />
            <Paragraph
              variant="xSmall"
              text="Vancouver, BC"
              textColor={vars.colors.pureWhite}
            />
            <Paragraph
              variant="xSmall"
              text="V6Z 0E7"
              textColor={vars.colors.pureWhite}
            />
          </div>
          <div>
            <Paragraph
              variant="xSmall"
              text={t('component.footer.contact_us.text', 'Contact Us')}
              marginBottom="16px"
              style={customTextStyle}
              textColor={vars.colors.pureWhite}
            />
            <a
              href="mailto:info@clubkitchen.ca?subject=[Info Request] Club Kitchen"
              className={emailLinkStyle}
            >
              <Paragraph
                variant="xSmall"
                text="Email: info@clubkitchen.ca"
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
