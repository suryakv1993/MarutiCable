import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Clock, AlertTriangle, RefreshCw, CheckCircle2, FileSearch, Radio } from 'lucide-react';
import { motion } from 'motion/react';

export const ServiceTimelinesSection: React.FC = () => {
  const iconMap = [RefreshCw, CheckCircle2, FileSearch, Radio];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Operations & Fulfillment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Manrope']">
            Service Timelines
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Clear, honest turnaround times for recharges, new installations, and site feasibility checks.
          </p>
        </div>

        {/* 4 Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.serviceTimelines.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 font-['Manrope']">
                    {item.service}
                  </h3>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#00E5FF]">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.timeframe}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200/90 leading-relaxed">
            <strong className="text-amber-200">Notice on Timelines: </strong>
            {SITE_CONFIG.timelineDisclaimer}
          </div>
        </div>
      </div>
    </section>
  );
};
