import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

export type RoutePath =
  | '/'
  | '/broadband'
  | '/air-fiber'
  | '/coverage'
  | '/about'
  | '/support'
  | '/contact'
  | '/new-connection'
  | '/pay-bill'
  | '/terms'
  | '/privacy'
  | '/refund'
  | '/service-delivery';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string, state?: Record<string, unknown>) => void;
  routeState: Record<string, unknown> | null;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
  routeState: null,
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path || '/';
    }
    return '/';
  });

  const [routeState, setRouteState] = useState<Record<string, unknown> | null>(() => {
    if (typeof window !== 'undefined' && window.history.state) {
      return window.history.state;
    }
    return null;
  });

  const [, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      startTransition(() => {
        setCurrentPath(window.location.pathname || '/');
        setRouteState(event.state || null);
      });
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, state?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== to) {
        window.history.pushState(state || null, '', to);
        startTransition(() => {
          setCurrentPath(to);
          setRouteState(state || null);
        });
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (state) {
        setRouteState(state);
      }
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, routeState }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  state?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  state,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    // Let browser handle command/ctrl click, new tab, etc.
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(to, state);
  };

  const combinedClass = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a href={to} onClick={handleClick} className={combinedClass} {...rest}>
      {children}
    </a>
  );
};
