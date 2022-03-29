import React, { ReactNode } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Head from '@/components/head'
import { wrapper, main } from './index.css'

interface LayoutProps {
  title?: string
  description?: string
  path?: string
  HeaderComponent?: React.ComponentType
  headerConfig?: null
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  path,
  children,
  title,
  description,
  HeaderComponent = Header
}) => {
  return (
    <div className={wrapper}>
      <HeaderComponent
        config={{ background: 'transparent', position: 'fixed' }}
      />
      <Head title={title} description={description} path={path} />
      <main className={main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
