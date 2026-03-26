import { useEffect, useRef } from 'react';
import { Search, Lightbulb, Clapperboard, Rocket } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Discovery',
    description:
      'We dive deep into your vision, goals, and audience. Through research and strategic analysis, we uncover the story that needs to be told.',
  },
  {
    icon: Lightbulb,
    num: '02',
    title: 'Concept',
    description:
      'Our creative team develops mood boards, storyboards, and visual concepts — building the blueprint for your cinematic vision.',
  },
  {
    icon: Clapperboard,
    num: '03',
    title: 'Production',
    description:
      'From animation and VFX to compositing and sound design, our artists bring every frame to life with meticulous attention to detail.',
  },
  {
    icon: Rocket,
    num: '04',
    title: 'Delivery',
    description:
      'Final color grading, mastering, and multi-format export. We deliver polished work ready for any platform or screen size.',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

      if (stepsRef.current) {
        gsap.from(stepsRef.current.children, {
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative section-padding bg-surface-850 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header — Right-aligned for variety */}
        <div ref={headerRef} className="mb-20 max-w-2xl ml-auto text-right">
          <p className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-5 font-medium">
            How We Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6">
            Our Creative
            <span className="block text-gradient">Process</span>
          </h2>
          <p className="text-lg text-surface-300">
            Four phases of focused collaboration to take your vision from
            concept to final delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative p-7 glass rounded-sm hover:border-accent/20 transition-all duration-500"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-4xl font-extrabold text-surface-600 group-hover:text-accent/30 transition-colors duration-500">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500">
                    <Icon
                      size={18}
                      className="text-surface-400 group-hover:text-accent-light transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-accent-light transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-surface-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting line (visible on lg) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-surface-600" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
