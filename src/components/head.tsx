import React, { ReactNode } from 'react'
import NextHead from 'next/head'
import { useTranslation } from 'next-i18next'
import { CanonicalUrl, CurrentLang } from '@/utils/seo'
import config from 'config'
import Logo from '../../public/logo.png'

const { FRONTEND_URL } = config

interface HeadProps {
  title?: string
  ogTitle?: string
  description?: string
  ogImage?: string
  path?: string
  noindex?: boolean
  children?: ReactNode
  prefetch?: any
}

const Head: React.FC<HeadProps> = props => {
  const { t } = useTranslation()
  const defaultTitle = t(
    'component.head.title',
    'Club Kitchen | Premier Commissary Kitchen Vancouver'
  )
  const defaultDescription = t(
    'component.head.text',
    `Club Kitchen is the ultimate commissary kitchen in Vancouver. From
    logistics to order fulfilment, everything's taken care of so your time
    is spent on cooking.`
  )
  const defaultURL = FRONTEND_URL
  const defaultPath = ''
  const defaultOGImage = Logo
  const prefetchImages = props.prefetch?.images || []

  return (
    <>
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.noindex && <meta name="robots" content="noindex" />}
        <title>{props.title || defaultTitle}</title>
        <meta
          name="description"
          content={props.description || defaultDescription}
        />
        <link rel="canonical" href={CanonicalUrl(props.path || defaultPath)} />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${defaultURL}${props.path || defaultPath}`}
        />
        <link
          rel="alternate"
          hrefLang="zh-Hans"
          href={`${defaultURL}/zh${props.path || defaultPath}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${defaultURL}${props.path || defaultPath}`}
        />
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
        <link rel="apple-touch-icon" href="/static/touch-icon.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        d
        <link rel="icon" href="/static/favicon.ico" />
        <meta
          property="og:locale"
          content={CurrentLang() === 'zh' ? 'zh_CN' : 'en_CA'}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={props.ogTitle || props.title || defaultTitle}
        />
        <meta
          property="og:description"
          content={props.description || defaultDescription}
        />
        <meta
          property="og:url"
          content={CanonicalUrl(props.path || defaultPath)}
        />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta
          property="og:image:alt"
          content="concord_sky_apartment_for_sale_toronto"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="838" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title || defaultTitle} />
        <meta
          name="twitter:description"
          content={props.description || defaultDescription}
        />
        <meta
          name="twitter:url"
          content={CanonicalUrl(props.path || defaultPath)}
        />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        {prefetchImages.map((config: any, index: number) => (
          <React.Fragment key={index}>
            {config.mobile.map((image: any, i: number) => (
              <link
                rel="prefetch"
                key={i}
                href={image}
                as="image"
                media="(max-width: 600px)"
              />
            ))}
            {config.desktop.map((image: any, i: number) => (
              <link rel="prefetch" key={i} href={image} as="image" />
            ))}
          </React.Fragment>
        ))}
        {props.children}
      </NextHead>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@type": "Accommodation",
            "additionalType" : "http://www.productontology.org/id/Condominium",
            "name" : "Club Kitchen",
            "description" : "Concord Sky is poised to be one of the tallest residential towers in Canada. Live at the epicentre of Toronto on Yonge Street with unparalleled convenience.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vancouver",
              "addressRegion": "BC",
              "postalCode": "V6Z 0E7",
              "streetAddress": "89 Nelson Street"
            }
          }`
        }}
      />
    </>
  )
}

export default Head
