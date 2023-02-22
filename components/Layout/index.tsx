import React from 'react'
import {NextPage} from 'next'
import NavBar from '../NavBar'

interface Props {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
  return (
    <>
        <nav>
            <NavBar/>
        </nav>
        <main>{children} </main>
    </>
  )
}

export default Layout