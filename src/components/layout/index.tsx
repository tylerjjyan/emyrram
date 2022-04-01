import React, { ReactNode } from 'react'
import classNames from 'classnames'
import Header, { HeaderConfig } from '@/components/header'
import Footer from '@/components/footer'
import Head from '@/components/head'
import { wrapper, main } from './index.css'

interface LayoutProps {
  title?: string
  description?: string
  path?: string
  HeaderComponent?: React.ComponentType
  headerConfig?: HeaderConfig
  children?: ReactNode
  layoutStyle?: string
  customSeoTags?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  path,
  children,
  title,
  description,
  headerConfig = { background: 'transparent', position: 'fixed' },
  HeaderComponent,
  layoutStyle,
  customSeoTags
}) => {
  return (
    <div className={classNames(wrapper, layoutStyle)}>
      {HeaderComponent ? <HeaderComponent /> : <Header config={headerConfig} />}
      <Head title={title} description={description} path={path}>
        {customSeoTags}
      </Head>
      <main className={main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
