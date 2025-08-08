import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

/**
 * Navigation Component with Navigation Logic
 * 
 * Features:
 * - Fixed navigation bar with backdrop blur effect
 * - Responsive design with mobile hamburger menu
 * - Multi-language support with dropdown selector
 * - Gradient logo and call-to-action button
 * - Smooth hover animations and transitions
 * - Navigation callbacks for routing
 */

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateArticles?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateHome, 
  onNavigateArticles 
}) => {
  const { t, i18n } = useTranslation();
  
  // State management for mobile menu and language dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  // Language configuration with flags and display names
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  // Get current language or fallback to English
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  /**
   * Handle language change
   * @param {string} langCode - Language code to switch to
   */
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLanguageOpen(false);
  };

  // Navigation items configuration with click handlers
  const navItems = [
    { 
      key: 'home', 
      label: t('nav.home'), 
      onClick: () => {
        onNavigateHome?.();
        setIsMenuOpen(false);
      }
    },
    { 
      key: 'about', 
      label: t('nav.about'), 
      onClick: () => {
        onNavigateHome?.();
        setIsMenuOpen(false);
        // Scroll to about section after navigation
        setTimeout(() => {
          const element = document.getElementById('about');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    { 
      key: 'portfolio', 
      label: t('nav.portfolio'), 
      onClick: () => {
        onNavigateHome?.();
        setIsMenuOpen(false);
        // Scroll to portfolio section after navigation
        setTimeout(() => {
          const element = document.getElementById('portfolio');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    { 
      key: 'pages', 
      label: t('nav.pages'), 
      onClick: () => {
        setIsMenuOpen(false);
      }
    },
    { 
      key: 'blog', 
      label: t('nav.blog'), 
      onClick: () => {
        onNavigateArticles?.();
        setIsMenuOpen(false);
      }
    },
    { 
      key: 'contact', 
      label: t('nav.contact'), 
      onClick: () => {
        onNavigateHome?.();
        setIsMenuOpen(false);
        // Scroll to contact section after navigation
        setTimeout(() => {
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <button 
              onClick={onNavigateHome}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            >
              {/* Gradient logo icon */}
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white text-xl font-bold">Portfolio</span>
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={item.onClick}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions - Language Selector & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-800/50"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{currentLanguage.flag}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-slate-700 transition-colors duration-200 flex items-center space-x-3 ${
                        i18n.language === lang.code ? 'text-orange-400' : 'text-slate-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Call-to-Action Button */}
            <button 
              onClick={() => {
                onNavigateHome?.();
                // Scroll to contact section after navigation
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              {t('nav.hireMe')}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center space-x-4">
            
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="text-slate-300 hover:text-white transition-colors duration-200 p-2"
              >
                <Globe className="w-5 h-5" />
              </button>

              {/* Mobile Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-3 py-2 text-left hover:bg-slate-700 transition-colors duration-200 text-sm ${
                        i18n.language === lang.code ? 'text-orange-400' : 'text-slate-300'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={item.onClick}
                  className="text-slate-300 hover:text-white transition-colors duration-200 font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile CTA Button */}
              <button 
                onClick={() => {
                  onNavigateHome?.();
                  setIsMenuOpen(false);
                  // Scroll to contact section after navigation
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 w-full mt-4"
              >
                {t('nav.hireMe')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;