// import { useRef, useState } from 'react';

const Hero = () => {

  // const videoRef = useRef<HTMLVideoElement>(null);



  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Fullscreen background video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
  <source src="/public/hero.mp4" type="video/mp4" />
</video>


      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

   
    </section>
  );
};

export default Hero;
