import React from 'react';
import { Link } from '../context/RouterContext';
import { Home, ArrowLeft, Search, WifiOff } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 text-center max-w-md w-full shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mx-auto mb-6">
          <WifiOff className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3 font-['Manrope']">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
          The requested page could not be located on the Maruti Cable network portal. Please check the URL or return to our homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] text-[#050816] text-xs font-bold shadow-md hover:brightness-110 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/coverage"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-all"
          >
            <Search className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Check Coverage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
