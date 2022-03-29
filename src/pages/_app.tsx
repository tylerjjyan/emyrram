import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
// import useSetLocaleEvents from '@/hooks/useSetLocaleEvents'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // useSetLocaleEvents()
  return <Component {...pageProps} />
}
export default appWithTranslation(MyApp)
