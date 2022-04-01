import React from 'react'
import { Button } from '@/components/button'
import NavigationBar from '@/components/navigation-bar'
import { header, customButtion, contentWrapper, wrapper } from './index.css'
import { ReactComponent as LogoDarkSVG } from './icons/logo-dark.svg'
import { ReactComponent as XCircleSVG } from './icons/x-circle.svg'
import { useContactForm } from '@/hooks/use-contact-form'

interface HeaderProps {
  setIsOpen: (a: boolean) => void
}

const FullScreenHeader: React.FC<HeaderProps> = ({ setIsOpen }) => {
  const { setIsFormOpen } = useContactForm()
  return (
    <div className={wrapper}>
      <div
        className={header({ background: 'transparent', position: 'static' })}
      >
        <LogoDarkSVG />
        <XCircleSVG onClick={() => setIsOpen(false)} />
      </div>
      <div className={contentWrapper}>
        <NavigationBar colorTheme="dark" isHorizontal={false} />
        <Button
          variant={{ type: 'primary', size: 'large' }}
          text="Contact Us"
          id="club-kitchen-contact-us-menu"
          customStyle={customButtion}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
    </div>
  )
}

export default FullScreenHeader
