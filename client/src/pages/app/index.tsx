import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Shirt, 
  Scan, 
  MessageSquare, 
  User, 
  Bell, 
  Search, 
  Plus, 
  Sparkles, 
  Wind, 
  Umbrella, 
  Thermometer,
  Send,
  Mic,
  Camera,
  X,
  Check,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Assets (Using placeholders initially, will replace with generated assets)
import jacketImage from "@assets/generated_images/isolated_holographic_cyberpunk_jacket.png";
import sneakersImage from "@assets/generated_images/futuristic_high_top_sneakers.png";
import avatarImage from "@assets/generated_images/futuristic_female_avatar_portrait.png";
import glassesImage from "@assets/generated_images/smart_digital_sunglasses.png";
import runwayVideo from "@assets/generated_videos/cinematic_futuristic_fashion_runway_show_with_models_walking.mp4";

export default function AppView() {
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="min-h-screen bg-black text-white font-sans flex justify-center overflow-hidden selection:bg-primary selection:text-black">
      {/* Mobile Container */}
      <div className="w-full max-w-md h-[100dvh] bg-black relative flex flex-col shadow-2xl overflow-hidden border-x border-white/10">
        
        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {activeTab === "feed" && <FeedView key="feed" />}
            {activeTab === "wardrobe" && <WardrobeView key="wardrobe" />}
            {activeTab === "scan" && <ScanView key="scan" onClose={() => setActiveTab("feed")} />}
            {activeTab === "chat" && <ChatView key="chat" />}
            {activeTab === "profile" && <ProfileView key="profile" />}
          </AnimatePresence>
        </main>

        {/* Bottom Navigation (Hidden on Scan) */}
        {activeTab !== "scan" && (
          <nav className="h-20 bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 pb-4 pt-2 z-50">
            <div className="flex justify-between items-center h-full">
              <NavButton icon={<Home size={24} />} label="Home" isActive={activeTab === "feed"} onClick={() => setActiveTab("feed")} />
              <NavButton icon={<Shirt size={24} />} label="Wardrobe" isActive={activeTab === "wardrobe"} onClick={() => setActiveTab("wardrobe")} />
              
              {/* Central Scan Button */}
              <div className="relative -top-6">
                <button 
                  onClick={() => setActiveTab("scan")}
                  className="h-16 w-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-95 transition-transform"
                >
                  <Scan size={28} />
                </button>
              </div>

              <NavButton icon={<MessageSquare size={24} />} label="Aura" isActive={activeTab === "chat"} onClick={() => setActiveTab("chat")} />
              <NavButton icon={<User size={24} />} label="Profile" isActive={activeTab === "profile"} onClick={() => setActiveTab("profile")} />
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

function NavButton({ icon, label, isActive, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-600 hover:text-gray-400"}`}
    >
      {icon}
      <span className="text-[10px] font-medium tracking-wider uppercase">{label}</span>
    </button>
  );
}

// --- Views ---

function FeedView() {
  return (
    <ScrollArea className="h-full w-full">
      <div className="p-6 pb-24 space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Good Morning</h2>
            <h1 className="text-2xl font-serif font-bold text-white">ELARA</h1>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10">
              <Search size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </button>
          </div>
        </header>

        {/* Weather / Mood Widget */}
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          <WeatherCard icon={<Thermometer size={16} />} label="72°F" sub="Perfect" />
          <WeatherCard icon={<Wind size={16} />} label="Breezy" sub="Light Layer" />
          <WeatherCard icon={<Umbrella size={16} />} label="0%" sub="No Rain" />
        </div>

        {/* Daily Look */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-lg font-bold text-white font-serif tracking-wide">DAILY PICK</h3>
            <span className="text-xs text-primary font-mono">98% MATCH</span>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
             <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              >
                <source src={runwayVideo} type="video/mp4" />
              </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h4 className="text-2xl font-bold text-white font-serif mb-1">NEO-TOKYO DRIFT</h4>
              <p className="text-sm text-gray-300 mb-4">Urban utility meets cyber-minimalism.</p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-white text-black hover:bg-gray-200 rounded-full px-6 text-xs font-bold tracking-wider">WEAR THIS</Button>
                <Button size="sm" variant="outline" className="bg-black/50 backdrop-blur-md border-white/20 text-white hover:bg-white/10 rounded-full px-6 text-xs font-bold tracking-wider">CUSTOMIZE</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Wardrobe Rotation */}
        <section>
          <h3 className="text-lg font-bold text-white font-serif tracking-wide mb-4">IN ROTATION</h3>
          <div className="grid grid-cols-2 gap-4">
            <ItemCard image={jacketImage} name="Cyber Bomber" brand="Aura Core" />
            <ItemCard image={sneakersImage} name="Grav-Lev Hi" brand="Nike x Aura" />
          </div>
        </section>
      </div>
    </ScrollArea>
  );
}

function WardrobeView() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 pb-0">
        <h1 className="text-2xl font-serif font-bold text-white mb-6">DIGITAL CLOSET</h1>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full bg-transparent border-b border-white/10 rounded-none h-auto p-0 justify-start gap-6 mb-6">
            <TabTrigger value="all">ALL</TabTrigger>
            <TabTrigger value="tops">TOPS</TabTrigger>
            <TabTrigger value="bottoms">BOTTOMS</TabTrigger>
            <TabTrigger value="shoes">SHOES</TabTrigger>
          </TabsList>
        </Tabs>
      </div>
      <ScrollArea className="flex-1 px-6 pb-24">
        <div className="grid grid-cols-2 gap-4">
            <ItemCard image={jacketImage} name="Cyber Bomber" brand="Aura Core" />
            <ItemCard image={sneakersImage} name="Grav-Lev Hi" brand="Nike x Aura" />
            <ItemCard image={glassesImage} name="HUD Shades" brand="Ray-Ban" />
            <ItemCard image={jacketImage} name="Tech Parka" brand="Acronym" />
            <ItemCard image={sneakersImage} name="Void Runners" brand="Adidas" />
            <ItemCard image={glassesImage} name="Neural Link" brand="Sony" />
        </div>
      </ScrollArea>
      <div className="absolute bottom-24 right-6">
        <button className="h-14 w-14 rounded-full bg-primary text-white shadow-[0_0_20px_theme('colors.primary.DEFAULT')] flex items-center justify-center">
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
}

function ScanView({ onClose }: { onClose: () => void }) {
  return (
    <div className="h-full w-full bg-black relative z-50 flex flex-col">
      {/* Camera Viewport Mockup */}
      <div className="flex-1 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        {/* Scanner Overlay */}
        <div className="absolute inset-12 border-2 border-primary/50 rounded-lg">
           <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -translate-x-1 -translate-y-1" />
           <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary translate-x-1 -translate-y-1" />
           <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary -translate-x-1 translate-y-1" />
           <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary translate-x-1 translate-y-1" />
           
           <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_theme('colors.primary.DEFAULT')]"
           />
        </div>

        <div className="absolute top-8 left-0 right-0 text-center">
          <span className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-primary uppercase border border-primary/30">
            Detecting Garment...
          </span>
        </div>

        <button onClick={onClose} className="absolute top-6 right-6 text-white p-2 bg-black/20 rounded-full backdrop-blur-md">
          <X size={24} />
        </button>
      </div>

      {/* Controls */}
      <div className="h-32 bg-black px-6 flex items-center justify-between">
         <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white">
            <ImageIcon size={20} />
         </button>
         <button className="w-20 h-20 rounded-full border-4 border-white p-1 flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full" />
         </button>
         <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white">
            <Zap size={20} />
         </button>
      </div>
    </div>
  );
}

function ChatView() {
  return (
    <div className="h-full flex flex-col">
      <header className="p-6 pb-4 border-b border-white/10 bg-black/80 backdrop-blur-md z-10">
         <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
               <div className="h-full w-full bg-black rounded-full flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
               </div>
            </div>
            <div>
               <h2 className="text-sm font-bold text-white tracking-widest">AURA AI</h2>
               <p className="text-[10px] text-primary font-mono uppercase">Online • Styling Mode</p>
            </div>
         </div>
      </header>

      <ScrollArea className="flex-1 px-6 py-4">
         <div className="space-y-6">
            <ChatMessage 
              sender="ai" 
              text="Hello Elara. Based on the weather forecast (72°F) and your schedule today, I recommend a layered urban look. Would you like to see the combination?" 
              time="9:01 AM"
            />
            <ChatMessage 
              sender="user" 
              text="Yes, but can we incorporate the new Cyber Bomber?" 
              time="9:03 AM"
            />
            <ChatMessage 
              sender="ai" 
              text="Absolutely. The Cyber Bomber pairs perfectly with the monochromatic base layers. Here is the updated look:" 
              time="9:03 AM"
            >
               <div className="mt-3 rounded-lg overflow-hidden border border-white/10 w-48">
                  <img src={jacketImage} alt="Suggestion" className="w-full h-auto bg-gray-900" />
                  <div className="p-2 bg-gray-900">
                     <p className="text-[10px] text-gray-400">Aura Core • Cyber Bomber</p>
                  </div>
               </div>
            </ChatMessage>
         </div>
      </ScrollArea>

      <div className="p-4 pb-6 bg-black border-t border-white/10">
         <div className="relative">
            <Input placeholder="Ask Aura for advice..." className="bg-gray-900 border-none h-12 rounded-full pl-6 pr-12 text-sm focus-visible:ring-1 focus-visible:ring-primary" />
            <button className="absolute right-2 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform">
               <Send size={14} />
            </button>
         </div>
      </div>
    </div>
  );
}

function ProfileView() {
   return (
      <ScrollArea className="h-full w-full">
         <div className="pb-24">
            <div className="relative h-48 bg-gradient-to-b from-gray-800 to-black">
               <img src={runwayVideo} className="w-full h-full object-cover opacity-30" />
               <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
            </div>
            
            <div className="px-6 relative -mt-12 text-center">
               <div className="inline-block p-1 rounded-full bg-black border border-white/10 mb-4">
                  <Avatar className="h-24 w-24 border-2 border-primary">
                     <AvatarImage src={avatarImage} />
                     <AvatarFallback>EL</AvatarFallback>
                  </Avatar>
               </div>
               <h1 className="text-2xl font-bold text-white font-serif">ELARA VANCE</h1>
               <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Trendsetter • Level 4</p>
               
               <div className="grid grid-cols-3 gap-4 mb-8">
                  <StatBox label="Outfits" value="142" />
                  <StatBox label="Items" value="86" />
                  <StatBox label="Followers" value="2.4k" />
               </div>

               <div className="space-y-1">
                  <ProfileMenuItem icon={<Bell size={18} />} label="Notifications" />
                  <ProfileMenuItem icon={<Thermometer size={18} />} label="Style Preferences" />
                  <ProfileMenuItem icon={<Scan size={18} />} label="Body Measurements" />
                  <ProfileMenuItem icon={<Wind size={18} />} label="Account Settings" />
               </div>
            </div>
         </div>
      </ScrollArea>
   )
}

// --- Components ---

function WeatherCard({ icon, label, sub }: any) {
  return (
    <div className="flex-shrink-0 w-24 p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center gap-2">
      <div className="text-gray-400">{icon}</div>
      <div className="text-center">
        <div className="text-sm font-bold text-white">{label}</div>
        <div className="text-[10px] text-gray-500 uppercase tracking-wider">{sub}</div>
      </div>
    </div>
  );
}

function ItemCard({ image, name, brand }: any) {
  return (
    <div className="group relative aspect-square rounded-xl bg-gray-900/50 border border-white/5 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover p-4 group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <p className="text-xs font-bold text-white">{name}</p>
        <p className="text-[10px] text-gray-400">{brand}</p>
      </div>
    </div>
  );
}

function ChatMessage({ sender, text, time, children }: any) {
   const isAi = sender === "ai";
   return (
      <div className={`flex gap-3 ${isAi ? "" : "flex-row-reverse"}`}>
         <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isAi ? "bg-gray-800" : "bg-white"}`}>
            {isAi ? <Sparkles size={14} className="text-primary" /> : <User size={14} className="text-black" />}
         </div>
         <div className={`max-w-[80%] ${isAi ? "" : "items-end flex flex-col"}`}>
            <div className={`p-3 rounded-2xl text-sm leading-relaxed ${isAi ? "bg-white/5 text-gray-200 rounded-tl-none" : "bg-primary text-black rounded-tr-none"}`}>
               {text}
            </div>
            {children}
            <span className="text-[10px] text-gray-600 mt-1 block px-1">{time}</span>
         </div>
      </div>
   )
}

function TabTrigger({ value, children }: any) {
   return (
      <TabsTrigger 
         value={value} 
         className="bg-transparent p-0 h-auto text-xs font-bold text-gray-500 data-[state=active]:text-white data-[state=active]:bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary pb-2 transition-all"
      >
         {children}
      </TabsTrigger>
   )
}

function StatBox({ label, value }: any) {
   return (
      <div className="p-3 rounded-lg bg-white/5 border border-white/5">
         <div className="text-xl font-bold text-white font-serif">{value}</div>
         <div className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</div>
      </div>
   )
}

function ProfileMenuItem({ icon, label }: any) {
   return (
      <button className="w-full p-4 flex items-center justify-between text-gray-300 hover:bg-white/5 rounded-lg transition-colors">
         <div className="flex items-center gap-4">
            {icon}
            <span className="text-sm font-medium">{label}</span>
         </div>
         <Check size={14} className="text-gray-600 opacity-0" /> {/* Placeholder for right arrow */}
      </button>
   )
}

function ImageIcon({ size }: { size: number }) {
   return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
         <circle cx="9" cy="9" r="2" />
         <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
   )
}
