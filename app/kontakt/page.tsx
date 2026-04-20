'use client';

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-orange-600/30">
      <Navbar />

      {/* Header Sekcija */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] block mb-6"
          >
            Povežimo se
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] md:leading-none"
          >
            Kontaktirajte <br /> <span className="text-zinc-800">Inženjere</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Informacije (Leva strana) */}
          <div className="lg:col-span-5 space-y-12 md:space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-12">
              <ContactInfoItem 
                icon={<MapPin className="w-5 h-5 text-orange-600" />}
                label="Sedište Kompanije"
                value="Bulevar oslobođenja 12, 11000 Beograd, Srbija"
              />
              <ContactInfoItem 
                icon={<Mail className="w-5 h-5 text-orange-600" />}
                label="Generalni Upiti"
                value="office@apex-ing.rs"
              />
              <ContactInfoItem 
                icon={<Phone className="w-5 h-5 text-orange-600" />}
                label="Direktna Linija"
                value="+381 11 123 4567"
              />
              <ContactInfoItem 
                icon={<Clock className="w-5 h-5 text-orange-600" />}
                label="Radno Vreme"
                value="Pon — Pet: 08:00 - 17:00"
              />
            </div>

            {/* Mapa Placeholder */}
            <div className="aspect-video lg:aspect-square xl:aspect-video bg-zinc-900 border border-zinc-800 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://api.placeholder.com/600/400')] opacity-20 grayscale transition-opacity group-hover:opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-orange-600/50 p-4 text-[10px] font-mono uppercase tracking-widest text-white group-hover:border-orange-600 transition-colors">
                        Pogledaj na mapi
                    </div>
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10"></div>
            </div>
          </div>

          {/* Forma (Desna strana) */}
          <div className="lg:col-span-7">
            <form className="space-y-8 md:space-y-12 bg-zinc-950/30 p-6 sm:p-8 md:p-12 border border-zinc-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-[100px] pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Ime i Prezime *</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-orange-500 transition-colors text-sm md:text-base" placeholder="Dusan Strbac" />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Email Adresa *</label>
                  <input type="email" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-orange-500 transition-colors text-sm md:text-base" placeholder="dusan@email.com" />
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Sektor Interesovanja</label>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {['Projektovanje', 'Izvođenje', 'Čelične konstrukcije', 'Nadzor'].map((tag) => (
                    <label key={tag} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="hidden peer" />
                      <div className="px-3 md:px-5 py-2 md:py-3 border border-zinc-800 text-[9px] md:text-[10px] uppercase tracking-widest peer-checked:border-orange-600 peer-checked:bg-orange-600/10 peer-checked:text-white text-zinc-500 transition-all">
                        {tag}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Detalji Projekta</label>
                <textarea rows={4} className="w-full bg-transparent border border-zinc-800 p-4 text-white outline-none focus:border-orange-500 transition-colors resize-none text-sm md:text-base" placeholder="Opišite vaš zahtev ili projekat..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 md:py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-orange-600 hover:text-white transition-all shadow-xl"
              >
                Pošalji tehnički upit
                <Send className="w-4 h-4" />
              </motion.button>
              
              <p className="text-[9px] text-zinc-600 font-mono uppercase text-center leading-relaxed">
                Slanjem ovog formulara prihvatate našu politiku o zaštiti podataka. <br className="hidden md:block" /> Svi podaci su enkriptovani i zaštićeni.
              </p>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactInfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-5 md:gap-6 group">
      <div className="w-10 h-10 md:w-12 md:h-12 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-orange-600 transition-colors bg-zinc-900/50">
        {icon}
      </div>
      <div className="space-y-1 md:space-y-1.5">
        <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-600 font-mono block">{label}</span>
        <span className="text-base md:text-lg text-zinc-200 font-light leading-snug">{value}</span>
      </div>
    </div>
  );
}