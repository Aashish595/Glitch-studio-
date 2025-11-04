import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

const Showreel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">
                Showreel
              </h2>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              A curated collection of our finest work
            </p>
          </div>

          <div className="relative aspect-video max-w-5xl mx-auto bg-zinc-900 overflow-hidden group cursor-pointer"
               onClick={() => setIsVideoPlaying(true)}>
            <img
              src="https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Showreel thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-amber-500/50 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:border-amber-500">
                <Play className="text-white ml-2" size={36} fill="white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">2024 Showreel</h3>
              <p className="text-gray-300">3 minutes of pure visual excellence</p>
            </div>

            <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 transition-colors duration-500" />
          </div>
        </div>
      </div>

      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn">
          <button
            onClick={() => setIsVideoPlaying(false)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:border-amber-500 flex items-center justify-center transition-all duration-300 hover:rotate-90"
          >
            <X className="text-white" size={24} />
          </button>

          <div className="w-full max-w-6xl aspect-video">
            <video
              autoPlay
              controls
              className="w-full h-full"
            >
              <source src="https://cdn.coverr.co/videos/coverr-cinematic-film-countdown-7370/1080p.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Showreel;
