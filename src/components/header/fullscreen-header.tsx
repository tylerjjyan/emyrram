import React from 'react'
import { Button } from '@/components/button'
import NavigationBar from '@/components/navigation-bar'
import { header, customButtion, contentWrapper } from './index.css'
import { ReactComponent as LogoDarkSVG } from './icons/logo-dark.svg'
import { ReactComponent as XCircleSVG } from './icons/x-circle.svg'

interface HeaderProps {
  setIsOpen: (a: boolean) => void
}

const FullScreenHeader: React.FC<HeaderProps> = ({ setIsOpen }) => {
  return (
    <div>
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
          customStyle={customButtion}
        />
      </div>
    </div>
  )
}

export default FullScreenHeader
