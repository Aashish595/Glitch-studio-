import { useEffect, useRef, useState } from "react";

const logos = [
  "/pie.png",
  "/seiiki.png",
  "/trudes-studio.png",
  "/v-perfume.png",
  "/zvart.png",
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 bg-zinc-950 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-amber-500 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TEXT */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-4">
            Know More About Us
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            From Reveries
            <span className="block text-amber-500">To Realities!</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-16">
            Glitch Studio is a boutique VFX and post-production studio specializing
            in high-end 2D & 3D animation, motion design, and cinematic visuals.
            We collaborate with brands worldwide to transform imagination into
            powerful visual narratives — crafted with precision, passion, and purpose.
          </p>
        </div>

        {/* STATS */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-12 mb-24 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { label: "Projects Done", value: "80+" },
            { label: "Total Clients", value: "56+" },
            { label: "Years Experience", value: "6+" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </p>
              <p className="uppercase tracking-widest text-xs text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative">
          <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
            Proudly Crafted Videos For
          </p>

          <div className="overflow-hidden relative">
            <div className="flex w-max animate-marquee gap-20">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="client logo"
                  className="h-10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
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
