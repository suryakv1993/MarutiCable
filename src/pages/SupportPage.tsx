import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink, getTelLink, getMailtoLink } from '../config/siteConfig';
import { FAQAccordion } from '../components/FAQAccordion';
import { Phone, MessageSquare, Mail, CheckCircle2, ArrowRight, Send } from 'lucide-react';

export const SupportPage: React.FC = () => {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    mobile: '',
    subscriberId: '',
    colony: '',
    issueType: 'Red Light / Optical LOS',
    description: '',
  });
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.mobile || !ticketForm.colony) {
      setFormError('Please provide your name, mobile number, and colony location.');
      return;
    }
    setFormError('');
    setLoading(true);
    
    const waMessage = `*Line Maintenance & Support Ticket — Maruti Cable*
Name: ${ticketForm.name}
Mobile: ${ticketForm.mobile}${ticketForm.subscriberId ? `\nSub ID: ${ticketForm.subscriberId}` : ''}
Area / Colony: ${ticketForm.colony}
Issue: ${ticketForm.issueType}
Details: ${ticketForm.description || 'Line inspection requested'}`;

    const waUrl = getWhatsAppLink(waMessage);
    const opened = window.open(waUrl, '_blank');
    if (!opened) {
      setLoading(false);
      setFormError('WhatsApp was blocked by your browser. Please open the WhatsApp chat button below, or call us directly.');
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setTicketSubmitted(true);
    }, 400);
  };

  return (
    <div className="py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Customer Helpdesk & Grievance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            We're Here When You Need Us
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Direct access to local technicians and support coordinators in Sindri. Reach out by phone, WhatsApp, ticket form, or our formal grievance desk.
          </p>
        </div>
      </section>

      {/* Main 3 Direct Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl p-7 border border-edge flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#19B5FE]/10 text-[#19B5FE] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ink-strong font-['Manrope'] mb-1">Direct Helpline</h3>
              <p className="text-xl font-bold text-ink-strong mb-2">{SITE_CONFIG.contact.phone}</p>
              <p className="text-xs text-ink-faint leading-relaxed">
                Available daily from {SITE_CONFIG.contact.officeHours} for urgent connectivity issues and inquiries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-edge">
              <a
                href={getTelLink()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#19B5FE] hover:underline"
              >
                <span>Call Technician Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7 border border-edge flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ink-strong font-['Manrope'] mb-1">WhatsApp Chat</h3>
              <p className="text-xl font-bold text-ink-strong mb-2">Fastest Messaging</p>
              <p className="text-xs text-ink-faint leading-relaxed">
                Send photos of your router lights or share live location pin for rapid lineman dispatch.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-edge">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7 border border-edge flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-ink-strong font-['Manrope'] mb-1">Email Support</h3>
              <p className="text-sm font-semibold text-[#00E5FF] mb-1">{SITE_CONFIG.contact.email}</p>
              <p className="text-xs text-ink-faint leading-relaxed">
                Send billing inquiries, plan change requests, or official documentation anytime.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-edge">
              <a
                href={getMailtoLink()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:underline"
              >
                <span>Email Support Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Report a Problem / Service Ticket Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-edge-strong shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-2">
              Subscriber Service Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-strong font-['Manrope']">
              Report a Problem or Request Line Maintenance
            </h2>
            <p className="text-xs sm:text-sm text-ink-faint mt-1">
              Submit details directly to our on-duty technician queue on WhatsApp ({SITE_CONFIG.contact.phone}) in Sindri.
            </p>
          </div>

          {ticketSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-ink-strong font-['Manrope']">
                Ticket Forwarded to WhatsApp
              </h3>
              <p className="text-sm text-ink-soft max-w-md mx-auto">
                Thank you, <strong className="text-ink-strong">{ticketForm.name}</strong>. Your report regarding <strong className="text-ink-strong">{ticketForm.issueType}</strong> at {ticketForm.colony} has been forwarded to our WhatsApp helpline <strong className="text-ink-strong">{SITE_CONFIG.contact.phone}</strong>. A local technician will attend to your line promptly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink(
                    `*Line Maintenance & Support Ticket — Maruti Cable*\n👤 Name: ${ticketForm.name}\n📱 Mobile: ${ticketForm.mobile}\n📍 Colony: ${ticketForm.colony}\n⚠️ Issue: ${ticketForm.issueType}\n📝 Notes: ${ticketForm.description || 'Line inspection requested'}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-[#050816] text-xs font-bold hover:brightness-105 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Technician on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setTicketSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-xs font-semibold text-ink-strong transition-colors"
                >
                  Submit Another Report
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              {formError && (
                <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 leading-relaxed">
                  {formError}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={ticketForm.mobile}
                    onChange={(e) => setTicketForm({ ...ticketForm, mobile: e.target.value })}
                    placeholder="+91 98XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                    Area / Colony in Sindri *
                  </label>
                  <input
                    type="text"
                    required
                    value={ticketForm.colony}
                    onChange={(e) => setTicketForm({ ...ticketForm, colony: e.target.value })}
                    placeholder="e.g. L-Type Colony, Saharpura, Chasnala"
                    className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                    Issue Category
                  </label>
                  <select
                    value={ticketForm.issueType}
                    onChange={(e) => setTicketForm({ ...ticketForm, issueType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong text-sm focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="Red Light / Optical LOS">Red Light on Router (Optical LOS Alert)</option>
                    <option value="Fiber Wire Physical Cut">Physical Fiber Wire Cut / Tree Fall</option>
                    <option value="Slow Speed or Latency">Speed / Latency Check Required</option>
                    <option value="Router / Wi-Fi Password Issue">Router / Wi-Fi Reconfiguration</option>
                    <option value="Relocation / Address Shift">Address Shift / Relocation</option>
                    <option value="Billing / Receipt Query">Billing or Payment Receipt Query</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                  Detailed Notes / Landmark
                </label>
                <textarea
                  rows={3}
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                  placeholder="Describe your issue or nearest landmark so technician can locate quickly..."
                  className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-ink-faint">
                  Sindri technician queue active 9:30 AM – 8:30 PM
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Submitting...' : 'Submit Service Ticket'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion />
    </div>
  );
};
