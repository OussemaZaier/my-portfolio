import React, { useEffect, useState } from 'react'
import './i18n/config'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyHireMe from './components/WhyHireMe'
import ExperienceShowcase from './components/ExperienceShowcase'
import LatestArticles from './components/LatestArticles'
import ResumeDownload from './components/ResumeDownload'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllArticles from './components/AllArticles'
import ArticleDetail from './components/ArticleDetail'

/**
 * Main Application Component with Simple Routing
 *
 * Structure:
 * - Simple state-based routing system
 * - Home page with all sections
 * - All articles page with advanced filtering
 * - Individual article detail pages
 * - Navigation between different views
 *
 * Features:
 * - Dark theme with gradient background
 * - Responsive design
 * - Multi-language support
 * - SEO-friendly title setting
 * - Modular component architecture
 * - Complete portfolio experience with article system
 */

type PageType = 'home' | 'articles' | 'article-detail'

interface AppState {
  currentPage: PageType
  selectedArticleId?: string
}

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'home',
  })

  // Navigation functions
  const navigateToHome = () => {
    setAppState({ currentPage: 'home' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToArticles = () => {
    setAppState({ currentPage: 'articles' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToArticleDetail = (articleId: string) => {
    setAppState({
      currentPage: 'article-detail',
      selectedArticleId: articleId,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Set document title based on current page
  useEffect(() => {
    switch (appState.currentPage) {
      case 'home':
        document.title = 'Mohamed Oussema Zaier - Software Engineer Portfolio'
        break
      case 'articles':
        document.title = 'All Articles - Mohamed Oussema Zaier Portfolio'
        break
      case 'article-detail':
        document.title = 'Article - Mohamed Oussema Zaier Portfolio'
        break
      default:
        document.title = 'Mohamed Oussema Zaier - Software Engineer Portfolio'
    }
  }, [appState.currentPage])

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/articles') {
        setAppState({ currentPage: 'articles' })
      } else if (path.startsWith('/article/')) {
        const articleId = path.split('/article/')[1]
        setAppState({
          currentPage: 'article-detail',
          selectedArticleId: articleId,
        })
      } else {
        setAppState({ currentPage: 'home' })
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Update URL without page reload
  useEffect(() => {
    let newPath = '/'
    switch (appState.currentPage) {
      case 'articles':
        newPath = '/articles'
        break
      case 'article-detail':
        newPath = `/article/${appState.selectedArticleId || '1'}`
        break
      default:
        newPath = '/'
    }

    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath)
    }
  }, [appState])

  // Render current page
  const renderCurrentPage = () => {
    switch (appState.currentPage) {
      case 'articles':
        return (
          <div className="min-h-screen">
            <Navbar
              onNavigateHome={navigateToHome}
              onNavigateArticles={navigateToArticles}
            />
            <div className="pt-20">
              <AllArticles
                onNavigateToArticle={navigateToArticleDetail}
                onNavigateHome={navigateToHome}
              />
            </div>
            <Footer
              onNavigateHome={navigateToHome}
              onNavigateArticles={navigateToArticles}
            />
          </div>
        )

      case 'article-detail':
        return (
          <div className="min-h-screen">
            <Navbar
              onNavigateHome={navigateToHome}
              onNavigateArticles={navigateToArticles}
            />
            <div className="pt-20">
              <ArticleDetail
                articleId={appState.selectedArticleId}
                onNavigateBack={navigateToArticles}
                onNavigateToArticle={navigateToArticleDetail}
                onNavigateHome={navigateToHome}
              />
            </div>
            <Footer
              onNavigateHome={navigateToHome}
              onNavigateArticles={navigateToArticles}
            />
          </div>
        )

      default:
        return (
          <div className="min-h-screen">
            {/* Fixed Navigation Bar */}
            <Navbar
              onNavigateHome={navigateToHome}
              onNavigateArticles={navigateToArticles}
            />

            {/* Main Hero Section */}
            <Hero />

            {/* Why Hire Me Section */}
            <WhyHireMe />

            {/* Experience Showcase Section */}
            <ExperienceShowcase />

            {/* Latest Articles Section
            <LatestArticles
              onNavigateToArticles={navigateToArticles}
              onNavigateToArticle={navigateToArticleDetail}
            /> */}

            {/* Resume Download Section */}
            <ResumeDownload />

            {/* Contact Section */}
            <Contact />

            {/* Footer Section */}
            <Footer
              onNavigateHome={navigateToHome}
              onNavigateArticles={navigateToArticles}
            />
          </div>
        )
    }
  }

  return renderCurrentPage()
}

export default App
