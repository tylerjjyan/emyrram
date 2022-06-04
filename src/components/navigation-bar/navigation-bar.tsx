import React from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from '@/components/link-with-query'
import {
  navigationItem,
  itemVariants,
  navigationWrapperVariants
} from './index.css'

interface NavigationProps {
  colorTheme: keyof typeof itemVariants
  isHorizontal?: boolean
}

const NavigationBar: React.FC<NavigationProps> = ({
  colorTheme,
  isHorizontal = true
}): JSX.Element => {
  const router = useRouter()
  const [t] = useTranslation()

  const routes = [
    {
      href: '/shop-online',
      name: t('component.navigation_bar.shop-online.title', 'Shop Online')
    },
    {
      href: '/about',
      name: t('component.navigation_bar.about.title', 'About')
    },
    {
      href: '/contact',
      name: t('component.navigation_bar.contact.title', 'Contact')
    }
  ]

  return (
    <nav
      className={
        navigationWrapperVariants[isHorizontal ? 'horizontal' : 'vertical']
      }
    >
      {routes.map(route => {
        const isActive = router.pathname === route.href
        const itemClass = classNames(
          navigationItem({ active: isActive, horizontal: isHorizontal }),
          itemVariants[colorTheme]
        )

        return (
          <Link key={route.href} href={route.href}>
            <a className={itemClass}>{route.name}</a>
          </Link>
        )
      })}
    </nav>
  )
}

export default NavigationBar
