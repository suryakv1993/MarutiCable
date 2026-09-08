# Maruti Cable — Fiber Broadband & Air-Fiber Internet

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-00E5FF)]()

Modern web portal for **Maruti Cable**, the premier fiber-optic broadband and Air-Fiber internet service provider based in **Sindri, Dhanbad, Jharkhand**. Maruti Cable is a registered local proprietorship firm operated by **Sunil Kumar** and an authorised franchise partner of **Xpress Fiber Pvt. Ltd.**

---

## 🌐 Live Application Overview

The portal delivers an ultra-fast, responsive, mobile-first experience tailored for Sindri residents, students (BIT Sindri), institutions, and local commercial establishments.

- **Registered Office:** QR No. L/148, L-Type Colony, Sindri, Block Jharia, Dhanbad, Jharkhand – 828122
- **Direct Phone / Support:** [+91 94313 76706](tel:+919431376706)
- **Email:** sunilkumar2026@gmail.com
- **Operating Hours:** 9:30 AM – 8:30 PM, Monday – Sunday (All 7 Days)
- **Google Maps Coordinates:** `23.67386102879974, 86.4935511390556` ([View on Google Maps](https://www.google.com/maps/search/?api=1&query=23.67386102879974,86.4935511390556))

---

## 🚀 Key Features

### 1. High-Performance Fiber & Air-Fiber Plans
- **Fiber Broadband (`/broadband`):** Symmetrical upload and download speeds from 30 Mbps to 300 Mbps, low-latency fiber routing, dual-band Wi-Fi 6 router support, and unlimited data.
- **Air-Fiber Wireless (`/air-fiber`):** Long-range point-to-point wireless connectivity for areas across Sindri outskirts and Jharia blocks where physical fiber trenching is constrained.

### 2. Live Network Telemetry & Speed Test Simulation
- **Interactive Speed Benchmark:** Realistic multi-thread speed test tool measuring download, upload, ping, and jitter against local Dhanbad edge nodes.
- **Network Status Widget:** Real-time uptime statistics (99.85%), active fiber backbone health, and live technician queue metrics.

### 3. Hyper-Local Sindri Coverage Map (`/coverage`)
- Live colony and sector lookup covering:
  - L-Type Colony, Rohrabandh, Domgarh, Saharpura, Rangamati
  - BIT Sindri Campus & Hostels, Gaushala, Kandra, Chasnala, Tasra, and Jharia outskirts.
- Feasibility check form allowing potential subscribers to submit their locality for immediate lineman line-of-sight checks.

### 4. Seamless Bill Payments & Plan Renewals (`/pay-bill`)
- **Digital Payments:** Instant payment verification via UPI, Dynamic QR code, and NEFT/IMPS bank transfer.
- **Cash / In-Person Office Payments:** Instructions and one-click Google Maps navigation directly to the Sindri L-Type Colony registered office.
- **Transaction Receipt:** Downloadable and printable payment proof for subscribers.

### 5. New Connection Booking (`/new-connection`)
- Step-by-step connection request form with address verification, preferred installation schedule, and automatic WhatsApp handoff for quick technician dispatch.

### 6. Self-Service Support & Diagnostics (`/support`)
- Step-by-step diagnostic guide for optical network terminal (ONT/ONU) indicator lights (PON, LOS, LAN, WPS).
- Complaint ticket submission with 2-hour field response guarantee in Sindri.

### 7. Regulatory & Customer Trust Pages
- Complete, transparent policy disclosures compliant with Indian consumer telecommunication guidelines:
  - **About (`/about`):** Proprietorship disclosures, franchise credentials, and service history since 2021.
  - **Terms & Conditions (`/terms`)**
  - **Privacy Policy (`/privacy`)**
  - **Refund & Cancellation Policy (`/refund`)**
  - **Service Delivery & Installation SLAs (`/service-delivery`)**

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Motion](https://motion.dev/) (`motion/react`) |
| **Architecture** | Client-side SPA with lightweight Router Context, high-contrast accessible dark palette |

---

## 📂 Project Structure

```text
MarutiCable/
├── public/                     # Static assets and favicons
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── AboutSnippet.tsx    # Brief firm credentials module
│   │   ├── CTASection.tsx      # High-converting lead call-to-action
│   │   ├── FAQAccordion.tsx    # Customer queries & installation terms
│   │   ├── Footer.tsx          # Comprehensive footer with office location & legal links
│   │   ├── Header.tsx          # Responsive sticky navigation bar with quick pay action
│   │   ├── MobileBottomNav.tsx # Native mobile app bottom navigation bar
│   │   ├── NetworkStatusCard.tsx# Live Dhanbad/Sindri network telemetry widget
│   │   ├── PlanCard.tsx        # Highlighting speeds, OTT perks, and pricing
│   │   ├── SEOHead.tsx         # OpenGraph, title, and meta management
│   │   └── SpeedTestWidget.tsx # Interactive client-side speed benchmark tool
│   ├── config/
│   │   └── siteConfig.ts       # Central source of truth (contacts, plans, rates, geo)
│   ├── context/
│   │   └── RouterContext.tsx   # Lightweight client-side SPA routing system
│   ├── pages/                  # Page views
│   │   ├── AboutPage.tsx       # Firm background & franchise documentation
│   │   ├── AirFiberPage.tsx    # Wireless broadband plans & antenna info
│   │   ├── BroadbandPage.tsx   # Fiber-to-the-Home (FTTH) plans
│   │   ├── ContactPage.tsx     # Office map, contact cards, and inquiry form
│   │   ├── CoveragePage.tsx    # Sindri locality check & feasibility request
│   │   ├── HomePage.tsx        # Landing page with speed test & plan preview
│   │   ├── NewConnectionPage.tsx# Connection onboarding flow
│   │   ├── NotFoundPage.tsx    # 404 handler
│   │   ├── PayBillPage.tsx     # Payment portal with UPI QR and office address
│   │   ├── PrivacyPage.tsx     # Privacy statement
│   │   ├── RefundPage.tsx      # Refund and cancellation policies
│   │   ├── ServiceDeliveryPage.tsx # Installation delivery SLAs
│   │   ├── SupportPage.tsx     # Diagnostics and ticket logging
│   │   └── TermsPage.tsx       # Subscriber service terms
│   ├── App.tsx                 # Root component with routing and persistent layouts
│   ├── index.css               # Tailwind CSS entry (@import "tailwindcss")
│   └── main.tsx                # React DOM entry point
├── .env.example                # Example environment variables
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML5 entry template with font preloads
├── metadata.json               # Platform application metadata
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration with Tailwind plugin
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: Version `18.0.0` or higher
- **npm** or **bun** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/suryakv1993/MarutiCable.git
   cd MarutiCable
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:3000`.

---

## 📜 Available Scripts

- `npm run dev` — Starts the Vite development server on port `3000`.
- `npm run build` — Compiles TypeScript and builds production-ready static assets into `dist/`.
- `npm run preview` — Locally previews the compiled production build.
- `npm run lint` — Validates TypeScript types and checks for compile issues (`tsc --noEmit`).
- `npm run clean` — Removes `dist/` and build artifacts.

---

## ⚙️ Configuration

All business-critical variables (phone numbers, WhatsApp handles, UPI IDs, pricing, addresses, and GPS coordinates) are centralized in:

📁 `src/config/siteConfig.ts`

To update the office coordinates or Google Maps URL:
```typescript
coordinates: {
  latitude: 23.67386102879974,
  longitude: 86.4935511390556,
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=23.67386102879974,86.4935511390556',
}
```

---

## ☁️ Deploying to Cloudflare Pages

1. **Push this repository to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial release"
   git branch -M main
   git remote add origin https://github.com/suryakv1993/MarutiCable.git
   git push -u origin main
   ```

2. **Create the Pages project** in the Cloudflare dashboard:
   - Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
   - Select the `suryakv1993/MarutiCable` repository.
   - Use these build settings:
     | Setting | Value |
     |---|---|
     | Build command | `npm install && npm run build` |
     | Build output directory | `dist` |
     | Production branch | `main` |
   - Click **Save and Deploy**.

3. **Client-side routing:** The app uses `window.history.pushState` for routing, so enable **Single-page application** in Pages → project → **Settings** → **Functions** → **SPA mode** (or add a `_redirects` file with `/* /index.html 200`) so deep links like `/pay-bill` resolve correctly.

No environment variables or secrets are required for this static site.

---

## 📍 Business Information & Attribution

- **Operator:** Sunil Kumar (Proprietor, Maruti Cable)
- **Franchise:** Authorised Franchise Partner of Xpress Fiber Pvt. Ltd.
- **Service Hub:** Sindri, Dhanbad, Jharkhand – 828122
- **Website & Portal Repository:** [github.com/suryakv1993/MarutiCable](https://github.com/suryakv1993/MarutiCable)
