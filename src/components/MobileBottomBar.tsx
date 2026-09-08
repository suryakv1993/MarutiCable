import React from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { Home, Zap, Radio, CreditCard, Headphones } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize current path
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');

  const tabs = [
    {
      label: 'Home',
      path: '/',
      icon: Home,
    },
    {
      label: 'Plans',
      path: '/broadband',
      icon: Zap,
    },
    {
      label: 'Coverage',
      path: '/coverage',
      icon: Radio,
    },
    {
      label: 'Pay Bill',
      path: '/pay-bill',
      icon: CreditCard,
      highlight: true,
    },
    {
      label: 'Support',
      path: '/support',
      icon: Headphones,
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom App Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#050816]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_35px_rgba(0,0,0,0.7)] px-2 pt-2 pb-[max(0.65rem,env(safe-area-inset-bottom))] transition-transform"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive =
            tab.path === '/'
              ? normalizedPath === '/'
              : normalizedPath.startsWith(tab.path);
          const Icon = tab.icon;

          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`relative flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 active:scale-90 outline-none focus:outline-none select-none ${
                isActive
                  ? 'text-[#00E5FF]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Active top indicator light */}
              {isActive && (
                <span className="absolute -top-2 w-8 h-[2.5px] bg-gradient-to-r from-[#19B5FE] to-[#00E5FF] rounded-full shadow-[0_0_8px_#00E5FF]" />
              )}

              <div
                className={`relative flex items-center justify-center w-8 h-8 rounded-lg transition-transform duration-200 ${
                  isActive
                    ? 'bg-[#00E5FF]/10 scale-105'
                    : tab.highlight
                    ? 'bg-white/[0.04]'
                    : ''
                }`}
              >
                <Icon
                  className={`w-[1.125rem] h-[1.125rem] transition-colors ${
                    isActive
                      ? 'text-[#00E5FF] stroke-[2.4]'
                      : tab.highlight
                      ? 'text-[#19B5FE]'
                      : 'text-slate-400 stroke-[1.8]'
                  }`}
                />
                {tab.highlight && !isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#19B5FE] animate-pulse" />
                )}
              </div>

              <span
                className={`text-[10px] font-semibold tracking-tight mt-0.5 whitespace-nowrap font-['Manrope'] ${
                  isActive ? 'text-[#00E5FF] font-bold' : 'text-slate-400'
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
