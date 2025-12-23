import { useState } from "react";
import { Film, Scissors, Palette, Music, Sparkles, Video } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitX, setExitX] = useState(0);

  const services = [
    {
      icon: Film,
      title: "Commercial Editing",
      description: "High-impact video editing for brands, products, and advertising campaigns that drive results.",
      features: ["30s & 60s spots", "Multi-platform delivery", "Fast turnaround"]
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Creative and narrative-driven music video editing that brings artistic vision to life.",
      features: ["Performance sync", "Visual effects", "Color grading"]
    },
    {
      icon: Video,
      title: "Corporate Videos",
      description: "Professional video editing for corporate communications, training, and brand stories.",
      features: ["Interviews", "B-roll integration", "Branded graphics"]
    },
    {
      icon: Scissors,
      title: "Documentary Editing",
      description: "Compelling long-form storytelling with emotional depth and narrative structure.",
      features: ["Story structure", "Pacing & rhythm", "Archival integration"]
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction and grading to achieve the perfect cinematic look.",
      features: ["LUT creation", "Mood design", "Consistency matching"]
    },
    {
      icon: Sparkles,
      title: "Social Media Content",
      description: "Optimized editing for social platforms with engagement-focused techniques.",
      features: ["Vertical formats", "Captions & graphics", "Platform optimization"]
    }
  ];

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x < -threshold) {
      setExitX(-200);
      setActiveIndex((prev) => (prev + 1) % services.length);
    } else if (info.offset.x > threshold) {
      setExitX(200);
      setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  };



  return (
    <section id="services" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            My <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive video editing solutions tailored to your project needs
          </p>
        </motion.div>

        {/* Swipeable Cards Container */}
        <div className="relative h-[500px] w-full flex items-center justify-center mb-12 perspective-1000">
          <AnimatePresence initial={false} custom={exitX}>
            {[3, 2, 1, 0].map((offset) => {
              const index = (activeIndex + offset) % services.length;
              const service = services[index];
              const isFront = offset === 0;

              return (
                <motion.div
                  key={service.title}
                  custom={exitX}
                  variants={{
                    front: {
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      zIndex: 4,
                      x: 0,
                      filter: "blur(0px)",
                      rotateX: 0
                    },
                    back1: {
                      scale: 0.96,
                      y: -25,
                      opacity: 0.7,
                      zIndex: 3,
                      x: 0,
                      filter: "blur(0px)",
                      rotateX: 2
                    },
                    back2: {
                      scale: 0.92,
                      y: -50,
                      opacity: 0.4,
                      zIndex: 2,
                      x: 0,
                      filter: "blur(1px)",
                      rotateX: 4
                    },
                    back3: {
                      scale: 0.88,
                      y: -75,
                      opacity: 0.2,
                      zIndex: 1,
                      x: 0,
                      filter: "blur(2px)",
                      rotateX: 6
                    },
                    enter: {
                      scale: 0.84,
                      y: -100,
                      opacity: 0,
                      zIndex: 0,
                      x: 0,
                      filter: "blur(4px)",
                      rotateX: 8
                    },
                    exit: (custom: number) => ({
                      x: custom,
                      opacity: 0,
                      scale: 1,
                      transition: { duration: 0.4, ease: "backIn" }
                    })
                  }}
                  initial="enter"
                  animate={
                    isFront ? "front" :
                      offset === 1 ? "back1" :
                        offset === 2 ? "back2" :
                          "back3"
                  }
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={isFront ? handleDragEnd : undefined}
                  className={`absolute w-full max-w-md bg-zinc-900 p-8 rounded-3xl border border-white/10 shadow-2xl ${isFront ? "cursor-grab active:cursor-grabbing hover:border-red-500/50" : ""
                    }`}
                  style={{
                    transformOrigin: "top center",
                    boxShadow: isFront
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                      : "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${isFront ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "bg-white/5 text-red-500"}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-[15px]">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400 font-medium">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-colors duration-300 ${isFront ? "bg-red-500" : "bg-white/20"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Card Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}