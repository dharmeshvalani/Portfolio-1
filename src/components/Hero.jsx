import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* 
        CRITICAL ASSET: Change "/hero-avatar.mp4" to your actual generated AI video.
        Change "/hero-poster.jpg" to a fallback thumbnail image.
      */}
      <div className="absolute w-[90%] md:w-[55%] aspect-video max-w-4xl z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <video 
          src="/hero-avatar.mp4" 
          poster="/hero-poster.jpg"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover grayscale-[20%] contrast-[110%]"
        />
      </div>

      {/* Text Overlay Layer */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-16 pt-32 pointer-events-none">
        
        {/* Top Meta Details */}
        <div className="flex justify-between items-start w-full">
          <span className="text-xs tracking-[0.3em] uppercase text-muted">Portfolio / 2026</span>
        </div>

        {/* Massive Main Name Heading */}
        <div className="w-full text-center my-auto mix-blend-difference">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-none"
          >
            MAKVANA MAHEK
          </motion.h1>
        </div>

        {/* Bottom Subtitles & Scroll Indicator */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <div className="text-xs tracking-[0.2em] uppercase font-semibold flex gap-4 text-muted">
            <span>Developer</span>
            <span>•</span>
            <span>Designer</span>
            <span>•</span>
            <span>Automation</span>
          </div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-muted animate-bounce">
            Scroll ↓
          </div>
        </div>

      </div>
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
