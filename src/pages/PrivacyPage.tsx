import React from 'react';
import { SITE_CONFIG, getTelLink } from '../config/siteConfig';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
          Subscriber Privacy
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-ink-faint">
          Last Updated: March 2025 • Governing the handling of subscriber information at Maruti Cable
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-edge space-y-8 text-ink-soft text-xs sm:text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            1. Overview & Commitment
          </h2>
          <p>
            Maruti Cable, operated by <strong className="text-ink-strong">{SITE_CONFIG.operatorName}</strong> in Sindri, Dhanbad, values the privacy of every subscriber. This Privacy Policy details how we collect, process, store, and safeguard your personal records in accordance with Indian telecom licensing regulations and the Digital Personal Data Protection (DPDP) Act.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            2. Data We Collect
          </h2>
          <p>We collect only the minimum required information to provide broadband services:</p>
          <ul className="list-disc pl-5 space-y-1 text-ink-faint">
            <li><strong>KYC Documents:</strong> Name, mobile phone number, residential address, and government-issued identity cards (e.g., Aadhaar, Voter Card) required by telecom mandates.</li>
            <li><strong>Installation Data:</strong> Geographic location, colony/building address, and optical drop routing records.</li>
            <li><strong>Billing Data:</strong> Transaction references, plan selections, and renewal receipts. (We do not store your raw credit/debit card details or UPI PINs).</li>
            <li><strong>Technical Session Logs:</strong> Dynamic IP allocation records and connection session timestamps as statutorily required under DoT and TRAI regulations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            3. How We Use Your Information
          </h2>
          <p>Your information is used strictly for:</p>
          <ul className="list-disc pl-5 space-y-1 text-ink-faint">
            <li>Provisioning and activating optical fiber and Air-Fiber connections.</li>
            <li>Field technician dispatch and physical maintenance in your Sindri colony.</li>
            <li>Account renewal confirmations and service disruption SMS/WhatsApp notices.</li>
            <li>Mandatory regulatory compliance and security audits by statutory authorities.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            4. Non-Disclosure & Third Parties
          </h2>
          <p>
            We do not sell, rent, or trade your personal data to marketing third parties. Data is shared only with our upstream franchise infrastructure partner (<strong className="text-ink-strong">{SITE_CONFIG.franchisePartner}</strong>) to establish network routing, and with law enforcement agencies when legally required through appropriate official warrants.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            5. Contacting the Maruti Cable Desk
          </h2>
          <p>
            For inquiries regarding personal data records or to update your contact details, please contact:
          </p>
          <div className="p-4 rounded-xl bg-app border border-edge space-y-1 text-xs">
            <div><strong className="text-ink-strong">Maruti Cable Office Desk</strong></div>
            <div>Operator: {SITE_CONFIG.operatorName}</div>
            <div>Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#00E5FF] hover:underline">{SITE_CONFIG.contact.email}</a></div>
            <div>Phone: <a href={getTelLink()} className="text-[#00E5FF] hover:underline">{SITE_CONFIG.contact.phone}</a></div>
            <div>Address: {SITE_CONFIG.contact.address.full}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
