import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import { Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutSnippet: React.FC = () => {
  const stats = [
    { label: 'Since 2021', sub: 'Serving Sindri' },
    { label: 'Sindri Based', sub: 'L-Type Colony Office' },
    { label: 'Local Support', sub: 'Field Technicians' },
    { label: 'MSME Registered', sub: 'Govt. Verified' },
  ];

  return (
    <section className="py-20 relative bg-surface-2/40 border-y border-edge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block font-['Manrope']">
              About Maruti Cable
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
              Local roots. Serious network.
            </h2>

            <p className="text-base text-ink-soft leading-relaxed">
              Maruti Cable is a Sindri-based broadband firm operated by <strong className="text-ink-strong">{SITE_CONFIG.operatorName}</strong>. 
              The business has been serving the local area since {SITE_CONFIG.servingSince} and operates as an authorised franchise partner 
              of <strong className="text-[#00E5FF]">{SITE_CONFIG.franchisePartner}</strong>.
            </p>

            <p className="text-sm text-ink-faint leading-relaxed">
              We bridge the gap between world-class optical telecom infrastructure and responsive, neighborhood-level service. 
              Whether you require high-speed fiber for work-from-home demands, online education, or multi-user home entertainment, 
              our local team delivers dependable installation and proactive troubleshooting.
            </p>

            {/* 4 Trust statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.04] border border-edge text-center">
                  <div className="text-sm font-extrabold text-[#00E5FF] font-['Manrope']">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-ink-faint mt-0.5 font-medium">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#19B5FE] hover:text-[#00E5FF] transition-colors"
              >
                <span>Read more about our firm & franchise credentials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Clean Company Information Panel */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-edge-strong relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-edge pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-ink-strong font-['Manrope']">
                    Company Information
                  </h3>
                  <span className="text-xs text-ink-faint">Verified Business Credentials</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF]">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between py-2 border-b border-edge">
                  <span className="text-ink-faint">Enterprise Entity</span>
                  <span className="text-ink-strong font-semibold">{SITE_CONFIG.legalFirmName}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-edge">
                  <span className="text-ink-faint">Business Constitution</span>
                  <span className="text-ink-strong font-semibold">{SITE_CONFIG.firmType}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-edge">
                  <span className="text-ink-faint">Sole Proprietor</span>
                  <span className="text-ink-strong font-semibold">{SITE_CONFIG.operatorName}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-edge">
                  <span className="text-ink-faint">Franchise Partnership</span>
                  <span className="text-[#00E5FF] font-semibold">{SITE_CONFIG.franchisePartner}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-edge">
                  <span className="text-ink-faint">Udyam MSME Registration</span>
                  <span className="text-ink font-mono font-semibold">{SITE_CONFIG.udyamRegistration}</span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-ink-faint shrink-0 mr-4">Registered Office</span>
                  <span className="text-ink text-right font-medium">
                    {SITE_CONFIG.contact.address.full}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-edge flex items-center gap-2 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Authorized Local Network Operator for Sindri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
