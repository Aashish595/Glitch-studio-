import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-surface-950 text-surface-300">
      {/* Top border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(220,38,38,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Glitch Studio" className="h-9 mb-6" />
            <p className="text-sm leading-relaxed text-surface-400 max-w-xs">
              A premium VFX & creative production studio crafting cinematic
              visuals, immersive animation, and unforgettable brand experiences
              for clients worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.25em] mb-6 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'Process', id: 'process' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-surface-400 hover:text-accent-light transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.25em] mb-6 font-medium">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-surface-400">
              {[
                'VFX & Compositing',
                '2D / 3D Animation',
                'Motion Graphics',
                'Web & App Design',
                'Post Production',
              ].map((service) => (
                <li key={service}>
                  <span className="hover:text-surface-200 transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[11px] uppercase tracking-[0.25em] mb-6 font-medium">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-surface-400">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-accent-light mt-0.5 flex-shrink-0"
                />
                <span>Remote Studio · Worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-light flex-shrink-0" />
                <a
                  href="mailto:hello@glitchstudio.com"
                  className="hover:text-accent-light transition-colors"
                >
                  hello@glitchstudio.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-light flex-shrink-0" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-accent-light transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/[0.06]" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-surface-500">
            © {new Date().getFullYear()} Glitch Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {[
              { icon: Instagram, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Youtube, href: '#' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-surface-500 hover:text-accent-light transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
