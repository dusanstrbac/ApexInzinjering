'use client';

import { motion } from "framer-motion";
import { Hammer, Ruler, HardHat, FileText, Settings, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "01",
    icon: <Ruler className="w-6 h-6" />,
    title: "Generalno Projektovanje",
    description: "Izrada kompletne tehničke dokumentacije, od idejnog rešenja do glavnog projekta. Fokus na optimizaciji prostora i statičkoj stabilnosti.",
    details: ["BIM Modelovanje", "Konstruktivni sistemi", "Energetski pasoši"]
  },
  {
    id: "02",
    icon: <HardHat className="w-6 h-6" />,
    title: "Izvođenje Radova",
    description: "Kompletna izgradnja po sistemu 'ključ u ruke'. Upravljamo svim fazama gradnje uz najviše bezbednosne i ekološke standarde.",
    details: ["Visokogradnja", "Betonske konstrukcije", "Zanatski radovi"]
  },
  {
    id: "03",
    icon: <Settings className="w-6 h-6" />,
    title: "Čelične Konstrukcije",
    description: "Projektovanje i montaža složenih čeličnih elemenata za industrijske hale i sportske objekte uz milimetarsku preciznost.",
    details: ["Hale i skladišta", "Krovne konstrukcije", "Antikorozivna zaštita"]
  },
  {
    id: "04",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Nadzor i Konsalting",
    description: "Stručni nadzor nad izvođenjem radova radi osiguranja kvaliteta, poštovanja rokova i kontrole investicionih troškova.",
    details: ["Tehnička kontrola", "Optimizacija troškova", "Project Management"]
  },
  {
    id: "05",
    icon: <FileText className="w-6 h-6" />,
    title: "Legalizacija i Dozvole",
    description: "Kompletna administrativna podrška u procesu pribavljanja građevinskih dozvola i upotrebne dokumentacije.",
    details: ["Građevinske dozvole", "Tehnički prijem", "Uknjižba objekata"]
  },
  {
    id: "06",
    icon: <Hammer className="w-6 h-6" />,
    title: "Adaptacija i Sanacija",
    description: "Modernizacija postojećih objekata uz očuvanje integriteta strukture i unapređenje funkcionalnosti.",
    details: ["Ojačanje temelja", "Restauracija fasada", "Enterijerske adaptacije"]
  }
];

export default function UslugePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-6"
          >
            Opseg Delovanja
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            Sveobuhvatna <br /> <span className="text-zinc-800">Ekspertiza</span>
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-10 md:p-14 group hover:bg-zinc-950 transition-all duration-500 relative overflow-hidden"
            >
              {/* Ikona i Broj */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center group-hover:border-orange-600 transition-colors duration-500">
                  <div className="text-zinc-500 group-hover:text-orange-500 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <span className="text-zinc-800 font-black text-4xl group-hover:text-zinc-700 transition-colors">
                  {service.id}
                </span>
              </div>

              {/* Sadržaj */}
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Lista detalja */}
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">
                    <div className="w-1 h-1 bg-orange-600"></div>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Dekorativni Border koji raste */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section / CTA */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Svaki proračun je <span className="text-orange-500">odgovornost</span>.
          </h2>
          <p className="text-zinc-500 text-lg font-light italic">
            "Inženjering je umetnost rešavanja problema na način koji traje generacijama."
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-orange-600 hover:text-white transition-all"
          >
            Preuzmi Brošuru
          </motion.button>
        </div>
      </section>

      <Footer />
    </main>
  );
}