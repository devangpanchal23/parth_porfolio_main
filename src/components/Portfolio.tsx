import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tech Brand Commercial",
    category: "Commercial",
    description: "30-second high-energy commercial for leading tech startup, featuring dynamic transitions and motion graphics.",
    image: "https://images.unsplash.com/photo-1683089884249-a6c5f364edaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2MzY1MjM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Color Grading", "Motion Graphics", "Sound Design"]
  },
  {
    id: 2,
    title: "Indie Artist Music Video",
    category: "Music Video",
    description: "Narrative-driven music video with creative visual effects and seamless storytelling.",
    image: "https://images.unsplash.com/photo-1627845774239-523f131598c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzYzNzE5MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["VFX", "Narrative", "Color Correction"]
  },
  {
    id: 3,
    title: "Corporate Brand Film",
    category: "Corporate",
    description: "Professional brand story for Fortune 500 company, showcasing company culture and values.",
    image: "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNzExMzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Interviews", "B-Roll", "Professional"]
  },
  {
    id: 4,
    title: "Environmental Documentary",
    category: "Documentary",
    description: "20-minute documentary exploring climate change impacts, featuring powerful interviews and stunning footage.",
    image: "https://images.unsplash.com/photo-1759521528494-fd6ceb6049e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG18ZW58MXx8fHwxNzYzNTk5Mjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Documentary", "Storytelling", "Impact"]
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Social Media",
    description: "Series of 15-second vertical videos optimized for Instagram and TikTok, achieving 2M+ views.",
    image: "https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdG9yfGVufDF8fHx8MTc2MzY3MzA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Vertical Video", "Fast-Paced", "Trending"]
  },
  {
    id: 6,
    title: "Product Showcase Reel",
    category: "Commercial",
    description: "Sleek product visualization with 3D integration and premium aesthetic for luxury brand.",
    image: "https://images.unsplash.com/photo-1683089884249-a6c5f364edaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2MzY1MjM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Product", "Premium", "3D Integration"]
  }
];

export function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Commercial", "Music Video", "Corporate", "Documentary", "Social Media"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Featured <span className="text-red-500">Work</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent projects across various formats and industries
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${filter === category
                ? "bg-red-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-white/5 hover:border-red-500/50 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
                    {project.category}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}