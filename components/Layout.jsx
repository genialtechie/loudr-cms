import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Loudr</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
