import React, { ReactNode } from 'react'
import { useRouter } from 'next/router'
import I18nLink from 'next/link'

interface LinkProps {
  children?: ReactNode
  href: string
}

const Link: React.FC<LinkProps> = ({ children, href, ...rest }) => {
  const router = useRouter()

  if (!href) return null
  return (
    <I18nLink
      href={{ pathname: href, query: router.query }}
      {...rest}
      as={href}
    >
      {children}
    </I18nLink>
  )
}

export default Link
