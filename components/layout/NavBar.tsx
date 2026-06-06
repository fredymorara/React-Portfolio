'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import NavIcons from './NavIcons';
import NavLinks from './NavLinks';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleYScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleYScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleYScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed inset-x-0 top-6 z-50 flex justify-center pointer-events-none px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className={`pointer-events-auto flex items-center justify-between rounded-full border border-white/5 bg-[#0A0A0A]/70 px-6 py-3 transition-all duration-700 ease-cinema backdrop-blur-2xl ${
            isScrolled ? 'w-full md:w-max md:px-8 shadow-[0_4px_30px_rgba(221,36,118,0.15)] border-[#DD2476]/20' : 'w-full md:w-max'
          } gap-8 lg:gap-16`}
        >
          <Logo />

          <div className="hidden md:block">
            <NavLinks />
          </div>

          <div className="hidden md:block">
            <NavIcons />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#050505]/95 backdrop-blur-3xl"
          >
            <div className="flex flex-col items-center gap-12">
              <NavLinks />
              <div className="h-px w-12 bg-white/10" />
              <NavIcons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
