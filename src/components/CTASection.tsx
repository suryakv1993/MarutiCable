import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Search, CreditCard, Sparkles } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e2144] via-[#091530] to-[#050816] border border-[#00E5FF]/40 p-8 sm:p-14 text-center overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.7)]">
          {/* Ambient light circles */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00E5FF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-extrabold tracking-wide font-['Manrope']">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sindri's High-Speed FTTH Network</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-[800] text-white tracking-tight font-['Manrope']">
              Ready to experience truly reliable internet?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Join hundreds of homes and businesses across Sindri powered by high-speed fiber broadband.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/new-connection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-sm font-extrabold shadow-xl shadow-[#00E5FF]/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Get New Connection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/coverage"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.14] border border-edge-strong text-ink-strong text-sm font-bold active:scale-95 transition-all shadow-md"
              >
                <Search className="w-4 h-4 text-[#00E5FF]" />
                <span>Check Availability</span>
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6">
              <Link
                to="/pay-bill"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#00E5FF] transition-colors"
              >
                <CreditCard className="w-4 h-4 text-[#19B5FE]" />
                <span>Already a customer? Pay your bill online.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
