import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scan, Shirt, ArrowRight, Zap, Upload, MessageSquare, Layers, CheckCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import runwayVideo from "@assets/generated_videos/cinematic_futuristic_fashion_runway_show_with_models_walking.mp4";
import wardrobeImage from "@assets/generated_images/holographic_digital_wardrobe_scanning_interface.png";
import outfitImage from "@assets/generated_images/ai_curated_outfit_display.png";
import chatImage from "@assets/generated_images/minimalist_ai_chat_interface_visualization.png";
import auraLogo from "../assets/aura-logo.png";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    
    setLoading(true);
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Error",
          description: data.error || "Failed to join waitlist",
          variant: "destructive",
        });
        return;
      }

      setSubmitted(true);
      toast({
        title: "Access Requested",
        description: "You've been added to the priority waitlist.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center gap-3">
              <img src={auraLogo} alt="AURA" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold tracking-[0.2em] text-white font-serif">AURA</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em]">Features</a>
              <a href="#how-it-works" className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em]">Process</a>
              <a href="#waitlist" className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em]">Membership</a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#waitlist">
                <Button className="bg-white hover:bg-gray-200 text-black border-none rounded-none px-8 h-10 text-xs tracking-widest font-bold uppercase transition-all hover:scale-105">
                  Get Early Access
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={runwayVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 tracking-tight font-serif leading-none mix-blend-overlay opacity-90">
              YOUR AI POWERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">PERSONAL STYLIST</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Curate outfits, analyze your wardrobe, and receive real-time styling advice powered by cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="#waitlist">
                <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-gray-200 rounded-none text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  Join Waitlist
                </Button>
              </a>
              <div className="flex gap-4">
                 <Button variant="outline" size="lg" className="h-16 px-8 border-white/20 bg-black/40 text-white hover:bg-white hover:text-black rounded-none text-sm font-bold tracking-[0.1em] uppercase backdrop-blur-md transition-all">
                    <Smartphone className="mr-2 h-4 w-4" /> iOS
                 </Button>
                 <Button variant="outline" size="lg" className="h-16 px-8 border-white/20 bg-black/40 text-white hover:bg-white hover:text-black rounded-none text-sm font-bold tracking-[0.1em] uppercase backdrop-blur-md transition-all">
                    <Smartphone className="mr-2 h-4 w-4" /> Android
                 </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
           <div className="h-16 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-black overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
             <GlassFeatureCard 
                title="Smart Wardrobe Upload"
                description="Digitize your closet instantly. Our computer vision identifies cuts, fabrics, and brands."
                image={wardrobeImage}
                icon={<Upload className="h-5 w-5" />}
             />
             <GlassFeatureCard 
                title="Daily Outfit Picks"
                description="Wake up to curated looks based on your schedule, weather, and current fashion trends."
                image={outfitImage}
                icon={<Layers className="h-5 w-5" />}
                delay={0.2}
             />
             <GlassFeatureCard 
                title="AI Chat Stylist"
                description="24/7 fashion advice. Ask specific styling questions or get feedback on outfit choices."
                image={chatImage}
                icon={<MessageSquare className="h-5 w-5" />}
                delay={0.4}
             />
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 border-y border-white/10 bg-black overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-[scroll_20s_linear_infinite] items-center">
           {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center mx-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                 <span className="text-4xl font-serif font-bold text-transparent stroke-text tracking-widest mr-4">FUTURE FASHION</span>
                 <div className="h-2 w-2 bg-white rotate-45" />
              </div>
           ))}
        </div>
      </section>

      {/* Waitlist / Download Section */}
      <section id="waitlist" className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
               JOIN THE <br/> REVOLUTION
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
               Aura is currently in private beta. Sign up for the waitlist to get early access when we launch in your region.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto w-full">
                 <div className="relative w-full">
                    <Input 
                       type="email" 
                       placeholder="ENTER YOUR EMAIL" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       className="w-full h-14 bg-white/5 border-white/10 rounded-none px-6 text-white placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-white font-mono text-sm text-center sm:text-left"
                    />
                 </div>
                 <Button type="submit" size="lg" disabled={loading} className="h-14 px-10 bg-white text-black hover:bg-gray-200 hover:text-black transition-colors rounded-none font-bold tracking-widest w-full sm:w-auto disabled:opacity-50">
                    {loading ? "SUBMITTING..." : "REQUEST ACCESS"}
                 </Button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 p-8 bg-white/5 border border-white/10 max-w-md mx-auto"
              >
                <CheckCircle className="h-12 w-12 text-white" />
                <h3 className="text-2xl font-serif font-bold text-white">YOU'RE ON THE LIST</h3>
                <p className="text-gray-400 text-sm">We'll notify you as soon as your spot opens up.</p>
              </motion.div>
            )}

            <div className="mt-20 pt-12 border-t border-white/10">
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Coming Soon To</p>
               <div className="flex justify-center gap-6">
                  <Button variant="outline" className="h-14 w-44 border-white/10 bg-transparent hover:bg-white hover:text-black rounded-none gap-3 transition-all group">
                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.64 4.65-1.64 2.03.01 3.14.83 3.63 1.54-3.27 1.66-2.48 6.08.84 7.56-.61 1.75-1.45 3.4-2.2 4.77zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.54 4.33-3.74 4.25z"/></svg>
                     <div className="flex flex-col items-start">
                        <span className="text-[8px] uppercase tracking-wider">Download on the</span>
                        <span className="text-xs font-bold tracking-wide">App Store</span>
                     </div>
                  </Button>
                  <Button variant="outline" className="h-14 w-44 border-white/10 bg-transparent hover:bg-white hover:text-black rounded-none gap-3 transition-all group">
                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.186.185-.436.185-.621 0l-2.67-2.67c-.186-.187-.186-.436 0-.622L10.787 8.425 3.61 1.252c.185-.186.435-.186.621 0l-2.67 2.67c-.186.187-.186.437 0 .623L.32 11.94 3.61 1.814zM15.34 13.548l2.925 2.925c.31.31.31.814 0 1.125l-3.3 3.3c-.311.31-.814.31-1.125 0l-2.925-2.925 4.425-4.425zM15.34 10.452l-4.425-4.425 2.925-2.925c.311-.31.814-.31 1.125 0l3.3 3.3c.31.31.31.814 0 1.125L15.34 10.452z"/></svg>
                     <div className="flex flex-col items-start">
                        <span className="text-[8px] uppercase tracking-wider">Get it on</span>
                        <span className="text-xs font-bold tracking-wide">Google Play</span>
                     </div>
                  </Button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black text-white border-t border-white/10">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
               <div>
                  <div className="flex items-center gap-3 mb-6">
                     <img src={auraLogo} alt="AURA" className="h-12 w-12 object-contain" />
                     <span className="text-2xl font-bold tracking-[0.2em] font-serif">AURA</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                     Redefining personal style through the lens of artificial intelligence.
                  </p>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Platform</h4>
                  <ul className="space-y-4 text-sm text-gray-300">
                     <li><a href="#" className="hover:text-white transition-colors">iOS App</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Android App</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Company</h4>
                  <ul className="space-y-4 text-sm text-gray-300">
                     <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Connect</h4>
                  <div className="flex gap-4">
                     <div className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                        <span className="text-xs font-bold">IG</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 font-mono uppercase tracking-wider">
               <div className="flex flex-col gap-1">
                  <p>© 2025 Aura Intelligence Inc.</p>
                  <p className="text-[10px] opacity-60">Built by Anu Sharma</p>
               </div>
               <div className="flex gap-8 mt-4 md:mt-0">
                  <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
               </div>
            </div>
         </div>
      </footer>
      
      <style>{`
         .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
         }
         @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
         }
      `}</style>
    </div>
  );
}

function GlassFeatureCard({ title, description, image, icon, delay = 0 }: any) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ delay, duration: 0.8, ease: "easeOut" }}
         className="group relative h-[500px] w-full overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 cursor-pointer"
      >
         <div className="absolute inset-0 z-0">
            <img 
               src={image} 
               alt={title} 
               className="h-full w-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
         </div>
         
         <div className="absolute bottom-0 left-0 w-full p-8 z-10">
            <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
               {icon}
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3 tracking-wide">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs group-hover:text-white transition-colors duration-300">
               {description}
            </p>
            
            <div className="mt-6 h-[1px] w-0 group-hover:w-full bg-white transition-all duration-700 ease-in-out" />
         </div>
      </motion.div>
   )
}
