import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-black/30 backdrop-blur-2xl"
            : "bg-black/10 backdrop-blur-md"
        }
      `}
    >
      {/* gradient hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center"
          >
            <img
              src="/logo.png"
              alt="Glitch Studio Logo"
              className="h-8 md:h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />

            {/* subtle underline */}
            <span className="absolute bottom-2 left-0 h-[1px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">
            {["about", "projects", "services", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-amber-400 transition"
              >
                {section}
                {/* premium underline */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 transition"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Animated) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
          ${
            isMobileMenuOpen
              ? "max-h-[300px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }
        `}
      >
        <div className="bg-black/40 backdrop-blur-2xl border-t border-white/10 px-6 py-6 space-y-4">
          {["about", "projects", "services", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left text-sm uppercase tracking-widest text-white/80 hover:text-amber-400 transition"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
