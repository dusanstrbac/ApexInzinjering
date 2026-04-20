'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Skyline Residental",
    category: "Novogradnja / Stambeni Kompleks",
    location: "Beograd, SRB",
    image: "/project1.jpg", 
    span: "lg:col-span-7"
  },
  {
    id: "02",
    title: "Steel Hub",
    category: "Industrija / Čelične Konstrukcije",
    location: "Novi Sad, SRB",
    image: "/project2.jpg",
    span: "lg:col-span-5"
  },
  {
    id: "03",
    title: "Apex Business Center",
    category: "Komercijalni Objekat",
    location: "Beč, AUT",
    image: "/project3.jpg",
    span: "lg:col-span-5"
  },
  {
    id: "04",
    title: "Infrastruktura M2",
    category: "Inženjering / Mostogradnja",
    location: "Kragujevac, SRB",
    image: "/project4.jpg",
    span: "lg:col-span-7"
  }
];

export default function PortfolioGrid() {
  const MotionLink = motion(Link);
  return (
    <section id="projekti" className="bg-[#0a0a0a] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Sekcije */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
          <div className="relative">
            <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">
              Odabrani Radovi
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
              Inženjersko <br /> <span className="text-zinc-800">Nasleđe</span>
            </h2>
            {/* Dekorativni broj sekcije u pozadini */}
            <span className="absolute -top-10 -left-10 text-[120px] font-black text-white/5 pointer-events-none select-none">
              01
            </span>
          </div>
          <p className="max-w-md text-gray-500 font-light leading-relaxed border-l border-orange-500/30 pl-6 text-sm md:text-base">
            Od vizije do realizacije. Naš portfolio obuhvata najkompleksnije građevinske izazove rešene kroz precizno planiranje i inovativnu upotrebu materijala.
          </p>
        </div>

        {/* Asimetrični Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${project.span} group relative aspect-4/5 md:aspect-auto md:h-137.5 bg-zinc-900 overflow-hidden border border-zinc-800/50`}
            >
              {/* Image & Overlays */}
              <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-transparent transition-all duration-700 z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
              />

              {/* Tehnički detalji - Pojavljuju se na hover */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right hidden md:block">
                <p className="text-[10px] font-mono text-orange-500 uppercase tracking-widest mb-1">Status: Završeno</p>
                <p className="text-[10px] font-mono text-white/40 uppercase">Lokacija: {project.location}</p>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 font-mono text-sm">{project.id}</span>
                    <div className="h-px w-8 bg-orange-500/50"></div>
                    <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">{project.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter">
                    {project.title}
                  </h3>
                </div>
                
                {/* Expand Button Icon */}
                <div className="absolute bottom-10 right-10 w-12 h-12 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 14L14 1M14 1H5M14 1V10" stroke="#f97316" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-orange-600 w-0 group-hover:w-full transition-all duration-700 z-30"></div>
            </motion.div>
          ))}
        </div>

        {/* Footer Sekcije / CTA */}
        <div className="mt-20 flex flex-col items-center">
          {/* Linija koja vodi oko ka dole */}
          <div className="h-20 w-px bg-linear-to-b from-orange-500/50 to-transparent mb-8"></div>
          
          <MotionLink
            href="/projekti"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group text-white font-bold uppercase tracking-[0.5em] text-[12px] flex items-center gap-6 no-underline"
          >
            <span className="group-hover:text-orange-500 transition-colors">Svi Projekti</span>
            
            <div className="relative w-16 h-16 border border-zinc-800 rounded-full flex items-center justify-center group-hover:border-orange-500 transition-all duration-300">
              {/* Strelica - veća i centrirana */}
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="#f97316" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Opcioni efekat širenja (pulse) na hover */}
              <div className="absolute inset-0 rounded-full bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors"></div>
            </div>
          </MotionLink>
        </div>

      </div>
    </section>
  );
}