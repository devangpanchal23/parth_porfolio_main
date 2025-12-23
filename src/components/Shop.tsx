import { ShoppingCart, Download, Star, Package } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { toast } from "sonner";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  category: "Presets" | "Templates" | "Sound Effects";
  description: string;
  price: number;
  image: string;
  rating: number;
  downloads: number;
  features: string[];
  popular?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: "Cinematic Color Grading Pack",
    category: "Presets",
    description: "50 professional LUTs for cinematic color grading. Perfect for narrative films, music videos, and commercials.",
    price: 49,
    image: "https://images.unsplash.com/photo-1742075884564-f2f9477f6f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMGdyYWRpbmclMjBwcmVzZXRzfGVufDF8fHx8MTc2MzcxOTg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    downloads: 1250,
    features: ["50 LUTs", "Premiere & Resolve", "Instant Download"],
    popular: true
  },
  {
    id: 2,
    title: "Social Media Templates Bundle",
    category: "Templates",
    description: "100+ animated templates for Instagram, TikTok, and YouTube. Fully customizable and easy to use.",
    price: 79,
    image: "https://images.unsplash.com/photo-1758598497331-f13da36f420d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0ZW1wbGF0ZXxlbnwxfHx8fDE3NjM3MTk4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    downloads: 2100,
    features: ["100+ Templates", "After Effects", "Free Updates"],
    popular: true
  },
  {
    id: 3,
    title: "Pro Sound Effects Library",
    category: "Sound Effects",
    description: "500+ high-quality sound effects including transitions, impacts, whooshes, and ambiences.",
    price: 39,
    image: "https://images.unsplash.com/photo-1692838952665-a7a9577fde9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMHdhdmUlMjBhdWRpb3xlbnwxfHx8fDE3NjM2MzczMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    downloads: 980,
    features: ["500+ SFX", "WAV Format", "Commercial License"]
  },
  {
    id: 4,
    title: "Moody Film Presets",
    category: "Presets",
    description: "25 dark and moody color grades for dramatic storytelling and emotional impact.",
    price: 29,
    image: "https://images.unsplash.com/photo-1751965876151-b5925553e2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwbG9va3xlbnwxfHx8fDE3NjM3MTk4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    downloads: 750,
    features: ["25 LUTs", "All Platforms", "Tutorial Included"]
  },
  {
    id: 5,
    title: "Lower Thirds Collection",
    category: "Templates",
    description: "40 animated lower thirds for professional interviews, corporate videos, and documentaries.",
    price: 35,
    image: "https://images.unsplash.com/photo-1758598497331-f13da36f420d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0ZW1wbGF0ZXxlbnwxfHx8fDE3NjM3MTk4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    downloads: 620,
    features: ["40 Designs", "Premiere Pro", "Easy Customization"]
  },
  {
    id: 6,
    title: "Cinematic Transition Pack",
    category: "Sound Effects",
    description: "200 cinematic transition sounds including whooshes, risers, and impacts for seamless editing.",
    price: 25,
    image: "https://images.unsplash.com/photo-1692838952665-a7a9577fde9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMHdhdmUlMjBhdWRpb3xlbnwxfHx8fDE3NjM2MzczMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    downloads: 1400,
    features: ["200 Transitions", "High Quality", "Instant Access"]
  }
];

export function Shop() {
  const handlePurchase = (product: Product) => {
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <section id="shop" className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full mb-6"
          >
            <Package className="w-4 h-4 text-red-500" />
            <span className="text-sm">Digital Products</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Professional <span className="text-red-500">Shop</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Elevate your editing with premium presets, templates, and sound effects used in my projects
          </p>
        </motion.div>

        {/* Category Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { count: "50+", label: "Premium Presets" },
            { count: "140+", label: "Video Templates" },
            { count: "700+", label: "Sound Effects" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-xl border border-white/10 text-center"
            >
              <div className="text-3xl text-red-500 mb-2">{stat.count}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-zinc-900 rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all hover:transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Popular Badge */}
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-red-500 border-none">
                    Popular
                  </Badge>
                )}

                {/* Category Badge */}
                <Badge
                  variant="secondary"
                  className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border-white/20"
                >
                  {product.category}
                </Badge>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <div className="text-3xl">${product.price}</div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="mb-2 group-hover:text-red-500 transition-colors">
                  {product.title}
                </h3>

                {/* Rating & Downloads */}
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-gray-300">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Download className="w-4 h-4" />
                    <span>{product.downloads.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-500"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Purchase Button */}
                <Button
                  onClick={() => handlePurchase(product)}
                  className="w-full bg-red-500 hover:bg-red-600 gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-2xl p-8 text-center"
        >
          <h3 className="mb-3">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Looking for something specific? I can create custom presets, templates, or sound packs tailored to your needs.
          </p>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            className="border-red-500/50 hover:bg-red-500 hover:text-white"
          >
            Contact for Custom Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}