import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import EfficiencyFeature from '@/features/efficiency'

export default function Efficiency(): JSX.Element {
  return <EfficiencyFeature />
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
