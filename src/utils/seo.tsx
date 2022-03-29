import { i18n } from 'next-i18next'
import config from 'config'

const { FRONTEND_URL } = config

const CanonicalUrl = (path: string): string => {
  const lang = i18n?.language
  if (!lang || lang === 'en') return `${FRONTEND_URL}${path}`
  return `${FRONTEND_URL}/${lang}${path}`
}

const CurrentLang = (): string | undefined => {
  return i18n?.language
}

export { CanonicalUrl, CurrentLang }
