import React, { useState } from 'react';
import { SITE_CONFIG, ServiceArea } from '../config/siteConfig';
import { Link } from '../context/RouterContext';
import { Search, MapPin, CheckCircle2, AlertCircle, Navigation, ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export const CoverageChecker: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [pincode, setPincode] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<{
    found: boolean;
    areaName?: string;
    pincode?: string;
    status?: string;
    notes?: string;
  } | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(SITE_CONFIG.serviceAreas[0]);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincode.trim();
    if (cleanPin.length !== 6 || !/^\d{6}$/.test(cleanPin)) {
      setSearched(true);
      setResult({
        found: false,
        notes: 'Please enter a valid 6-digit Indian PIN code (e.g. 828122 for Sindri).',
      });
      return;
    }

    const matchedArea = SITE_CONFIG.serviceAreas.find((a) => a.pincode === cleanPin);

    setSearched(true);
    if (matchedArea) {
      setResult({
        found: true,
        areaName: matchedArea.name,
        pincode: matchedArea.pincode,
        status: matchedArea.status,
        notes: matchedArea.notes,
      });
      setSelectedArea(matchedArea);
    } else {
      // Per instructions: "Do not pretend to know coverage if there is no real API/data source. Show a clear callback flow instead of inventing results."
      setResult({
        found: false,
        pincode: cleanPin,
        notes:
          'PIN is outside our confirmed core grid. However, our trunk fiber routes and Air-Fiber radios expand continuously. Request a quick callback or technician survey to check feasibility at your exact address.',
      });
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setSearched(true);
      setResult({
        found: false,
        notes: 'Geolocation is not supported in this browser. Please enter your 6-digit PIN code manually.',
      });
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        setLocationLoading(false);
        setSearched(true);
        setResult({
          found: false,
          notes: 'Location detected, but we can only confirm coverage by PIN code. Please enter your 6-digit PIN to check exact availability.',
        });
      },
      () => {
        setLocationLoading(false);
        setSearched(true);
        setResult({
          found: false,
          notes: 'Could not access device location. Please enter your 6-digit PIN code (e.g. 828122) directly.',
        });
      },
      { timeout: 8000 }
    );
  };

  return (
    <section id="coverage" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 inline-block mb-3 font-['Manrope']">
            Network Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Manrope']">
            Is Maruti Cable available near you?
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Check immediate FTTH fiber availability or request a quick feasibility assessment in your neighborhood.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleCheck} className="relative">
            <div className="flex flex-col sm:flex-row gap-2.5 p-2 rounded-2xl bg-[#0B1224] border border-white/15 shadow-2xl focus-within:border-[#00E5FF] transition-all">
              <div className="relative flex-1 flex items-center pl-3">
                <Search className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 6-digit PIN (e.g. 828122)"
                  className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm font-medium"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleUseLocation}
                  disabled={locationLoading}
                  className="px-3 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 flex items-center gap-1.5 transition-colors"
                  title="Detect approximate location"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span className="hidden sm:inline">{locationLoading ? 'Locating...' : 'Use My Location'}</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-sm font-bold shadow-md shadow-[#00E5FF]/20 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </form>

          {/* Search Result Feedback */}
          {searched && result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-5 rounded-2xl border ${
                result.found
                  ? 'bg-[#00E5FF]/10 border-[#00E5FF]/30 text-slate-200'
                  : 'bg-amber-500/10 border-amber-500/30 text-slate-200'
              }`}
            >
              <div className="flex items-start gap-3">
                {result.found ? (
                  <CheckCircle2 className="w-6 h-6 text-[#00E5FF] shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white font-['Manrope']">
                      {result.found
                        ? `Available in ${result.areaName} (${result.pincode})`
                        : `No direct record for PIN ${result.pincode || ''}`}
                    </h4>
                    {result.found && (
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30">
                        Active Network Grid
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    {result.notes}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to="/new-connection"
                      state={{ area: result.areaName || pincode, pincode: result.pincode || pincode }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-xs font-bold hover:brightness-110 transition-all"
                    >
                      <span>Request Connection / Callback</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone.replace(/[^+\d]/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.08] text-white text-xs font-semibold hover:bg-white/[0.14] transition-all"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>Call {SITE_CONFIG.contact.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Abstract Dhanbad/Sindri Network Topology Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual SVG Map */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-['Manrope']">
                  Dhanbad & Sindri Optical Topology
                </h3>
                <p className="text-xs text-slate-400">
                  Click any node to inspect coverage details
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-[#00E5FF]">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                Live Network Grid
              </span>
            </div>

            {/* SVG Network Graphic */}
            <div className="relative w-full aspect-[16/10] bg-[#050816] rounded-2xl border border-white/5 p-4 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 600 380" fill="none">
                {/* Background gridlines */}
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                  </pattern>
                  <linearGradient id="fiberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#19B5FE" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <rect width="600" height="380" fill="url(#grid)" />

                {/* Fiber trunk lines between nodes */}
                <path d="M 120 180 L 220 110" stroke="#19B5FE" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
                <path d="M 220 110 L 330 80" stroke="#19B5FE" strokeWidth="1.5" strokeOpacity="0.4" />
                <path d="M 330 80 L 460 120" stroke="#00E5FF" strokeWidth="2" strokeOpacity="0.6" />
                <path d="M 330 80 L 320 200" stroke="#00E5FF" strokeWidth="2.5" strokeOpacity="0.7" />
                <path d="M 320 200 L 230 260" stroke="#00E5FF" strokeWidth="2" strokeOpacity="0.6" />
                <path d="M 320 200 L 410 240" stroke="#00E5FF" strokeWidth="2.5" strokeOpacity="0.8" />
                <path d="M 410 240 L 480 200" stroke="#19B5FE" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M 410 240 L 430 320" stroke="#6C63FF" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M 410 240 L 510 300" stroke="#19B5FE" strokeWidth="1.5" strokeOpacity="0.4" />
                <path d="M 230 260 L 150 280" stroke="#19B5FE" strokeWidth="1.5" strokeOpacity="0.4" />

                {/* Animated light pulses on lines */}
                <circle cx="320" cy="200" r="28" fill="#00E5FF" fillOpacity="0.12" />
                <circle cx="410" cy="240" r="32" fill="#00E5FF" fillOpacity="0.18" />

                {/* Sindri Core Node */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[0])}>
                  <circle cx="410" cy="240" r="10" fill="#00E5FF" />
                  <circle cx="410" cy="240" r="16" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="410" y="272" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                    Sindri (Core)
                  </text>
                  <text x="410" y="286" fill="#00E5FF" fontSize="9" textAnchor="middle">
                    828122
                  </text>
                </g>

                {/* L-Type Colony Node */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[1])}>
                  <circle cx="320" cy="200" r="8" fill="#19B5FE" />
                  <text x="320" y="185" fill="#F8FAFC" fontSize="11" fontWeight="600" textAnchor="middle">
                    L-Type Colony
                  </text>
                  <text x="320" y="225" fill="#94A3B8" fontSize="8" textAnchor="middle">
                    HQ Node
                  </text>
                </g>

                {/* Saharpura */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[2])}>
                  <circle cx="480" cy="200" r="7" fill="#00E5FF" />
                  <text x="480" y="190" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Saharpura
                  </text>
                </g>

                {/* Chasnala */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[4])}>
                  <circle cx="230" cy="260" r="6" fill="#19B5FE" />
                  <text x="230" y="285" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Chasnala
                  </text>
                </g>

                {/* Sudamdih */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[3])}>
                  <circle cx="150" cy="280" r="6" fill="#19B5FE" />
                  <text x="150" y="305" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Sudamdih
                  </text>
                </g>

                {/* Jharia */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[6])}>
                  <circle cx="330" cy="80" r="7" fill="#6C63FF" />
                  <text x="330" y="65" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Jharia
                  </text>
                </g>

                {/* Bhuli */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[5])}>
                  <circle cx="120" cy="180" r="6" fill="#19B5FE" />
                  <text x="120" y="165" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Bhuli
                  </text>
                </g>

                {/* Patherdih */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[7])}>
                  <circle cx="460" cy="120" r="6" fill="#00E5FF" />
                  <text x="460" y="105" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Patherdih
                  </text>
                </g>

                {/* Sijua */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[8])}>
                  <circle cx="220" cy="110" r="6" fill="#19B5FE" />
                  <text x="220" y="95" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Sijua
                  </text>
                </g>

                {/* Baliapur */}
                <g className="cursor-pointer" onClick={() => setSelectedArea(SITE_CONFIG.serviceAreas[9])}>
                  <circle cx="510" cy="300" r="6" fill="#6C63FF" />
                  <text x="510" y="325" fill="#F8FAFC" fontSize="10" textAnchor="middle">
                    Baliapur
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Area List & Selected Zone Inspector */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-['Manrope']">
              Service Areas in Dhanbad
            </h3>
            <p className="text-xs text-slate-400">
              Select any colony or location to check local installation capability:
            </p>

            <div className="grid grid-cols-2 gap-2 max-h-[280px] overflow-y-auto pr-1">
              {SITE_CONFIG.serviceAreas.map((area) => {
                const isSelected = selectedArea?.name === area.name;
                return (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area)}
                    className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#00E5FF]/10 border-[#00E5FF] text-white'
                        : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{area.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">
                      PIN: {area.pincode}
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedArea && (
              <motion.div
                key={selectedArea.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-[#0B1224] border border-[#00E5FF]/30 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00E5FF]" />
                    <span className="text-sm font-bold text-white">
                      {selectedArea.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#00E5FF]/15 text-[#00E5FF]">
                    PIN {selectedArea.pincode}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedArea.notes}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Same-day / fast-track feasibility
                  </span>
                  <Link
                    to="/new-connection"
                    state={{ area: selectedArea.name, pincode: selectedArea.pincode }}
                    className="text-xs font-bold text-[#00E5FF] hover:underline flex items-center gap-1"
                  >
                    <span>Request here</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
