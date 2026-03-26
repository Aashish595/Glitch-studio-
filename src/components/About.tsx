import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  '/pie.png',
  '/seiiki.png',
  '/trudes-studio.png',
  '/v-perfume.png',
  '/zvart.png',
];

const stats = [
  { value: '80+', label: 'Projects Delivered' },
  { value: '56+', label: 'Global Clients' },
  { value: '6+', label: 'Years of Craft' },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding bg-surface-900 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Asymmetric two-column */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Text */}
          <div>
            <div ref={headingRef}>
              <p className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-5 font-medium">
                About the Studio
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-8">
                From Reveries
                <span className="block text-gradient">To Realities.</span>
              </h2>
            </div>

            <div ref={textRef}>
              <p className="text-lg text-surface-200 leading-relaxed mb-6">
                Glitch Studio is a premium VFX and creative production house
                specializing in high-end 2D & 3D animation, motion design, and
                cinematic visuals. Our team of artists, animators, and designers
                collaborates with brands worldwide to transform imagination into
                powerful visual narratives.
              </p>
              <p className="text-base text-surface-300 leading-relaxed">
                With expertise spanning feature film VFX, commercial production,
                and interactive web experiences, we craft every project with
                precision, passion, and purpose — delivering work that stands
                apart in a crowded creative landscape.
              </p>
            </div>
          </div>

          {/* Right — Stats + Visual Element */}
          <div className="lg:pt-16">
            <div
              ref={statsRef}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-10"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l border-accent/30"
                >
                  <p className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-surface-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Marquee */}
        <div className="mt-24 lg:mt-32">
          <p className="text-center text-[10px] uppercase tracking-[0.35em] text-surface-400 mb-10">
            Trusted by Brands Worldwide
          </p>

          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-900 to-transparent z-10" />

            <div className="flex w-max animate-marquee gap-20 items-center">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="client logo"
                  className="h-8 md:h-10 opacity-40 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
