/* eslint-disable max-params */
const LANGUAGES = ['en', 'zh']
const typescriptTransform = require('i18next-scanner-typescript')

module.exports = {
  input: ['src/**/*.{ts,tsx}'],
  options: {
    debug: true,
    removeUnusedKeys: true,
    func: {
      list: ['t'],
      extensions: []
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: [],
      fallbackKey: (ns, value) => {
        return value
      }
    },
    lngs: LANGUAGES,
    ns: ['common'],
    defaultLng: 'en',
    defaultNs: 'common',
    defaultValue: function (lng, ns, key, options) {
      return options.defaultValue || key
    },
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: ':', // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  transform: typescriptTransform({
    extensions: ['.tsx'],
    tsOptions: {
      target: 'es2017'
    }
  })
}
