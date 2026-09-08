import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { SITE_CONFIG, getWhatsAppLink, getTelLink } from '../config/siteConfig';
import { leadService, NewConnectionRequest } from '../services/leadService';
import { CheckCircle2, ArrowRight, Phone, MessageSquare, Clock } from 'lucide-react';

export const NewConnectionPage: React.FC = () => {
  const { routeState } = useRouter();

  const [formData, setFormData] = useState<NewConnectionRequest>({
    name: '',
    mobile: '',
    area: '',
    pincode: '828122',
    serviceRequired: 'Fiber',
    selectedPlan: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successData, setSuccessData] = useState<{ referenceId: string; request: NewConnectionRequest } | null>(null);

  // Pre-fill state if navigated from a plan card or coverage checker
  useEffect(() => {
    if (routeState) {
      const updates: Partial<NewConnectionRequest> = {};
      if (routeState.planName && typeof routeState.planName === 'string') {
        updates.selectedPlan = routeState.planName;
      }
      if (routeState.category === 'air-fiber') {
        updates.serviceRequired = 'Air-Fiber';
      } else if (routeState.category === 'fiber') {
        updates.serviceRequired = 'Fiber';
      }
      if (routeState.serviceType === 'Air-Fiber') {
        updates.serviceRequired = 'Air-Fiber';
      }
      if (routeState.area && typeof routeState.area === 'string') {
        updates.area = routeState.area;
      }
      if (routeState.pincode && typeof routeState.pincode === 'string') {
        updates.pincode = routeState.pincode;
      }
      setFormData((prev) => ({ ...prev, ...updates }));
    }
  }, [routeState]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (!/^\+?[\d\s-]{10,14}$/.test(formData.mobile.trim())) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.area.trim()) errs.area = 'Area or Colony is required';
    if (!formData.pincode.trim() || !/^\d{6}$/.test(formData.pincode.trim())) {
      errs.pincode = 'Please enter a valid 6-digit PIN code';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitError('');
    setLoading(true);

    const response = leadService.submitNewConnection(formData);

    if (!response.success || !response.referenceId) {
      setLoading(false);
      setSubmitError('Something went wrong. Please call us or send a WhatsApp message directly.');
      return;
    }

    const refId = response.referenceId;
    setSuccessData({
      referenceId: refId,
      request: { ...formData },
    });

    const waMessage = `*New Connection Request — Maruti Cable*
Ref: #${refId}
Name: ${formData.name}
Mobile: ${formData.mobile}
Area: ${formData.area}
PIN: ${formData.pincode}
Service: ${formData.serviceRequired}
Plan: ${formData.selectedPlan || 'To be decided'}
${formData.message ? `Notes: ${formData.message}` : ''}

Please confirm line feasibility for my address.`;

    const waUrl = getWhatsAppLink(waMessage);
    const opened = window.open(waUrl, '_blank');
    if (!opened) {
      setSuccessData(null);
      setSubmitError(
        `WhatsApp was blocked by your browser. Allow popups and retry, or email your request to ${SITE_CONFIG.contact.email}.`
      );
    }
    setLoading(false);
  };

  return (
    <div className="py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Quick Onboarding
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Get a Maruti Cable Connection
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Fill in your premises details below. Our Sindri survey crew verifies fiber optical distance, checks spare splitter ports, and calls you back to schedule installation.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Form Column */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-7 sm:p-10 border border-edge-strong shadow-2xl">
              {successData ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                      Reference #{successData.referenceId}
                    </span>
                    <h2 className="text-2xl font-extrabold text-ink-strong mt-1 font-['Manrope']">
                      Connection Request Received
                    </h2>
                    <p className="text-sm text-ink-soft mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-ink-strong">{successData.request.name}</strong>. Our local technician desk in Sindri has registered your request for{' '}
                      <strong className="text-[#00E5FF]">{successData.request.serviceRequired}</strong> at{' '}
                      <strong className="text-ink-strong">{successData.request.area} (PIN {successData.request.pincode})</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-app border border-edge text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-ink-faint">Selected Plan:</span>
                      <span className="text-ink-strong font-medium">{successData.request.selectedPlan || 'To be finalized after survey'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-faint">Contact Number:</span>
                      <span className="text-ink-strong font-medium">{successData.request.mobile}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-faint">Estimated Feasibility Check:</span>
                      <span className="text-[#00E5FF] font-medium">Within 24 to 48 hours</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLink(
                        `*New Connection Request — Maruti Cable*\nRef: #${successData.referenceId}\nName: ${successData.request.name}\nMobile: ${successData.request.mobile}\nArea: ${successData.request.area}\nPIN: ${successData.request.pincode}\nService: ${successData.request.serviceRequired}\nPlan: ${successData.request.selectedPlan || 'To be decided'}\n${successData.request.message ? `Notes: ${successData.request.message}` : ''}\n\nPlease verify line feasibility for my address in Sindri.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-[#050816] text-xs font-bold shadow-md hover:brightness-105 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp ({SITE_CONFIG.contact.phone})</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSuccessData(null)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.14] text-xs font-semibold text-ink-strong transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-app border ${
                          errors.name ? 'border-red-400' : 'border-edge'
                        } text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="+91 9431X XXXXX"
                        className={`w-full px-4 py-3 rounded-xl bg-app border ${
                          errors.mobile ? 'border-red-400' : 'border-edge'
                        } text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]`}
                      />
                      {errors.mobile && <p className="text-[11px] text-red-400 mt-1">{errors.mobile}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                        Area / Colony in Sindri / Dhanbad *
                      </label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="e.g. L-Type Colony, Saharpura, Sudamdih"
                        className={`w-full px-4 py-3 rounded-xl bg-app border ${
                          errors.area ? 'border-red-400' : 'border-edge'
                        } text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]`}
                      />
                      {errors.area && <p className="text-[11px] text-red-400 mt-1">{errors.area}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                        6-digit PIN Code *
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                        placeholder="828122"
                        className={`w-full px-4 py-3 rounded-xl bg-app border ${
                          errors.pincode ? 'border-red-400' : 'border-edge'
                        } text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]`}
                      />
                      {errors.pincode && <p className="text-[11px] text-red-400 mt-1">{errors.pincode}</p>}
                    </div>
                  </div>

                  {/* Service Required: Fiber, Air-Fiber, Not sure */}
                  <div>
                    <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-2">
                      Service Required *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['Fiber', 'Air-Fiber', 'Not sure'] as const).map((opt) => {
                        const selected = formData.serviceRequired === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, serviceRequired: opt })}
                            className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                              selected
                                ? 'bg-[#00E5FF]/15 border-[#00E5FF] text-white shadow-sm'
                                : 'bg-app border-edge text-ink-faint hover:text-ink-strong'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Plan: Optional */}
                  <div>
                    <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                      Interested Plan (Optional)
                    </label>
                    <select
                      value={formData.selectedPlan}
                      onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong text-sm focus:outline-none focus:border-[#00E5FF]"
                    >
                      <option value="">-- Let technician suggest best plan during survey --</option>
                      <optgroup label="Fiber Broadband (FTTH)">
                        {SITE_CONFIG.fiberPlans.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} — {p.speedMbps} Mbps (₹{p.monthlyPrice}/mo)
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Air-Fiber Fixed Wireless">
                        {SITE_CONFIG.airFiberPlans.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} — {p.speedMbps} Mbps (₹{p.monthlyPrice}/mo)
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Message: Optional */}
                  <div>
                    <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                      Specific Location Note / Nearest Landmark (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Near Market Gate, House No., Building Name, or Floor Number"
                      className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>

                  <div className="pt-2">
                    {submitError && (
                      <p className="mb-3 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 leading-relaxed">
                        {submitError}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-sm font-bold shadow-xl shadow-[#00E5FF]/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{loading ? 'Submitting Request...' : 'Request a Connection'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Sidebar: Timeline & Verification Notice */}
          <div className="lg:col-span-4 space-y-5">
            <div className="glass-card rounded-3xl p-6 border border-edge space-y-4">
              <h3 className="text-sm font-bold text-ink-strong uppercase tracking-wider font-['Manrope']">
                What Happens Next?
              </h3>

              <div className="space-y-3.5 text-xs text-ink-soft">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0 font-bold text-[10px]">
                    1
                  </span>
                  <p>Our Sindri dispatch desk reviews fiber optical line distance to your premise.</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0 font-bold text-[10px]">
                    2
                  </span>
                  <p>A technician calls to confirm your location and verify installation feasibility.</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0 font-bold text-[10px]">
                    3
                  </span>
                  <p>On-site installation and router Wi-Fi configuration with full live speed test.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 border border-edge space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-ink-strong">
                <Clock className="w-4 h-4 text-[#00E5FF]" />
                <span>Typical Setup Timeframe</span>
              </div>
              <p className="text-xs text-ink-faint leading-relaxed">
                Feasible fiber connections are typically installed between <strong>same day to 3 working days</strong>.
              </p>
              <div className="pt-2 border-t border-edge text-[11px] text-ink-faint">
                {SITE_CONFIG.timelineDisclaimer}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-white/[0.03] border border-edge text-center">
              <span className="text-xs text-ink-faint block mb-1">Prefer to talk directly?</span>
              <a
                href={getTelLink()}
                className="text-xs font-bold text-[#00E5FF] hover:underline inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call {SITE_CONFIG.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
