import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Process from '../components/Process';
import Showreel from '../components/Showreel';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-surface-900 text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #dc2626, #ef4444, #dc2626)',
        }}
      />

      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Showreel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
