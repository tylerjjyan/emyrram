import React, { useEffect, useState, useCallback } from 'react'
import { Button, ButtonVariantType } from '@/components/button'
import NavigationBar, { NavigationBarType } from '@/components/navigation-bar'
import useEventListener from '@/hooks/use-event-listener'
import useMediaQuery from '@/hooks/use-media-query'
import FullScreenHeader from './fullscreen-header'
import {
  header,
  HeaderVariants,
  navigationWrapper,
  customButtonStyle,
  wrapper
} from './index.css'
import { ReactComponent as LogoWhiteSVG } from './icons/logo.svg'
import { ReactComponent as LogoDarkSVG } from './icons/logo-dark.svg'
import { ReactComponent as MenuWhiteSVG } from './icons/menu.svg'
import { ReactComponent as MenuDarkSVG } from './icons/menu-dark.svg'
import ContactUsSidebar from '@/features/contact-us'

interface HeaderProps {
  config: HeaderVariants
}

const HEADER_CONFIG = {
  transparent: {
    logo: LogoWhiteSVG,
    navigationConfig: 'light',
    buttonConfig: { type: 'secondary', size: 'large' },
    menu: MenuWhiteSVG
  },
  primary: {
    logo: LogoDarkSVG,
    navigationConfig: 'dark',
    buttonConfig: { type: 'primary', size: 'large' },
    menu: MenuDarkSVG
  },
  secondary: {
    logo: LogoDarkSVG,
    navigationConfig: 'dark',
    buttonConfig: { type: 'primary', size: 'large' },
    menu: MenuDarkSVG
  }
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [forceTheme, setForceTheme] = useState<
    keyof typeof HEADER_CONFIG | undefined
  >(config?.background)
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const displayMobile = useMediaQuery(`(max-width: 767px)`)
  const isTransparent = config?.background === 'transparent'

  const headerInfo = HEADER_CONFIG[forceTheme || 'transparent']
  const {
    logo: LogoSVG,
    buttonConfig,
    navigationConfig,
    menu: MenuSVG
  } = headerInfo

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

    setForceTheme(
      isTransparent && scrolledPastOffset ? 'primary' : config?.background
    )
  }, [isTransparent, pastOffset, config])

  useEventListener('scroll', onScroll, {
    enabled: isTransparent && !isOpen
  })

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={wrapper({ open: isOpen })}>
      {!isOpen && (
        <div className={header({ ...config, background: forceTheme })}>
          <LogoSVG />
          {displayMobile ? (
            <MenuSVG onClick={() => setIsOpen(true)} />
          ) : (
            <div className={navigationWrapper}>
              <NavigationBar colorTheme={navigationVariant} />
              <Button
                variant={buttonVariant}
                text="Contact Us"
                customStyle={customButtonStyle}
                onClick={() => setIsSidebarOpen(true)}
              />
            </div>
          )}
        </div>
      )}
      {displayMobile && isOpen && <FullScreenHeader setIsOpen={setIsOpen} />}
      <ContactUsSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Header
export type HeaderConfig = HeaderVariants
