import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CalloutBanner } from './components/CalloutBanner';
import { Certifications } from './components/Certifications';
import { CommunityGallery } from './components/CommunityGallery';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof document !== 'undefined') {
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  }
  return 'light';
};

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try {
        window.localStorage.setItem('sg-portfolio-theme', next);
      } catch {
        // Theme still changes for this session when storage is unavailable.
      }
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#0B0F14' : '#F5F5F3';
  }, [theme]);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'community', 'blog', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CalloutBanner />
        <Certifications />
        <CommunityGallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
