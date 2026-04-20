'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const MotionLink = motion(Link);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-6 pt-32 pb-20 md:pt-40 lg:pt-0 md:pb-0">
      
      {/* --- MOBILE/TABLET BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0 lg:hidden group">
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/90 z-10"></div>
        <img 
          src="/construction-hero.jpg" 
          alt="Apex Engineering Project Background" 
          className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 ease-in-out"
        />
        <div className="absolute top-28 right-10 w-8 h-8 border-t-2 border-r-2 border-orange-500/50 pointer-events-none z-20"></div>
        <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-orange-500/50 pointer-events-none z-20"></div>
      </div>

      {/* --- DESKTOP BLUEPRINT GRID --- */}
      <div 
        className="absolute inset-0 opacity-5 md:opacity-10 pointer-events-none hidden lg:block z-0" 
        style={{ 
          backgroundImage: `
            linear-gradient(#333 1px, transparent 1px), 
            linear-gradient(90deg, #333 1px, transparent 1px)
          `, 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Na desktopu dodajemo lg:mt-24 da bismo sve spustili ispod navigacije */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20 lg:mt-24">
        
        {/* Tekstualni sadržaj */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-6 md:w-8 h-px bg-orange-500"></span>
              <span className="text-orange-500 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] md:tracking-[0.3em]">
                Inženjerska Preciznost. 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 tracking-tighter">
              APEX <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-orange-400 to-yellow-500">
                INŽENJERING
              </span>
            </h1>

            <p className="max-w-lg text-gray-300 md:text-gray-400 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-10 lg:border-l lg:border-zinc-800 lg:pl-6">
              Projektujemo i gradimo objekte koji definišu moderne standarde. Spoj tehnologije i kvaliteta u svakom kvadratu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <MotionLink 
                href="/projekti"
                whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }} // Blago svetlija narandžasta na hover
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 bg-orange-600 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors flex items-center justify-center"
              >
                Pogledaj Projekte
              </MotionLink>
              <MotionLink
                href="/usluge"
                whileHover={{ scale: 1.05, opacity: .8}}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all hover:bg-zinc-800/50"
              >
                Naše Usluge
              </MotionLink>
            </div>
          </motion.div>
        </div>

        {/* --- DESKTOP VISUAL ELEMENT --- */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-4/5 bg-zinc-900 border border-zinc-800 p-3 group"
          >
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60"></div>
              
              <img 
                src="/construction-hero.jpg" 
                alt="Apex Engineering Project" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />

              <div className="absolute bottom-6 left-6 z-20">
                <span className="block text-4xl font-black text-white tracking-tighter">10k+ m²</span>
                <span className="text-[10px] text-orange-500 uppercase font-mono tracking-widest">
                  Izgrađenog Prostora
                </span>
              </div>
            </div>

            {/* Dekorativni uglovi */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-orange-500 pointer-events-none z-30"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-orange-500 pointer-events-none z-30"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}