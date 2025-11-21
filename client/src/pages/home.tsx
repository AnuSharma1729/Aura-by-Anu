import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scan, Shirt, ArrowRight, Zap, Upload, MessageSquare, Layers } from "lucide-react";
import { motion } from "framer-motion";
import runwayVideo from "@assets/generated_videos/cinematic_futuristic_fashion_runway_show_with_models_walking.mp4";
import wardrobeImage from "@assets/generated_images/holographic_digital_wardrobe_scanning_interface.png";
import outfitImage from "@assets/generated_images/ai_curated_outfit_display.png";
import chatImage from "@assets/generated_images/minimalist_ai_chat_interface_visualization.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-[0.2em] text-white font-serif">AURA</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#features" className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em]">Features</a>
              <a href="#how-it-works" className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em]">Process</a>
              <a href="#pricing" className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.15em]">Membership</a>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="ghost" className="text-xs font-medium hidden sm:flex hover:bg-white/5 hover:text-white text-gray-400 tracking-widest uppercase">Login</Button>
              <Button className="bg-white hover:bg-gray-200 text-black border-none rounded-none px-8 h-10 text-xs tracking-widest font-bold uppercase transition-all hover:scale-105">
                Get Access
              </Button>
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
              <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-gray-200 rounded-none text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Start Styling Me
              </Button>
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

      {/* Footer */}
      <footer className="py-20 bg-black text-white border-t border-white/10">
         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
               <div>
                  <span className="text-2xl font-bold tracking-[0.2em] font-serif block mb-6">AURA</span>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                     Redefining personal style through the lens of artificial intelligence.
                  </p>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Platform</h4>
                  <ul className="space-y-4 text-sm text-gray-300">
                     <li><a href="#" className="hover:text-white transition-colors">iOS App</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Android App</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Web Dashboard</a></li>
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
                     <div className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                        <span className="text-xs font-bold">TW</span>
                     </div>
                     <div className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                        <span className="text-xs font-bold">LN</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 font-mono uppercase tracking-wider">
               <p>© 2025 Aura Intelligence Inc.</p>
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
