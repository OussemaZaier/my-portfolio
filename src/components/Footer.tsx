import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
  Heart,
  Code,
  Coffee,
} from 'lucide-react'

/**
 * Footer Component
 *
 * Features:
 * - Comprehensive site navigation
 * - Contact information and social links
 * - Newsletter subscription
 * - Back to top functionality
 * - Professional branding and copyright
 * - Responsive design with mobile optimization
 */
const Footer = () => {
  const { t } = useTranslation()

  // Navigation links organized by sections
  const navigationSections = [
    {
      title: t('footer.navigation.main.title'),
      links: [
        { label: t('footer.navigation.main.home'), href: '#home' },
        { label: t('footer.navigation.main.about'), href: '#about' },
        { label: t('footer.navigation.main.portfolio'), href: '#portfolio' },
        { label: t('footer.navigation.main.experience'), href: '#experience' },
      ],
    },
    {
      title: t('footer.navigation.content.title'),
      links: [
        { label: t('footer.navigation.content.articles'), href: '/articles' },
        { label: t('footer.navigation.content.resume'), href: '#resume' },
        { label: t('footer.navigation.content.contact'), href: '#contact' },
        { label: t('footer.navigation.content.blog'), href: '/blog' },
      ],
    },
    {
      title: t('footer.navigation.services.title'),
      links: [
        { label: t('footer.navigation.services.webDev'), href: '#services' },
        {
          label: t('footer.navigation.services.consulting'),
          href: '#consulting',
        },
        {
          label: t('footer.navigation.services.mentoring'),
          href: '#mentoring',
        },
        { label: t('footer.navigation.services.speaking'), href: '#speaking' },
      ],
    },
  ]

  // Social media links
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-sky-400',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:text-pink-400',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook',
      color: 'hover:text-blue-500',
    },
  ]

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      text: t('footer.contact.email'),
      href: 'mailto:john.doe@email.com',
    },
    { icon: Phone, text: t('footer.contact.phone'), href: 'tel:+1234567890' },
    { icon: MapPin, text: t('footer.contact.location'), href: '#' },
  ]

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand and Description */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <span className="text-white text-xl font-bold">
                  Mohamed Oussema Zaier
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                {t('footer.description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-3 text-slate-400 hover:text-orange-400 transition-colors duration-200 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{info.text}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Navigation Sections */}
            {navigationSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-white font-semibold mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-orange-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-800 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter Info */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {t('footer.newsletter.title')}
              </h3>
              <p className="text-slate-400">
                {t('footer.newsletter.description')}
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
              />
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
                {t('footer.newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Copyright and Credits */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-slate-400 text-sm">
                © 2024 Mohamed Oussema Zaier. {t('footer.copyright')}
              </p>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>{t('footer.madeWith')}</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>&</span>
                <Coffee className="w-4 h-4 text-orange-400" />
                <span>in Tunisia</span>
              </div>
            </div>

            {/* Social Links and Back to Top */}
            <div className="flex items-center justify-between sm:justify-start space-x-6">
              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-slate-400 ${social.color} transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white p-3 rounded-lg transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 group"
                aria-label={t('footer.backToTop')}
              >
                <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* Tech Stack Credit */}
        <div className="border-t border-slate-800/50 py-6">
          <div className="flex items-center justify-center space-x-2 text-slate-500 text-xs">
            <Code className="w-4 h-4" />
            <span>{t('footer.techStack')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
