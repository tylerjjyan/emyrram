import React from 'react'
import { Paragraph } from '@/components/typography'
import { vars } from '@/theme.css'
import {
  footerWrapper,
  upperWrapper,
  contentWrapper,
  customTextStyle
} from './index.css'
import { ReactComponent as LogoSVG } from './icons/Logo.svg'
import Socials from './socials'

const DefaultFooter = (): JSX.Element => {
  return (
    <div className={footerWrapper}>
      <div className={upperWrapper}>
        <LogoSVG />
        <div className={contentWrapper}>
          <div>
            <Paragraph
              variant="xSmall"
              text="Location"
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
              text="Contact Us"
              marginBottom="16px"
              style={customTextStyle}
              textColor={vars.colors.pureWhite}
            />
            <Paragraph
              variant="xSmall"
              text="Email: [email address]"
              textColor={vars.colors.pureWhite}
              marginBottom="8px"
            />
            <Paragraph
              variant="xSmall"
              text="Phone: [phone #]"
              textColor={vars.colors.pureWhite}
            />
          </div>
        </div>
      </div>
      <Socials />
    </div>
  )
}

export default DefaultFooter
