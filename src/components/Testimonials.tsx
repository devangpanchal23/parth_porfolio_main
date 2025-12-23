import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
    id: number;
    quote: string;
    text: string;
    author: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Exceptional storytelling!",
        text: "Parth transformed our raw footage into a compelling narrative that resonated perfectly with our audience. The pacing was spot on.",
        author: "Sarah Jenkins",
        role: "Content Creator"
    },
    {
        id: 2,
        quote: "Professional & Fast",
        text: "Delivered high-quality edits well ahead of the deadline. The communication throughout the process was excellent.",
        author: "Mike Ross",
        role: "Marketing Director"
    },
    {
        id: 3,
        quote: "Visuals that pop",
        text: "The color grading and motion graphics took our brand video to the next level. Truly cinematic quality.",
        author: "Elena Rodriguez",
        role: "Brand Manager"
    },
    {
        id: 4,
        quote: "Highly recommended",
        text: "A creative partner who understands the vision. The final product exceeded our expectations in every way.",
        author: "David Chen",
        role: "Startup Founder"
    },
    {
        id: 5,
        quote: "Engagement skyrocketed",
        text: "Our social media engagement doubled after we started working with Parth. He knows what works for the algorithm.",
        author: "Jessica Lee",
        role: "Social Media Manager"
    },
    {
        id: 6,
        quote: "Detail-oriented",
        text: "Every frame is polished. The sound design added so much depth to the final piece. A true professional.",
        author: "Tom Baker",
        role: "Documentary Filmmaker"
    },
    {
        id: 7,
        quote: "Creative genius",
        text: "Brought fresh ideas to the table that we hadn't even considered. The music video edit was absolute fire.",
        author: "Alex Turner",
        role: "Music Producer"
    },
    {
        id: 8,
        quote: "Seamless workflow",
        text: "From the first draft to the final cut, the process was smooth and efficient. Will definitely work together again.",
        author: "Olivia White",
        role: "Agency Owner"
    }
];

export function Testimonials() {
    return (
        <section className="py-12 bg-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white"
                >
                    Testimonials
                </motion.h2>
            </div>

            <div className="relative w-full">
                {/* Gradient Masks for Edge Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-infinite-scroll hover:pause">
                    {[...testimonials, ...testimonials].map((item, idx) => (
                        <div
                            key={`${item.id}-${idx}`}
                            className="w-[350px] md:w-[400px] mx-4 bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex-shrink-0 select-none hover:border-red-500/30 transition-colors duration-300"
                        >
                            <Quote className="w-10 h-10 text-red-500 mb-6 opacity-80" />
                            <h3 className="text-xl font-bold mb-3 tracking-tight text-white">"{item.quote}"</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {item.text}
                            </p>
                            <div>
                                <div className="font-bold text-lg text-white">{item.author}</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{item.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
