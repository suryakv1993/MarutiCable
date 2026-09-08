import React from 'react';
import { Gauge, Infinity, Headphones, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export const StatsStrip: React.FC = () => {
  const items = [
    {
      title: '20–100 Mbps',
      subtitle: 'Fiber & Air-Fiber Speeds',
      icon: Gauge,
      accent: 'text-[#00E5FF]',
      border: 'border-[#00E5FF]/20',
    },
    {
      title: 'Unlimited Plans',
      subtitle: 'No Hidden Daily FUPs',
      icon: Infinity,
      accent: 'text-[#19B5FE]',
      border: 'border-[#19B5FE]/20',
    },
    {
      title: 'Local Support',
      subtitle: 'Direct Sindri Technician Desk',
      icon: Headphones,
      accent: 'text-[#6C63FF]',
      border: 'border-[#6C63FF]/20',
    },
    {
      title: 'Since 2021',
      subtitle: 'Serving Dhanbad Suburbs',
      icon: Calendar,
      accent: 'text-[#00E5FF]',
      border: 'border-[#00E5FF]/20',
    },
  ];

  return (
    <div className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-black/30"
            >
              <div className={`p-2.5 rounded-xl bg-white/[0.04] border ${item.border} shrink-0`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.accent}`} />
              </div>
              <div>
                <div className="text-base sm:text-lg font-extrabold text-white tracking-tight font-['Manrope']">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
