import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: 'Creative Vision',
      description: 'Every frame is a canvas. Every shot tells a story. We don\'t just create effects — we craft experiences that resonate.'
    },
    {
      title: 'Technical Mastery',
      description: 'From concept to final render, we leverage cutting-edge tools and techniques to push the boundaries of what\'s possible.'
    },
    {
      title: 'Boutique Excellence',
      description: 'Being small means being agile, focused, and deeply invested in every single project we touch. No compromises.'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 bg-zinc-950"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">
              About Us
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A boutique VFX and post-production studio where creativity meets technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } ${
                  activeCard === index ? 'md:scale-105 border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.2)]' : ''
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 transition-all duration-700 ${
                  activeCard === index ? 'from-amber-500/10 to-transparent' : ''
                }`} />

                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    activeCard === index ? 'text-amber-500' : 'text-white'
                  }`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 ${
                  activeCard === index ? 'w-full' : 'w-0'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
