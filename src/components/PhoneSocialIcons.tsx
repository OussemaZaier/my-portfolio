import React from 'react'
import { motion } from 'framer-motion'

import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi'
import Link from 'next/link'

export default function SocialIcons() {
  const socialLinks = [
    {
      name: 'Github',
      icon: <FiGithub />,
      link: 'https://github.com/OussemaZaier',
    },
    {
      name: 'Youtube',
      icon: <FiLinkedin />,
      link: 'https://www.linkedin.com/in/med-oussema-zaier/',
    },
    {
      name: 'LinkedIn',
      icon: <FiInstagram />,
      link: 'https://www.instagram.com/medoussemazaier/',
    },
    {
      name: 'Instagram',
      icon: <FiFacebook />,
      link: 'https://www.facebook.com/m.oussema.z.jsk/',
    },
  ]

  return (
    <motion.div
      className="ph-social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <a href="mailto:medoussemazaier@gmail.com" className="ph-email-link">
        medoussemazaier@gmail.com
      </a>
      <ul className="ph-social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="ph-social-icons-list-item">
            <Link
              href={link}
              className="ph-social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
