'use client';

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeline = [
  { year: "2011", title: "Osnivanje", description: "Apex Inženjering započinje rad kao mali projektni biro u Beogradu." },
  { year: "2015", title: "Širenje portfolija", description: "Prvi veliki ugovori u sektoru industrijske izgradnje i čeličnih konstrukcija." },
  { year: "2020", title: "BIM Integracija", description: "Potpuna digitalizacija procesa i uvođenje BIM tehnologije u sve faze rada." },
  { year: "2026", title: "Lider na tržištu", description: "Preko 200 završenih objekata širom regiona sa fokusom na održivost." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-orange-600/30">
      <Navbar />

      {/* Hero Section - Fokus na autoritet */}
      <section className="pt-40 pb-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-6"
          >
            Ko smo mi
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            Preciznost <br /> <span className="text-zinc-800">U DNK-u</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content - Filozofija i Slika */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Leva strana - Slika sa industrijskim vibe-om */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-3/4 bg-zinc-900 border border-zinc-800 overflow-hidden relative group">
              <img 
                src="/construction-hero.jpg" 
                alt="Inženjerski proces" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply"></div>
            </div>
            {/* Lebdeći stat */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -right-4 md:-right-10 bg-[#0a0a0a] border border-zinc-800 p-8 hidden md:block"
            >
              <span className="block text-4xl font-black text-orange-600 mb-1">15+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Godina Iskustva</span>
            </motion.div>
          </div>

          {/* Desna strana - Tekst */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold uppercase tracking-tight">Više od same gradnje.</h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Apex Inženjering je osnovan sa vizijom da transformiše način na koji se projektuju i grade složeni sistemi. Verujemo da je inženjering tačka gde se susreću matematika i umetnost, a naš cilj je da svaki objekat koji potpišemo bude svedočanstvo te sinergije.
              </p>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Specijalizovani smo za rešavanje najtežih inženjerskih izazova, od visokogradnje do kompleksnih čeličnih konstrukcija koje zahtevaju apsolutnu preciznost u svakom milimetru.
              </p>
            </div>

            {/* Vrednosti Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-zinc-900">
              <div>
                <span className="text-orange-500 font-mono text-xs mb-4 block">01. Integritet</span>
                <p className="text-zinc-500 text-sm">Beskompromisan kvalitet materijala i poštovanje struke iznad svega.</p>
              </div>
              <div>
                <span className="text-orange-500 font-mono text-xs mb-4 block">02. Inovacija</span>
                <p className="text-zinc-500 text-sm">Primena najsavremenijih softvera i ekološki prihvatljivih rešenja.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Sekcija - Vertikalni prikaz */}
      <section className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-20 text-center md:text-left">
            Put do <span className="text-zinc-800">vrha</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Horizontalna linija za desktop */}
            <div className="absolute top-4 left-0 w-full h-px bg-zinc-900 hidden md:block"></div>
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pt-12 md:pt-16 group"
              >
                {/* Tačka na liniji */}
                <div className="absolute top-3 left-0 w-3 h-3 bg-zinc-800 border-2 border-orange-600 rounded-full group-hover:scale-150 transition-transform hidden md:block"></div>
                
                <span className="text-3xl font-black text-white block mb-4 font-mono group-hover:text-orange-600 transition-colors">
                  {item.year}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Naš tim je naša <span className="text-orange-500">snaga</span></h2>
          <p className="text-zinc-500 font-light text-lg">
            Okupili smo najbolje inženjere, statičare i arhitekte sa jednim ciljem: da gradimo budućnost koja inspiriše.
          </p>
          <button className="px-12 py-5 border border-zinc-800 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
            Upoznaj naš tim
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}