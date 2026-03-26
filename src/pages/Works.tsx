import { useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

const categories = ['All', 'VFX', '2D', '3D', 'Motion'];

const works = [
  {
    title: 'Cyber City Breakdown',
    category: 'VFX',
    image:
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Brand Motion Reel',
    category: 'Motion',
    image:
      'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: '3D Product Visual',
    category: '3D',
    image:
      'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: '2D Explainer Film',
    category: '2D',
    image:
      'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const Works = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? works
      : works.filter((item) => item.category === active);

  return (
    <section className="min-h-screen bg-surface-900 px-6 lg:px-12 py-28">
      {/* Back button */}
      <div className="max-w-7xl mx-auto mb-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-surface-400 hover:text-accent-light transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <p className="text-[11px] uppercase tracking-[0.4em] text-accent-light mb-5 font-medium">
          Portfolio
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6">
          Our Works
        </h1>
        <p className="text-xl text-surface-300">
          High-end VFX, Animation & Motion crafted for cinema and brands
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-3 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-sm text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
              active === cat
                ? 'bg-accent text-white'
                : 'border border-white/10 text-surface-400 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-surface-800 aspect-video cursor-pointer rounded-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-surface-950/20 to-transparent opacity-50 group-hover:opacity-80 transition duration-500" />

            {/* Arrow */}
            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                <ArrowUpRight size={16} className="text-accent-light" />
              </div>
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent-light mb-1">
                {item.category}
              </p>
              <h3 className="font-display text-xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 transition-colors duration-500 rounded-sm pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
