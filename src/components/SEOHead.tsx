import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { SITE_CONFIG } from '../config/siteConfig';

interface RouteMeta {
  title: string;
  description: string;
}

const META_MAP: Record<string, RouteMeta> = {
  '/': {
    title: 'Fiber Broadband in Sindri, Dhanbad | Maruti Cable',
    description: 'Maruti Cable provides fiber broadband and Air-Fiber internet in Sindri and surrounding areas of Dhanbad, with local support and flexible broadband plans.',
  },
  '/broadband': {
    title: 'High-Speed Fiber Broadband Plans | Maruti Cable Sindri',
    description: 'Explore 20–100 Mbps symmetric FTTH fiber broadband plans starting at ₹300/month with unlimited usage and local technician support in Sindri.',
  },
  '/air-fiber': {
    title: 'Air-Fiber Wireless Broadband | Maruti Cable Sindri',
    description: 'High-capacity wireless broadband for locations where physical fiber has not reached yet. Speeds from 15 to 50 Mbps with no digging required.',
  },
  '/coverage': {
    title: 'Check Broadband Coverage & Service Areas | Maruti Cable Dhanbad',
    description: 'Check broadband availability in Sindri, L-Type Colony, Saharpura, Sudamdih, Chasnala, Bhuli, Jharia, Patherdih, Sijua, and Baliapur.',
  },
  '/about': {
    title: 'About Maruti Cable | Local ISP Partner in Sindri, Dhanbad',
    description: 'Serving Sindri since 2021. Maruti Cable is a local proprietorship firm operated by Sunil Kumar and authorized franchise partner of Xpress Fiber Pvt. Ltd.',
  },
  '/support': {
    title: 'Customer Support & Helpdesk | Maruti Cable Sindri',
    description: 'Get responsive local support for your broadband connection. Call +91 94313 76706 or reach out via WhatsApp, email, or our grievance desk.',
  },
  '/contact': {
    title: 'Contact Office & Location Details | Maruti Cable Sindri',
    description: 'Visit our registered office at QR No. L/148, L-Type Colony, Sindri or call +91 94313 76706 for broadband inquiries, billing, and support.',
  },
  '/new-connection': {
    title: 'Get New Broadband Connection | Maruti Cable Sindri',
    description: 'Apply for a new high-speed fiber broadband or Air-Fiber connection in Sindri, Dhanbad. Fast feasibility check and local technician installation.',
  },
  '/pay-bill': {
    title: 'Pay Bill & Renew Broadband Plan | Maruti Cable',
    description: 'Convenient plan renewal and payment portal for Maruti Cable subscribers in Sindri and Dhanbad.',
  },
  '/terms': {
    title: 'Terms & Conditions | Maruti Cable',
    description: 'Official terms and conditions for subscriber internet access and broadband services provided by Maruti Cable.',
  },
  '/privacy': {
    title: 'Privacy Policy | Maruti Cable',
    description: 'Privacy and data protection policy detailing how subscriber data and contact information are handled by Maruti Cable.',
  },
  '/refund': {
    title: 'Refund & Cancellation Policy | Maruti Cable',
    description: 'Clear refund, return, and cancellation policies for broadband subscriptions, advance payments, and feasibility surveys.',
  },
  '/service-delivery': {
    title: 'Service Delivery Policy & Timelines | Maruti Cable',
    description: 'Transparent timelines for broadband recharges, feasible installations, and survey-dependent setups across Sindri and Dhanbad.',
  },
};

export const SEOHead: React.FC<{ currentPath?: string }> = ({ currentPath: propPath }) => {
  const { currentPath: routerPath } = useRouter();
  const activePath = propPath || routerPath;

  useEffect(() => {
    const meta = META_MAP[activePath] || {
      title: `${SITE_CONFIG.brand} | Broadband in Sindri, Dhanbad`,
      description: SITE_CONFIG.heroSubheading,
    };

    document.title = meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
  }, [activePath]);

  return null;
};
