import PhoneSocialIcons from '@/components/PhoneSocialIcons'
import Email from '@/components/email'
import Loader from '@/components/loader'
import SocialIcons from '@/components/socialIcons'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import NavBar from '@/sections/NavBar'
import Projects from '@/sections/Projects'
import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 450)
  }

  return (
    <div className="app">
      <Head>
        <title>Zaier Mohamed Oussema</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <NavBar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <PhoneSocialIcons />
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}
