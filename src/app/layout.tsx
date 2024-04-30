
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from "next/head"
// import 'globals.css'

// import bootstrap v5

// import Link from 'next/Link'
// import style from 'page.module.css'
import style from 'page.module.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'Ciptadra Softindo - Kota Depok',
description: 'Ciptadra Softindo Kota Depok',
}

export default function RootLayout({
children,
}: {
  children: React.ReactNode
}) {
return (
<html lang="en">
  
<head>

  <link rel="shortcut icon" href="/img/favicon.png" />
  <link rel="stylesheet" type="text/css" href="/styles/css/plugins.css" />
  <link rel="stylesheet" type="text/css" href="/styles/css/style.css" />
  <link rel="stylesheet" type="text/css" href="/styles/css/colors/green.css" />
  <link rel="stylesheet" type="text/css" href="/styles/css/fonts/thicccboi.css" />
  <link rel="stylesheet" type="text/css" href="/styles/css/plugins/animate.min.css" />
  <link rel="stylesheet" type="text/css" href="/styles/css/plugins/fontawesome.min.css" />
  <link rel="stylesheet" type="text/css" href="/styles/css/main.css?v=4.0" />
  <link rel="stylesheet" type="text/css" href="/styles/css/boxicons.min.css" />
  <link rel="stylesheet" type="text/css" href="/styles/css/fontawesome.min.css" />
  <link rel="stylesheet" type="text/css" href="/styles/sass/pages/_shop.scss" />
  <link rel="stylesheet" type="text/css" href="/styles/css/fontawesome.min.css" />
  <link rel="stylesheet" type="text/css" href="/styles/sass/pages/_shop.scss" />
  <link rel="stylesheet" type="text/css" href="/styles/css/splide.min.css" />

{/* ============================================================================================== */}

  <Script src="/styles/js/plugins.js" />
  <Script src="/styles/js/custom.js" />
  <Script src="/styles/js/theme.js" />

  </head>

<body className={inter.className}>
  <Navbar />
  {children}
  <Footer />
  {/* content page routing yg open (page.txs ->) */}
</body>

</html>
)
}