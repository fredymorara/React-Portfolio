'use client';

import GradientWaves from '../ui/GradientWaves';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section aria-label="Hero – Fredrick Momanyi Morara, Software & AI Engineer" className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#DC3D43"
          waveColor="#DC3D43"
          crestColor="#FF512F"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.0}
          height={5.5}
          fogDepth={15}
          detail="low"
          brightness={1}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={true}
          grainIntensity={0.05}
        />
      </div>
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 flex flex-col items-start sm:items-center mt-20 will-change-transform w-full max-w-7xl mx-auto"
      >
        <h1 className="max-w-5xl text-left sm:text-center text-5xl leading-[1.1] tracking-tight sm:text-6xl md:text-[5rem] lg:text-[7rem] font-medium text-white/95">
          Full-stack <br className="block sm:hidden" />
          web apps <br />
          <span className="text-gradient-sunset italic pr-4 -mr-2">wired</span> <br className="block sm:hidden" />
          to practical AI.
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a href="mailto:momanyifredm@gmail.com" className="vanguard-btn">
            <span>Get in touch</span>
            <div className="vanguard-btn-icon-wrapper text-white">
              <ArrowUpRight size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </a>
          
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full border border-white/10 bg-white/5 text-white/80 font-medium tracking-wide transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-white/20">
            <span>View Resume</span>
            <ArrowUpRight size={18} className="opacity-70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
          </a>
        </div>
          
        <div className="flex flex-wrap justify-start sm:justify-center gap-3 mt-10 w-full sm:w-auto">
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-Silkscreen text-xs uppercase text-white/60">
            React &amp; Next.js
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-Silkscreen text-xs uppercase text-white/60">
            Node.js &amp; Python
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 font-Silkscreen text-xs uppercase text-white/60">
            AI &amp; RAG Pipelines
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
