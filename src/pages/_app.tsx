import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ContactFormProvider } from '@/hooks/use-contact-form/context'
import useSetLocaleEvents from '@/hooks/useSetLocaleEvents'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useSetLocaleEvents()
  return (
    <ContactFormProvider>
      <Component {...pageProps} />
    </ContactFormProvider>
  )
}
export default appWithTranslation(MyApp)
