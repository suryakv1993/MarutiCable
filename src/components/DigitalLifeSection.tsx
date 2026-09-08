import React from 'react';
import { Tv, Gamepad2, Briefcase, Home } from 'lucide-react';
import { motion } from 'motion/react';

export const DigitalLifeSection: React.FC = () => {
  const cards = [
    {
      title: 'Streaming',
      desc: 'Enjoy your entertainment with a connection built for everyday streaming.',
      icon: Tv,
      color: 'text-[#00E5FF]',
      bgColor: 'from-[#00E5FF]/10 to-transparent',
      borderColor: 'group-hover:border-[#00E5FF]/40',
    },
    {
      title: 'Gaming',
      desc: 'Stay connected to your games with reliable broadband.',
      icon: Gamepad2,
      color: 'text-[#6C63FF]',
      bgColor: 'from-[#6C63FF]/10 to-transparent',
      borderColor: 'group-hover:border-[#6C63FF]/40',
    },
    {
      title: 'Work',
      desc: 'Video calls, cloud apps and remote work made easier.',
      icon: Briefcase,
      color: 'text-[#19B5FE]',
      bgColor: 'from-[#19B5FE]/10 to-transparent',
      borderColor: 'group-hover:border-[#19B5FE]/40',
    },
    {
      title: 'Home',
      desc: 'Connect phones, TVs, laptops, cameras and smart devices.',
      icon: Home,
      color: 'text-[#00E5FF]',
      bgColor: 'from-[#00E5FF]/10 to-transparent',
      borderColor: 'group-hover:border-[#00E5FF]/40',
    },
  ];

  return (
    <section className="py-20 relative bg-surface-2/60 border-y border-edge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#19B5FE] px-3 py-1 rounded-full bg-[#19B5FE]/10 border border-[#19B5FE]/20 inline-block mb-3 font-['Manrope']">
            Everyday Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Built for the way you use the internet.
          </h2>
          <p className="mt-3 text-base text-ink-faint">
            Engineered to handle simultaneous devices and continuous household demands across Sindri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group glass-card rounded-2xl p-6 sm:p-7 border border-edge ${card.borderColor} transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${card.bgColor} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-edge flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-ink-strong mb-2 font-['Manrope']">
                    {card.title}
                  </h3>

                  <p className="text-sm text-ink-soft leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
