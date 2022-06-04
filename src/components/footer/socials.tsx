import { vars } from '@/theme.css'
import socialConfig from 'config/social'
// import SocialIcons from './social-icons'
import { Paragraph } from '../typography'
import { wrapper, copyrightWrapper, customTextStyle } from './socials.css'
import { useTranslation } from 'next-i18next'

const { DEVELOPER } = socialConfig

const CopyrightText = (): JSX.Element => {
  const { t } = useTranslation()
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
        href="/"
        className={customTextStyle}
      >
        <Paragraph
          variant="xSmall"
          text={t('component.footer.privacy.text', `Privacy`)}
          textColor={vars.colors.pureWhite}
        />
      </a>
      <a
        id="footer-terms"
        rel="noopener noreferrer"
        target="_blank"
        href="/"
        className={customTextStyle}
      >
        <Paragraph
          variant="xSmall"
          text={t('component.footer.terms.text', `Terms`)}
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
      {/* <SocialIcons /> */}
    </div>
  )
}

export default Socials
