import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import PrivacyPolicyFeature from '@/features/privacy-policy'

export default function PrivacyPolicy(): JSX.Element {
  return <PrivacyPolicyFeature />
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
