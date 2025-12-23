import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What platforms do you edit videos for?",
        answer: "I specialize in editing for both short-form and long-form platforms. This includes high-retention content for TikTok, Instagram Reels, and YouTube Shorts, as well as narrative-driven content for YouTube, Vimeo, and corporate websites. I optimize aspect ratios, pacing, and safe zones for each specific platform."
    },
    {
        question: "How does the editing process work?",
        answer: "My workflow is designed to be seamless and collaborative. It starts with a Discovery phase to understand your vision. Then, I move to Assembly to build the narrative structure. Next is Refinement, where I add effects, color grading, and sound design. Finally, after your feedback, I deliver the polished final export in your required formats."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-black">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-red-500 font-medium tracking-wider text-sm uppercase mb-4 block">
                        FAQs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Answering your questions
                    </h2>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border-b border-white/10"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                    {faq.question}
                                </span>
                                <div className="relative flex-shrink-0 ml-4">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            rotate: openIndex === index ? 45 : 0,
                                            opacity: openIndex === index ? 0 : 1
                                        }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0"
                                    >
                                        <Plus className="w-6 h-6 text-red-500" />
                                    </motion.div>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            rotate: openIndex === index ? 0 : -45,
                                            opacity: openIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-6 h-6 text-red-500" />
                                    </motion.div>
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-gray-400 text-lg leading-relaxed max-w-3xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
