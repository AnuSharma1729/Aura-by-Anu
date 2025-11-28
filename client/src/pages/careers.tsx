import { useEffect } from "react";
import { Link } from "wouter";
import auraLogo from "@assets/aura-logo-full.png";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers - Aura by Anu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Work with Aura. We're building the future of personal growth and productivity. Check back for future opportunities.");
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
              Work With Aura
            </h1>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Right now, Aura is being built by a solo founder supported by a few AI agents — small team, big ambition.
              </p>

              <p className="text-lg md:text-xl">
                We're not hiring at the moment, but this space will evolve as Aura grows.
              </p>

              <p className="text-lg md:text-xl">
                If you'd like to be part of the journey someday, check back for future opportunities.
              </p>

              <p className="text-lg md:text-xl font-medium text-white pt-4">
                The mission is big, and we'll need brilliant minds soon.
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

