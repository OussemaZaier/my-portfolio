import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Download, FileText, Eye, Star, Award, CheckCircle } from 'lucide-react'

/**
 * Resume Download Section Component
 *
 * Features:
 * - Professional resume preview
 * - Multiple download formats
 * - Skills and achievements highlights
 * - Interactive download buttons with animations
 * - Responsive design with mobile optimization
 */
const ResumeDownload = () => {
  const { t } = useTranslation()
  const [isDownloading, setIsDownloading] = useState(false)

  // Resume highlights data
  const highlights = [
    {
      icon: Award,
      title: t('resume.highlights.experience.title'),
      value: t('resume.highlights.experience.value'),
      description: t('resume.highlights.experience.description'),
    },
    {
      icon: Star,
      title: t('resume.highlights.projects.title'),
      value: t('resume.highlights.projects.value'),
      description: t('resume.highlights.projects.description'),
    },
    {
      icon: CheckCircle,
      title: t('resume.highlights.satisfaction.title'),
      value: t('resume.highlights.satisfaction.value'),
      description: t('resume.highlights.satisfaction.description'),
    },
  ]

  // Skills categories
  const skillsCategories = [
    {
      category: t('resume.skills.frontend.category'),
      skills: t('resume.skills.frontend.skills').split(', '),
    },
    {
      category: t('resume.skills.backend.category'),
      skills: t('resume.skills.backend.skills').split(', '),
    },
    {
      category: t('resume.skills.tools.category'),
      skills: t('resume.skills.tools.skills').split(', '),
    },
  ]

  const handleDownload = async (format: string) => {
    setIsDownloading(true)

    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real application, you would trigger the actual download here
    console.log(`Downloading resume in ${format} format`)

    setIsDownloading(false)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 rounded-full border border-orange-500/30 mb-6">
            <FileText className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-medium text-sm">
              {t('resume.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t('resume.title.part1')}{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              {t('resume.title.highlight')}
            </span>
          </h2>

          <p className="text-slate-400 text-lg lg:text-xl max-w-3xl mx-auto">
            {t('resume.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Resume Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Resume Preview Card */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                {/* Resume Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">JD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mohamed Oussema Zaier
                  </h3>
                  <p className="text-orange-400 font-medium">
                    Senior Software Engineer
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    john.doe@email.com • +1 (555) 123-4567
                  </p>
                </div>

                {/* Skills Preview */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                    <Star className="w-4 h-4 text-orange-400" />
                    <span>{t('resume.skills.title')}</span>
                  </h4>
                  <div className="space-y-4">
                    {skillsCategories.map((category, index) => (
                      <div key={index}>
                        <h5 className="text-slate-300 font-medium text-sm mb-2">
                          {category.category}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {category.skills
                            .slice(0, 3)
                            .map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md text-xs font-medium border border-slate-600/50"
                              >
                                {skill}
                              </span>
                            ))}
                          {category.skills.length > 3 && (
                            <span className="text-slate-400 text-xs px-2 py-1">
                              +{category.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Preview */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-pink-400" />
                    <span>{t('resume.experience.title')}</span>
                  </h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-orange-500/50 pl-4">
                      <h5 className="text-slate-200 font-medium">
                        Senior Software Engineer
                      </h5>
                      <p className="text-orange-400 text-sm">
                        TechCorp Solutions • 2022 - Present
                      </p>
                      <p className="text-slate-400 text-sm mt-1">
                        Leading development of enterprise applications...
                      </p>
                    </div>
                    <div className="border-l-2 border-slate-600/50 pl-4">
                      <h5 className="text-slate-200 font-medium">
                        Full Stack Developer
                      </h5>
                      <p className="text-slate-400 text-sm">
                        InnovateLab • 2020 - 2022
                      </p>
                      <p className="text-slate-400 text-sm mt-1">
                        Developed and maintained web applications...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Preview Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent rounded-2xl flex items-end justify-center pb-8">
                  <button className="bg-slate-700/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium border border-slate-600/50 flex items-center space-x-2 hover:bg-slate-600/80 transition-colors duration-200">
                    <Eye className="w-4 h-4" />
                    <span>{t('resume.preview')}</span>
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
            </div>
          </div>

          {/* Right Column - Download Options and Highlights */}
          <div className="order-1 lg:order-2">
            {/* Highlights */}
            <div className="grid gap-6 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-semibold">
                            {highlight.title}
                          </h3>
                          <span className="text-2xl font-bold text-orange-400">
                            {highlight.value}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-semibold mb-6">
                {t('resume.download.title')}
              </h3>

              {/* PDF Download */}
              <button
                onClick={() => handleDownload('pdf')}
                disabled={isDownloading}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{t('resume.download.downloading')}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>{t('resume.download.pdf')}</span>
                  </>
                )}
              </button>

              {/* Word Download */}
              <button
                onClick={() => handleDownload('docx')}
                disabled={isDownloading}
                className="w-full bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 border border-slate-700"
              >
                <FileText className="w-5 h-5" />
                <span>{t('resume.download.word')}</span>
              </button>

              {/* Additional Info */}
              <p className="text-slate-400 text-sm text-center mt-4">
                {t('resume.download.note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeDownload
