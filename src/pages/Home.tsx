import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About"
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
