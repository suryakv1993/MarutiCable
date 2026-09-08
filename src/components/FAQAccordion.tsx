import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQAccordion: React.FC<{
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}> = ({
  items = defaultFAQs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our fiber and wireless broadband in Sindri.',
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Manrope']">
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/40 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-['Manrope']">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00E5FF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const defaultFAQs: FAQItem[] = [
  {
    question: 'What documents are required for a new connection?',
    answer:
      'As per government and telecom compliance, we require basic subscriber KYC: a valid government photo identity and address proof (such as Aadhaar card, Voter ID, or passport) and active mobile number for verification.',
  },
  {
    question: 'What does symmetric upload/download mean on Maruti Cable fiber?',
    answer:
      'Symmetric bandwidth means you receive the same full speed for uploading data (sending files, video conferencing, CCTV feeds) as you do for downloading content (streaming 4K, downloading files).',
  },
  {
    question: 'How is Air-Fiber different from FTTH optical cable?',
    answer:
      'FTTH delivers signal via a physical optical fiber cable dropped directly into your premises. Air-Fiber is a fixed wireless broadband technology using dedicated outdoor equipment to link with our local radio distribution towers in areas where trenching or cable stringing is currently infeasible.',
  },
  {
    question: 'How does Maruti Cable support work if there is a local fiber cut?',
    answer:
      'Because our technical team is based right in Sindri (QR No. L/148, L-Type Colony), our field linemen and splice technicians can inspect and repair localized route disturbances promptly without waiting for technicians to travel from distant cities.',
  },
  {
    question: 'How do I pay or recharge my subscription?',
    answer:
      'You can pay your bill directly through our online payment page, bank transfer, or by visiting our Sindri office during operational hours (9:30 AM – 8:30 PM, all 7 days). Recharges are confirmed within 30 minutes of payment verification.',
  },
];
