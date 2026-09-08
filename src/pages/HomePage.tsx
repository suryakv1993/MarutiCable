import React from 'react';
import { SITE_CONFIG, getTelLink } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import { NetworkBackground } from '../components/NetworkBackground';
import { StatsStrip } from '../components/StatsStrip';
import { ConnectionTypesSection } from '../components/ServiceCard';
import { PlansSection } from '../components/PlanCard';
import { DigitalLifeSection } from '../components/DigitalLifeSection';
import { WhyMarutiSection } from '../components/WhyMarutiSection';
import { NetworkDiagram } from '../components/NetworkDiagram';
import { CoverageChecker } from '../components/CoverageChecker';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ServiceTimelinesSection } from '../components/ServiceTimelinesSection';
import { AboutSnippet } from '../components/AboutSnippet';
import { SupportSnippet } from '../components/SupportSnippet';
import { CTASection } from '../components/CTASection';
import { FAQAccordion } from '../components/FAQAccordion';
import { ArrowRight, Search, ShieldCheck, Activity, Wifi, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  return (
    <div className="relative">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-start pt-4 pb-16 sm:justify-center sm:pt-16 sm:pb-24 overflow-hidden">
        {/* Animated lightweight Fiber Network Background */}
        <NetworkBackground interactive={true} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Dominant Hero Text & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Franchise Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1224]/90 border border-[#00E5FF]/30 text-xs text-slate-300 mb-6 shadow-lg shadow-black/40"
              >
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>Sindri, Dhanbad</span>
                <span className="text-white/20">•</span>
                <span className="text-[#00E5FF] font-semibold">Authorised Xpress Fiber Partner</span>
              </motion.div>

              {/* Main Headline — Exactly 2 lines */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="tracking-tight font-['Manrope']"
              >
                <span className="block text-3xl xs:text-4xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-[800] text-white leading-tight">
                  Superfast Wi-Fi.
                </span>
                <span className="block mt-2 sm:mt-2.5 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] xl:text-[1.95rem] font-bold tracking-tight whitespace-nowrap leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19B5FE] via-[#00E5FF] to-white">
                    Zero Waiting.
                  </span>{' '}
                  <span className="text-slate-200">Just Connect.</span>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {SITE_CONFIG.heroSubheading}
              </motion.p>

              {/* Hero CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  to="/coverage"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-sm font-extrabold shadow-xl shadow-[#00E5FF]/25 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Search className="w-4 h-4" />
                  <span>Check Availability</span>
                </Link>

                <Link
                  to="/broadband"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 text-white text-sm font-bold active:scale-95 transition-all shadow-md"
                >
                  <Wifi className="w-4 h-4 text-[#00E5FF]" />
                  <span>View Fiber Plans</span>
                </Link>
              </motion.div>

              {/* Direct Booking Helpline Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400"
              >
                <span>Instant connection hotline:</span>
                <a
                  href={getTelLink()}
                  className="text-[#00E5FF] font-semibold hover:underline"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </motion.div>

              {/* Hero Supporting Features Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
              >
                {[
                  { label: '20–100 Mbps Symmetrical', icon: Wifi },
                  { label: 'Unlimited Data', icon: CheckCircle2 },
                  { label: 'Local Sindri Support', icon: ShieldCheck },
                  { label: '24×7 Network Health', icon: Activity },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#00E5FF] shrink-0" />
                      <span className="text-xs font-semibold text-slate-300">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Column (Desktop): Premium Network Telemetry & Status Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="hidden lg:block lg:col-span-5"
            >
              <div className="relative rounded-3xl p-7 glass-card border border-white/15 shadow-2xl shadow-black/60 glow-cyan-card">
                {/* Header status */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white font-['Manrope']">
                      Sindri Core FTTH Gateway
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-1 rounded-full border border-[#00E5FF]/30">
                    Live Active
                  </span>
                </div>

                {/* Grid of Telemetry */}
                <div className="grid grid-cols-2 gap-4 py-5 border-b border-white/10">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-medium">Avg. Local Ping</span>
                    <span className="text-2xl font-black text-white font-['Manrope'] mt-0.5 block">
                      &lt; 3 ms
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Low Latency Fiber</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-medium">Max Bandwidth</span>
                    <span className="text-2xl font-black text-[#00E5FF] font-['Manrope'] mt-0.5 block">
                      100 Mbps
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Symmetrical Up/Down</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-medium">Uptime Guarantee</span>
                    <span className="text-2xl font-black text-white font-['Manrope'] mt-0.5 block">
                      99.8%
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Dhanbad Ring Backbone</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-medium">Core Office</span>
                    <span className="text-base font-bold text-white font-['Manrope'] mt-1 block truncate">
                      L-Type, Sindri
                    </span>
                    <span className="text-[10px] text-[#19B5FE] font-medium">On-Ground Dispatch</span>
                  </div>
                </div>

                {/* Instant Action in Card */}
                <div className="pt-5 flex items-center justify-between">
                  <div className="text-xs text-slate-300">
                    <p className="font-semibold text-white">Need installation today?</p>
                    <p className="text-[11px] text-slate-400">Same-day technician survey available.</p>
                  </div>
                  <Link
                    to="/new-connection"
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00E5FF]/15 hover:bg-[#00E5FF]/25 border border-[#00E5FF]/40 text-[#00E5FF] text-xs font-bold transition-all"
                  >
                    <span>Connect Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <StatsStrip />

      {/* SECTION 3 — CONNECTION TYPES */}
      <ConnectionTypesSection />

      {/* SECTION 4 — PLANS */}
      <PlansSection categoryFilter="all" showAirFiberToggle={true} />

      {/* SECTION 5 — DIGITAL LIFE */}
      <DigitalLifeSection />

      {/* SECTION 6 — WHY MARUTI CABLE */}
      <WhyMarutiSection />

      {/* SECTION 7 — NETWORK VISUALIZATION */}
      <NetworkDiagram />

      {/* SECTION 8 — COVERAGE */}
      <CoverageChecker />

      {/* SECTION 9 — NEW CONNECTION PROCESS */}
      <ProcessTimeline />

      {/* SECTION 10 — SERVICE TIMELINES */}
      <ServiceTimelinesSection />

      {/* SECTION 11 — ABOUT */}
      <AboutSnippet />

      {/* SECTION 12 — SUPPORT */}
      <SupportSnippet />

      {/* SECTION 13 — CTA */}
      <CTASection />

      {/* Common FAQs */}
      <FAQAccordion />
    </div>
  );
};
