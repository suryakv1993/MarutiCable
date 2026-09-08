import React from 'react';
import { Globe, Server, Network, Home, Cable } from 'lucide-react';
import { motion } from 'motion/react';

export const NetworkDiagram: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Global Internet',
      subtitle: 'Tier-1 Upstream Gateways',
      icon: Globe,
      color: 'text-[#00E5FF]',
      bg: 'from-[#00E5FF]/20 to-transparent',
      border: 'border-[#00E5FF]/40',
    },
    {
      id: 2,
      title: 'Xpress Fiber Core',
      subtitle: 'High-Throughput Routing',
      icon: Server,
      color: 'text-[#19B5FE]',
      bg: 'from-[#19B5FE]/20 to-transparent',
      border: 'border-[#19B5FE]/40',
    },
    {
      id: 3,
      title: 'Regional Network',
      subtitle: 'Dhanbad Ring Backbone',
      icon: Network,
      color: 'text-[#6C63FF]',
      bg: 'from-[#6C63FF]/20 to-transparent',
      border: 'border-[#6C63FF]/40',
    },
    {
      id: 4,
      title: 'Maruti Cable Last Mile',
      subtitle: 'Sindri Distribution Splitters',
      icon: Cable,
      color: 'text-[#00E5FF]',
      bg: 'from-[#00E5FF]/20 to-transparent',
      border: 'border-[#00E5FF]/40',
    },
    {
      id: 5,
      title: 'Your Home / Office',
      subtitle: 'Dual-Band Wi-Fi & Gigabit LAN',
      icon: Home,
      color: 'text-[#19B5FE]',
      bg: 'from-[#19B5FE]/20 to-transparent',
      border: 'border-[#19B5FE]/40',
    },
  ];

  return (
    <section className="py-20 relative bg-[#070c1d]/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#19B5FE] px-3 py-1 rounded-full bg-[#19B5FE]/10 border border-[#19B5FE]/20 inline-block mb-3 font-['Manrope']">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Manrope']">
            Your connection starts with a stronger network.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            How data flows seamlessly from international internet gateways through our Sindri distribution hubs straight to your devices.
          </p>
        </div>

        {/* Diagram Flow on Desktop (Horizontal) and Mobile (Vertical) */}
        <div className="relative">
          {/* Connecting line with animated pulse on Desktop */}
          <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-white/10 z-0 overflow-hidden">
            <motion.div
              animate={{
                x: ['-20%', '120%'],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-32 h-full bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_12px_#00E5FF]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`w-full glass-card rounded-2xl p-5 sm:p-6 border ${step.border} text-center flex flex-col items-center relative group hover:border-[#00E5FF] hover:shadow-xl hover:shadow-[#00E5FF]/10 transition-all`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#070c1d] border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 group-hover:border-[#00E5FF]/40 transition-all">
                      <Icon className={`w-7 h-7 ${step.color}`} />
                    </div>

                    <span className="text-[10px] font-extrabold text-[#00E5FF] tracking-wider uppercase mb-1">
                      Stage 0{step.id}
                    </span>

                    <h3 className="text-base font-bold text-white mb-1 font-['Manrope']">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-400">
                      {step.subtitle}
                    </p>
                  </motion.div>

                  {/* Flow indicator for Mobile between steps */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden my-2 flex flex-col items-center">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#00E5FF] to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Network status note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>24×7 Active Optical Monitoring on all Sindri fiber junctions</span>
          </div>
        </div>
      </div>
    </section>
  );
};
