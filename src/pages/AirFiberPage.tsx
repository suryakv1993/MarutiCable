import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import { PlansSection } from '../components/PlanCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTASection } from '../components/CTASection';
import { ArrowRight, ShieldCheck, Construction, TowerControl as Tower, Eye } from 'lucide-react';

export const AirFiberPage: React.FC = () => {
  return (
    <div className="py-12">
      {/* Header Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6C63FF] px-3 py-1 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 inline-block mb-3 font-['Manrope']">
            Fixed Wireless Technology
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Maruti Air-Fiber Wireless Broadband
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Wireless broadband for locations where physical fiber has not reached yet. Delivering high-throughput connectivity straight to an outdoor wireless device on your rooftop—no road digging or pole stringing required.
          </p>
        </div>

        {/* Feature Pill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { title: 'No Digging Required', desc: 'Installed without disrupting pathways or gardens', icon: Construction },
            { title: 'Dedicated Outdoor Unit', desc: 'Compact rooftop antenna focused on local hub', icon: Tower },
            { title: 'Rapid Setup', desc: 'Quick deployment once line-of-sight confirmed', icon: Eye },
            { title: 'Local Technician Care', desc: 'Sindri-based alignment and maintenance', icon: ShieldCheck },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-edge">
                <Icon className="w-5 h-5 text-[#6C63FF] mb-2" />
                <div className="text-sm font-bold text-ink-strong font-['Manrope']">{item.title}</div>
                <div className="text-xs text-ink-faint mt-1">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Air-Fiber Plans Grid */}
      <PlansSection categoryFilter="air-fiber" showAirFiberToggle={false} />

      {/* How Air-Fiber Works Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-edge">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
              How Air-Fiber Works at Your Location
            </h2>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Air-Fiber uses high-frequency directional wireless waves from our central Sindri distribution towers to deliver high-speed broadband directly into standalone houses, colonies, and commercial premises located beyond immediate underground cable runs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-app border border-edge">
              <span className="text-xs font-bold text-[#6C63FF] uppercase tracking-wider">Step 1</span>
              <h3 className="text-base font-bold text-ink-strong mt-1 mb-2 font-['Manrope']">
                LOS Feasibility Survey
              </h3>
              <p className="text-xs text-ink-faint leading-relaxed">
                Our technician inspects your rooftop or terrace to ensure an unobstructed optical line-of-sight to the nearest Maruti Cable radio tower.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-app border border-edge">
              <span className="text-xs font-bold text-[#6C63FF] uppercase tracking-wider">Step 2</span>
              <h3 className="text-base font-bold text-ink-strong mt-1 mb-2 font-['Manrope']">
                Outdoor Receiver Mounting
              </h3>
              <p className="text-xs text-ink-faint leading-relaxed">
                A weatherproof outdoor transceiver is safely installed on a pole clamp and calibrated for signal strength and low jitter.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-app border border-edge">
              <span className="text-xs font-bold text-[#6C63FF] uppercase tracking-wider">Step 3</span>
              <h3 className="text-base font-bold text-ink-strong mt-1 mb-2 font-['Manrope']">
                Indoor Wi-Fi Routing
              </h3>
              <p className="text-xs text-ink-faint leading-relaxed">
                A shielded Cat6 cable runs from the roof into your rooms, connecting to your Wi-Fi router for whole-home wireless coverage.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-edge flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-ink-faint">
              Note: Air-Fiber installations are subject to site survey and clear radio signal availability.
            </span>
            <Link
              to="/new-connection"
              state={{ serviceType: 'Air-Fiber' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#19B5FE] text-white text-xs font-bold shadow-lg shadow-[#6C63FF]/20 hover:brightness-110 transition-all"
            >
              <span>Book an Air-Fiber Feasibility Survey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Air-Fiber FAQs */}
      <FAQAccordion
        title="Air-Fiber Questions"
        subtitle="Clarifications regarding wireless broadband installation in Dhanbad"
        items={[
          {
            question: 'Does rain or weather affect Air-Fiber?',
            answer:
              'Our equipment uses carrier-grade directional wireless radios engineered with ample link margin to maintain stable connectivity through normal rain and seasonal monsoon weather.',
          },
          {
            question: 'Can I upgrade to optical fiber later when cables reach my colony?',
            answer:
              'Yes! As Maruti Cable expands physical optical fiber into newer pockets of Sindri, subscribers can easily migrate their plan to FTTH fiber with zero downtime.',
          },
          {
            question: 'Who provides the outdoor antenna and equipment?',
            answer:
              'Maruti Cable technicians provide and mount the outdoor transceiver device during the installation process, configured to our local access points.',
          },
        ]}
      />
    </div>
  );
};
