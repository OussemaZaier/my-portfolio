import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/button'

export default function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I welcome the opportunity to connect and discuss potential
        collaborations. If you &apos re interested in leveraging my expertise as
        a software engineer or have any inquiries, please feel free to reach
        out. I look forward to hearing from you.
      </p>
      <div className="contact-cta">
        <Button link="mailto:medoussemazaier@gmail.com" text="Contact Me" />
      </div>
    </motion.div>
  )
}
