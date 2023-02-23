import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Fragment, useEffect, useState, useContext } from 'react'
import type { NextPage } from 'next'
import people from "../public/banner.jpg"
import {Locale} from './_app'
import contentAR from "../components/locales/ar"
import contentBR from "../components/locales/br"

const inter = Inter({ subsets: ['latin'] })

type Character = {
  name: string,
  image: string
}

const Home: NextPage = () => {
  const locale = useContext(Locale)
  const content = locale === "es" ? contentAR : contentBR

  const [characters, setCharacters] = useState<Character>();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results[1])
        console.log(data.results[1]);
      });
  }, [])

 
  return (
    <>


      <main >
        <div>
          <h1>{content.title} </h1>
          <h2>{content.subtitle} </h2>
          <button>{content.buttonText} </button>
          <Fragment>
            <Image src={people} alt="banner"   />
          </Fragment>
          <p>Hola soy {characters?.name} </p>
          <img src={characters?.image} alt={characters?.name} />
        </div>
      </main>
    </>
  )
}


export default Home