import React ,{ useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Nav.module.css'
import {Locale} from '../../pages/_app'
import contentAR from "../locales/ar"
import contentBR from "../locales/br" 

const NavBar = () => {
    const locale = useContext(Locale)
    const content = locale === "es" ? contentAR : contentBR

    return (
        <div className={styles.nav} >
            <div className={styles.logo}>
                <Image src="/logoRick.png" alt="logo" height={60} width={120} />
            </div>
            <div className={styles.links}>
                <Link href="/">{content.home} </Link>
                <Link href="/contact">{content.contact}</Link>
                <Link href="/about">{content.about}</Link>
            </div>
        </div >
    )
}

export default NavBar