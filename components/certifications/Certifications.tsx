'use client';
import { certifications } from '@/constants/certifications';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { safeUrl } from '@/lib/utils';

const PREVIEW_COUNT = 5;

const Certifications = () => {
  const preview = certifications.filter(cert => cert.featured);
  return (
    <section className="relative py-32 md:py-48" id="certifications" aria-label="Credentials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 space-y-6">
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl lg:text-7xl text-white/95">
            Credentials
          </h2>
          <p className="max-w-2xl text-lg text-white/60 md:text-xl">
            Alongside building, I&apos;ve been studying systematically, covering AI fundamentals, cloud infrastructure, and software engineering across Google, Microsoft, AWS, and DataCamp.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10 mt-12">
          {preview.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: (index % 5) * 0.05 }}
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 border-b border-white/10 transition-all duration-700 bg-card-bg hover:border-accent-sunset-end/20 hover:shadow-[0_4px_30px_rgba(221,36,118,0.05)] px-4 md:px-8"
            >
              <div className="flex items-center gap-6">
                {cert.badge ? (
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-white/5 overflow-hidden border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:border-accent-sunset-end/30 group-hover:shadow-[0_0_15px_rgba(221,36,118,0.2)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={safeUrl(cert.badge)} alt={`${cert.title} badge`} className="h-full w-full object-contain p-1" />
                  </div>
                ) : (
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/30 transition-all duration-500 group-hover:scale-110 group-hover:text-accent-sunset-end group-hover:border-accent-sunset-end/30 group-hover:shadow-[0_0_15px_rgba(221,36,118,0.2)]">
                    <Award size={24} />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                    {cert.title}
                  </h3>
                  <span className="font-Silkscreen text-xs text-white/40 uppercase tracking-widest group-hover:text-accent-sunset-start transition-all duration-500">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="flex items-center shrink-0 mt-4 sm:mt-0 gap-3">
                <span className="text-white/30 text-sm font-medium border border-white/5 bg-white/5 px-4 py-2 rounded-full group-hover:border-white/20 group-hover:text-white/80 transition-all duration-500 hidden md:block">
                  {cert.date}
                </span>
                {cert.slug && (
                  <>
                    <Link
                      href={`/credentials/${cert.slug}`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="hidden sm:inline">Details</span>
                      <span className="sm:hidden">More</span>
                    </Link>
                    {cert.link && (
                      <Link
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                      >
                        <ExternalLink size={12} />
                        <span className="hidden sm:inline">Verify</span>
                      </Link>
                    )}
                  </>
                )}
                {!cert.slug && cert.link && (
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 text-white/40 text-xs hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                  >
                    <ExternalLink size={12} />
                    <span className="hidden sm:inline">View</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <span className="text-xs text-white/30 font-Silkscreen uppercase tracking-widest">
            Showing {preview.length} of {certifications.length}
          </span>
          <Link
            href="/credentials"
            className="flex items-center gap-2 p-3 -mr-3 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <span>See all {certifications.length} credentials</span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Certifications;
