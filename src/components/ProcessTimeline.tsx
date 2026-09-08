import React from 'react';
import { Search, CheckSquare, Wrench, Wifi } from 'lucide-react';
import { motion } from 'motion/react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Check Availability',
      desc: 'Tell us where you need the connection.',
      icon: Search,
      color: 'text-[#00E5FF]',
      border: 'border-[#00E5FF]/40',
    },
    {
      num: '02',
      title: 'Feasibility Check',
      desc: 'Our team confirms whether the network can reach your location.',
      icon: CheckSquare,
      color: 'text-[#19B5FE]',
      border: 'border-[#19B5FE]/40',
    },
    {
      num: '03',
      title: 'Installation',
      desc: 'Our technician installs and configures the connection.',
      icon: Wrench,
      color: 'text-[#6C63FF]',
      border: 'border-[#6C63FF]/40',
    },
    {
      num: '04',
      title: 'Go Online',
      desc: 'Your connection is tested and ready to use.',
      icon: Wifi,
      color: 'text-[#00E5FF]',
      border: 'border-[#00E5FF]/40',
    },
  ];

  return (
    <section className="py-20 relative bg-surface-2/40 border-y border-edge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#19B5FE] px-3 py-1 rounded-full bg-[#19B5FE]/10 border border-[#19B5FE]/20 inline-block mb-3 font-['Manrope']">
            Simple Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Get connected in four simple steps.
          </h2>
          <p className="mt-3 text-base text-ink-faint">
            From your first inquiry to active fiber browsing, guided by our local Sindri technician crew.
          </p>
        </div>

        {/* Timeline Container: Desktop Horizontal with connecting track, Mobile Vertical */}
        <div className="relative">
          {/* Desktop horizontal track line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-white/10 z-0">
            <div className="h-full w-full bg-gradient-to-r from-[#00E5FF]/60 via-[#19B5FE]/60 to-[#6C63FF]/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-edge hover:border-[#00E5FF]/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-edge-strong flex items-center justify-center text-[#00E5FF] shadow-md group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <span className="text-2xl font-extrabold text-ink-strong/20 font-mono group-hover:text-[#00E5FF]/50 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-ink-strong mb-2 font-['Manrope']">
                      {step.title}
                    </h3>

                    <p className="text-sm text-ink-soft leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-edge flex items-center text-[11px] font-semibold text-[#00E5FF]">
                    <span>Step {step.num} of 04</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
