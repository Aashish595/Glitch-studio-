import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['about', 'services', 'projects', 'process', 'contact'];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-surface-900/70 backdrop-blur-2xl'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      {/* Bottom border line */}
      <div
        className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center relative"
          >
            <img
              src="/logo.png"
              alt="Glitch Studio"
              className="h-8 md:h-9 w-auto transition-all duration-300 group-hover:brightness-125"
            />
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group text-[11px] uppercase tracking-[0.25em] text-surface-200 hover:text-white transition-colors duration-300"
              >
                {section}
                <span
                  className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{
                    background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                  }}
                />
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-white border border-accent/40 hover:border-accent hover:bg-accent/10 transition-all duration-300 rounded-sm"
            >
              Start a Project
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-surface-200 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'max-h-[400px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-900/95 backdrop-blur-2xl border-t border-white/5 px-6 py-8 space-y-5">
          {navLinks.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left text-sm uppercase tracking-[0.2em] text-surface-200 hover:text-white transition-colors"
            >
              {section}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 px-5 py-3 text-sm uppercase tracking-[0.2em] text-white border border-accent/40 hover:bg-accent/10 transition-all duration-300 text-center"
          >
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
