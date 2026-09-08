import React, { useState } from 'react';
import { SITE_CONFIG, Plan } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import { Check, Zap, Info, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type BillingCycle = 'monthly' | 'quarterly' | 'half-yearly' | 'yearly';

export const PlansSection: React.FC<{
  categoryFilter?: 'fiber' | 'air-fiber' | 'all';
  showAirFiberToggle?: boolean;
}> = ({ categoryFilter = 'fiber', showAirFiberToggle = true }) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [activeTab, setActiveTab] = useState<'fiber' | 'air-fiber'>(
    categoryFilter === 'air-fiber' ? 'air-fiber' : 'fiber'
  );

  const displayPlans =
    activeTab === 'fiber' ? SITE_CONFIG.fiberPlans : SITE_CONFIG.airFiberPlans;

  return (
    <section id="plans" className="py-20 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#19B5FE]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Manrope']">
            Internet that fits your life.
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Choose your speed. Stay connected. All plans include GST and truly unlimited bandwidth.
          </p>

          {/* Connection Type Switcher if applicable */}
          {showAirFiberToggle && categoryFilter === 'all' && (
            <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-[#0B1224] border border-white/10 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab('fiber')}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                  activeTab === 'fiber'
                    ? 'bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] shadow-md shadow-[#00E5FF]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Fiber Broadband Plans (FTTH)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('air-fiber')}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                  activeTab === 'air-fiber'
                    ? 'bg-gradient-to-r from-[#6C63FF] to-[#19B5FE] text-white shadow-md shadow-[#6C63FF]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Air-Fiber Wireless Plans
              </button>
            </div>
          )}

          {/* Billing Cycle Selector */}
          <div className="mt-8 flex flex-col items-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#070c1d] border border-white/10 shadow-inner max-w-full overflow-x-auto">
              {(
                [
                  { id: 'monthly', label: 'Monthly (1 mo)' },
                  { id: 'quarterly', label: 'Quarterly (3 mos)' },
                  { id: 'half-yearly', label: 'Half-yearly (6 mos)' },
                  { id: 'yearly', label: 'Yearly (12 mos)' },
                ] as const
              ).map((cycle) => {
                const isSelected = billingCycle === cycle.id;
                return (
                  <button
                    key={cycle.id}
                    type="button"
                    onClick={() => setBillingCycle(cycle.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#19B5FE] text-[#050816] font-bold shadow-md shadow-[#19B5FE]/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {cycle.label}
                  </button>
                );
              })}
            </div>

            {/* Notice regarding advance cycles */}
            {billingCycle !== 'monthly' && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0B1224] border border-amber-500/20 text-amber-300 text-xs"
              >
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>
                  Showing total advance payment for the selected duration. Advance recharges keep your line uninterrupted with zero reconnect hassles.
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Plans Grid with smooth tab transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${billingCycle}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`grid gap-6 ${
              displayPlans.length === 4
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
            }`}
          >
            {displayPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billingCycle={billingCycle} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Central Tax Notice Bar */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>{SITE_CONFIG.pricingTaxNotice}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export const PlanCard: React.FC<{ plan: Plan; billingCycle: BillingCycle }> = ({
  plan,
  billingCycle,
}) => {
  const isRecommended = plan.badge === 'MOST POPULAR';
  const isFastest = plan.badge === 'FASTEST';

  const multiplier =
    billingCycle === 'yearly'
      ? 12
      : billingCycle === 'half-yearly'
      ? 6
      : billingCycle === 'quarterly'
      ? 3
      : 1;

  const cycleTotal = plan.monthlyPrice * multiplier;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
        isRecommended
          ? 'z-10 lg:-translate-y-2 bg-gradient-to-b from-[#0d2248] via-[#091530] to-[#070c1d] border-2 border-[#00E5FF] shadow-[0_0_45px_rgba(0,229,255,0.24)]'
          : isFastest
          ? 'bg-gradient-to-b from-[#141233] to-[#0B1224] border border-[#6C63FF]/50 shadow-xl shadow-[#6C63FF]/10 hover:border-[#6C63FF]'
          : 'bg-[#0B1224]/85 backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-lg shadow-black/40'
      }`}
    >
      {/* Plan Header Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span
            className={`px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5 ${
              isRecommended
                ? 'bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] shadow-[#00E5FF]/30'
                : 'bg-gradient-to-r from-[#6C63FF] to-[#19B5FE] text-white'
            }`}
          >
            {isRecommended && <span className="w-1.5 h-1.5 rounded-full bg-[#050816] animate-pulse" />}
            <span>{plan.badge}</span>
          </span>
        </div>
      )}

      <div>
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-xl font-extrabold text-white font-['Manrope']">
            {plan.name}
          </h3>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
            isRecommended
              ? 'bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30'
              : 'bg-white/[0.06] text-slate-300'
          }`}>
            {plan.category === 'fiber' ? 'Fiber FTTH' : 'Air-Fiber'}
          </span>
        </div>

        <p className="text-xs text-slate-400 min-h-[34px] leading-relaxed mb-6">
          {plan.description}
        </p>

        {/* Speed Highlight */}
        <div className={`py-4 px-4 rounded-2xl mb-6 flex items-center justify-between border ${
          isRecommended
            ? 'bg-[#050816]/90 border-[#00E5FF]/30'
            : 'bg-[#050816]/70 border-white/5'
        }`}>
          <div>
            <div className="text-3xl font-extrabold text-white font-['Manrope'] tracking-tight flex items-baseline gap-1">
              <span>{plan.speedMbps}</span>
              <span className="text-sm font-semibold text-[#00E5FF]">Mbps</span>
            </div>
            <span className="text-[11px] text-slate-400">
              Symmetric Speed (Up &amp; Down)
            </span>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isRecommended ? 'bg-[#00E5FF]/20 text-[#00E5FF]' : 'bg-white/[0.06] text-[#00E5FF]'
          }`}>
            <Zap className="w-5 h-5" />
          </div>
        </div>

        {/* Price display */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Manrope']">
              ₹{cycleTotal}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {multiplier === 1 ? '/month' : `for ${multiplier} months`}
            </span>
          </div>
          {multiplier > 1 && (
            <div className="text-[11px] text-[#00E5FF] font-semibold mt-0.5">
              Effective ₹{plan.monthlyPrice} per month
            </div>
          )}
        </div>

        {/* Features List */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Plan Inclusions
          </p>
          {plan.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
              <div className="w-4 h-4 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/35 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#00E5FF]" />
              </div>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <Link
          to="/new-connection"
          state={{ selectedPlanId: plan.id, planName: plan.name, category: plan.category }}
          className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-xs font-bold transition-all duration-200 active:scale-95 ${
            isRecommended
              ? 'bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] shadow-xl shadow-[#00E5FF]/25 hover:brightness-110'
              : 'bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15'
          }`}
        >
          <span>Get this plan</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
};
