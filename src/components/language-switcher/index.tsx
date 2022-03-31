import React from 'react'
import { useTranslation } from 'next-i18next'
import { buttonVariants } from './index.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LanguageSwitcherProps {
  theme?: keyof typeof buttonVariants
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = props => {
  const [t] = useTranslation()
  const router = useRouter()
  const { theme = 'light' } = props
  const { pathname, query } = router

  return (
    <Link
      locale={router.locale === 'en' ? 'zh' : 'en'}
      href={{ pathname, query }}
    >
      <button
        className={buttonVariants[theme]}
        id="toggle-language"
        key={router.locale}
        title={t('component.language_switcher.title', 'Switch Language')}
      >
        {router.locale === 'en' ? '中文' : 'EN'}
      </button>
    </Link>
  )
}

export default LanguageSwitcher
export type LanguageButtonType = keyof typeof buttonVariants
