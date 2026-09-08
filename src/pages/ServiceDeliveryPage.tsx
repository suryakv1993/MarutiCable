import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { AlertTriangle } from 'lucide-react';

export const ServiceDeliveryPage: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
          Service Standards
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Manrope']">
          Service Delivery Policy
        </h1>
        <p className="mt-2 text-xs text-slate-400">
          Last Updated: March 2025 • Operational fulfillment benchmarks and commissioning guidelines
        </p>
      </div>

      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
        {/* Timeline Benchmark Cards */}
        <section className="space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            1. Operational Delivery Timelines
          </h2>
          <p>
            Maruti Cable aims to fulfill service requests with maximum speed through our locally stationed Sindri technical crew. The following benchmarks represent our standard operating timeframes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {SITE_CONFIG.serviceTimelines.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#050816] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-['Manrope']">{item.service}</span>
                  <span className="text-xs font-mono font-bold text-[#00E5FF]">{item.timeframe}</span>
                </div>
                <p className="text-xs text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 mt-4">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="text-amber-200">Condition of Timelines: </strong>
              {SITE_CONFIG.timelineDisclaimer}
            </div>
          </div>
        </section>

        {/* Installation & Delivery Process */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            2. Commissioning & Acceptance Protocol
          </h2>
          <p>
            A connection is deemed successfully delivered and commissioned only when all of the following steps have been completed:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li><strong>Optical Drop Cable Laying:</strong> Deployment of armored optical drop cable from the nearest local distribution box to the customer's premise.</li>
            <li><strong>ONT / Router Setup:</strong> Splicing, patch cord termination, and powering of the Optical Network Terminal (ONT).</li>
            <li><strong>SSID & Wi-Fi Security:</strong> Configuration of the customer's dual-band or single-band wireless credentials.</li>
            <li><strong>Live Speed Verification:</strong> Live speed test conducted in the presence of the subscriber confirming the subscribed bandwidth tier.</li>
            <li><strong>Digital or Physical Acknowledgement:</strong> Customer signature or verification OTP confirming functional handover.</li>
          </ul>
        </section>

        {/* Plan Recharge & Renewal SLA */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            3. Account Renewal & Recharge SLA
          </h2>
          <p>
            For existing active subscribers, renewal orders processed through our online gateway or at our registered office are synchronized to the local authentication servers <strong className="text-white">within 30 minutes of payment confirmation</strong>. If your router was powered off during recharge, a single power reboot of the ONT will re-establish active authentication immediately.
          </p>
        </section>

        {/* Support & Field Escalations */}
        <section className="space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
            4. Service Delivery Inquiries
          </h2>
          <p>
            For inquiries regarding pending installations, site surveys, or technician visit schedules in Sindri, contact:
          </p>
          <div className="p-4 rounded-xl bg-[#050816] border border-white/5 space-y-1 text-xs">
            <div><strong className="text-white">Maruti Cable Service Delivery Desk</strong></div>
            <div>Helpline: {SITE_CONFIG.contact.phone}</div>
            <div>WhatsApp: {SITE_CONFIG.contact.phone}</div>
            <div>Operational Hours: {SITE_CONFIG.contact.officeHours}</div>
            <div>Office Address: {SITE_CONFIG.contact.address.full}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
