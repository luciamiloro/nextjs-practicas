import React, { useContext } from 'react'
import {NextPage} from 'next'
import NavBar from '../NavBar'
import Head from 'next/head'
import {Locale} from '../../pages/_app'
import contentAR from "../locales/ar"
import contentBR from "../locales/br"

interface Props {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
  const locale = useContext(Locale)
  const content = locale === "es" ? contentAR : contentBR

  return (
    <>
        <Head>
        <title>Rick y Morty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={content.description} />
        <link rel="icon" href="/logoRick.png" />
      </Head>
        <nav>
            <NavBar/>
        </nav>
        <main>{children} </main>
    </>
  )
}

export default Layout