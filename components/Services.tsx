'use client';

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Projektovanje i Inženjering",
    description: "Izrada kompletne tehničke dokumentacije, od idejnog rešenja do glavnog projekta sa fokusom na statiku i energetsku efikasnost.",
    features: ["BIM Modelovanje", "Statički proračuni", "Dizajn enterijera"]
  },
  {
    number: "02",
    title: "Izgradnja Objekata",
    description: "Izvođenje grubih i završnih građevinskih radova po sistemu 'ključ u ruke' uz strogu kontrolu kvaliteta materijala.",
    features: ["Visokogradnja", "Industrijske hale", "Čelične konstrukcije"]
  },
  {
    number: "03",
    title: "Nadzor i Konsultacije",
    description: "Stručni nadzor nad izvođenjem radova i optimizacija troškova izgradnje kroz analizu tržišta i materijala.",
    features: ["Tehnička kontrola", "Cost Management", "Planiranje dinamike"]
  }
];

export default function Services() {
  return (
    <section id="usluge" className="bg-[#0a0a0a] py-24 md:py-32 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block"
          >
            Ekspertiza
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Naše <span className="text-zinc-800">Usluge</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-zinc-900 border border-zinc-900">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-8 md:p-12 hover:bg-zinc-950 transition-colors group relative overflow-hidden"
            >
              {/* Dekorativni broj u pozadini */}
              <span className="absolute -right-4 -top-8 text-9xl font-black text-white/2 group-hover:text-orange-500/5 transition-colors duration-500">
                {service.number}
              </span>

              <span className="text-orange-500 font-mono text-sm block mb-6">{service.number}.</span>
              <h3 className="text-2xl font-bold text-white uppercase mb-6 tracking-tight group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-zinc-500 font-mono">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA podsekcija */}
        <div className="mt-20 p-8 md:p-16 border border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 bg-zinc-950/30">
          <div>
            <h4 className="text-2xl font-bold text-white uppercase mb-2">Potreban vam je specifičan proračun?</h4>
            <p className="text-gray-500 font-light italic">Naš inženjerski tim je spreman za najkompleksnije izazove.</p>
          </div>
          <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
            Zakaži Konsultacije
          </button>
        </div>

      </div>
    </section>
  );
}