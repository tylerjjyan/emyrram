import React, { useEffect, useState, useCallback } from 'react'
import useEventListener from '@/hooks/use-event-listener'
import useMediaQuery from '@/hooks/use-media-query'
import FullScreenHeader from './fullscreen-header'
import {
  header,
  HeaderVariants,
  navigationWrapper,
  cartStyle
} from './index.css'
import { ReactComponent as LogoWhiteSVG } from './logo.svg'
import { ReactComponent as LogoDarkSVG } from './icons/logo-dark.svg'
import { ReactComponent as CartWhiteSVG } from './cart.svg'
import { ReactComponent as CartDarkSVG } from './cart-dark.svg'
import { ReactComponent as MenuWhiteSVG } from './icons/menu.svg'
import { ReactComponent as MenuDarkSVG } from './icons/menu-dark.svg'
import ContactUsSidebar from '@/features/contact-us'
import Logo from './logo'

type HeaderConfigType = HeaderVariants & { isButtonVisible?: boolean }

interface HeaderProps {
  config: HeaderConfig
}

const HEADER_CONFIG = {
  transparent: {
    logo: LogoWhiteSVG,
    languageButtonConfig: 'light',
    navigationConfig: 'light',
    buttonConfig: { type: 'secondary', size: 'large' },
    menu: MenuWhiteSVG,
    cart: CartWhiteSVG
  },
  primary: {
    logo: LogoWhiteSVG,
    languageButtonConfig: 'dark',
    navigationConfig: 'dark',
    buttonConfig: { type: 'primary', size: 'large' },
    menu: MenuDarkSVG,
    cart: CartDarkSVG
  },
  secondary: {
    logo: LogoDarkSVG,
    languageButtonConfig: 'dark',
    navigationConfig: 'dark',
    buttonConfig: { type: 'primary', size: 'large' },
    menu: MenuDarkSVG,
    cart: CartDarkSVG
  }
}

const Header: React.FC<HeaderProps> = ({ config }) => {
  const [forceTheme, setForceTheme] = useState<
    keyof typeof HEADER_CONFIG | undefined
  >()
  const { ...restConfig } = config
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const displayMobile = useMediaQuery(`(max-width: 767px)`)
  const isTransparent = config?.background === 'transparent'

  const headerInfo = HEADER_CONFIG[forceTheme || 'transparent']
  const { logo: LogoSVG, cart: CartSVG } = headerInfo

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
      setForceTheme(() => 'transparent')
    }
  }, [forceTheme, pastOffset])

  useEffect(() => {
    const scrolledPastOffset = pastOffset()

    setForceTheme(() =>
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
    <>
      {!isOpen && (
        <div className={header({ ...restConfig, background: forceTheme })}>
          <Logo logoIcon={LogoSVG}></Logo>

          <>
            <div className={navigationWrapper}>
              {/* <NavigationBar colorTheme={navigationVariant} /> */}

              {/* <LanguageSwitcher theme={languageButtonVariant} /> */}
            </div>
            <CartSVG className={cartStyle} />
          </>
        </div>
      )}
      {displayMobile && isOpen && <FullScreenHeader setIsOpen={setIsOpen} />}
      <ContactUsSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Header
export type HeaderConfig = HeaderConfigType
