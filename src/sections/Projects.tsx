import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Projects() {
  const projectsData = [
    {
      image: '/project01.png',
      projectName: 'ISSATSo Survey',
      projectLink: '#',
      projectDescription:
        'Issatso Survey is a mobile app designed to empower students and give them a voice in shaping their university experience. With this app, students can easily provide feedback and opinions on various aspects of the university environment, including classes, facilities, resources, and more. It serves as a direct channel of communication between students and the university administration, allowing for meaningful insights and improvements to be implemented based on student feedback. ',
      projectTech: ['Flutter', 'FireBase', 'PowerBI'],
      projectExternalLinks: {
        github: 'https://github.com/OussemaZaier/surveyISSATSo',
        externalLink: '#',
      },
    },
    {
      image: '/project02.png',
      projectName: 'Toredo',
      projectLink: '#',
      projectDescription:
        'Toredo is a mobile app that offers an online shop for organic food. Discover a wide selection of high-quality organic products, from fresh fruits and vegetables to pantry staples and specialty items. Enjoy a seamless shopping experience with secure payments and flexible delivery options. Personalized recommendations help you find the perfect organic products for your needs. Embrace a healthier, more sustainable lifestyle with Toredo. Download the app and start exploring organic food at your fingertips.',
      projectTech: ['Flutter', 'Wordpress'],
      projectExternalLinks: {
        github: 'https://github.com/OussemaZaier/toredo',
        externalLink: '#',
      },
    },
    {
      image: '/project03.png',
      projectName: 'myPoste',
      projectLink: '#',
      projectDescription:
        "myPoste is a versatile mobile app that revolutionizes the way you manage your cards and handle financial transactions. With this app, you can easily organize and keep track of all your cards in one secure place. Whether it's credit cards, debit cards, or loyalty cards, myPoste provides a convenient and streamlined experience for effortless card management. Additionally, the app allows you to send money efficiently to friends, family, or anyone in need",
      projectTech: ['Flutter', 'FireBase'],
      projectExternalLinks: {
        github: 'https://github.com/OussemaZaier/myPoste',
        externalLink: '#',
      },
    },
  ]
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Projects
