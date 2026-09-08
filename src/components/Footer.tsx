import React from 'react';
import { Link } from '../context/RouterContext';
import { SITE_CONFIG, getGoogleMapsOfficeLink } from '../config/siteConfig';
import { Wifi, MapPin, Phone, Mail, Clock, ShieldCheck, FileText, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#030611] border-t border-edge text-ink-faint relative overflow-hidden">
      {/* Subtle top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Col (2 cols wide on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#19B5FE] to-[#6C63FF] p-[1.5px]">
                <div className="w-full h-full bg-[#070D1F] rounded-[10px] flex items-center justify-center">
                  <Wifi className="w-4 h-4 text-[#00E5FF]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-ink-strong font-['Manrope']">
                  MARUTI <span className="text-[#00E5FF]">CABLE</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-ink-faint font-medium -mt-0.5">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-ink-soft leading-relaxed max-w-sm">
              Sindri-based broadband service firm operated by <span className="text-ink-strong font-medium">{SITE_CONFIG.operatorName}</span>. 
              Authorised franchise partner of <span className="text-[#00E5FF] font-medium">{SITE_CONFIG.franchisePartner}</span>, 
              connecting homes, local enterprises, and digital learning across Sindri and surrounding Dhanbad since {SITE_CONFIG.servingSince}.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-ink-faint">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#19B5FE] shrink-0" />
                <span>Authorised Xpress Fiber Franchise Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Udyam Reg: <span className="font-mono text-ink-soft">{SITE_CONFIG.udyamRegistration}</span></span>
              </div>
            </div>
          </div>

          {/* Col 1: Services */}
          <div>
            <p className="text-xs font-bold text-ink-strong uppercase tracking-wider mb-4 font-['Manrope']">
              Services
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/broadband" className="hover:text-[#00E5FF] transition-colors flex items-center gap-1">
                  Fiber Broadband
                </Link>
              </li>
              <li>
                <Link to="/air-fiber" className="hover:text-[#00E5FF] transition-colors">
                  Air-Fiber Wireless
                </Link>
              </li>
              <li>
                <Link to="/new-connection" className="hover:text-[#00E5FF] transition-colors">
                  Get New Connection
                </Link>
              </li>
              <li>
                <Link to="/pay-bill" className="hover:text-[#00E5FF] transition-colors">
                  Pay Bill / Renew
                </Link>
              </li>
              <li>
                <Link to="/coverage" className="hover:text-[#00E5FF] transition-colors">
                  Check Availability
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Company & Support */}
          <div>
            <p className="text-xs font-bold text-ink-strong uppercase tracking-wider mb-4 font-['Manrope']">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#00E5FF] transition-colors">
                  About Maruti Cable
                </Link>
              </li>
              <li>
                <Link to="/coverage" className="hover:text-[#00E5FF] transition-colors">
                  Coverage Areas
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#00E5FF] transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00E5FF] transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link to="/service-delivery" className="hover:text-[#00E5FF] transition-colors">
                  Service Timelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Office */}
          <div>
            <p className="text-xs font-bold text-ink-strong uppercase tracking-wider mb-4 font-['Manrope']">
              Sindri Office
            </p>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-ink-soft block">
                    {SITE_CONFIG.contact.address.full}
                  </span>
                  <a
                    href={getGoogleMapsOfficeLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#00E5FF] hover:underline font-semibold text-[11px] mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#19B5FE] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^+\d]/g, '')}`}
                  className="text-ink-soft hover:text-ink-strong transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-ink-soft hover:text-ink-strong transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-ink-faint shrink-0" />
                <span>{SITE_CONFIG.contact.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-faint">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
            <Link to="/terms" className="hover:text-ink transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-ink transition-colors">
              Refund & Cancellation
            </Link>
            <Link to="/service-delivery" className="hover:text-ink transition-colors">
              Service Delivery Policy
            </Link>
          </div>

          <div className="text-center md:text-right text-ink-faint">
            &copy; {new Date().getFullYear()} Maruti Cable. All rights reserved.
          </div>
        </div>

        {/* Central Tax Note */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/[0.04] text-center text-[11px] text-ink-faint">
          {SITE_CONFIG.pricingTaxNotice}
        </div>
      </div>
    </footer>
  );
};
