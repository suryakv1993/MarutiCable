import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { Wifi, CreditCard, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Broadband', path: '/broadband' },
    { label: 'Air-Fiber', path: '/air-fiber' },
    { label: 'Coverage', path: '/coverage' },
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Sticky Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
            : 'bg-[#050816]/60 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none select-none cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#19B5FE] to-[#6C63FF] p-[1.5px] shadow-md shadow-[#19B5FE]/20">
                <div className="w-full h-full bg-[#070D1F] rounded-[10px] flex items-center justify-center relative overflow-hidden group-hover:bg-[#0B1224] transition-colors">
                  <Wifi className="w-5 h-5 text-[#00E5FF] transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight text-white font-['Manrope']">
                    MARUTI <span className="text-[#00E5FF]">CABLE</span>
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-[#94A3B8] font-medium -mt-0.5">
                  Sindri Broadband
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#00E5FF] bg-white/[0.04]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/pay-bill"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-lg transition-all"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#19B5FE]" />
                <span>Pay Bill</span>
              </Link>
              <Link
                to="/new-connection"
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-[#050816] bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] hover:brightness-110 rounded-lg shadow-sm shadow-[#00E5FF]/20 transition-all transform active:scale-95"
              >
                <span>Get New Connection</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile action button (Pay Bill) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/pay-bill"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-lg transition-colors"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#19B5FE]" />
                <span>Pay Bill</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
