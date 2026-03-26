import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    'w-full px-5 py-4 bg-white/[0.03] border border-white/[0.08] rounded-sm text-white placeholder-surface-400 transition-all duration-300 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_20px_rgba(220,38,38,0.15)] text-sm';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative section-padding bg-surface-900 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA Text */}
          <div ref={headerRef}>
            <p className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-5 font-medium">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-8">
              Let's Create
              <span className="block text-gradient">Something Epic.</span>
            </h2>

            <p className="text-lg text-surface-200 leading-relaxed mb-10">
              Whether you have a fully formed concept or just the spark of an
              idea — we're here to collaborate on something extraordinary. Tell
              us about your vision and let's bring it to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
                  <Mail
                    className="text-surface-400 group-hover:text-accent-light transition-colors duration-300"
                    size={18}
                  />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.25em] text-surface-400 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@glitchstudio.com"
                    className="text-white hover:text-accent-light transition-colors text-sm"
                  >
                    hello@glitchstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
                  <MapPin
                    className="text-surface-400 group-hover:text-accent-light transition-colors duration-300"
                    size={18}
                  />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.25em] text-surface-400 mb-1">
                    Location
                  </h3>
                  <p className="text-white text-sm">
                    Remote Studio · Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              className={`${inputClasses} ${
                !formData.project ? 'text-surface-400' : ''
              }`}
            >
              <option value="">Project Type</option>
              <option value="vfx">VFX & Compositing</option>
              <option value="animation">2D / 3D Animation</option>
              <option value="motion">Motion Graphics</option>
              <option value="web">Web & App Design</option>
              <option value="commercial">Commercial / Brand Video</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClasses} resize-none`}
            />

            <button
              type="submit"
              className="group w-full px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden rounded-sm relative"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Send Message
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
