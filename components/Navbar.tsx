'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'Početna', href: '/' },
  { name: 'Projekti', href: '/projekti' },
  { name: 'Usluge', href: '/usluge' },
  { name: 'O Nama', href: '/o-nama' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // FIX: Onemogućava skrolovanje pozadine kada je meni otvoren
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-150 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5' : 'py-6 md:py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer relative z-160">
            <div className="w-8 h-8 bg-orange-600 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-white font-black -rotate-45 group-hover:rotate-0 transition-transform">A</span>
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase">
              Apex <span className="text-orange-500">.</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors"
              >
                <span className="text-orange-500 mr-2 font-mono">0{index + 1}.</span>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden relative z-160 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 h-screen w-full bg-[#0a0a0a] z-140 flex flex-col items-center justify-center md:hidden px-6 overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 w-full relative z-10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="w-full text-center"
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter hover:text-orange-500 transition-colors flex flex-col items-center justify-center"
                    >
                      <span className="text-orange-500 font-mono text-xs mb-1">0{index + 1}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Ukrasni detalj u dnu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 w-full text-center px-10 pointer-events-none select-none uppercase tracking-widest flex flex-col items-center gap-2"
              >
                <div className="w-16 h-px bg-zinc-800 mb-2"></div>
                <span className="block text-4xl font-black text-white leading-none tracking-tighter">
                  Apex <span className="text-orange-500">.</span>
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-light text-zinc-500 font-mono tracking-wider">Inženjering</span>
                  <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                  <span className="text-[9px] font-light text-zinc-500 font-mono tracking-wider">Beograd, SRB</span>
                </div>
                <div className="w-16 h-px bg-zinc-800 mt-2"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}