import { useEffect } from "react";
import { Link } from "wouter";
import auraLogo from "@assets/aura-logo-full.png";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - Aura by Anu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Aura's Privacy Policy - Learn how we collect, use, and protect your information. Simple, clean, and compliant.");
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight font-serif text-white">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mb-12 uppercase tracking-[0.2em]">
              Standard, lightweight startup-friendly version — simple, clean, and compliant.
            </p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg md:text-xl">
                Aura ("we", "our", "us") is committed to protecting your privacy. This page explains what information we collect, how we use it, and the rights you have regarding your data.
              </p>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">Information We Collect</h2>
                <ul className="space-y-3 text-lg md:text-xl list-disc list-inside">
                  <li><strong className="text-white">Personal Information:</strong> Name, email, or details you provide voluntarily.</li>
                  <li><strong className="text-white">Usage Data:</strong> Pages visited, time spent, device information, general analytics.</li>
                  <li><strong className="text-white">Cookies:</strong> Used to improve user experience, remember preferences, and analyze performance.</li>
                </ul>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">How We Use Your Information</h2>
                <ul className="space-y-3 text-lg md:text-xl list-disc list-inside">
                  <li>To improve app functionality and user experience</li>
                  <li>To personalize content</li>
                  <li>To communicate updates or important information</li>
                  <li>To maintain safety, performance, and reliability of the platform</li>
                </ul>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">Data Sharing</h2>
                <p className="text-lg md:text-xl">
                  We do not sell your data.
                </p>
                <p className="text-lg md:text-xl">
                  We may share anonymized or non-personal data with analytics or infrastructure providers to help us improve the platform.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">Data Security</h2>
                <p className="text-lg md:text-xl">
                  We use reasonable security measures to protect your information.
                </p>
                <p className="text-lg md:text-xl">
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">Your Rights</h2>
                <p className="text-lg md:text-xl mb-3">You may request:</p>
                <ul className="space-y-2 text-lg md:text-xl list-disc list-inside ml-4">
                  <li>Access to your data</li>
                  <li>Correction or deletion</li>
                  <li>To opt out of emails or communication</li>
                </ul>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">Third-Party Services</h2>
                <p className="text-lg md:text-xl">
                  Aura may use trusted third-party services for hosting, analytics, or authentication. These services follow their own privacy standards.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">Changes to This Policy</h2>
                <p className="text-lg md:text-xl">
                  We may update this Privacy Policy occasionally. Continued use of Aura implies acceptance of the updated policy.
                </p>
              </div>

              <div className="pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif tracking-wide">Contact Us</h2>
                <p className="text-lg md:text-xl">
                  For questions or requests, email: <a href="mailto:contactaurabyanu@gmail.com" className="text-white hover:underline">contactaurabyanu@gmail.com</a>
                </p>
              </div>
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

