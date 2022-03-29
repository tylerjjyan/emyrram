import React from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Link from '@/components/link-with-query'
import { navigationItem, navigationWrapper, itemVariants } from './index.css'

interface NavigationProps {
  colorTheme: keyof typeof itemVariants
}

const NavigationBar: React.FC<NavigationProps> = ({
  colorTheme
}): JSX.Element => {
  const router = useRouter()
  const [t] = useTranslation()

  const routes = [
    {
      href: '/efficiency',
      name: t('component.navigation_bar.efficiency.title', 'Efficiency')
    },
    {
      href: '/kitchen',
      name: t('component.navigation_bar.kitchen.title', 'Kitchen')
    },
    {
      href: '/faq',
      name: t('component.navigation_bar.faq.title', 'FAQ')
    }
  ]

  return (
    <nav className={navigationWrapper}>
      {routes.map(route => {
        const isActive = router.pathname === route.href
        const itemClass = classNames(
          navigationItem({ active: isActive }),
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
