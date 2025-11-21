import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scan, Shirt, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/futuristic_fashion_model_with_holographic_ui_elements.png";
import wardrobeImage from "@assets/generated_images/holographic_digital_wardrobe_interface.png";
import aiImage from "@assets/generated_images/ai_analyzing_fashion_style_data.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Futuristic Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-background/10 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_theme('colors.primary.DEFAULT')]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-widest text-white font-serif">AURA</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Process</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">Membership</a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-sm font-medium hidden sm:flex hover:bg-white/5 hover:text-primary">LOGIN</Button>
              <Button className="bg-primary hover:bg-primary/80 text-white shadow-[0_0_20px_theme('colors.primary.DEFAULT')] border-none rounded-full px-6">
                GET STYLED
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-medium tracking-widest text-secondary uppercase">AI Stylist V2.0 Live</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                STYLE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">INTELLIGENCE</span> <br />
                REDEFINED
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Upload your photo. Let Aura scan your biometrics, analyze trends, and curate a hyper-personalized wardrobe that evolves with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-gray-200 rounded-none font-bold tracking-wider">
                  START SCAN <Scan className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 rounded-none tracking-wider backdrop-blur-sm">
                  VIEW DEMO
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-3xl font-bold text-white font-serif">98%</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Match Accuracy</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white font-serif">50k+</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Users Styled</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_theme('colors.primary.DEFAULT')] border border-white/10">
                 <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-secondary border border-secondary/30">
                       SCANNING...
                    </div>
                 </div>
                 <img 
                  src={heroImage} 
                  alt="AI Stylist Hero" 
                  className="max-h-[600px] w-auto object-cover"
                />
                
                {/* Floating UI Cards */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl p-4 rounded-lg border border-white/10 w-64"
                >
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400 uppercase">Outfit Match</span>
                      <span className="text-xs text-primary font-bold">99.8%</span>
                   </div>
                   <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary w-[99.8%]" />
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
           <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full" />
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">SYSTEM <span className="text-primary">CAPABILITIES</span></h2>
            <div className="w-24 h-1 bg-secondary" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             <GlassCard 
                title="Biometric Scanning"
                description="Our AI analyzes your skin tone, body shape, and facial features to suggest colors and cuts that scientifically enhance your appearance."
                icon={<Scan className="h-8 w-8 text-secondary" />}
                image={aiImage}
             />
             <GlassCard 
                title="Virtual Wardrobe"
                description="Digitize your existing closet. Aura mixes and matches what you own with new pieces to create unlimited outfit combinations."
                icon={<Shirt className="h-8 w-8 text-secondary" />}
                image={wardrobeImage}
             />
             <GlassCard 
                title="Trend Forecasting"
                description="Stay ahead of the curve. Aura predicts micro-trends relevant to your personal style profile before they hit the mainstream."
                icon={<Zap className="h-8 w-8 text-secondary" />}
                delay={0.2}
             />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
               FUTURE PROOF <br/> YOUR LOOK
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
               Join the beta program and be among the first to experience the next generation of personal styling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <div className="relative w-full sm:w-96">
                  <input 
                     type="email" 
                     placeholder="ENTER EMAIL ACCESS CODE" 
                     className="w-full h-14 bg-white/5 border border-white/10 rounded-none px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                  />
               </div>
               <Button size="lg" className="h-14 px-10 bg-white text-black hover:bg-secondary hover:text-black transition-colors rounded-none font-bold tracking-widest w-full sm:w-auto">
                  REQUEST ACCESS
               </Button>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <Sparkles className="h-5 w-5 text-primary" />
               <span className="text-xl font-bold tracking-widest text-white font-serif">AURA</span>
            </div>
            <div className="flex gap-8 text-xs font-mono text-gray-500">
               <a href="#" className="hover:text-white transition-colors">TERMS_OF_SERVICE</a>
               <a href="#" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</a>
               <a href="#" className="hover:text-white transition-colors">SYSTEM_STATUS</a>
            </div>
            <div className="text-xs text-gray-600 font-mono">
               © 2025 AURA SYSTEMS. ALL RIGHTS RESERVED.
            </div>
         </div>
      </footer>
    </div>
  );
}

function GlassCard({ title, description, icon, image, delay = 0 }: any) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay, duration: 0.6 }}
         className="group relative overflow-hidden bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-500"
      >
         {image && (
            <div className="h-48 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
               <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
         )}
         <div className="p-8 relative z-20">
            <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg border border-white/10 group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors">
               {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">
               {description}
            </p>
         </div>
      </motion.div>
   )
}
