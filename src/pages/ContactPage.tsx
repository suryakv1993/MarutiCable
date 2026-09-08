import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppLink, getTelLink, getMailtoLink, getGoogleMapsOfficeLink } from '../config/siteConfig';
import { MapPin, Phone, MessageSquare, Mail, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    area: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (!/^\+?[\d\s-]{10,14}$/.test(formData.mobile.trim())) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.area.trim()) errs.area = 'Area / Colony is required';
    if (!formData.message.trim()) errs.message = 'Please provide a message or inquiry';
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

    try {
      const existing = JSON.parse(localStorage.getItem('maruti_inquiries') || '[]');
      existing.push({
        ...formData,
        date: new Date().toISOString(),
        id: 'INQ-' + Date.now(),
      });
      localStorage.setItem('maruti_inquiries', JSON.stringify(existing));
    } catch {
      // Ignore storage restrictions if in private mode
    }

    const waMessage = `*Website Inquiry — Maruti Cable*
Name: ${formData.name}
Mobile: ${formData.mobile}${formData.email ? `\nEmail: ${formData.email}` : ''}${formData.area ? `\nArea: ${formData.area}` : ''}
Subject: ${formData.subject}
Message: ${formData.message || 'General inquiry'}`;

    const waUrl = getWhatsAppLink(waMessage);
    const opened = window.open(waUrl, '_blank');
    if (!opened) {
      setLoading(false);
      setSubmitError('WhatsApp was blocked by your browser. Please allow popups and try again, or call us directly.');
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-strong tracking-tight font-['Manrope']">
            Contact Maruti Cable
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">
            Have questions about new broadband installation, business leased lines, or account renewal? Visit our Sindri office or message our team directly.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Office Address Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-edge space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-0.5 rounded-full border border-[#00E5FF]/30">
                  Sindri Hub
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-ink-strong font-['Manrope']">
                  Registered Office
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-ink-soft leading-relaxed">
                  {SITE_CONFIG.contact.address.full}
                </p>
              </div>
              <div className="pt-1 text-xs text-ink-faint flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#19B5FE]" />
                <span>Proprietorship operated by {SITE_CONFIG.operatorName}</span>
              </div>
              <a
                href={getGoogleMapsOfficeLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.14] text-xs font-semibold text-ink-strong border border-edge hover:border-[#00E5FF]/50 transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#00E5FF]" />
                <span>View Office on Google Maps</span>
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-edge space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#19B5FE]/10 text-[#19B5FE] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-ink-strong font-['Manrope']">
                Office Hours
              </h3>
              <p className="text-sm font-semibold text-ink">
                {SITE_CONFIG.contact.officeHours}
              </p>
              <p className="text-xs text-ink-faint">
                Open every day of the week for in-person support and plan recharges.
              </p>
            </div>

            {/* Communication Channels Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-edge space-y-4">
              <h3 className="text-base font-bold text-ink-strong font-['Manrope']">
                Direct Contact Lines
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-ink-faint flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#19B5FE]" />
                    <span>Phone</span>
                  </span>
                  <a href={getTelLink()} className="text-ink-strong hover:text-[#00E5FF] font-semibold">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-ink-faint flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </span>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-semibold">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-ink-faint flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00E5FF]" />
                    <span>Email Support</span>
                  </span>
                  <a href={getMailtoLink()} className="text-ink-strong hover:text-[#00E5FF] font-medium">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-10 border border-edge-strong shadow-2xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-ink-strong font-['Manrope']">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-ink-faint mt-1">
                  Fill out your details below and our Sindri team will follow up promptly via phone or WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-strong font-['Manrope']">
                    Message Sent to WhatsApp
                  </h3>
                  <p className="text-sm text-ink-soft max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-ink-strong">{formData.name}</strong>. Your message regarding <strong className="text-ink-strong">{formData.subject}</strong> has been forwarded to our WhatsApp number <strong className="text-ink-strong">{SITE_CONFIG.contact.phone}</strong>. We will reach out to you on <strong className="text-ink-strong">{formData.mobile}</strong>.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLink(
                        `*Website Inquiry — Maruti Cable*\n👤 Name: ${formData.name}\n📱 Mobile: ${formData.mobile}\n📌 Subject: ${formData.subject}\n💬 Message: ${formData.message || 'General inquiry'}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-[#050816] text-xs font-bold hover:brightness-105 transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp ({SITE_CONFIG.contact.phone})</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          mobile: '',
                          email: '',
                          area: '',
                          subject: 'General Inquiry',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-xs font-semibold text-ink-strong transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {submitError && (
                    <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 leading-relaxed">
                      {submitError}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
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
                        placeholder="+91 98XXXXXXXX"
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
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-app border ${
                          errors.email ? 'border-red-400' : 'border-edge'
                        } text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                        Area / Colony in Sindri *
                      </label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="e.g. L-Type, Saharpura, Chasnala"
                        className={`w-full px-4 py-3 rounded-xl bg-app border ${
                          errors.area ? 'border-red-400' : 'border-edge'
                        } text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]`}
                      />
                      {errors.area && <p className="text-[11px] text-red-400 mt-1">{errors.area}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-app border border-edge text-ink-strong text-sm focus:outline-none focus:border-[#00E5FF]"
                    >
                      <option value="New Connection Inquiry">New Connection Inquiry</option>
                      <option value="Feasibility Check">Feasibility Check for My Address</option>
                      <option value="Plan Upgrade Request">Plan Upgrade Request</option>
                      <option value="Billing & Invoice Query">Billing & Invoice Query</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-soft uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query or connection requirements here..."
                      className={`w-full px-4 py-3 rounded-xl bg-app border ${
                        errors.message ? 'border-red-400' : 'border-edge'
                      } text-ink-strong placeholder-slate-500 text-sm focus:outline-none focus:border-[#00E5FF]`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-sm font-bold shadow-lg shadow-[#00E5FF]/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
