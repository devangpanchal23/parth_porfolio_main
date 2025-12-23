import { Briefcase, Calendar, Award, TrendingUp } from "lucide-react";

import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  image: string;
  type: "employment" | "freelance";
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Video Editor",
    company: "Pulse Creative Agency",
    period: "2021 - Present",
    description: "Leading video editing projects for major brands and corporate clients, managing a team of junior editors.",
    achievements: [
      "Edited 100+ commercial projects generating $2M+ in revenue",
      "Reduced post-production time by 30% through workflow optimization",
      "Won 'Best Commercial Edit' at the 2024 Creative Awards"
    ],
    image: "https://images.unsplash.com/photo-1666698809123-44e998e93f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHRlYW18ZW58MXx8fHwxNzYzNzIwNjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "employment"
  },
  {
    id: 2,
    role: "Lead Editor",
    company: "Maverick Studios",
    period: "2019 - 2021",
    description: "Specialized in music video production and documentary editing for independent artists and filmmakers.",
    achievements: [
      "Delivered 50+ music videos with 20M+ combined views",
      "Collaborated with Grammy-nominated artists",
      "Featured in 3 international film festivals"
    ],
    image: "https://images.unsplash.com/photo-1695014192203-291edf9e4842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjM3MDY0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "employment"
  },
  {
    id: 3,
    role: "Freelance Video Editor",
    company: "Self-Employed",
    period: "2017 - 2019",
    description: "Built a strong portfolio working with diverse clients across commercial, corporate, and social media content.",
    achievements: [
      "Established client base of 30+ recurring customers",
      "Achieved 4.9/5 average rating across platforms",
      "Grew social media following to 50K+ through quality work"
    ],
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNjcyMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "freelance"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-red-500" />
            <span className="text-sm">Professional Journey</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            My <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            8+ years of crafting compelling visual stories across agencies, studios, and independent projects
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-red-500 via-red-500/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-4 h-4 bg-red-500 rounded-full border-4 border-black"
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:col-start-2"}`}>
                    <div className="bg-zinc-900 rounded-xl border border-white/10 overflow-hidden hover:border-red-500/50 transition-all">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                        <div className={`absolute top-4 ${isEven ? "right-4" : "left-4"}`}>
                          <span className={`px-3 py-1 rounded-full text-xs ${exp.type === "employment"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                            }`}>
                            {exp.type === "employment" ? "Full-time" : "Freelance"}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className={`flex items-center gap-2 mb-3 ${isEven ? "lg:justify-end" : ""}`}>
                          <Calendar className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-400">{exp.period}</span>
                        </div>

                        <h3 className="mb-1">{exp.role}</h3>
                        <div className="text-red-500 mb-3">{exp.company}</div>
                        <p className="text-gray-400 mb-4">{exp.description}</p>

                        {/* Achievements */}
                        <div className={`space-y-2 ${isEven ? "lg:items-end" : ""}`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-4 h-4 text-red-500" />
                            <span className="text-sm">Key Achievements</span>
                          </div>
                          <ul className={`space-y-2 ${isEven ? "lg:text-right" : ""}`}>
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                                <div className={`w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0 ${isEven ? "lg:order-2" : ""}`} />
                                <span className={isEven ? "lg:flex-1" : ""}>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for timeline alignment */}
                  <div className={`hidden lg:block ${isEven ? "lg:col-start-2" : ""}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Briefcase, label: "Total Projects", value: "150+" },
            { icon: Award, label: "Awards Won", value: "8" },
            { icon: TrendingUp, label: "Client Satisfaction", value: "98%" },
            { icon: Calendar, label: "Years Experience", value: "8+" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-xl border border-white/10 text-center hover:border-red-500/50 transition-all"
              >
                <Icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-3xl mb-2 font-serif">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
