import { useEffect } from "react";
import { Link } from "wouter";
import auraLogo from "@assets/aura-logo-full.png";

export default function Press() {
  useEffect(() => {
    document.title = "Press & Media - Aura by Anu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Press and media inquiries for Aura by Anu. Founded by Anu Sharma, a creator with over 400,000+ followers across platforms.");
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
              Press & Media
            </h1>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Aura is founded and built by Anu Sharma — a creator with a community of over 400,000+ followers across platforms. We're early in our journey, and while there's no press coverage yet, we believe it's only a matter of time.
              </p>

              <p className="text-lg md:text-xl">
                If you'd like to reach out for interviews, collaborations, or media inquiries, contact us at:
              </p>

              <p className="text-lg md:text-xl">
                <a href="mailto:press@aura-byanu.com" className="text-white hover:underline font-medium">press@aura-byanu.com</a>
              </p>

              <p className="text-lg md:text-xl pt-4 italic">
                We're manifesting beautiful stories ahead.
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

