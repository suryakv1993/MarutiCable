import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import { PlansSection } from '../components/PlanCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import { ArrowRight, ShieldCheck, Cpu, Download, Upload } from 'lucide-react';

export const BroadbandPage: React.FC = () => {
  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            FTTH Optical Internet
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            High-Speed Fiber Broadband for Sindri
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Direct optical fiber runs directly to your premises. Powered by the Xpress Fiber network, offering symmetric speeds from 20 to 100 Mbps with unlimited data and local technician installation.
          </p>
        </div>

        {/* Feature Pill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { title: 'Symmetric Speeds', desc: 'Equal upload and download bandwidth', icon: Upload },
            { title: 'Unlimited Data', desc: 'No daily volume cutoffs or throttling', icon: Download },
            { title: 'Direct FTTH Drop', desc: 'Pure optical glass to your router', icon: Cpu },
            { title: 'Local Dispatch', desc: 'Sindri technicians on site for repairs', icon: ShieldCheck },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-edge">
                <Icon className="w-5 h-5 text-[#00E5FF] mb-2" />
                <div className="text-sm font-bold text-ink-strong font-['Manrope']">{item.title}</div>
                <div className="text-xs text-ink-faint mt-1">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Plans Section */}
      <PlansSection categoryFilter="fiber" showAirFiberToggle={false} />

      {/* Plan Technical Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Fiber Plans Technical Comparison
          </h2>
          <p className="mt-2 text-sm text-ink-faint">
            Compare monthly rates and speeds across all official Maruti Cable fiber tiers.
          </p>
        </div>

        <div className="glass-card rounded-3xl border border-edge overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-edge bg-slate-100/60 dark:bg-white/[0.02] text-ink-faint font-bold uppercase tracking-wider text-[11px]">
                <th className="p-4 sm:p-5">Plan</th>
                <th className="p-4 sm:p-5">Speed</th>
                <th className="p-4 sm:p-5">Monthly Price</th>
                <th className="p-4 sm:p-5">Data Quota</th>
                <th className="p-4 sm:p-5">Symmetric Ratio</th>
                <th className="p-4 sm:p-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {SITE_CONFIG.fiberPlans.map((plan) => (
                <tr key={plan.id} className="hover:bg-slate-200 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-ink-strong font-['Manrope']">
                    {plan.name}
                    {plan.badge && (
                      <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF]">
                        {plan.badge}
                      </span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-[#00E5FF]">
                    {plan.speedMbps} Mbps
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-ink-strong text-base">
                    ₹{plan.monthlyPrice}<span className="text-xs text-ink-faint font-normal">/mo</span>
                  </td>
                  <td className="p-4 sm:p-5 text-ink-soft">Unlimited</td>
                  <td className="p-4 sm:p-5 text-ink-soft">1:1 (Upload = Download)</td>
                  <td className="p-4 sm:p-5 text-right">
                    <Link
                      to="/new-connection"
                      state={{ selectedPlanId: plan.id, planName: plan.name, category: 'fiber' }}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-xs font-bold hover:brightness-110 transition-all"
                    >
                      <span>Get Plan</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-ink-faint">
          {SITE_CONFIG.pricingTaxNotice}
        </p>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* FAQs */}
      <FAQAccordion
        title="Fiber Broadband FAQs"
        subtitle="Common questions regarding FTTH fiber installations in Sindri"
      />
    </div>
  );
};
