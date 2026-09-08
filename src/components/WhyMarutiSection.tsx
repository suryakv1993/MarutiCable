import React from 'react';
import { Cable, ReceiptText, Wrench, ShieldCheck, Network, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyMarutiSection: React.FC = () => {
  const cards = [
    {
      title: 'Real Fiber',
      desc: 'Fiber runs directly to your premises where available.',
      icon: Cable,
      color: 'text-[#00E5FF]',
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear plan pricing and straightforward billing.',
      icon: ReceiptText,
      color: 'text-[#19B5FE]',
    },
    {
      title: 'Local Engineers',
      desc: 'Support from technicians serving the local area.',
      icon: Wrench,
      color: 'text-[#6C63FF]',
    },
    {
      title: 'Proper KYC',
      desc: 'Documented subscriber onboarding.',
      icon: ShieldCheck,
      color: 'text-[#00E5FF]',
    },
    {
      title: 'Strong Network',
      desc: 'Connectivity delivered over the Xpress Fiber network.',
      icon: Network,
      color: 'text-[#19B5FE]',
    },
    {
      title: 'Responsive Support',
      desc: 'Contact our local team when you need assistance.',
      icon: Headphones,
      color: 'text-[#6C63FF]',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Why Sindri chooses Maruti Cable
          </h2>
          <p className="mt-3 text-base text-ink-faint">
            Backed by franchise-grade optical routing and powered by dedicated local technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-edge hover:border-[#00E5FF]/30 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100/80 dark:bg-white/[0.04] border border-edge flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-slate-200 dark:group-hover:bg-white/[0.08] transition-all">
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink-strong mb-1.5 font-['Manrope']">
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
