import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const projects = [
  {
    title: 'Luminous Edge',
    category: 'Feature Film VFX',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Golden Hour',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Ethereal Motion',
    category: 'Music Video',
    image: 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Midnight Protocol',
    category: 'Short Film',
    image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Urban Pulse',
    category: 'Brand Campaign',
    image: 'https://images.pexels.com/photos/2249531/pexels-photo-2249531.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Abstract Reality',
    category: 'Experimental',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section
      id="projects"
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
            <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">
              Featured Projects
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
            <p className="text-xl text-gray-400">
              A selection of our recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${
                  hoveredIndex === index ? 'md:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.3)]' : ''
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-amber-500/50 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-500">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs uppercase tracking-widest mb-2 text-amber-500">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
