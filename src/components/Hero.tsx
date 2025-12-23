import { Play } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

/* ================= Animations ================= */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* ================= Hero ================= */

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">

      {/* ===== BACKGROUND LAYERS ===== */}

      {/* 1. Safe Fallback Gradient (Always visible, sits at the bottom) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* 2. Spline 3D Scene (Loads only on client, fades in) */}
      <div className="absolute inset-0 z-0 pointer-events-none translate-y-12 md:translate-y-24 scale-125 md:scale-150 origin-center">
        {isMounted && (
          <div
            className={`w-full h-full transition-opacity duration-1000 ${isSplineLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <Spline
              scene="https://prod.spline.design/1k27CaqBbU7mqs2n/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
              onLoad={() => setIsSplineLoaded(true)}
            />
          </div>
        )}
      </div>

      {/* 3. Dark Overlay (Ensures text readability on top of Spline) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/60 to-black pointer-events-none" />

      {/* ===== CONTENT ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12 md:mt-24"
      >
        {/* Growth Badge */}
        <motion.div
          variants={slideUp}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm"
        >
          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-300">230+ visit my profile</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={slideUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="block text-white">Crafting Stories</span>
          <span className="block text-white/40 mt-2">Through Cinematic</span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mt-2">
            <span className="text-white">Excellence</span>

            {/* Adobe Icons */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 backdrop-blur-sm transform translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#00005B] flex items-center justify-center border border-white/10" title="Adobe Premiere Pro">
                <span className="text-[#9999FF] font-bold text-xs md:text-sm">Pr</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#001E36] flex items-center justify-center border border-white/10" title="Adobe Photoshop">
                <span className="text-[#31A8FF] font-bold text-xs md:text-sm">Ps</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#00005B] flex items-center justify-center border border-white/10" title="Adobe After Effects">
                <span className="text-[#9999FF] font-bold text-xs md:text-sm">Ae</span>
              </div>
            </div>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideUp}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turning moments into motion-driven stories, blending creativity and
          precision to craft visuals that connect, inspire, and leave a lasting
          impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={slideUp}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            onClick={scrollToPortfolio}
            className="bg-red-500 px-8 py-4 rounded-lg hover:bg-red-600 transition-all flex items-center gap-2 group font-medium"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
            View My Work
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/20 px-8 py-4 rounded-lg hover:bg-white/5 transition-all font-medium text-gray-300 hover:text-white"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
