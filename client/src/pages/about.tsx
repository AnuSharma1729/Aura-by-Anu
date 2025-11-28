import { useEffect } from "react";
import { Link } from "wouter";
import auraLogo from "@assets/aura-logo-full.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - Aura by Anu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Aura - a personal growth and productivity companion designed to help you step into a more confident, empowered version of yourself.");
    }
  }, []);

  return (
    <>
      
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-white selection:text-black">
        {/* Navigation */}
        <nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-black/50 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between h-24 items-center">
              <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                  <img src={auraLogo} alt="Aura by Anu" className="h-16 w-auto object-contain" />
                </div>
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/">
                  <span className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em] cursor-pointer">Home</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight font-serif text-white">
              About Aura
            </h1>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Aura is a personal growth and productivity companion designed to help you step into a more confident, empowered, and opportunity-attracting version of yourself — one day at a time.
              </p>

              <p className="text-lg md:text-xl">
                We believe transformation doesn't happen in giant leaps; it happens through small, consistent actions that build momentum and shape who you become.
              </p>

              <div className="pt-8 border-t border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-serif tracking-wide">Our Mission</h2>
                <ul className="space-y-4 text-lg md:text-xl">
                  <li>To help individuals show up as their best selves.</li>
                  <li>To turn routines into rituals.</li>
                  <li>To make personal growth feel simple, beautiful, and achievable.</li>
                </ul>
              </div>

              <p className="text-lg md:text-xl pt-4">
                Aura blends thoughtful design, intentional systems, and delightful interactions to help you stay focused, take action, and grow into the person you want to be — steadily, purposefully, and confidently.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <Link href="/">
                <span className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] cursor-pointer">
                  ← Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

