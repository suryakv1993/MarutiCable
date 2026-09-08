import React from 'react';
import { SITE_CONFIG, getGoogleMapsOfficeLink } from '../config/siteConfig';
import { CTASection } from '../components/CTASection';
import { Building2, ShieldCheck, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            About Maruti Cable
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Local Roots. Serious Network.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Connecting homes, businesses, and digital learning across Sindri and surrounding Dhanbad with dependable high-speed broadband and authentic neighborhood care.
          </p>
        </div>
      </section>

      {/* Main Story & Credentials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-edge space-y-6">
              <h2 className="text-2xl font-bold text-ink-strong font-['Manrope']">
                Who We Are
              </h2>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                <strong className="text-ink-strong">Maruti Cable</strong> is a Sindri-based broadband firm operated by <strong className="text-ink-strong">{SITE_CONFIG.operatorName}</strong>. 
                The business has been actively serving the local community since <strong className="text-[#00E5FF]">{SITE_CONFIG.servingSince}</strong> and operates as an authorised franchise partner of <strong className="text-[#00E5FF]">{SITE_CONFIG.franchisePartner}</strong>.
              </p>

              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                Rather than treating internet as a distant, faceless utility with impersonal call centers, Maruti Cable was established with a clear conviction: local families, students, and small enterprises in Sindri deserve enterprise-grade optical speed backed by technicians who live and work right in the neighborhood.
              </p>

              <div className="pt-4 border-t border-edge">
                <h3 className="text-lg font-bold text-ink-strong mb-3 font-['Manrope']">
                  Our Operating Principles
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Fast Local Dispatch', text: 'On-ground field linemen stationed right in Sindri for swift resolution of wire drops, optical line snags, and Wi-Fi issues.' },
                    { title: 'Franchise Network Quality', text: 'Upstream optical routing provided through Xpress Fiber Pvt. Ltd., guaranteeing stable peering with national CDNs.' },
                    { title: 'Strict Regulatory Compliance', text: 'Documented subscriber onboarding (KYC), transparent invoicing, and registered MSME enterprise standing.' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#00E5FF]" />
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-ink-strong">{p.title}: </strong>
                        <span className="text-xs text-ink-soft">{p.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legal Firm Information Dossier */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-7 border border-edge-strong shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-edge mb-6">
                <div>
                  <h3 className="text-lg font-bold text-ink-strong font-['Manrope']">
                    Enterprise Dossier
                  </h3>
                  <span className="text-xs text-[#00E5FF]">Official Government & Legal Records</span>
                </div>
                <Building2 className="w-6 h-6 text-[#00E5FF]" />
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-edge">
                  <span className="text-ink-faint block text-[11px] mb-0.5">Firm Name</span>
                  <span className="text-ink-strong font-bold text-sm font-['Manrope']">{SITE_CONFIG.legalFirmName}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-edge">
                  <span className="text-ink-faint block text-[11px] mb-0.5">Constitution & Leadership</span>
                  <span className="text-ink-strong font-semibold">{SITE_CONFIG.firmType} • Operated by {SITE_CONFIG.operatorName}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-edge">
                  <span className="text-ink-faint block text-[11px] mb-0.5">Telecom Franchise Authorisation</span>
                  <span className="text-[#00E5FF] font-semibold">{SITE_CONFIG.franchisePartner}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-edge">
                  <span className="text-ink-faint block text-[11px] mb-0.5">Government MSME / Udyam Registration</span>
                  <span className="text-ink-strong font-mono font-bold tracking-wide">{SITE_CONFIG.udyamRegistration}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-edge">
                  <span className="text-ink-faint block text-[11px] mb-0.5">Registered Office Address</span>
                  <span className="text-ink leading-relaxed block">{SITE_CONFIG.contact.address.full}</span>
                  <a
                    href={getGoogleMapsOfficeLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#00E5FF] hover:underline font-semibold text-xs mt-2"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View Office on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-edge">
                  <span className="text-ink-faint block text-[11px] mb-0.5">Operational Desk Hours</span>
                  <span className="text-ink">{SITE_CONFIG.contact.officeHours}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-edge flex items-center justify-between text-xs">
                <span className="text-ink-faint">Serving Sindri since {SITE_CONFIG.servingSince}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Active Firm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
