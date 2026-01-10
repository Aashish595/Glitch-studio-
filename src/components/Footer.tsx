import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400">
      {/* subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <img src="/logo.png" alt="Glitch Studio" className="h-9 mb-6" />
            <p className="text-sm leading-relaxed max-w-xs">
              A boutique VFX & post-production studio crafting cinematic
              visuals, immersive motion design, and unforgettable brand stories.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Works", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === "Works" ? "/works" : `#${item.toLowerCase()}`
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "VFX & Compositing",
                "2D / 3D Animation",
                "Motion Graphics",
                "Video Editing",
                "Post Production",
              ].map((service) => (
                <li key={service}>
                  <span className="hover:text-amber-400 transition cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span>Remote Studio · Worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400" />
                <a
                  href="mailto:hello@glitchstudio.com"
                  className="hover:text-amber-400 transition"
                >
                  hello@glitchstudio.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400" />
                <a
                  href="tel:+919999999999"
                  className="hover:text-amber-400 transition"
                >
                  +91 99999 99999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Glitch Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-amber-400 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
