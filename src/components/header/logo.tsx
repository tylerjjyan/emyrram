import React from 'react'
import Link from '@/components/link-with-query'
import { logoWrapper } from './index.css'

interface LogoProps {
  logoIcon: React.FC<React.SVGProps<SVGSVGElement>>
}

const Logo: React.FC<LogoProps> = ({ logoIcon: LogoIcon }): JSX.Element => (
  <Link href="/">
    <a>
      <div className={logoWrapper}>
        <LogoIcon />
      </div>
    </a>
  </Link>
)

export default Logo
