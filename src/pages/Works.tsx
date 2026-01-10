import { useState } from "react";
import { Play } from "lucide-react";

const categories = ["All", "VFX", "2D", "3D", "Motion"];

const works = [
  {
    title: "Cyber City Breakdown",
    category: "VFX",
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Brand Motion Reel",
    category: "Motion",
    image:
      "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "3D Product Visual",
    category: "3D",
    image:
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "2D Explainer Film",
    category: "2D",
    image:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const Works = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? works
      : works.filter((item) => item.category === active);

  return (
    <section className="min-h-screen bg-black px-6 py-28">
      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          Our Works
        </h1>
        <p className="text-xl text-gray-400">
          High-end VFX, Animation & Motion crafted for cinema and brands
        </p>
        <div className="w-40 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8" />
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition
              ${
                active === cat
                  ? "bg-amber-500 text-black"
                  : "border border-white/20 text-gray-400 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-zinc-900 aspect-video cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Play */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-amber-500/50 flex items-center justify-center">
                <Play className="text-white ml-1" />
              </div>
            </div>

            {/* Text */}
            <div className="absolute bottom-0 p-6">
              <p className="text-xs tracking-widest uppercase text-amber-500">
                {item.category}
              </p>
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
