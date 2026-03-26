import { useEffect, useRef, useState } from 'react';
import { Film, Sparkles, Layers, Zap, Palette, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Film,
    title: 'VFX Compositing',
    description:
      'Seamless integration of digital elements with live-action footage for film, TV, and commercial projects.',
    num: '01',
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description:
      'Dynamic motion design and kinetic typography that brings brands, stories, and data to life.',
    num: '02',
  },
  {
    icon: Layers,
    title: '3D Animation',
    description:
      'Photo-realistic rendering, character animation, and immersive 3D environments for any medium.',
    num: '03',
  },
  {
    icon: Zap,
    title: 'Web & App Design',
    description:
      'Innovative UI/UX design and development for engaging, performant digital experiences.',
    num: '04',
  },
  {
    icon: Palette,
    title: 'Creative Direction',
    description:
      'End-to-end visual storytelling — from concept development to final art direction and brand identity.',
    num: '05',
  },
  {
    icon: Eye,
    title: 'Post Production',
    description:
      'Complete finishing pipeline from color grading and editing through to final delivery and mastering.',
    num: '06',
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      if (gridRef.current) {
        gsap.from(gridRef.current.children, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative section-padding bg-surface-850 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header — Left aligned for asymmetry */}
        <div ref={headerRef} className="mb-20 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-5 font-medium">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Full-Spectrum
            <span className="block text-gradient">Creative Capabilities</span>
          </h2>
          <p className="text-lg text-surface-300">
            From concept to final pixel — we deliver end-to-end creative
            solutions across every visual medium.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`relative p-7 lg:p-8 glass rounded-sm transition-all duration-500 cursor-pointer group overflow-hidden ${
                  isActive ? 'border-accent/30 glow-sm' : ''
                }`}
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10">
                  {/* Number + Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-wider text-surface-400 group-hover:text-accent-light transition-colors duration-300">
                      {service.num}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? 'bg-accent/15 border border-accent/30'
                          : 'bg-white/[0.03] border border-white/[0.06]'
                      }`}
                    >
                      <Icon
                        className={`transition-colors duration-300 ${
                          isActive ? 'text-accent-light' : 'text-surface-300'
                        }`}
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-lg font-bold mb-3 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-surface-100'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-surface-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    background: 'linear-gradient(90deg, #dc2626, #ef4444)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
