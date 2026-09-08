import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink, getTelLink, getGoogleMapsOfficeLink } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import {
  CreditCard,
  QrCode,
  Building2,
  MapPin,
  ShieldCheck,
  Copy,
  ExternalLink,
  Phone,
  MessageSquare,
  AlertTriangle,
  FileText,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';

export const PayBillPage: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedPlanCategory, setSelectedPlanCategory] = useState<'fiber' | 'air-fiber'>('fiber');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('fiber-50');
  const [selectedCycle, setSelectedCycle] = useState<'1' | '3' | '6' | '12'>('1');

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const activePlans =
    selectedPlanCategory === 'fiber' ? SITE_CONFIG.fiberPlans : SITE_CONFIG.airFiberPlans;
  const currentPlan =
    activePlans.find((p) => p.id === selectedPlanId) || activePlans[0];

  const cycleMonths = parseInt(selectedCycle, 10);
  const totalAmount = currentPlan ? currentPlan.monthlyPrice * cycleMonths : 0;
  const effectiveMonthly = Math.round(totalAmount / cycleMonths);

  return (
    <div className="py-12">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#00E5FF] transition-colors">
              Home
            </Link>
            <span>&rsaquo;</span>
            <span className="text-white font-medium">Pay your bill</span>
          </nav>

          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Secure Payment Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
            Pay Your Bill
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Online, by UPI or at our office, whichever suits you. A receipt is issued for every payment.
          </p>
        </div>
      </section>

      {/* 4 Main Payment Modes Grid (from legacy pay.html) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARD 1: Pay Online (Cashfree Payments Checkout) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-7 sm:p-8 border-2 border-[#00E5FF]/40 shadow-xl shadow-[#00E5FF]/10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#19B5FE] to-[#00E5FF] text-[#050816] flex items-center justify-center font-bold shadow-md shadow-[#00E5FF]/20">
                  <CreditCard className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                  Instant Auto-Recharge
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white font-['Manrope'] mb-2">
                Pay online
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Pay by UPI, debit card, credit card or net banking. A receipt is issued immediately after payment.
              </p>

              <div className="p-4 rounded-2xl bg-[#050816]/80 border border-white/10 mb-6 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>
                    Opens on our own secure checkout, processed by <strong>Cashfree Payments</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-amber-300/90 leading-relaxed pt-2 border-t border-white/5">
                  <span className="font-semibold shrink-0">Note:</span>
                  <span>
                    Payment karte samay apna <strong>registered mobile number</strong> or <strong>customer ID</strong> mention karein so that the amount can be credited to your account without delay.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={SITE_CONFIG.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-sm font-bold shadow-lg shadow-[#00E5FF]/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Open Secure Payment Page</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-400">
                Processed over 256-bit encrypted checkout (UPI / Cards / Net Banking)
              </p>
            </div>
          </motion.div>

          {/* CARD 2: Pay by UPI */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="glass-card rounded-3xl p-7 sm:p-8 border border-white/15 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-bold border border-[#25D366]/30">
                  <QrCode className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                  Zero Extra Fees
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white font-['Manrope'] mb-2">
                Pay by UPI
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Pay from Google Pay, PhonePe, Paytm, BHIM, or any UPI app to our registered number:
              </p>

              {/* UPI Pill */}
              <div className="p-4 rounded-2xl bg-[#050816] border border-[#25D366]/30 flex items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Registered Mobile / UPI VPA
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#25D366]">
                    {SITE_CONFIG.contact.phone}
                  </span>
                  <span className="text-xs font-mono text-slate-400 block mt-0.5">
                    UPI ID: {SITE_CONFIG.upi.vpa}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(SITE_CONFIG.contact.phoneRaw, 'upi')}
                  className="px-3 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white transition-all flex items-center gap-1.5 shrink-0"
                >
                  <Copy className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>{copiedField === 'upi' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 leading-relaxed mb-6">
                After paying, please send the screenshot on{' '}
                <a
                  href={getWhatsAppLink('Hi, I made a UPI payment of my broadband bill. Here is my payment screenshot.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-bold hover:underline"
                >
WhatsApp ({SITE_CONFIG.contact.phone})
                </a>{' '}
                so that we can update your account immediately.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppLink('Hi Sunil Kumar / Maruti Cable, I want to confirm my UPI payment for broadband recharge.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-[#050816] text-xs font-bold hover:brightness-105 active:scale-95 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Screenshot on WhatsApp</span>
              </a>
              <a
                href={SITE_CONFIG.upi.qrPayload}
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white border border-white/10 transition-all"
              >
                <span>Open UPI App</span>
              </a>
            </div>
          </motion.div>

          {/* CARD 3: Bank Transfer / NEFT / IMPS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="glass-card rounded-3xl p-7 sm:p-8 border border-white/15 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#6C63FF]/15 text-[#6C63FF] flex items-center justify-center font-bold border border-[#6C63FF]/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/[0.06] text-slate-300">
                  Commercial & Net Banking
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white font-['Manrope'] mb-2">
                Bank transfer / NEFT / IMPS
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Transfer directly to our official ICICI Bank account:
              </p>

              <div className="space-y-2.5 p-4 rounded-2xl bg-[#050816] border border-white/10 text-xs">
                <div className="flex justify-between items-start py-1 border-b border-white/5">
                  <span className="text-slate-400">Account Name</span>
                  <span className="text-right">
                    <strong className="text-white block font-medium">Sunil Kumar</strong>
                    <span className="text-[11px] text-slate-400">Proprietor, M/s Maruti Cable</span>
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Bank</span>
                  <span className="text-white font-medium">ICICI Bank Ltd.</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Branch</span>
                  <span className="text-slate-300">Dhanbad (Shastri Nagar, Bank More)</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Account Number</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono font-bold text-sm">{SITE_CONFIG.bankDetails.accountNumber}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(SITE_CONFIG.bankDetails.accountNumber, 'acc')}
                      className="p-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-slate-300 hover:text-white transition-colors"
                      title="Copy Account Number"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400">IFSC Code</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00E5FF] font-mono font-bold text-sm">{SITE_CONFIG.bankDetails.ifsc}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(SITE_CONFIG.bankDetails.ifsc, 'ifsc')}
                      className="p-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-slate-300 hover:text-white transition-colors"
                      title="Copy IFSC Code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {copiedField && (
                <div className="mt-2 text-[11px] text-emerald-400 text-center font-medium">
                  {copiedField === 'acc' ? 'Account number copied!' : copiedField === 'ifsc' ? 'IFSC code copied!' : ''}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-3">
              <p className="text-xs text-slate-300">
                Please send us the <strong>UTR number</strong> on WhatsApp after the transfer so that your account is updated immediately.
              </p>
              <a
                href={getWhatsAppLink('Hi Sunil Kumar / Maruti Cable, I have completed a bank transfer (NEFT/IMPS) for my broadband. Here is my UTR reference: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white border border-white/10 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Submit UTR on WhatsApp ({SITE_CONFIG.contact.phone})</span>
              </a>
            </div>
          </motion.div>

          {/* CARD 4: Pay at Our Office (Cash) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="glass-card rounded-3xl p-7 sm:p-8 border border-white/15 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold border border-amber-500/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-300">
                  In-Person Support
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-white font-['Manrope'] mb-2">
                Pay at our office
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Cash payments are accepted at our Sindri office. A receipt is issued for every payment &mdash; please always collect it.
              </p>

              <div className="p-4 rounded-2xl bg-[#050816] border border-white/10 space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    QR No. L/148, L-Type Colony, Sindri, Block Jharia, Dhanbad, Jharkhand &ndash; 828122
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 pt-2 border-t border-white/5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>9:30 AM &ndash; 8:30 PM (Mon&ndash;Sun)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-[#19B5FE] shrink-0" />
                  <a href={getTelLink()} className="text-white hover:underline">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getGoogleMapsOfficeLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white border border-white/10 transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#00E5FF]" />
                <span>View Office on Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cashfree Payments Checkout Banner Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0F1D38] to-[#070D1F] border border-[#00E5FF]/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The payment page opens on our own secure checkout, processed by <strong>Cashfree Payments</strong>. You may pay by UPI, debit card, credit card or net banking. A reference number is shown on screen as soon as the payment completes &mdash; please keep it for your records.
          </p>
        </div>
      </section>

      {/* Interactive Renewal & Recharge Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="glass-card rounded-3xl p-7 sm:p-10 border border-white/15 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-2">
              Plan Renewal Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
              Calculate Your Plan Advance
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select your connection category, plan speed, and advance billing duration to see exact payable amount.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Category Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. Service Type
                </label>
                <div className="inline-flex p-1.5 rounded-2xl bg-[#050816] border border-white/10 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPlanCategory('fiber');
                      setSelectedPlanId('fiber-50');
                    }}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedPlanCategory === 'fiber'
                        ? 'bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Fiber Broadband (FTTH)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPlanCategory('air-fiber');
                      setSelectedPlanId('air-30');
                    }}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedPlanCategory === 'air-fiber'
                        ? 'bg-gradient-to-r from-[#6C63FF] to-[#19B5FE] text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Air-Fiber Wireless
                  </button>
                </div>
              </div>

              {/* Plan Options */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. Select Plan Speed
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {activePlans.map((plan) => {
                    const isSelected = plan.id === selectedPlanId;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-white shadow-sm'
                            : 'bg-[#050816] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="text-lg font-extrabold font-['Manrope'] text-white">
                          {plan.speedMbps}{' '}
                          <span className="text-xs font-normal text-[#00E5FF]">Mbps</span>
                        </div>
                        <div className="text-xs text-slate-300 font-medium mt-0.5">₹{plan.monthlyPrice}/mo</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Advance Billing Cycle */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Billing Cycle Duration
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: '1', label: '1 Month', desc: 'Standard Monthly' },
                    { id: '3', label: '3 Months', desc: 'Quarterly' },
                    { id: '6', label: '6 Months', desc: 'Half-Yearly' },
                    { id: '12', label: '12 Months', desc: 'Full Year' },
                  ].map((cycle) => {
                    const isSelected = selectedCycle === cycle.id;
                    return (
                      <button
                        key={cycle.id}
                        type="button"
                        onClick={() => setSelectedCycle(cycle.id as '1' | '3' | '6' | '12')}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'bg-[#19B5FE] text-[#050816] font-bold border-[#19B5FE] shadow-md shadow-[#19B5FE]/20'
                            : 'bg-[#050816] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className={`text-sm font-extrabold ${isSelected ? 'text-[#050816]' : 'text-white'}`}>
                          {cycle.label}
                        </div>
                        <div className={`text-[10px] ${isSelected ? 'text-[#050816]/80' : 'text-slate-400'}`}>
                          {cycle.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Calculated Summary Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#050816] border border-white/15 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Total Payable Amount
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] font-semibold">
                    {currentPlan?.name}
                  </span>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-['Manrope']">
                      ₹{totalAmount}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      for {cycleMonths} {cycleMonths === 1 ? 'month' : 'months'}
                    </span>
                  </div>
                  {cycleMonths > 1 && (
                    <p className="text-xs text-[#00E5FF] font-medium mt-1">
                      Effective ₹{effectiveMonthly} per month
                    </p>
                  )}
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-white/5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Allocated Speed:</span>
                    <span className="text-white font-semibold">{currentPlan?.speedMbps} Mbps Symmetric</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Data Allowance:</span>
                    <span className="text-white font-semibold">Truly Unlimited FTTH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Support Level:</span>
                    <span className="text-white font-semibold">Local Sindri Crew Dispatch</span>
                  </div>
                </div>

                <div className="pt-3 space-y-2">
                  <a
                    href={SITE_CONFIG.paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>Proceed to Pay ₹{totalAmount}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={getWhatsAppLink(
                      `Hi Sunil Kumar / Maruti Cable, I want to renew my ${currentPlan?.name} plan for ${cycleMonths} month(s) (₹${totalAmount}). Please confirm account details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Renew via WhatsApp ({SITE_CONFIG.contact.phone})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help with a Payment Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-7 sm:p-8 rounded-3xl bg-[#0B1224] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white font-['Manrope']">
              Need help with a payment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Money debited but the plan not renewed? Call or message us with the transaction reference and we will trace it and set it right.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={getTelLink()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white border border-white/15 transition-all"
            >
              <Phone className="w-4 h-4 text-[#00E5FF]" />
              <span>{SITE_CONFIG.contact.phone}</span>
            </a>
            <a
              href={getWhatsAppLink('Hi, my payment was debited but plan is not yet active. Transaction reference: ')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-[#050816] text-xs font-bold hover:brightness-105 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </section>

      {/* Billing, In Plain Terms Section (from legacy pay.html) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
            Billing, in plain terms
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Transparent policies, clear receipts, zero hidden conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white font-['Manrope']">
              Advance billing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Broadband is billed in advance for the cycle you choose &mdash; monthly, quarterly, half-yearly or yearly. The service stays active for the full paid period.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white font-['Manrope']">
              Receipt for every payment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A payment receipt is issued each time. Businesses that need an invoice for their records can ask us for one.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white font-['Manrope']">
              Renewal reminder
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We message you before your plan expires. If payment is delayed the connection is suspended, not disconnected, for a short grace period.
            </p>
          </div>
        </div>
      </section>

      {/* Anti-Fraud Security Notice (from legacy pay.html) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-7 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Security & Anti-Fraud Advisory</h4>
            <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              {SITE_CONFIG.securityAdvisory}
            </p>
          </div>
        </div>
      </section>

      {/* Self-KYC Portal link & Policy References */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-7 rounded-3xl bg-[#050816] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#00E5FF] shrink-0" />
            <span>
              New subscriber? Complete your KYC online at the{' '}
              <a
                href={SITE_CONFIG.selfKycUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E5FF] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Xpress Fiber Self-KYC Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/refund" className="hover:text-white transition-colors">
              Refund &amp; Cancellation Policy &rsaquo;
            </Link>
            <Link to="/service-delivery" className="hover:text-white transition-colors">
              Service Delivery Policy &rsaquo;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
