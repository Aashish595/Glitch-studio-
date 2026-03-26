import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Luminous Edge',
    category: 'Feature Film VFX',
    image:
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'large',
  },
  {
    title: 'Golden Hour',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'small',
  },
  {
    title: 'Ethereal Motion',
    category: 'Music Video',
    image:
      'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'small',
  },
  {
    title: 'Midnight Protocol',
    category: 'Short Film',
    image:
      'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'small',
  },
  {
    title: 'Urban Pulse',
    category: 'Brand Campaign',
    image:
      'https://images.pexels.com/photos/2249531/pexels-photo-2249531.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'large',
  },
  {
    title: 'Abstract Reality',
    category: 'Experimental',
    image:
      'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'small',
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
          y: 60,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative section-padding bg-surface-900 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-5 font-medium">
            Selected Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-surface-300 max-w-xl mx-auto">
            A curated selection of our recent work across film, brands,
            and digital experiences.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px] md:auto-rows-[320px]"
        >
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isLarge = project.size === 'large';

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent-light mb-2">
                    {project.category}
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                        isHovered
                          ? 'border-accent bg-accent/20'
                          : 'border-white/20 bg-white/5'
                      }`}
                    >
                      <ArrowUpRight
                        size={16}
                        className={`transition-colors duration-300 ${
                          isHovered ? 'text-accent-light' : 'text-white/60'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover border */}
                <div
                  className={`absolute inset-0 border transition-colors duration-500 rounded-sm pointer-events-none ${
                    isHovered ? 'border-accent/30' : 'border-transparent'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="/works"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 hover:border-accent/40 text-surface-200 hover:text-white text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-accent/5 rounded-sm"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
