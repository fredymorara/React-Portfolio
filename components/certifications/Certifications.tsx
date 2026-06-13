'use client';
import { certifications } from '@/constants/certifications';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';


const Certifications = () => {
  return (
    <section className="relative py-32 md:py-48" id="certifications" aria-label="Professional Certifications">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 space-y-6">
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
            Continuous Learning
          </div>
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl text-white/95">
            Certifications
          </h2>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            A comprehensive list of my professional credentials across Artificial Intelligence, Cloud Computing, and Full-Stack Development.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: (index % 5) * 0.05 }}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 border-b border-white/10 transition-all duration-700 hover:bg-[#0A0A0A] hover:border-[#DD2476]/20 hover:shadow-[0_4px_30px_rgba(221,36,118,0.05)] px-4 md:px-8"
            >
              <div className="flex items-center gap-6">
                {/* Badge Render Logic */}
                {cert.badge ? (
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-white/5 overflow-hidden border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:border-[#DD2476]/30 group-hover:shadow-[0_0_15px_rgba(221,36,118,0.2)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cert.badge} alt={`${cert.title} badge`} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/30 transition-all duration-500 group-hover:scale-110 group-hover:text-[#DD2476] group-hover:border-[#DD2476]/30 group-hover:shadow-[0_0_15px_rgba(221,36,118,0.2)]">
                    <Award size={24} />
                  </div>
                )}
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                    {cert.title}
                  </h3>
                  <span className="font-Silkscreen text-xs text-white/40 uppercase tracking-widest group-hover:text-[#FF512F] transition-all duration-500">
                    {cert.issuer}
                  </span>
                </div>
              </div>
              
              <div className="flex shrink-0 mt-4 sm:mt-0">
                <span className="text-white/30 text-sm font-medium border border-white/5 bg-white/5 px-4 py-2 rounded-full group-hover:border-white/20 group-hover:text-white/80 transition-all duration-500">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
