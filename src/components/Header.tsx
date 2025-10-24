import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
}

const translations = {
  de: {
    home: 'Home',
    about: 'Über uns',
    churchLife: 'Church Life',
    contact: 'Contact',
  },
  en: {
    home: 'Home',
    about: 'About Us',
    churchLife: 'Church Life',
    contact: 'Contact',
  },
};

export function Header({ language, setLanguage, scrollToSection, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const t = translations[language];

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'church-life', label: t.churchLife },
    { id: 'contact', label: t.contact },
  ];

  // Calculate underline position based on active section
  useEffect(() => {
    const updateUnderline = () => {
      const activeRef = navRefs.current[activeSection];
      if (activeRef) {
        const navContainer = activeRef.parentElement;
        if (navContainer) {
          const containerRect = navContainer.getBoundingClientRect();
          const buttonRect = activeRef.getBoundingClientRect();
          setUnderlineStyle({
            left: buttonRect.left - containerRect.left,
            width: buttonRect.width,
          });
        }
      }
    };

    // Update immediately
    updateUnderline();

    // Also update on window resize to keep underline positioned correctly
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [activeSection]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white" style={{ borderBottom: '1px solid #E5E5E5' }} role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
            aria-label="Go to home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <span className="text-sm">CGI</span>
            </div>
            <div className="hidden md:block">
              <div>Christliche Gemeinde</div>
              <div className="text-sm text-gray-600">International e.V.</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative" role="navigation" aria-label="Main navigation">
            <div className="flex items-center space-x-8 relative">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  ref={(el) => (navRefs.current[item.id] = el)}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  role="button"
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  {item.label}
                </button>
              ))}
              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-0 bg-blue-600"
                style={{ height: '2px' }}
                initial={false}
                animate={{
                  left: underlineStyle.left,
                  width: underlineStyle.width,
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeOut',
                  duration: 0.2,
                }}
              />
            </div>
            
            {/* Language Toggle - Pill Style */}
            <div className="flex items-center space-x-2 border-l pl-4">
              <Globe className="h-4 w-4 text-gray-600" aria-hidden="true" />
              <div
                role="group"
                aria-label="Language selection"
                className="flex items-center bg-gray-100 rounded-full p-1"
              >
                <button
                  onClick={() => setLanguage('de')}
                  aria-pressed={language === 'de'}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    language === 'de'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    language === 'en'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded p-1"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  style={{ fontSize: '16px', fontWeight: 500 }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Toggle - Pill Style */}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-600" aria-hidden="true" />
                  <span className="text-gray-600 text-sm">Language:</span>
                </div>
                <div
                  role="group"
                  aria-label="Language selection"
                  className="flex items-center bg-gray-100 rounded-full p-1 mt-2 w-fit"
                >
                  <button
                    onClick={() => setLanguage('de')}
                    aria-pressed={language === 'de'}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      language === 'de'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    DE
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    aria-pressed={language === 'en'}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      language === 'en'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
