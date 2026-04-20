'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sitemapLinks = [
    { name: 'Projekti', href: '/projekti' },
    { name: 'Usluge', href: '/usluge' },
    { name: 'O Nama', href: '/o-nama' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Part */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16 md:mb-20">
          
          {/* Brand & Info */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="hidden md:block w-8 h-0.5 bg-orange-600"></div>
              <span className="text-xl font-black text-white uppercase tracking-tighter">
                Apex <span className="text-orange-500">Inženjering</span>
              </span>
              <div className="md:hidden w-8 h-0.5 bg-orange-600"></div>
            </div>
            <p className="max-w-sm text-zinc-500 text-sm font-light leading-relaxed mb-8">
              Specijalizovani za projektovanje i izgradnju infrastrukturnih objekata. 
              Postavljamo standarde u preciznosti i održivoj gradnji.
            </p>
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 border border-zinc-800 px-4 py-2 rounded-full md:border-none md:p-0">
              Radno vreme: Pon — Pet / 08:00 — 17:00
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-mono block">Mapa sajta</span>
              <ul className="space-y-4">
                {sitemapLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-mono block">Pratite nas</span>
              <ul className="space-y-4">
                {['LinkedIn', 'Instagram', 'YouTube'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to Top - Centrirano na mobilnom */}
            <div className="flex flex-col justify-center items-center md:items-end">
              <button 
                onClick={scrollToTop}
                className="group flex flex-col md:flex-row items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
              >
                <span className="md:order-1">Vrati se na vrh</span>
                <span className="w-12 h-12 md:w-8 md:h-8 border border-zinc-800 flex items-center justify-center group-hover:border-orange-600 transition-colors md:order-2">
                  ↑
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="pt-10 border-t border-zinc-900/50 flex flex-col items-center gap-8 md:flex-row md:justify-between text-zinc-700 font-mono text-[10px] uppercase tracking-widest">
          <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left">
            <span>© {currentYear} Sva prava zadržana</span>
            <span className="hidden md:block text-zinc-800">|</span>
            <span className="text-zinc-500">Apex Inženjering d.o.o. Beograd</span>
          </div>
          
          <div className="flex flex-col items-center md:flex-row gap-4">
            <Link href="/privatnost" className="hover:text-white transition-colors">Politika privatnosti</Link>
            <span className="hidden md:block text-zinc-800">/</span>
            <div className="text-zinc-600">
              Developed by <span className="text-zinc-400 font-bold">ClickApp</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}