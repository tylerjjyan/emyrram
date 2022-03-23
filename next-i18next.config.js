const LANGUAGES = ['en', 'zh']

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: LANGUAGES,
    load: 'languageOnly',
    debug: false,
    nsSeparator: ':',
    fallbackLng: 'en',
    ns: ['common'],
    localeSubpaths: {
      zh: 'zh'
    },
    defaultNS: 'common',
    detection: {
      order: [
        'path',
        'querystring',
        'cookie',
        'localStorage',
        'navigator',
        'htmlTag',
        'subdomain'
      ],
      lookupFromPathIndex: 0,
      caches: ['localStorage', 'cookie']
    }
  }
}
