# EDITION-1 ATELIER | Precision Garage & Auto Workshop Sialkot

A production-ready web application for **EDITION-1 ATELIER**, a precision automotive diagnostics, hybrid/EV calibration, and mechanical overhaul workshop located on Khawaja Safdar Road, Sialkot Cantonment, Pakistan.

## Key Features

- **Precision Motorsport Dark UI**: Engineered with the *Precision Performance Workshop* design system (`Space Grotesk`, `Inter`, and `JetBrains Mono` typography, 1px hairline borders, and obsidian/crimson contrast).
- **Specialized Workshop Services (`#services`)**: 8 dedicated service bays covering Computerized OBD-II Diagnostics, Engine & Mechanical Repair, Brake & ABS Overhaul, Hybrid/EV Powertrain, Transmission & DCT Calibration, Climate Control, Suspension, and Preventive Care.
- **Interactive Diagnostic Bay Console (`#diagnostics`)**: Subsystem selector (`OBD-II / CAN-FD`, `HV-PACK / ISOLATION`, `ABS / ESP / EPB`, `TCM / MECHATRONICS`) displaying live protocol parameters and one-click bay booking.
- **High-Resolution Technical Gallery & Lightbox (`#gallery`)**: Full-screen inspection modal with keyboard navigation (`Esc`, `←`, `→`) and frame telemetry.
- **Verified Client Reviews (`#reviews`) & Interactive Location Map (`#location`)**: Embedded Sialkot Cantonment route map, one-click address copy, and direct Google Maps navigation.
- **Direct WhatsApp Dispatch & Online Bay Scheduling (`#booking`)**: Pre-fills service selection from any card on the page and generates a formatted WhatsApp diagnostic ticket for `+92 346 6764277`.
- **SEO & Structured Data**: Configured with OpenGraph metadata and `Schema.org/AutoRepair` JSON-LD structured data.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React

## Getting Started Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Publishing to GitHub / Deployment

1. Push the repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of EDITION-1 ATELIER workshop platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Connect the repository to **Vercel**, **Netlify**, or **GitHub Pages** with build command `npm run build` and output directory `dist`.
