'use client';

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#0a0a0a] py-24 md:py-40 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEVA STRANA - Informacije */}
        <div className="lg:col-span-5">
          <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block">
            Kontakt
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-12 leading-none">
            Započnimo <br /> <span className="text-zinc-800">Projekat</span>
          </h2>

          <div className="space-y-10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2 font-mono">Lokacija</span>
              <p className="text-xl text-white font-light">Bulevar oslobođenja 12, <br />11000 Beograd, Srbija</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2 font-mono">Email</span>
              <p className="text-xl text-white font-light hover:text-orange-500 transition-colors cursor-pointer">office@apex-ing.rs</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-2 font-mono">Telefon</span>
              <p className="text-xl text-white font-light">+381 11 123 4567</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-16">
            {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-orange-500 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* DESNA STRANA - Brza Forma (Minimalistička) */}
        <div className="lg:col-span-7 bg-zinc-950/50 border border-zinc-900 p-8 md:p-12">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Ime i Prezime</label>
                <input type="text" placeholder="Petar Petrović" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Email Adresa</label>
                <input type="email" placeholder="petar@gmail.com" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-orange-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Tip Projekta</label>
              <select className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-orange-500 transition-colors appearance-none">
                <option className="bg-[#0a0a0a]">Stambeni objekat</option>
                <option className="bg-[#0a0a0a]">Industrijski objekat</option>
                <option className="bg-[#0a0a0a]">Konsultacije</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Poruka</label>
              <textarea rows={4} placeholder="Unesite ideju da započnemo konverzaciju ..." className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
            </div>
            
            <button className="w-full py-5 bg-orange-600 text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-orange-700 transition-all flex items-center justify-center gap-4 group cursor-pointer">
              Pošalji Upit
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}