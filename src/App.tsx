import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ChurchLife } from './components/ChurchLife';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Initialize language from localStorage or default to 'de'
  const [language, setLanguage] = useState<'de' | 'en'>(() => {
    const saved = localStorage.getItem('cgi-language');
    return (saved === 'en' || saved === 'de') ? saved : 'de';
  });

  // Track active section for header navigation
  const [activeSection, setActiveSection] = useState<string>('home');

  // Persist language choice to localStorage
  useEffect(() => {
    localStorage.setItem('cgi-language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Intersection Observer to track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'church-life', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId);
              }
            });
          },
          {
            rootMargin: '-100px 0px -66% 0px', // Top offset for header, bottom for early trigger
            threshold: 0,
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      // Update active section immediately on click
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <main role="main">
        <Hero language={language} scrollToSection={scrollToSection} />
        <About language={language} />
        <ChurchLife language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
}
