import React, { ReactNode } from 'react'
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
}

const Layout: React.FC<LayoutProps> = ({
  path,
  children,
  title,
  description,
  headerConfig = { background: 'transparent', position: 'fixed' },
  HeaderComponent
}) => {
  return (
    <div className={wrapper}>
      {HeaderComponent ? <HeaderComponent /> : <Header config={headerConfig} />}
      <Head title={title} description={description} path={path} />
      <main className={main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
