import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Showreel = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative section-padding bg-surface-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={contentRef}>
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-5 font-medium">
              Showreel
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-6">
              See It In Motion
            </h2>
            <p className="text-lg text-surface-300 max-w-xl mx-auto">
              A curated collection of our finest work — 3 minutes of pure
              visual craft
            </p>
          </div>

          {/* Video Thumbnail */}
          <div
            className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-sm group cursor-pointer"
            onClick={() => setIsVideoPlaying(true)}
          >
            <img
              src="https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Showreel thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-surface-950/30 to-surface-950/20" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-sm border border-accent/40 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10">
                <Play
                  className="text-white ml-1"
                  size={32}
                  fill="rgba(255,255,255,0.8)"
                />
              </div>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                2024 Showreel
              </h3>
              <p className="text-surface-300 text-sm">
                VFX · Animation · Motion Design
              </p>
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 transition-colors duration-500 rounded-sm pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-surface-950/95 backdrop-blur-md flex items-center justify-center p-6">
          <button
            onClick={() => setIsVideoPlaying(false)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 flex items-center justify-center transition-all duration-300 hover:rotate-90"
          >
            <X className="text-white" size={20} />
          </button>

          <div className="w-full max-w-6xl aspect-video">
            <video autoPlay controls className="w-full h-full rounded-sm">
              <source
                src="https://cdn.coverr.co/videos/coverr-cinematic-film-countdown-7370/1080p.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Showreel;
