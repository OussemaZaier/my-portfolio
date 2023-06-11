import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/button'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.75,
        }}
      >
        Zaier Mohamed Oussema.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub typewriter-container"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.05,
        }}
      >
        Passionate about building innovative
        <Typewriter
          options={{
            strings: ['mobile applications.', 'web applications.'],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 'natural',
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .callFunction(() => {
                console.log('String typed out!')
              })
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted')
              })
              .start()
          }}
        />
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.35,
        }}
      >
        As a software engineer, I specialize in crafting exceptional digital
        experiences. My expertise lies in developing accessible and user-centric
        mobile web applications. With a passion for creating seamless and
        engaging user interfaces, I bring a strong focus on delivering top-notch
        products. Currently open to new job opportunities.
        {/* &nbsp;
        <Link href="https://rapidops.com" target="_blank" className="link">
          Rapidops.
        </Link> */}
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my linkedin"
          link="https://www.linkedin.com/in/med-oussema-zaier"
        />
      </motion.div>
    </div>
  )
}
