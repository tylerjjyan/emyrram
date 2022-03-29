import React, { useEffect, useState, useCallback } from 'react'
import { Button, ButtonVariantType } from '@/components/button'
import NavigationBar, { NavigationBarType } from '@/components/navigation-bar'
import useEventListener from '@/hooks/use-event-listener'
import useMediaQuery from '@/hooks/use-media-query'
import {
  header,
  HeaderVariants,
  navigationWrapper,
  customButtonStyle
} from './index.css'
import { ReactComponent as LogoWhiteSVG } from './logo.svg'
import { ReactComponent as LogoDarkSVG } from './logo-dark.svg'
interface HeaderProps {
  config: HeaderVariants
}

const HEADER_CONFIG = {
  transparent: {
    logo: LogoWhiteSVG,
    navigationConfig: 'light',
    buttonConfig: { type: 'secondary', size: 'large' }
  },
  primary: {
    logo: LogoDarkSVG,
    navigationConfig: 'dark',
    buttonConfig: { type: 'primary', size: 'large' }
  },
  secondary: {
    logo: LogoDarkSVG,
    navigationConfig: 'dark',
    buttonConfig: { type: 'primary', size: 'large' }
  }
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [forceTheme, setForceTheme] = useState<
    keyof typeof HEADER_CONFIG | undefined
  >()
  const displayMobile = useMediaQuery(`(max-width: 767px)`)
  const isTransparent = config?.background === 'transparent'

  const headerInfo = HEADER_CONFIG[forceTheme || 'transparent']
  const { logo: LogoSVG, buttonConfig, navigationConfig } = headerInfo

  const buttonVariant = buttonConfig as ButtonVariantType
  const navigationVariant = navigationConfig as NavigationBarType

  const pastOffset = useCallback(() => {
    const offset = displayMobile ? 15 : 125
    const doc = document?.documentElement
    return doc ? doc.scrollTop > offset : true
  }, [displayMobile])

  const onScroll = useCallback(() => {
    const scrolledPastOffset = pastOffset()
    if (scrolledPastOffset && forceTheme !== 'primary') {
      setForceTheme('primary')
    }
    if (!scrolledPastOffset && forceTheme !== 'transparent') {
      setForceTheme('transparent')
    }
  }, [forceTheme, pastOffset])

  useEffect(() => {
    const scrolledPastOffset = pastOffset()

    setForceTheme(() =>
      isTransparent && scrolledPastOffset ? 'primary' : undefined
    )
  }, [isTransparent, pastOffset])

  useEventListener('scroll', onScroll, {
    enabled: isTransparent
  })

  return (
    <div className={header({ ...config, background: forceTheme })}>
      <LogoSVG />
      <div className={navigationWrapper}>
        <NavigationBar colorTheme={navigationVariant} />
        <Button
          variant={buttonVariant}
          text="Contact Us"
          customStyle={customButtonStyle}
        />
      </div>
    </div>
  )
}

export default Header
