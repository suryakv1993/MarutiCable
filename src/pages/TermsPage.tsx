import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Manrope']">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-xs text-slate-400">
          Last Updated: March 2025 • Applicable to all subscriber services provided by Maruti Cable
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            1. Firm Identity & Acceptance of Terms
          </h2>
          <p>
            These Terms and Conditions govern the provision of high-speed optical fiber (FTTH) and fixed wireless broadband (Air-Fiber) services provided by <strong className="text-white">Maruti Cable</strong>, a proprietorship firm operated by <strong className="text-white">{SITE_CONFIG.operatorName}</strong>, having its registered office at <strong className="text-white">{SITE_CONFIG.contact.address.full}</strong>, operating as an authorised franchise partner of <strong className="text-white">{SITE_CONFIG.franchisePartner}</strong>.
          </p>
          <p>
            By subscribing to, recharging, or utilizing any of our broadband services, you agree to be bound by these terms, prevailing Department of Telecommunications (DoT) guidelines, and applicable laws of India.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            2. Provision of Service & Feasibility
          </h2>
          <p>
            All connection requests are subject to physical technical feasibility, right-of-way (ROW) permissions, and optical line-of-sight conditions. Maruti Cable reserves the right to decline or postpone installation if local conditions or structural impediments prevent safe deployment of optical fiber drops or wireless antennas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            3. Subscriber KYC & Lawful Use
          </h2>
          <p>
            Every subscriber must furnish valid government-approved Proof of Identity (POI) and Proof of Address (POA) prior to activation. Subscribers agree strictly to utilize the internet bandwidth for lawful purposes. You shall not host, transmit, or distribute prohibited, defamatory, or anti-national content, nor engage in unauthorized commercial resale of bandwidth.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            4. Billing, Plans & Taxes
          </h2>
          <p>
            All subscription plans are prepaid and billed periodically. Standard plan rates are subject to applicable taxes as stipulated by Indian regulations. Plan renewals must be effected prior to expiry to ensure uninterrupted connectivity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            5. Customer Premises Equipment (CPE)
          </h2>
          <p>
            Optical Network Terminals (ONT), outdoor wireless transceivers, and optical patch cables supplied on loan remain the property of the provider unless purchased outright by the subscriber. The subscriber is responsible for maintaining the physical safety of equipment located at their premises.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            6. Service Availability & Maintenance
          </h2>
          <p>
            While Maruti Cable maintains 24×7 proactive network monitoring, service may be occasionally subject to outages resulting from road construction, severe weather, electric grid interruptions, or third-party fiber snags. Our local technician crew in Sindri is deployed during operational desk hours ({SITE_CONFIG.contact.officeHours}) to resolve local disruptions swiftly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            7. Grievance Redressal & Jurisdiction
          </h2>
          <p>
            Subscribers may lodge complaints through our helpline ({SITE_CONFIG.contact.phone}) or write to our Sindri office at <strong className="text-[#00E5FF]">{SITE_CONFIG.contact.email}</strong>. All disputes are subject to the exclusive jurisdiction of the competent courts in Dhanbad, Jharkhand, India.
          </p>
        </section>
      </div>
    </div>
  );
};
