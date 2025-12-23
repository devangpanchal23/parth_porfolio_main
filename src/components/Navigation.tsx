// import { Film } from "lucide-react";

// export function Navigation() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Film className="w-8 h-8 text-red-500" />
//             <span className="tracking-wider">ALEX RIVERA</span>
//           </div>
//           <div className="hidden md:flex items-center gap-8">
//             <button 
//               onClick={() => scrollToSection("portfolio")}
//               className="hover:text-red-500 transition-colors"
//             >
//               Portfolio
//             </button>
//             <button 
//               onClick={() => scrollToSection("about")}
//               className="hover:text-red-500 transition-colors"
//             >
//               About
//             </button>
//             <button 
//               onClick={() => scrollToSection("experience")}
//               className="hover:text-red-500 transition-colors"
//             >
//               Experience
//             </button>
//             <button 
//               onClick={() => scrollToSection("services")}
//               className="hover:text-red-500 transition-colors"
//             >
//               Services
//             </button>
//             <button 
//               onClick={() => scrollToSection("shop")}
//               className="hover:text-red-500 transition-colors"
//             >
//               Shop
//             </button>
//             <button 
//               onClick={() => scrollToSection("contact")}
//               className="bg-red-500 px-6 py-2 rounded hover:bg-red-600 transition-colors"
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// import { useState } from "react";
// import { Film, Menu, X } from "lucide-react";
// import { motion } from "framer-motion";

// export function Navigation() {
//   const [open, setOpen] = useState(false);
//   const [hovered, setHovered] = useState<string | null>(null);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   const navLinks = [
//     ["portfolio", "Portfolio"],
//     ["about", "About"],
//     ["experience", "Experience"],
//     ["services", "Services"],
//     ["shop", "Shop"],
//   ] as const;

//   return (
//     <nav className="fixed top-4 left-0 right-0 z-50 px-4">
//       {/* Main Navbar */}
//       <div className="mx-auto max-w-7xl rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg">
//         <div className="flex items-center justify-between px-6 py-3">

//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Film className="w-7 h-7 text-red-500" />
//             <span className="tracking-widest text-sm font-medium">
//               Parth Panchal
//             </span>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map(([id, label]) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 onMouseEnter={() => setHovered(id)}
//                 onMouseLeave={() => setHovered(null)}
//                 className="relative h-5 overflow-hidden text-sm"
//               >
//                 {/* Top text */}
//                 <motion.span
//                   animate={
//                     hovered === id
//                       ? { y: "-120%", opacity: 0 }
//                       : { y: "0%", opacity: 1 }
//                   }
//                   transition={{ duration: 0.25, ease: "easeOut" }}
//                   className="block text-white/70"
//                 >
//                   {label}
//                 </motion.span>

//                 {/* Bottom re-enter text */}
//                 <motion.span
//                   initial={{ y: "120%", opacity: 0 }}
//                   animate={
//                     hovered === id
//                       ? { y: "0%", opacity: 1 }
//                       : { y: "120%", opacity: 0 }
//                   }
//                   transition={{
//                     duration: 0.25,
//                     ease: "easeOut",
//                     delay: hovered === id ? 0.08 : 0,
//                   }}
//                   className="absolute left-0 top-0 block text-white"
//                 >
//                   {label}
//                 </motion.span>
//               </button>
//             ))}

//             {/* Contact Button */}
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="ml-2 rounded-full bg-red-500 px-6 py-2 text-sm font-medium hover:bg-red-600 transition-colors"
//             >
//               Contact
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="md:hidden text-white"
//           >
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Overlay Menu (UNCHANGED) */}
//       {open && (
//         <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden">
//           <div className="mx-auto mt-6 w-[92%] rounded-3xl bg-[#0b0b14] border border-white/10 p-6 shadow-xl">

//             {/* Header */}
//             <div className="flex items-center justify-between mb-6">
//               <span className="text-sm tracking-widest">Parth Panchal</span>
//               <button onClick={() => setOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Links */}
//             <div className="flex flex-col divide-y divide-white/10">
//               {navLinks.map(([id, label]) => (
//                 <button
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className="py-4 text-center text-white/80 hover:text-white transition"
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>

//             {/* CTA */}
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="mt-6 w-full rounded-full bg-red-500 py-3 text-sm font-medium hover:bg-red-600 transition-colors"
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



import { useState } from "react";
import { Film, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = [
    ["portfolio", "Portfolio"],
    ["about", "About"],
    // ["experience", "Experience"],
    ["services", "Services"],
    // ["shop", "Shop"],
  ] as const;

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 font-sans">
      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className="w-7 h-7 text-red-500" />
            <span className="tracking-widest text-base lg:text-lg font-bold">
              Drayen ocour
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className="relative h-6 overflow-hidden text-base"
              >
                {/* Top text */}
                <motion.span
                  animate={
                    hovered === id
                      ? { y: "-120%", opacity: 0 }
                      : { y: "0%", opacity: 1 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="block text-white/70"
                >
                  {label}
                </motion.span>

                {/* Bottom re-enter text */}
                <motion.span
                  initial={{ y: "120%", opacity: 0 }}
                  animate={
                    hovered === id
                      ? { y: "0%", opacity: 1 }
                      : { y: "120%", opacity: 0 }
                  }
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: hovered === id ? 0.08 : 0,
                  }}
                  className="absolute left-0 top-0 block text-white"
                >
                  {label}
                </motion.span>
              </button>
            ))}

            {/* ===== JOIN / CONTACT BUTTON (FIXED) ===== */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="relative overflow-hidden rounded-full px-6 py-2 text-base font-medium border border-red-500 text-white"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Sliding background */}
              <motion.span
                variants={{
                  rest: { x: "-100%" },
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 bg-red-500"
              />

              {/* Text */}
              <span className="relative z-10">Contact</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu (UNCHANGED) */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden">
          <div className="mx-auto mt-6 w-[92%] rounded-3xl bg-[#0b0b14] border border-white/10 p-6 shadow-xl">

            <div className="flex items-center justify-between mb-6">
              <span className="text-base tracking-widest font-bold">Drayen ocour</span>
              <button onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col divide-y divide-white/10">
              {navLinks.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="py-4 text-center text-white/80 hover:text-white transition"
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-6 w-full rounded-full bg-red-500 py-3 text-base font-medium hover:bg-red-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
