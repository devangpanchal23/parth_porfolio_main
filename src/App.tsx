import { useEffect } from "react";
import Lenis from "lenis";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
// import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      {/* <Experience /> */}
      <Services />
      <Testimonials />
      {/* <Shop /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}