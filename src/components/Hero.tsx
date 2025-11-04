import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToProjects = () => {
    document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.coverr.co/videos/coverr-abstract-golden-particles-6809/1080p.mp4" type="video/mp4" />
      </video>

      <button
        onClick={toggleMute}
        className="absolute top-8 right-8 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-amber-500 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
      >
        {isMuted ? <VolumeX className="text-white" size={20} /> : <Volume2 className="text-amber-500" size={20} />}
      </button>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <div
          className={`text-center space-y-8 transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tight text-white">
              GLITCH
            </h1>
            <div className="absolute -inset-8 bg-amber-500/10 blur-3xl -z-10" />
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />

          <h2 className="text-lg md:text-xl font-light tracking-[0.3em] text-gray-300 uppercase">
            Studio
          </h2>

          <p className="text-base md:text-lg text-gray-400 font-light italic max-w-xl mx-auto">
            Crafting visual chaos into perfection
          </p>

          <button
            onClick={scrollToProjects}
            className="group mt-12 px-10 py-4 bg-transparent border border-amber-500/50 hover:border-amber-500 text-white uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] relative overflow-hidden"
          >
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-500/70" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
