import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
function Experience() {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline')
      underline!.style.top = `${selected * 2.5}rem`
    }
    transformSelected()
  }, [selected])

  const expereinces = [
    {
      name: 'DM Nova',
      role: 'Web developer',
      url: 'http://dmnova.tech/',
      start: 'June 2023',
      end: 'Present',
      shortDescription: [
        'Developed an admin dashboard for efficient management and monitoring of the educative game for children.',
        'Collaborated with the frontend development team to ensure seamless integration between the frontend and backend components.',
        'Created APIs and implemented data storage solutions to facilitate data retrieval and manipulation for the game and dashboard.',
        'Technical Skills: NextJS, TS, Creating-API, GitLab.',
      ],
    },
    {
      name: 'MP Software',
      role: 'Mobile developer',
      url: 'https://mpsoftgroup.com/',
      start: 'February 2021',
      end: 'June 2021',
      shortDescription: [
        'The mobile app project I developed was designed to help bank clients apply for loans online.',
        'With the app, clients can easily fill out loan applications and submit them directly to the bank from their mobile devices.',
        'The app was developed with the goal of simplifying the loan application process, making it more convenient for clients to apply for loans without having to visit a bank in person.',
        'Technical Skills: Java, API‑gateway, working with API, XML, Git.',
      ],
    },
    {
      name: 'ETC Tunisie',
      role: 'Backend developer',
      url: 'https://etctn.com/',
      start: 'May 2019',
      end: 'July 2019',
      shortDescription: [
        'The backend development project I created was designed to enhance people’s calendar management by enabling them to manage their schedules more efficiently.',
        'With this backend development, users can easily organize their events, meetings, and deadlines, keeping track of important dates without any difficulty.',
        'Its purpose is to simplify the process of calendar management, allowing users to stay in control of their busy schedules with ease.',
        'Technical Skills: Symfony, PHP, Git.',
      ],
    },
  ]
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Internships</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && 'exp-slider-item-selected'
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            )
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
