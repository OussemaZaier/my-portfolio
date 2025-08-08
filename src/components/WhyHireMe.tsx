import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Star,
  Heart,
  Code,
  GraduationCap,
  Wrench,
  User,
  Award,
  Target,
} from 'lucide-react'

/**
 * Why Hire Me Section Component
 *
 * Features:
 * - Professional image with floating statistics
 * - Tabbed content system (Myself, Education, My Tools)
 * - Responsive design with mobile-first approach
 * - Gradient backgrounds and modern styling
 * - Interactive hover effects and animations
 * - Multi-language support
 */
const WhyHireMe = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('myself')

  // Tab configuration with icons and content
  const tabs = [
    {
      id: 'myself',
      label: t('whyHireMe.tabs.myself'),
      icon: User,
      content: {
        title: t('whyHireMe.myself.title'),
        description: t('whyHireMe.myself.description'),
        highlights: [
          { icon: Target, text: t('whyHireMe.myself.highlight1') },
          { icon: Award, text: t('whyHireMe.myself.highlight2') },
          { icon: Heart, text: t('whyHireMe.myself.highlight3') },
        ],
      },
    },
    {
      id: 'education',
      label: t('whyHireMe.tabs.education'),
      icon: GraduationCap,
      content: {
        title: t('whyHireMe.education.title'),
        description: t('whyHireMe.education.description'),
        highlights: [
          { icon: GraduationCap, text: t('whyHireMe.education.highlight1') },
          { icon: Award, text: t('whyHireMe.education.highlight2') },
          { icon: Target, text: t('whyHireMe.education.highlight3') },
        ],
      },
    },
    {
      id: 'tools',
      label: t('whyHireMe.tabs.tools'),
      icon: Wrench,
      content: {
        title: t('whyHireMe.tools.title'),
        description: t('whyHireMe.tools.description'),
        highlights: [
          { icon: Code, text: t('whyHireMe.tools.highlight1') },
          { icon: Wrench, text: t('whyHireMe.tools.highlight2') },
          { icon: Target, text: t('whyHireMe.tools.highlight3') },
        ],
      },
    },
  ]

  // Floating statistics for the image
  const floatingStats = [
    {
      number: '80+',
      label: t('whyHireMe.stats.happyClients'),
      icon: '😍',
      position: 'top-4 right-4',
    },
    {
      number: '95%',
      label: t('whyHireMe.stats.successRate'),
      icon: '🎯',
      position: 'bottom-8 left-4',
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full border border-orange-200/50 mb-6">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 font-medium text-sm">
              {t('whyHireMe.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            {t('whyHireMe.title.part1')}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {t('whyHireMe.title.highlight')}
            </span>{' '}
            {t('whyHireMe.title.part2')}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Professional Image with Floating Stats */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Image Container with Gradient Background */}
              <div className="relative">
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl scale-105"></div>

                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl p-6 shadow-2xl">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src="/images/me2.png"
                      alt="Professional portrait"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Statistics */}
                {floatingStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`absolute ${stat.position} bg-white rounded-2xl shadow-xl border border-slate-200/50 p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{stat.icon}</span>
                      <div>
                        <div className="text-2xl font-bold text-slate-800">
                          {stat.number}
                        </div>
                        <div className="text-slate-600 text-sm font-medium whitespace-nowrap">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabbed Content */}
          <div className="order-1 lg:order-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                        : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm border border-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-slate-200/50">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'opacity-100 block'
                      : 'opacity-0 hidden'
                  }`}
                >
                  {/* Content Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    {tab.content.title}
                  </h3>

                  {/* Content Description */}
                  <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6">
                    {tab.content.description}
                  </p>

                  {/* Content Highlights */}
                  <div className="space-y-4 mb-8">
                    {tab.content.highlights.map((highlight, index) => {
                      const Icon = highlight.icon
                      return (
                        <div
                          key={index}
                          className="flex items-start space-x-3 group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg flex items-center justify-center group-hover:from-orange-200 group-hover:to-pink-200 transition-colors duration-200">
                            <Icon className="w-4 h-4 text-orange-600" />
                          </div>
                          <p className="text-slate-700 font-medium">
                            {highlight.text}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  {/* Call-to-Action Button */}
                  <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {t('whyHireMe.cta')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe
