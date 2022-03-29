import React from 'react'
import { socialItem, socialWrapper } from './social-icons.css'
import { ReactComponent as FacebookIcon } from './icons/Facebook.svg'
import { ReactComponent as InstagramIcon } from './icons/Instagram.svg'
import { ReactComponent as TikTokIcon } from './icons/Tiktok.svg'
import { ReactComponent as LinkedInIcon } from './icons/LinkedIn.svg'
import socialConfig from 'config/social'

const { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL, LINKEDIN_URL } = socialConfig

const SocialIcon: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = props => {
  const { children, ...rest } = props

  return (
    <a className={socialItem} {...rest}>
      {children}
    </a>
  )
}

const SocialIcons = (): JSX.Element => {
  return (
    <div className={socialWrapper}>
      <SocialIcon
        id="footer-instagram"
        rel="noopener noreferrer"
        target="_blank"
        href={INSTAGRAM_URL}
      >
        <InstagramIcon />
      </SocialIcon>
      <SocialIcon
        id="footer-facebook"
        rel="noopener noreferrer"
        target="_blank"
        href={FACEBOOK_URL}
      >
        <FacebookIcon />
      </SocialIcon>
      <SocialIcon
        id="footer-tiktok"
        rel="noopener noreferrer"
        target="_blank"
        href={TIKTOK_URL}
      >
        <TikTokIcon />
      </SocialIcon>

      <SocialIcon
        id="footer-linkedin"
        rel="noopener noreferrer"
        target="_blank"
        href={LINKEDIN_URL}
      >
        <LinkedInIcon />
      </SocialIcon>
    </div>
  )
}

export default SocialIcons
