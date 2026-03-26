import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (videoRef.current && scrolled < window.innerHeight) {
        videoRef.current.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-surface-900/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.1) 40%, rgba(10,10,15,0.7) 80%, rgba(10,10,15,1) 100%)',
        }}
      />
      {/* Side warm glow */}
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px] opacity-40" />
      <div className="absolute -right-40 bottom-1/4 w-[400px] h-[400px] bg-accent-deep/8 rounded-full blur-[120px] opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Overline */}
            <motion.p
              variants={childVariants}
              className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-6 font-medium"
            >
              VFX · Animation · Design · Production
            </motion.p>

            {/* Headline — refined size */}
            <motion.h1
              variants={childVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-8"
            >
              We Create
              <br />
              <span className="text-gradient">Visual Worlds</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={childVariants}
              className="text-base md:text-lg text-surface-200 max-w-xl leading-relaxed mb-12"
            >
              A premium creative studio specializing in VFX, 2D/3D animation,
              motion design, and cinematic production for brands and film.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToAbout}
                className="group relative px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden rounded-sm"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-8 py-4 border border-white/20 hover:border-accent/60 text-white font-medium text-sm uppercase tracking-[0.15em] hover:bg-accent/5 transition-all duration-300 rounded-sm"
              >
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-surface-300">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-accent-light" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
