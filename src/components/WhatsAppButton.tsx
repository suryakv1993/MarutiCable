import React, { useState } from 'react';
import { getWhatsAppLink } from '../config/siteConfig';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-center">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-surface text-ink-strong border border-edge px-3 py-2 rounded-xl shadow-xl shadow-black/50 text-xs mr-3 opacity-100 transition-opacity duration-200">
          <span>Need help or connection info? Chat with Sunil Kumar & team</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-ink-faint hover:text-ink-strong p-0.5 rounded"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Maruti Cable on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-current relative z-10" />
      </a>
    </div>
  );
};
