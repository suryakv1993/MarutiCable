import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { CoverageChecker } from '../components/CoverageChecker';
import { ServiceTimelinesSection } from '../components/ServiceTimelinesSection';
import { CTASection } from '../components/CTASection';
import { MapPin, Compass } from 'lucide-react';

export const CoveragePage: React.FC = () => {
  return (
    <div className="py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Network Coverage & Availability
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Broadband Service Areas in Dhanbad & Sindri
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Maruti Cable operates optical distribution lines across Sindri and interconnected suburbs. Use our PIN checker below to verify connectivity at your colony, street, or commercial complex.
          </p>
        </div>
      </section>

      {/* Main Interactive Coverage Component with PIN & Topology Map */}
      <CoverageChecker />

      {/* Complete Service Areas Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-edge">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-strong font-['Manrope']">
              Confirmed Operational Locations
            </h2>
            <p className="mt-2 text-sm text-ink-faint">
              Active fiber distribution boxes and dedicated field technicians currently cover:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITE_CONFIG.serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-app border border-edge flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0 text-[#00E5FF] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-ink-strong font-['Manrope']">
                      {area.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.06] text-ink-soft font-mono">
                      {area.pincode}
                    </span>
                  </div>
                  <p className="text-xs text-ink-faint mt-1">
                    {area.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-edge flex items-center gap-2 text-xs text-ink-faint">
            <Compass className="w-4 h-4 text-[#00E5FF] shrink-0" />
            <span>Network trunk lines expand regularly based on local colony demand and ROW clearances.</span>
          </div>
        </div>
      </section>

      {/* Timelines Info */}
      <ServiceTimelinesSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
};
