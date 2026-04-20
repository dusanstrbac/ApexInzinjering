'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: "01",
    title: "Skyline Residential",
    category: "Visokogradnja",
    year: "2025",
    location: "Novi Beograd",
    image: "/project1.jpg",
    size: "12.000 m²"
  },
  {
    id: "02",
    title: "Steel Hub",
    category: "Industrijski objekti",
    year: "2024",
    location: "Kragujevac",
    image: "/project2.jpg",
    size: "5.500 m²"
  },
  {
    id: "03",
    title: "Apex Business Center",
    category: "Komercijalni prostori",
    year: "2026",
    location: "Beograd na Vodi",
    image: "/project3.jpg",
    size: "8.200 m²"
  },
  {
    id: "04",
    title: "Infrastruktura M2",
    category: "Mostogradnja",
    year: "2023",
    location: "Dunav",
    image: "/project4.jpg",
    size: "1.2 km"
  }
];

export default function ProjektiPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-orange-600/30">
      <Navbar />

      {/* Header Sekcija */}
      <section className="pt-40 pb-20 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.5em] block mb-6"
          >
            Arhiva Projekata
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            Portfolio <br /> <span className="text-zinc-800">Izuzetnosti</span>
          </motion.h1>
        </div>
      </section>

      {/* Filteri */}
      <section className="py-8 px-6 border-b border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8">
          {['Svi Projekti', 'Visokogradnja', 'Industrija', 'Infrastruktura'].map((filter, i) => (
            <button key={i} className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-orange-500 transition-colors font-mono">
              [{filter}]
            </button>
          ))}
        </div>
      </section>

      {/* Project List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
            >
              {/* Info deo */}
              <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-orange-500 font-mono text-sm tracking-[0.3em] font-bold">
                      {project.id}
                    </span>
                    <div className="h-px w-8 bg-zinc-800"></div>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight group-hover:text-orange-500 transition-colors duration-500">
                    {project.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-y-10 gap-x-4 border-t border-zinc-900 pt-10">
                  <DetailItem label="Lokacija" value={project.location} />
                  <DetailItem label="Godina" value={project.year} />
                  <DetailItem label="Kategorija" value={project.category} />
                  <DetailItem label="Površina" value={project.size} />
                </div>

                {/* Interaktivno dugme */}
                <motion.button 
                  whileHover="hover"
                  className="relative flex items-center gap-6 group/btn w-fit"
                >
                  <div className="relative">
                    <div className="w-16 h-16 border border-zinc-800 rounded-full flex items-center justify-center group-hover/btn:border-orange-600 group-hover/btn:bg-orange-600 transition-all duration-500">
                      <ArrowUpRight className="w-6 h-6 text-white group-hover/btn:rotate-45 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 group-hover/btn:text-orange-500 transition-colors">
                      Detaljan Uvid
                    </span>
                    <span className="text-sm uppercase tracking-widest font-bold text-white">
                      Pogledaj Projekat
                    </span>
                  </div>

                  <motion.div 
                    variants={{
                      hover: { width: "100%", originX: 0 }
                    }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute -bottom-2 left-0 h-px bg-orange-600"
                  />
                </motion.button>
              </div>

              {/* Image deo */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative overflow-hidden bg-zinc-900 border border-zinc-800 aspect-16/10 lg:aspect-video">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute top-6 right-6 text-white/10 font-black text-6xl select-none uppercase tracking-tighter">
                    {project.id}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DetailItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 block mb-2 font-mono">
        {label}
      </span>
      <span className="text-sm uppercase font-bold tracking-wider text-zinc-300">
        {value}
      </span>
    </div>
  );
}