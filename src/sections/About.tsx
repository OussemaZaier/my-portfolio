import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Zaier Mohamed Oussema, a passionate software
            engineer with a knack for turning ideas into impactful solutions.
            With a solid background in computer science and extensive experience
            in software development, I excel at transforming complex concepts
            into high-quality, scalable applications.
          </p>
          <p className="about-grid-info-text">
            Proficient in multiple programming languages and frameworks, I
            possess a deep understanding of software architecture, design
            patterns, and best practices. I have a proven track record of
            analyzing requirements, crafting robust systems, and implementing
            clean, efficient code.
          </p>
          <p className="about-grid-info-text">
            Beyond my technical expertise, I am a proactive and adaptable
            professional. I am committed to continuous learning, seeking
            opportunities to enhance my knowledge and skills. I am also a strong
            advocate for teamwork, valuing open communication and fostering a
            positive and collaborative work environment.
            {/* {' '}
            <Link href="https://rapidops.com" className="link" target="_blank">
              Rapidops.
            </Link> */}
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my{' '}
            <Link
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/med-oussema-zaier"
            >
              LinkedIn,
            </Link>{' '}
            profile, where I regularly post my thoughts and ideas about software
            engineering. It is my way of contributing to the community and
            engaging in meaningful discussions about the latest trends and
            innovations in the field.
          </p>
          {/* <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p> */}
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Flutter</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Firebase</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Wordpress</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Mongo</li>
            <li className="about-grid-info-list-item">MySql</li>
            <li className="about-grid-info-list-item">Oracle</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/ouss.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
