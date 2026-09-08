import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileBottomBar } from './components/MobileBottomBar';

// Pages
import { HomePage } from './pages/HomePage';
import { BroadbandPage } from './pages/BroadbandPage';
import { AirFiberPage } from './pages/AirFiberPage';
import { CoveragePage } from './pages/CoveragePage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { NewConnectionPage } from './pages/NewConnectionPage';
import { PayBillPage } from './pages/PayBillPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { RefundPage } from './pages/RefundPage';
import { ServiceDeliveryPage } from './pages/ServiceDeliveryPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path without trailing slash (except root)
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/+$/, '');

  const renderPage = () => {
    switch (normalizedPath) {
      case '/':
        return <HomePage />;
      case '/broadband':
        return <BroadbandPage />;
      case '/air-fiber':
        return <AirFiberPage />;
      case '/coverage':
        return <CoveragePage />;
      case '/about':
        return <AboutPage />;
      case '/support':
        return <SupportPage />;
      case '/contact':
        return <ContactPage />;
      case '/new-connection':
        return <NewConnectionPage />;
      case '/pay-bill':
        return <PayBillPage />;
      case '/terms':
        return <TermsPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/refund':
        return <RefundPage />;
      case '/service-delivery':
        return <ServiceDeliveryPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050816] text-[#F8FAFC] antialiased selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Route-aware Dynamic SEO Meta Tags */}
      <SEOHead currentPath={normalizedPath} />

      {/* Main Sticky Header */}
      <Header />

      {/* Main Page Body */}
      <main className="flex-1 pb-24 md:pb-0">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Sticky Mobile Bottom Navigation Bar */}
      <MobileBottomBar />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
