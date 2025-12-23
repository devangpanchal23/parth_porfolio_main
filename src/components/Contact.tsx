import { useState, useRef } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

import { toast } from "sonner";
import { motion } from "framer-motion";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // 1. Load Environment Variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 2. Validate Configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS Environment Variables are missing!");
      toast.error("Configuration error. Please contact the administrator.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Let's <span className="text-red-500">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg p-8 rounded-2xl"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-black/50 border-white/10 focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-black/50 border-white/10 focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-black/50 border-white/10 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-black/50 border-white/10 focus:border-red-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-6 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}