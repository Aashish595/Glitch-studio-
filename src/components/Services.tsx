import { useEffect, useRef, useState } from 'react';
import { Film, Sparkles, Layers, Zap, Palette, Eye } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'VFX Compositing',
    description: 'Seamless integration of digital elements with live-action footage'
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Dynamic animations that bring brands and stories to life'
  },
  {
    icon: Layers,
    title: '3D Animation',
    description: 'Photo-realistic rendering and character animation'
  },
  {
    icon: Zap,
    title: 'Color Grading',
    description: 'Cinematic color correction and artistic grade work'
  },
  {
    icon: Palette,
    title: 'Creative Direction',
    description: 'End-to-end visual storytelling and concept development'
  },
  {
    icon: Eye,
    title: 'Post Production',
    description: 'Complete finishing services from edit to final delivery'
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 bg-zinc-950"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">
              Services
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400">
              Full-spectrum creative capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700 cursor-pointer overflow-hidden ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  } ${
                    activeIndex === index ? 'md:scale-105 border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.2)]' : ''
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 transition-all duration-700 ${
                    activeIndex === index ? 'from-amber-500/10 to-transparent' : ''
                  }`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 ${
                      activeIndex === index ? 'scale-110 border-amber-500/50 bg-amber-500/10' : ''
                    }`}>
                      <Icon className={`transition-colors duration-300 ${
                        activeIndex === index ? 'text-amber-500' : 'text-gray-400'
                      }`} size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      activeIndex === index ? 'text-amber-500' : 'text-white'
                    }`}>
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 ${
                    activeIndex === index ? 'w-full' : 'w-0'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
