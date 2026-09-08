import React from 'react';
import { SITE_CONFIG, getWhatsAppLink, getTelLink, getMailtoLink } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import { Phone, MessageSquare, Mail, AlertCircle, PhoneCall, CreditCard, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const SupportSnippet: React.FC = () => {
  const cards = [
    {
      title: 'Call Us',
      detail: SITE_CONFIG.contact.phone,
      sub: SITE_CONFIG.contact.officeHours,
      icon: Phone,
      actionText: 'Call Now',
      href: getTelLink(),
      color: 'text-[#19B5FE]',
      border: 'hover:border-[#19B5FE]/40',
    },
    {
      title: 'WhatsApp',
      detail: 'Chat with our team',
      sub: 'Quickest response for queries & photos',
      icon: MessageSquare,
      actionText: 'Open WhatsApp',
      href: getWhatsAppLink(),
      color: 'text-[#25D366]',
      border: 'hover:border-[#25D366]/40',
      isExternal: true,
    },
    {
      title: 'Email',
      detail: SITE_CONFIG.contact.email,
      sub: 'For billing statements & official desk support',
      icon: Mail,
      actionText: 'Send Email',
      href: getMailtoLink(),
      color: 'text-[#00E5FF]',
      border: 'hover:border-[#00E5FF]/40',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Local Helpdesk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Need help? We're here.
          </h2>
          <p className="mt-3 text-base text-ink-faint">
            Real people, stationed in Sindri. Connect with our technical team through your preferred channel.
          </p>
        </div>

        {/* 3 Main Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-card rounded-2xl p-6 sm:p-7 border border-edge ${card.border} transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100/80 dark:bg-white/[0.04] border border-edge flex items-center justify-center mb-5">
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-ink-strong mb-1 font-['Manrope']">
                    {card.title}
                  </h3>

                  <p className="text-base font-semibold text-ink mb-1">
                    {card.detail}
                  </p>

                  <p className="text-xs text-ink-faint">
                    {card.sub}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-edge">
                  <a
                    href={card.href}
                    target={card.isExternal ? '_blank' : undefined}
                    rel={card.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-strong hover:text-[#00E5FF] transition-colors"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Quick Action Bar: Report a Problem, Request a Callback, Pay Your Bill */}
        <div className="glass-card rounded-2xl p-6 border border-edge flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-ink-strong font-['Manrope']">
              Quick Subscriber Self-Service
            </h4>
            <p className="text-xs text-ink-faint mt-0.5">
              Instant options to raise tickets, request a site visit, or recharge your active fiber plan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/support"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-edge text-xs font-semibold text-ink transition-all"
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Report a Problem</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1] border border-edge text-xs font-semibold text-ink transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Request a Callback</span>
            </Link>

            <Link
              to="/pay-bill"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-xs font-bold hover:brightness-110 shadow-sm shadow-[#00E5FF]/20 transition-all"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay Your Bill</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
