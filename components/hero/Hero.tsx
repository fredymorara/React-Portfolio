'use client';

import { cn } from '@/lib/utils';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section aria-label="Hero – Fredrick Momanyi Morara, Software & AI Engineer" className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 overflow-hidden">
      {/* Restored Background Image */}
      <div 
        className="absolute inset-0 -z-30 opacity-40 mix-blend-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/bghero.png')` }}
      />
      <div className="absolute inset-0 -z-30 bg-[#050505]/70" />

      <div className="pointer-events-none absolute top-0 -z-20 size-full overflow-hidden opacity-50 [mask-image:radial-gradient(1000px_circle_at_center,#000,transparent)]">
        <AnimatedGridPattern
          numSquares={120}
          maxOpacity={0.4}
          duration={5}
          repeatDelay={1}
          colors={[
            'rgba(255, 255, 255, 0.4)',
            'rgba(255, 255, 255, 0.6)',
          ]}
          className="inset-x-[4.5px] inset-y-[-30%] h-[150%]"
        />
      </div>

      <motion.div 
        initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 flex flex-col items-center mt-20"
      >
        <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
          Fredrick M. Morara · Software Engineer
        </div>
        
        <h1 className="max-w-5xl text-center text-[3.5rem] leading-[1.1] tracking-tight md:text-[5rem] lg:text-[7rem] font-medium text-white/95">
          Building <span className="text-gradient-sunset italic pr-2">scalable</span> systems &amp; elegant web applications.
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link href="https://www.linkedin.com/in/freddymorara/" target="_blank">
            <button className="vanguard-btn">
              <span>Start a collaboration</span>
              <div className="vanguard-btn-icon-wrapper text-white">
                <ArrowUpRight size={18} />
              </div>
            </button>
          </Link>
          
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white/80 font-medium tracking-wide transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-white/20">
            <span>View Resume</span>
            <ArrowUpRight size={18} className="opacity-70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
          </a>
        </div>
          
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-Silkscreen text-xs uppercase text-white/60">
            Frontend
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-Silkscreen text-xs uppercase text-white/60">
            Backend
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-Silkscreen text-xs uppercase text-white/60">
            AI Integration
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
