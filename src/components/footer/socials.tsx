import { vars } from '@/theme.css'
import socialConfig from 'config/social'
import SocialIcons from './social-icons'
import { Paragraph } from '../typography'
import { wrapper, copyrightWrapper } from './socials.css'

const { DEVELOPER, PRIVACY_POLICY } = socialConfig

const CopyrightText = (): JSX.Element => {
  return (
    <div className={copyrightWrapper}>
      <Paragraph
        variant="xSmall"
        text={`© ${new Date().getFullYear()} ${DEVELOPER}`}
        textColor={vars.colors.pureWhite}
      />
      <a
        id="footer-privacy"
        rel="noopener noreferrer"
        target="_blank"
        href={PRIVACY_POLICY}
      >
        <Paragraph
          variant="xSmall"
          text={`Privacy`}
          textColor={vars.colors.pureWhite}
        />
      </a>
      <a
        id="footer-terms"
        rel="noopener noreferrer"
        target="_blank"
        href={PRIVACY_POLICY}
      >
        <Paragraph
          variant="xSmall"
          text={`Terms`}
          textColor={vars.colors.pureWhite}
        />
      </a>
    </div>
  )
}
const Socials = (): JSX.Element => {
  return (
    <div className={wrapper}>
      <CopyrightText />
      <SocialIcons />
    </div>
  )
}

export default Socials
