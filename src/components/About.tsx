import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-16 text-center tracking-tight"
        >
          About <span className="text-red-500">Me</span>
        </motion.h2>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I’m Parth Panchal, a passionate video editor driven by creativity
            and storytelling. With 1 year of hands-on editing experience and
            over 2 years of deep interest in the field, I’ve been continuously
            honing my skills and creative vision.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed"
          >
            My journey began with a strong curiosity for visuals, motion, and
            cinematic storytelling. Over time, that curiosity turned into
            dedication and discipline. Today, I focus on creating visually
            engaging content that feels authentic and impactful. Whether it’s
            dynamic edits or creative storytelling pieces, I approach every
            project with passion, precision, and a constant desire to improve.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
