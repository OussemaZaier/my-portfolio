import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
  Mail,
  MapPin,
} from 'lucide-react'

/**
 * Hero Section Component
 *
 * Layout Structure:
 * - Three-column layout on desktop (contact info | profile image | stats)
 * - Responsive stacking on mobile devices
 * - Prominent name display at bottom center
 * - Call-to-action section below name
 *
 * Features:
 * - Professional profile image with decorative elements
 * - Social media links with hover animations
 * - Contact information display
 * - Performance statistics showcase
 * - Multi-language support
 * - Gradient backgrounds and visual effects
 */
const Hero = () => {
  const { t } = useTranslation()

  // Social media links configuration with hover colors
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Dribbble, href: '#', color: 'hover:text-purple-500' },
  ]

  // Performance statistics data
  const stats = [
    { number: '100%', label: t('hero.clientSatisfaction') },
    { number: '690+', label: t('hero.projectsDone') },
    { number: '8+', label: t('hero.yearsExperience') },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 lg:pt-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Mobile Layout - Stacked Vertically */}
        <div className="lg:hidden flex flex-col min-h-screen py-8">
          {/* Mobile Profile Image Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl scale-110"></div>

              {/* Main Profile Image Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
                <img
                  src="/images/me.png"
                  alt="Professional headshot"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-pink-500 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>

          {/* Mobile Contact Information */}
          <div className="text-center mb-8 space-y-4">
            {/* Professional Role Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-orange-500/30">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 font-medium text-sm">
                {t('hero.role')}
              </span>
            </div>

            {/* Location Information */}
            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{t('hero.location')}</span>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-3">
              <p className="text-slate-400 text-sm">{t('hero.sayHello')}</p>

              {/* Email Contact Link */}
              <a
                href={`mailto:${t('hero.email')}`}
                className="flex items-center justify-center space-x-2 text-white hover:text-orange-400 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium">{t('hero.email')}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-slate-400 ${social.color} transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                {/* Statistic Number */}
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-200">
                  {stat.number}
                </div>
                {/* Statistic Label */}
                <div className="text-slate-400 text-xs sm:text-sm font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Name and CTA */}
          <div className="text-center">
            {/* Main Name Display */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                {t('hero.name')}
              </span>
            </h1>

            {/* Call-to-Action Section */}
            <div className="space-y-4 text-slate-400">
              <span className="text-base sm:text-lg block">
                {t('hero.projectQuestion')}
              </span>

              {/* Primary CTA Button */}
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {t('hero.letsTalk')}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Three Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-4 text-left">
            <div className="space-y-6">
              {/* Professional Role Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-orange-500/30">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium text-sm">
                  {t('hero.role')}
                </span>
              </div>

              {/* Location Information */}
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{t('hero.location')}</span>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-4">
                <p className="text-slate-400 text-sm">{t('hero.sayHello')}</p>

                {/* Email Contact Link */}
                <a
                  href={`mailto:${t('hero.email')}`}
                  className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium">{t('hero.email')}</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-slate-400 ${social.color} transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-slate-800/50`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Center Column - Profile Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-3xl scale-110"></div>

              {/* Main Profile Image Container */}
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
                <img
                  src="/images/me.png"
                  alt="Professional headshot"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-500 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>

          {/* Right Column - Performance Statistics */}
          <div className="lg:col-span-4 text-right">
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  {/* Statistic Number */}
                  <div className="text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-200">
                    {stat.number}
                  </div>
                  {/* Statistic Label */}
                  <div className="text-slate-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Bottom Section - Name and Call-to-Action */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl text-center px-4">
            {/* Main Name Display */}
            <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                {t('hero.name')}
              </span>
            </h1>

            {/* Call-to-Action Section */}
            <div className="flex items-center justify-center space-x-4 text-slate-400">
              <span className="text-lg">{t('hero.projectQuestion')}</span>

              {/* Primary CTA Button */}
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {t('hero.letsTalk')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
