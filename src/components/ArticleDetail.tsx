import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Eye,
  User,
  Tag,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Link,
  CheckCircle,
  ThumbsUp,
  Quote,
} from 'lucide-react'

/**
 * Article Detail Page Component with Navigation
 *
 * Features:
 * - Full article content with rich typography
 * - Author information and social sharing
 * - Reading progress indicator
 * - Related articles suggestions
 * - Comments section with engagement
 * - Table of contents for long articles
 * - Social sharing and bookmarking
 * - Responsive design with mobile optimization
 * - Navigation back to articles and to other articles
 */

interface ArticleDetailProps {
  articleId?: string
  onNavigateBack?: () => void
  onNavigateToArticle?: (articleId: string) => void
  onNavigateHome?: () => void
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  articleId = '1',
  onNavigateBack,
  onNavigateToArticle,
  onNavigateHome,
}) => {
  const { t } = useTranslation()

  // State management
  const [readingProgress, setReadingProgress] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Sample article data (in real app, this would come from props or API)
  const article = {
    id: articleId,
    title:
      'Building Scalable React Applications with TypeScript: A Complete Guide',
    subtitle:
      'Learn how to structure large React applications using TypeScript for better maintainability, developer experience, and team collaboration.',
    content: `
      <p>Building scalable React applications is one of the most challenging aspects of modern web development. As applications grow in complexity, maintaining clean, readable, and efficient code becomes increasingly difficult. TypeScript offers a powerful solution to many of these challenges.</p>

      <h2 id="introduction">Introduction to Scalable Architecture</h2>
      <p>When we talk about scalable React applications, we're referring to applications that can grow in features, team size, and complexity without becoming unmaintainable. This involves several key principles:</p>
      
      <ul>
        <li><strong>Modular Architecture:</strong> Breaking down your application into smaller, reusable components</li>
        <li><strong>Type Safety:</strong> Using TypeScript to catch errors at compile time</li>
        <li><strong>Consistent Patterns:</strong> Establishing coding standards and architectural patterns</li>
        <li><strong>Performance Optimization:</strong> Implementing efficient rendering and state management</li>
      </ul>

      <h2 id="typescript-benefits">Why TypeScript for React?</h2>
      <p>TypeScript brings several advantages to React development that become more apparent as your application scales:</p>
      
      <blockquote>
        "TypeScript is not just about catching bugs early; it's about creating a development experience that scales with your team and your codebase." - Anders Hejlsberg, TypeScript Creator
      </blockquote>

      <h3>Enhanced Developer Experience</h3>
      <p>With TypeScript, you get intelligent code completion, refactoring support, and inline documentation. This dramatically improves productivity, especially when working with large codebases or in team environments.</p>

      <h3>Better Refactoring Capabilities</h3>
      <p>TypeScript's static analysis allows for safe refactoring across your entire codebase. When you change an interface or component prop, TypeScript will immediately highlight all the places that need to be updated.</p>

      <h2 id="project-structure">Project Structure Best Practices</h2>
      <p>A well-organized project structure is crucial for scalability. Here's a recommended structure for large React TypeScript applications:</p>

      <pre><code>src/
├── components/
│   ├── common/
│   ├── forms/
│   └── layout/
├── pages/
├── hooks/
├── services/
├── types/
├── utils/
└── styles/</code></pre>

      <h2 id="component-patterns">Component Design Patterns</h2>
      <p>Implementing consistent component patterns is essential for maintainability. Here are some key patterns to follow:</p>

      <h3>Compound Components</h3>
      <p>This pattern allows you to create flexible, reusable components that work together seamlessly. It's particularly useful for complex UI components like modals, accordions, or data tables.</p>

      <h3>Render Props and Custom Hooks</h3>
      <p>These patterns help you share stateful logic between components without duplicating code. Custom hooks, in particular, have become the preferred method for sharing logic in modern React applications.</p>

      <h2 id="state-management">State Management Strategies</h2>
      <p>As your application grows, managing state becomes increasingly complex. Consider these approaches:</p>

      <ul>
        <li><strong>Local State:</strong> Use useState for component-specific state</li>
        <li><strong>Context API:</strong> For sharing state across component trees</li>
        <li><strong>External Libraries:</strong> Redux Toolkit, Zustand, or Jotai for complex state management</li>
      </ul>

      <h2 id="performance">Performance Optimization</h2>
      <p>Performance optimization should be built into your architecture from the beginning. Key strategies include:</p>

      <h3>Code Splitting</h3>
      <p>Use React.lazy() and Suspense to split your code at the route level or component level. This reduces the initial bundle size and improves loading times.</p>

      <h3>Memoization</h3>
      <p>Implement React.memo, useMemo, and useCallback strategically to prevent unnecessary re-renders. However, be careful not to over-optimize, as memoization has its own costs.</p>

      <h2 id="testing">Testing Strategies</h2>
      <p>A comprehensive testing strategy is crucial for maintaining code quality as your application scales. Focus on:</p>

      <ul>
        <li>Unit tests for individual components and functions</li>
        <li>Integration tests for component interactions</li>
        <li>End-to-end tests for critical user journeys</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>Building scalable React applications with TypeScript requires careful planning, consistent patterns, and a focus on maintainability. By following these principles and continuously refactoring your code, you can create applications that grow gracefully with your needs.</p>

      <p>Remember, scalability is not just about handling more users or data—it's about creating a codebase that your team can work with efficiently, regardless of size or complexity.</p>
    `,
    excerpt:
      'Learn how to structure large React applications using TypeScript for better maintainability and developer experience.',
    category: 'React',
    tags: [
      'React',
      'TypeScript',
      'Architecture',
      'Scalability',
      'Best Practices',
    ],
    readTime: '12 min read',
    publishedDate: '2024-01-15',
    updatedDate: '2024-01-16',
    image:
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: {
      name: 'Mohamed Oussema Zaier',
      bio: 'Senior Software Engineer with 8+ years of experience in React and TypeScript development.',
      avatar:
        'https://images.pexels.com/photos/91227/pexels-photo-91227.png?auto=compress&cs=tinysrgb&w=400',
      social: {
        twitter: '@johndoe',
        linkedin: 'johndoe',
        github: 'johndoe',
      },
    },
    stats: {
      views: 1247,
      likes: 42,
      comments: 8,
      shares: 15,
    },
  }

  // Table of contents
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction to Scalable Architecture' },
    { id: 'typescript-benefits', title: 'Why TypeScript for React?' },
    { id: 'project-structure', title: 'Project Structure Best Practices' },
    { id: 'component-patterns', title: 'Component Design Patterns' },
    { id: 'state-management', title: 'State Management Strategies' },
    { id: 'performance', title: 'Performance Optimization' },
    { id: 'testing', title: 'Testing Strategies' },
    { id: 'conclusion', title: 'Conclusion' },
  ]

  // Related articles
  const relatedArticles = [
    {
      id: '2',
      title: 'Advanced React Hooks Patterns',
      excerpt:
        'Explore advanced patterns for custom hooks and state management.',
      image:
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '8 min read',
      category: 'React',
    },
    {
      id: '3',
      title: 'TypeScript Best Practices for Teams',
      excerpt: 'Essential TypeScript practices for collaborative development.',
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '10 min read',
      category: 'TypeScript',
    },
    {
      id: '4',
      title: 'Modern React Testing Strategies',
      excerpt: 'Comprehensive guide to testing React applications effectively.',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '15 min read',
      category: 'Testing',
    },
  ]

  // Reading progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('article-content')
      if (article) {
        const scrollTop = window.scrollY
        const docHeight = article.offsetHeight
        const winHeight = window.innerHeight
        const scrollPercent = scrollTop / (docHeight - winHeight)
        const scrollPercentRounded = Math.round(scrollPercent * 100)
        setReadingProgress(Math.min(scrollPercentRounded, 100))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle like toggle
  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  // Handle bookmark toggle
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  // Share functions
  const shareUrl = `${window.location.origin}/articles/${article.id}`

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        article.title
      )}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      '_blank'
    )
  }

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      '_blank'
    )
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    // You could show a toast notification here
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const handleRelatedArticleClick = (articleId: string) => {
    onNavigateToArticle?.(articleId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onNavigateBack}
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Articles</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500">
                {readingProgress}% read
              </span>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isLiked
                      ? 'bg-red-100 text-red-600'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`}
                  />
                </button>

                <button
                  onClick={handleBookmark}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isBookmarked
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Bookmark
                    className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`}
                  />
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors duration-200"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                      <button
                        onClick={shareOnTwitter}
                        className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center space-x-3"
                      >
                        <Twitter className="w-4 h-4 text-sky-500" />
                        <span className="text-sm">Share on Twitter</span>
                      </button>
                      <button
                        onClick={shareOnLinkedIn}
                        className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center space-x-3"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Share on LinkedIn</span>
                      </button>
                      <button
                        onClick={shareOnFacebook}
                        className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center space-x-3"
                      >
                        <Facebook className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">Share on Facebook</span>
                      </button>
                      <button
                        onClick={copyLink}
                        className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center space-x-3"
                      >
                        <Link className="w-4 h-4 text-slate-600" />
                        <span className="text-sm">Copy Link</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Table of Contents - Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-orange-500" />
                  <span>Table of Contents</span>
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm py-2 px-3 rounded-lg transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'bg-orange-100 text-orange-700 font-medium'
                          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6">
            {/* Article Header */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 mb-8">
              {/* Hero Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Info */}
              <div className="p-6 lg:p-8">
                {/* Title and Subtitle */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                  {article.title}
                </h1>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Published {formatDate(article.publishedDate)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{article.stats.views.toLocaleString()} views</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors duration-200 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{likes} likes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">
                        {article.stats.comments} comments
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">
                        {article.stats.shares} shares
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200/50 mb-8">
              <div
                id="article-content"
                className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-blockquote:border-l-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-100"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Author Bio */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200/50 mb-8">
              <div className="flex items-start space-x-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {article.author.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{article.author.bio}</p>
                  <div className="flex items-center space-x-4">
                    <a
                      href="#"
                      className="text-sky-500 hover:text-sky-600 transition-colors duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 space-y-6">
              {/* Related Articles */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-pink-500" />
                  <span>Related Articles</span>
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <button
                      key={relatedArticle.id}
                      onClick={() =>
                        handleRelatedArticleClick(relatedArticle.id)
                      }
                      className="block group w-full text-left"
                    >
                      <div className="flex space-x-3">
                        <img
                          src={relatedArticle.image}
                          alt={relatedArticle.title}
                          className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800 group-hover:text-orange-600 transition-colors duration-200 text-sm leading-tight mb-1">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-xs text-slate-500 mb-1">
                            {relatedArticle.readTime}
                          </p>
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {relatedArticle.category}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-2">Stay Updated</h3>
                <p className="text-orange-100 text-sm mb-4">
                  Get the latest articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button className="w-full bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail
