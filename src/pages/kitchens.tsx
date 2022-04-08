import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import KitchensFeature from '@/features/kitchens'

export default function Kitchens(): JSX.Element {
  return <KitchensFeature />
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
