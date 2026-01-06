import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isHovering, setIsHovering] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 bg-black"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">
              Let's Create
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400">
              Ready to bring your vision to life?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Whether you have a fully formed concept or just the spark of an idea,
                we're here to collaborate on something extraordinary.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300">
                    <Mail className="text-gray-400 group-hover:text-amber-500 transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</h3>
                    <a href="mailto:hello@glitchstudio.com" className="text-lg text-white hover:text-amber-500 transition-colors">
                      hello@glitchstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300">
                    <MapPin className="text-gray-400 group-hover:text-amber-500 transition-colors duration-300" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Location</h3>
                    <p className="text-lg text-white">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 focus:border-amber-500 outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 focus:border-amber-500 outline-none text-white placeholder-gray-500 transition-all duration-300 focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 focus:border-amber-500 outline-none text-white placeholder-gray-500 transition-all duration-300 resize-none focus:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send size={18} className={`transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default Contact;
