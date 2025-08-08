import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  Eye,
  Heart,
  MessageCircle,
  Star,
} from 'lucide-react'

/**
 * Latest Articles Section Component with Navigation
 *
 * Features:
 * - Featured article cards with images and metadata
 * - Category tags and reading time estimates
 * - Responsive grid layout with featured article prominence
 * - Hover animations and transitions
 * - Engagement statistics display
 * - Navigation to article detail and all articles pages
 */

interface LatestArticlesProps {
  onNavigateToArticles?: () => void
  onNavigateToArticle?: (articleId: string) => void
}

const LatestArticles: React.FC<LatestArticlesProps> = ({
  onNavigateToArticles,
  onNavigateToArticle,
}) => {
  const { t } = useTranslation()

  // Sample articles data with enhanced metadata
  const articles = [
    {
      id: '1',
      title: t('articles.latest.article1.title'),
      excerpt: t('articles.latest.article1.excerpt'),
      category: t('articles.latest.article1.category'),
      readTime: '8 min read',
      date: '2024-01-15',
      image:
        'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      tags: ['React', 'TypeScript', 'Architecture'],
      stats: { views: 1247, likes: 42, comments: 8 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '2',
      title: t('articles.latest.article2.title'),
      excerpt: t('articles.latest.article2.excerpt'),
      category: t('articles.latest.article2.category'),
      readTime: '6 min read',
      date: '2024-01-10',
      image:
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['JavaScript', 'ES2024', 'Features'],
      stats: { views: 892, likes: 31, comments: 5 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '3',
      title: t('articles.latest.article3.title'),
      excerpt: t('articles.latest.article3.excerpt'),
      category: t('articles.latest.article3.category'),
      readTime: '10 min read',
      date: '2024-01-05',
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Career', 'Growth', 'Tips'],
      stats: { views: 654, likes: 28, comments: 12 },
      author: 'Mohamed Oussema Zaier',
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const handleArticleClick = (articleId: string) => {
    onNavigateToArticle?.(articleId)
  }

  return (
    <section
      id="articles"
      className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full border border-orange-200/50 mb-6">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 font-medium text-sm">
              {t('articles.badge')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
            {t('articles.title.part1')}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {t('articles.title.highlight')}
            </span>
          </h2>

          <p className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto">
            {t('articles.subtitle')}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`group cursor-pointer ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => handleArticleClick(article.id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200/50">
                {/* Article Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? 'h-64 lg:h-80' : 'h-48'
                  }`}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Featured</span>
                      </span>
                    </div>
                  )}

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{article.stats.likes}</span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Article Content */}
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  {/* Article Meta */}
                  <div className="flex items-center space-x-4 text-slate-500 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3
                    className={`font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-200 ${
                      index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'
                    }`}
                  >
                    {article.title}
                  </h3>

                  {/* Article Excerpt */}
                  <p
                    className={`text-slate-600 leading-relaxed mb-4 ${
                      index === 0 ? 'text-base lg:text-lg' : 'text-sm'
                    }`}
                  >
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Engagement Stats and Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center space-x-4 text-slate-500 text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.stats.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{article.stats.comments}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center space-x-2 text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-200">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center">
          <button
            onClick={onNavigateToArticles}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <BookOpen className="w-5 h-5" />
            <span>{t('articles.viewAll')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default LatestArticles
