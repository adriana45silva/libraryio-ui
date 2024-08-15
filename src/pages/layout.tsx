import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from '@/components/layout/header'
import dynamic from 'next/dynamic'


interface Props {
  title?: string
  children: ReactNode
}

const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: false })
const Sidebar = dynamic(() => import('@/components/layout/sidebar'), { ssr: false })

const Layout = ({ children, title = 'Next.js App' }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='flex-grow container flex'>
        <Sidebar />
        <section className="flex-grow container flex justify-center mx-auto px-4 py-8">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Layout