import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const RefundPage: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
          Customer Protection
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
          Refund & Cancellation Policy
        </h1>
        <p className="mt-2 text-xs text-ink-faint">
          Last Updated: March 2025 • Official policy regarding broadband recharges, deposits, and new connections
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-edge space-y-8 text-ink-soft text-xs sm:text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            1. New Connection Feasibility Refunds
          </h2>
          <p>
            When you request a new FTTH or Air-Fiber installation, a site feasibility inspection is conducted by our Sindri field technicians. If, due to technical constraints (such as lack of optical splitter ports, excessive optical loss over distance, or lack of wireless line-of-sight), Maruti Cable is unable to commission your connection, <strong className="text-ink-strong">100% of any advance booking or installation deposit paid will be refunded</strong> to your original payment account within 5 to 7 working days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            2. Active Prepaid Subscriptions
          </h2>
          <p>
            Broadband subscriptions are prepaid services. Once an optical connection is commissioned, tested, and handed over to the subscriber, or once an existing active plan has been successfully recharged and bandwidth consumed, <strong className="text-ink-strong">subscription charges for that active billing period are non-refundable</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            3. Erroneous Recharges / Double Debits
          </h2>
          <p>
            In the event of an inadvertent duplicate transaction or technical payment gateway failure where funds were debited more than once for a single monthly renewal, the excess payment will be:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-ink-faint">
            <li>Credited towards the subsequent billing cycle at subscriber's option; or</li>
            <li>Refunded back to the customer's bank/UPI account upon verification within 7 working days.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            4. Service Cancellation & Equipment Return
          </h2>
          <p>
            Subscribers wishing to terminate service may submit a written cancellation request via email to <strong className="text-[#00E5FF]">{SITE_CONFIG.contact.email}</strong> or visit our Sindri office with at least 7 days notice prior to the start of the next billing cycle.
          </p>
          <p>
            Any security deposit collected on Optical Network Terminal (ONT) or Air-Fiber outdoor units will be refunded after the equipment is safely retrieved and inspected by our local technician.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-ink-strong font-['Manrope']">
            5. Dispute & Refund Helpdesk
          </h2>
          <p>
            To track the status of a refund or raise a billing dispute, contact our accounts desk directly:
          </p>
          <div className="p-4 rounded-xl bg-app border border-edge space-y-1 text-xs">
            <div><strong className="text-ink-strong">Maruti Cable Billing & Refunds Desk</strong></div>
            <div>Phone: {SITE_CONFIG.contact.phone}</div>
            <div>Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#00E5FF] hover:underline">{SITE_CONFIG.contact.email}</a></div>
            <div>Registered Office: {SITE_CONFIG.contact.address.full}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
