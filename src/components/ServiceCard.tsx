import React from 'react';
import { Link } from '../context/RouterContext';
import { Check, ArrowRight, Zap, Radio } from 'lucide-react';
import { motion } from 'motion/react';

export const ConnectionTypesSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Connectivity Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Manrope']">
            Choose the connection that works for you.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            From direct optical fiber lines to rapid wireless outdoor links, we deliver high-reliability connectivity tailored to your location in Sindri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Fiber Broadband */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl bg-gradient-to-b from-[#0B1224] to-[#070c1d] border border-white/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-[#00E5FF]/40 transition-all duration-300"
          >
            {/* Ambient glowing optical background visual */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-[#00E5FF]/15 transition-all" />

            {/* Subtle animated fiber strand graphic */}
            <svg
              className="absolute -right-8 bottom-0 w-48 h-48 opacity-20 text-[#00E5FF] pointer-events-none group-hover:opacity-30 transition-opacity"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M10 190 C 80 160, 100 80, 190 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M30 200 C 100 170, 120 90, 200 20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="190" cy="10" r="4" fill="currentColor" />
              <circle cx="100" cy="115" r="3" fill="#19B5FE" />
            </svg>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#19B5FE]/20 to-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF]">
                  FTTH Optical
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Manrope']">
                Fiber Broadband
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                High-speed FTTH internet directly to your home or business.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  '20–100 Mbps',
                  'Unlimited plans',
                  'Symmetric upload/download',
                  'Local support',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#00E5FF]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 relative z-10">
              <Link
                to="/broadband"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-sm font-bold shadow-lg shadow-[#00E5FF]/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Explore Fiber Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Air-Fiber */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-3xl bg-gradient-to-b from-[#0B1224] to-[#070c1d] border border-white/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-[#6C63FF]/40 transition-all duration-300"
          >
            {/* Ambient glowing purple/blue background visual */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C63FF]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-[#6C63FF]/15 transition-all" />

            {/* Subtle wireless wave graphic */}
            <svg
              className="absolute -right-6 bottom-4 w-48 h-48 opacity-20 text-[#6C63FF] pointer-events-none group-hover:opacity-30 transition-opacity"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path d="M120 180 A 60 60 0 0 1 180 120" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M100 180 A 80 80 0 0 1 180 100" stroke="currentColor" strokeWidth="1.5" />
              <path d="M80 180 A 100 100 0 0 1 180 80" stroke="currentColor" strokeWidth="1" />
              <circle cx="180" cy="180" r="5" fill="currentColor" />
            </svg>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#19B5FE]/10 border border-[#6C63FF]/30 flex items-center justify-center text-[#6C63FF]">
                  <Radio className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-[#6C63FF]">
                  Fixed Wireless
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Manrope']">
                Air-Fiber
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Wireless broadband for locations where fiber has not reached yet.
              </p>

              <div className="mt-8 space-y-3.5">
                {[
                  '15–50 Mbps',
                  'No digging required',
                  'Outdoor wireless equipment',
                  'Subject to feasibility',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#6C63FF]/15 border border-[#6C63FF]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#6C63FF]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 relative z-10">
              <Link
                to="/air-fiber"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-sm font-bold active:scale-95 transition-all"
              >
                <span>Explore Air-Fiber</span>
                <ArrowRight className="w-4 h-4 text-[#6C63FF]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
