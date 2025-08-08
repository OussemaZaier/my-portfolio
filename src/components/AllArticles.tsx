import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Search,
  Filter,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  Grid,
  List,
  X,
  SlidersHorizontal,
  TrendingUp,
  Star,
  Eye,
  Heart,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from 'lucide-react'

/**
 * All Articles Page Component with Navigation
 *
 * Features:
 * - Advanced filtering by category, date, tags, and search
 * - Grid and list view toggles
 * - Sorting options with multiple criteria
 * - Pagination with load more functionality
 * - Responsive design with mobile filters
 * - Article statistics and engagement metrics
 * - Featured articles highlighting
 * - Advanced search with filters
 * - Navigation back to home and to individual articles
 */

interface AllArticlesProps {
  onNavigateToArticle?: (articleId: string) => void
  onNavigateHome?: () => void
}

const AllArticles: React.FC<AllArticlesProps> = ({
  onNavigateToArticle,
  onNavigateHome,
}) => {
  const { t } = useTranslation()

  // State management
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [dateRange, setDateRange] = useState('all')
  const [readTimeFilter, setReadTimeFilter] = useState('all')
  const [articlesPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Articles', count: 24, color: 'bg-slate-500' },
    {
      id: 'web-development',
      name: 'Web Development',
      count: 8,
      color: 'bg-blue-500',
    },
    { id: 'react', name: 'React', count: 6, color: 'bg-cyan-500' },
    { id: 'javascript', name: 'JavaScript', count: 5, color: 'bg-yellow-500' },
    { id: 'typescript', name: 'TypeScript', count: 4, color: 'bg-blue-600' },
    { id: 'career', name: 'Career', count: 3, color: 'bg-green-500' },
    { id: 'tutorials', name: 'Tutorials', count: 2, color: 'bg-purple-500' },
    { id: 'performance', name: 'Performance', count: 3, color: 'bg-red-500' },
  ]

  // Available tags
  const availableTags = [
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'CSS',
    'HTML',
    'Performance',
    'Testing',
    'Architecture',
    'Best Practices',
    'Hooks',
    'State Management',
    'API',
    'Database',
    'DevOps',
  ]

  // Sample articles data (expanded)
  const allArticles = [
    {
      id: '1',
      title: 'Building Scalable React Applications with TypeScript',
      excerpt:
        'Learn how to structure large React applications using TypeScript for better maintainability and developer experience.',
      category: 'react',
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
      title: 'Modern JavaScript ES2024 Features You Should Know',
      excerpt:
        'Explore the latest JavaScript features that will improve your code quality and development productivity.',
      category: 'javascript',
      readTime: '6 min read',
      date: '2024-01-12',
      image:
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['JavaScript', 'ES2024', 'Features'],
      stats: { views: 892, likes: 31, comments: 5 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '3',
      title: 'Career Growth Tips for Software Developers',
      excerpt:
        'Practical advice on advancing your software development career and building valuable professional relationships.',
      category: 'career',
      readTime: '10 min read',
      date: '2024-01-10',
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Career', 'Growth', 'Professional Development'],
      stats: { views: 654, likes: 28, comments: 12 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '4',
      title: 'Complete Guide to React Hooks',
      excerpt:
        'Master React Hooks with practical examples and best practices for modern React development.',
      category: 'react',
      readTime: '12 min read',
      date: '2024-01-08',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      tags: ['React', 'Hooks', 'Tutorial'],
      stats: { views: 1456, likes: 67, comments: 15 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '5',
      title: 'Web Performance Optimization Techniques',
      excerpt:
        'Improve your website performance with these proven optimization strategies and tools.',
      category: 'performance',
      readTime: '9 min read',
      date: '2024-01-05',
      image:
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Performance', 'Optimization', 'Web Development'],
      stats: { views: 743, likes: 35, comments: 7 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '6',
      title: 'Getting Started with Node.js and Express',
      excerpt:
        'Build your first backend API with Node.js and Express framework from scratch.',
      category: 'tutorials',
      readTime: '15 min read',
      date: '2024-01-03',
      image:
        'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['Node.js', 'Express', 'Backend'],
      stats: { views: 1123, likes: 48, comments: 9 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '7',
      title: 'Advanced TypeScript Patterns for React',
      excerpt:
        'Explore advanced TypeScript patterns that will make your React code more robust and maintainable.',
      category: 'typescript',
      readTime: '11 min read',
      date: '2024-01-01',
      image:
        'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      tags: ['TypeScript', 'React', 'Advanced'],
      stats: { views: 987, likes: 52, comments: 11 },
      author: 'Mohamed Oussema Zaier',
    },
    {
      id: '8',
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt:
        'A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases.',
      category: 'web-development',
      readTime: '7 min read',
      date: '2023-12-28',
      image:
        'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      tags: ['CSS', 'Grid', 'Flexbox'],
      stats: { views: 567, likes: 23, comments: 4 },
      author: 'Mohamed Oussema Zaier',
    },
  ]

  // Filter and sort articles
  const filteredArticles = allArticles
    .filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )

      const matchesCategory =
        selectedCategory === 'all' || article.category === selectedCategory

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => article.tags.includes(tag))

      const matchesDateRange =
        dateRange === 'all' ||
        (() => {
          const articleDate = new Date(article.date)
          const now = new Date()
          const daysDiff = Math.floor(
            (now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24)
          )

          switch (dateRange) {
            case 'week':
              return daysDiff <= 7
            case 'month':
              return daysDiff <= 30
            case 'quarter':
              return daysDiff <= 90
            case 'year':
              return daysDiff <= 365
            default:
              return true
          }
        })()

      const matchesReadTime =
        readTimeFilter === 'all' ||
        (() => {
          const readMinutes = parseInt(article.readTime)
          switch (readTimeFilter) {
            case 'short':
              return readMinutes <= 5
            case 'medium':
              return readMinutes > 5 && readMinutes <= 10
            case 'long':
              return readMinutes > 10
            default:
              return true
          }
        })()

      return (
        matchesSearch &&
        matchesCategory &&
        matchesTags &&
        matchesDateRange &&
        matchesReadTime
      )
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'popular':
          return b.stats.views - a.stats.views
        case 'most-liked':
          return b.stats.likes - a.stats.likes
        case 'most-commented':
          return b.stats.comments - a.stats.comments
        case 'read-time-asc':
          return parseInt(a.readTime) - parseInt(b.readTime)
        case 'read-time-desc':
          return parseInt(b.readTime) - parseInt(a.readTime)
        default:
          return 0
      }
    })

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTags([])
    setDateRange('all')
    setReadTimeFilter('all')
    setSortBy('newest')
  }

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId)
    return category?.color || 'bg-slate-500'
  }

  const handleArticleClick = (articleId: string) => {
    onNavigateToArticle?.(articleId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full border border-orange-200/50 mb-6">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 font-medium text-sm">
              Knowledge Base
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            All{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore my thoughts on web development, career growth, and
            technology trends
          </p>

          {/* Back to Home Button */}
          <div className="mt-6">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, tags, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.slice(0, 6).map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${category.color}`}></div>
                <span>{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Advanced Filters Toggle */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Sort Options */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="most-liked">Most Liked</option>
                  <option value="most-commented">Most Commented</option>
                  <option value="read-time-asc">Shortest Read</option>
                  <option value="read-time-desc">Longest Read</option>
                </select>
              </div>

              {/* Advanced Filters Button */}
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors duration-200"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Advanced Filters</span>
                {showAdvancedFilters ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* View Mode and Results */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-slate-600 text-sm">
                  {filteredArticles.length} articles found
                </span>

                {/* Clear Filters */}
                {(searchTerm ||
                  selectedCategory !== 'all' ||
                  selectedTags.length > 0 ||
                  dateRange !== 'all' ||
                  readTimeFilter !== 'all') && (
                  <button
                    onClick={clearAllFilters}
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showAdvancedFilters && (
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-6">
              {/* Tags Filter */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-3">
                  Filter by Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Range and Read Time Filters */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-3">
                    Date Range
                  </h3>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  >
                    <option value="all">All Time</option>
                    <option value="week">Past Week</option>
                    <option value="month">Past Month</option>
                    <option value="quarter">Past 3 Months</option>
                    <option value="year">Past Year</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-3">
                    Read Time
                  </h3>
                  <select
                    value={readTimeFilter}
                    onChange={(e) => setReadTimeFilter(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  >
                    <option value="all">Any Length</option>
                    <option value="short">Quick Read (≤5 min)</option>
                    <option value="medium">Medium Read (6-10 min)</option>
                    <option value="long">Long Read (10 min)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Display */}
        {(selectedTags.length > 0 ||
          selectedCategory !== 'all' ||
          dateRange !== 'all' ||
          readTimeFilter !== 'all') && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-sm">
                  <span>
                    Category:{' '}
                    {
                      categories.find((cat) => cat.id === selectedCategory)
                        ?.name
                    }
                  </span>
                  <button onClick={() => setSelectedCategory('all')}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm"
                >
                  <span>#{tag}</span>
                  <button onClick={() => toggleTag(tag)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              {dateRange !== 'all' && (
                <span className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm">
                  <span>Date: {dateRange}</span>
                  <button onClick={() => setDateRange('all')}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {readTimeFilter !== 'all' && (
                <span className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm">
                  <span>Read time: {readTimeFilter}</span>
                  <button onClick={() => setReadTimeFilter('all')}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Articles Grid/List */}
        {paginatedArticles.length > 0 ? (
          <div
            className={`${
              viewMode === 'grid'
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            } mb-12`}
          >
            {paginatedArticles.map((article) => (
              <article
                key={article.id}
                className={`group cursor-pointer ${
                  viewMode === 'list' ? 'flex space-x-6' : ''
                }`}
                onClick={() => handleArticleClick(article.id)}
              >
                <div
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200/50 ${
                    viewMode === 'list' ? 'flex w-full' : ''
                  }`}
                >
                  {/* Article Image */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-64 flex-shrink-0' : 'h-48'
                    }`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-white px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                          article.category
                        )}`}
                      >
                        {
                          categories.find((cat) => cat.id === article.category)
                            ?.name
                        }
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
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
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex-1">
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
                    <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Article Excerpt */}
                    <p className="text-slate-600 leading-relaxed mb-4 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium hover:bg-orange-100 hover:text-orange-600 transition-colors duration-200 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleTag(tag)
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="text-slate-400 text-xs px-2 py-1">
                          +{article.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Engagement Stats */}
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
        ) : (
          /* No Results */
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              No articles found
            </h3>
            <p className="text-slate-500 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                const pageNumber =
                  currentPage <= 3 ? index + 1 : currentPage - 2 + index
                if (pageNumber > totalPages) return null

                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                      currentPage === pageNumber
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                        : 'border border-slate-300 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllArticles
