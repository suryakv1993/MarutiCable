export interface Plan {
  id: string;
  name: string;
  speedMbps: number;
  monthlyPrice: number;
  badge?: string;
  category: 'fiber' | 'air-fiber';
  description: string;
  features: string[];
}

export interface ServiceArea {
  name: string;
  pincode: string;
  status: 'active' | 'expanding' | 'survey_required';
  notes?: string;
}

export const SITE_CONFIG = {
  brand: 'Maruti Cable',
  brandShort: 'Maruti',
  legalFirmName: 'Maruti Cable',
  firmType: 'Proprietorship Firm',
  operatorName: 'Sunil Kumar',
  servingSince: '2021',
  franchisePartner: 'Xpress Fiber Pvt. Ltd.',
  udyamRegistration: 'UDYAM-JH-04-0044707',
  
  positioning: 'Superfast Wi-Fi. Zero Waiting. Just Connect.',
  tagline: 'Superfast Wi-Fi. Zero Waiting.',
  heroSubheading: 'Reliable broadband for homes, businesses and digital life across Sindri and surrounding Dhanbad.',
  
  contact: {
    phone: '+91 94313 76706',
    phoneRaw: '919431376706',
    email: 'sunilkumar2026@gmail.com',
    grievanceEmail: 'sunilkumar2026@gmail.com',
    officeHours: '9:30 AM – 8:30 PM, Monday–Sunday',
    coordinates: {
      latitude: 23.67386102879974,
      longitude: 86.4935511390556,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=23.67386102879974,86.4935511390556',
    },
    address: {
      quarter: 'QR No. L/148',
      colony: 'L-Type Colony',
      locality: 'Sindri',
      block: 'Block Jharia',
      city: 'Dhanbad',
      state: 'Jharkhand',
      pincode: '828122',
      country: 'India',
      full: 'QR No. L/148, L-Type Colony, Sindri, Block Jharia, Dhanbad, Jharkhand – 828122, India',
    },
    whatsapp: {
      number: '+91 94313 76706',
      numberRaw: '919431376706',
      defaultMessage: 'Hi, I want information about a Maruti Cable broadband connection.',
    }
  },

  // Centralized Tax & Pricing Policy Notice
  pricingTaxNotice: 'GST and applicable government taxes as per official billing guidelines. Contact our Sindri office for your itemized invoice.',
  
  // Payment information from official maruticable.in/pay.html
  paymentUrl: 'https://maruticable.in/pay/',
  selfKycUrl: 'https://kyc.xpressfiber.com/self-kyc.html',
  bankDetails: {
    accountName: 'Sunil Kumar',
    designation: 'Proprietor, M/s Maruti Cable',
    bank: 'ICICI Bank Ltd.',
    branch: 'Dhanbad (Shastri Nagar, Bank More)',
    accountNumber: '019601525274',
    ifsc: 'ICIC0000196',
  },
  upi: {
    registeredNumber: '+91 94313 76706',
    vpa: '9431376706@paytm',
    qrPayload: 'upi://pay?pa=9431376706@paytm&pn=Maruti%20Cable&cu=INR',
  },
  securityAdvisory: 'Maruti Cable will never ask you for an OTP, UPI PIN, card CVV or net banking password. If anyone does, end the call immediately and report it to us on +91 94313 76706.',

  serviceTimelines: [
    {
      service: 'Broadband Recharge / Renewal',
      timeframe: 'Within 30 minutes of payment confirmation',
      description: 'Account reactivated automatically or via local desk confirmation upon receipt.',
    },
    {
      service: 'Feasible New Connection (Fiber)',
      timeframe: 'Same day to 3 working days',
      description: 'Applicable where distribution point / fiber splitter has direct optical line of sight and spare ports.',
    },
    {
      service: 'Survey-Required Connection',
      timeframe: 'Survey within 48 hours; installation within 7 working days',
      description: 'Where last-mile fiber run requires pole stringing, crossing clearance or route extension.',
    },
    {
      service: 'Air-Fiber Installation',
      timeframe: '2 to 7 working days after survey',
      description: 'Subject to rooftop LOS verification, radio signal clarity, and outdoor antenna mounting feasibility.',
    }
  ],
  timelineDisclaimer: 'Service timelines are indicative and subject to technical feasibility, premise access, ROW clearances, fiber distance, material availability, and weather conditions.',

  serviceAreas: [
    { name: 'Sindri', pincode: '828122', status: 'active', notes: 'Core FTTH coverage across all residential & market colonies' },
    { name: 'L-Type Colony', pincode: '828122', status: 'active', notes: 'Primary node location with direct fiber infrastructure' },
    { name: 'Saharpura', pincode: '828122', status: 'active', notes: 'Active fiber and wireless distribution' },
    { name: 'Sudamdih', pincode: '828126', status: 'active', notes: 'Continuous coverage and local technician support' },
    { name: 'Chasnala', pincode: '828115', status: 'active', notes: 'Colliery area fiber & Air-Fiber availability' },
    { name: 'Bhuli', pincode: '828104', status: 'active', notes: 'Sub-network area with scheduled technician visits' },
    { name: 'Jharia', pincode: '828111', status: 'active', notes: 'Expanding commercial & residential coverage' },
    { name: 'Patherdih', pincode: '828119', status: 'active', notes: 'Active line of sight and cable trunking' },
    { name: 'Sijua', pincode: '828121', status: 'active', notes: 'Coverage along primary distribution corridors' },
    { name: 'Baliapur', pincode: '828201', status: 'active', notes: 'Air-Fiber and select trunk fiber connections' },
  ] as ServiceArea[],

  fiberPlans: [
    {
      id: 'fiber-20',
      name: 'Fiber 20',
      speedMbps: 20,
      monthlyPrice: 300,
      category: 'fiber',
      description: 'Essential everyday connectivity for browsing, online classes, and messaging.',
      features: [
        '20 Mbps speed',
        'Unlimited usage',
        'Symmetric upload/download',
        'Local support',
        'Wi-Fi configuration'
      ]
    },
    {
      id: 'fiber-30',
      name: 'Fiber 30',
      speedMbps: 30,
      monthlyPrice: 353,
      category: 'fiber',
      description: 'Steady broadband for multi-phone households, HD streaming, and remote study.',
      features: [
        '30 Mbps speed',
        'Unlimited usage',
        'Symmetric upload/download',
        'Local support',
        'Wi-Fi configuration'
      ]
    },
    {
      id: 'fiber-50',
      name: 'Fiber 50',
      speedMbps: 50,
      monthlyPrice: 412,
      badge: 'MOST POPULAR',
      category: 'fiber',
      description: 'High-speed fiber designed for smooth video calls, multiple active screens, and smart TVs.',
      features: [
        '50 Mbps speed',
        'Unlimited usage',
        'Symmetric upload/download',
        'Local support',
        'Wi-Fi configuration'
      ]
    },
    {
      id: 'fiber-100',
      name: 'Fiber 100',
      speedMbps: 100,
      monthlyPrice: 649,
      badge: 'FASTEST',
      category: 'fiber',
      description: 'Maximum bandwidth for power users, concurrent 4K streams, cloud work, and high-demand households.',
      features: [
        '100 Mbps speed',
        'Unlimited usage',
        'Symmetric upload/download',
        'Local support',
        'Wi-Fi configuration'
      ]
    }
  ] as Plan[],

  airFiberPlans: [
    {
      id: 'air-fiber-15',
      name: 'Air-Fiber 15',
      speedMbps: 15,
      monthlyPrice: 750,
      category: 'air-fiber',
      description: 'Reliable wireless broadband for locations where physical fiber has not reached yet.',
      features: [
        '15 Mbps wireless speed',
        'No digging required',
        'Outdoor wireless equipment',
        'Subject to feasibility',
        'Local technician installation'
      ]
    },
    {
      id: 'air-fiber-30',
      name: 'Air-Fiber 30',
      speedMbps: 30,
      monthlyPrice: 999,
      category: 'air-fiber',
      description: 'High-capacity wireless link for remote homes, standalone sites, and small businesses.',
      features: [
        '30 Mbps wireless speed',
        'No digging required',
        'Outdoor wireless equipment',
        'Subject to feasibility',
        'Local technician installation'
      ]
    },
    {
      id: 'air-fiber-50',
      name: 'Air-Fiber 50',
      speedMbps: 50,
      monthlyPrice: 1250,
      category: 'air-fiber',
      description: 'Top-tier wireless broadband providing robust data throughput across non-fiber pockets.',
      features: [
        '50 Mbps wireless speed',
        'No digging required',
        'Outdoor wireless equipment',
        'Subject to feasibility',
        'Local technician installation'
      ]
    }
  ] as Plan[]
};

export const getWhatsAppLink = (customText?: string) => {
  const text = encodeURIComponent(customText || SITE_CONFIG.contact.whatsapp.defaultMessage);
  return `https://wa.me/${SITE_CONFIG.contact.whatsapp.numberRaw}?text=${text}`;
};

export const getTelLink = () => {
  return `tel:${SITE_CONFIG.contact.phone.replace(/[^+\d]/g, '')}`;
};

export const getMailtoLink = (email = SITE_CONFIG.contact.email, subject = 'Inquiry - Maruti Cable Broadband') => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
};

export const getGoogleMapsOfficeLink = () => {
  return SITE_CONFIG.contact.coordinates.mapUrl;
};
