const defaultConfig = {
  BACKEND_URL: process.env.BACKEND_URL,
  HERE_MAPS_API_KEY: 'SfP3twS-kEjzlto-431Y-SDMrzSKM3RGLUzIazRRCLI',
  PROJECT_ID: '',
  PROJECT_NAME: 'club-kitchen',
  MP4_CDN_URL: 'https://cdn-dev.concordsites.com/club-kitchen/'
}

const config = {
  local: {
    BACKEND_URL: 'http://localhost:5000'
  },
  development: {
    BACKEND_URL: 'https://turtle.dev.k8s.concordswift.com',
    CDN_URL: 'https://drt4kfy6qmaeq.cloudfront.net/',
    isDev: true
  },
  demo: {
    BACKEND_URL: 'https://turtle-demo.machobear.ca',
    CDN_URL: 'https://cdn-dev.concordsites.com/club-kitchen/',
    isDev: true
  },
  production: {
    BACKEND_URL: 'https://be.concordmetrotown.com',
    CDN_URL: 'https://cdn.concordsites.com/club-kitchen/'
  }
}

export default {
  ...defaultConfig,
  ...config[process.env.buildEnv || 'development']
}
