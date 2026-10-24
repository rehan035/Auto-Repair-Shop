/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  SlidersHorizontal,
  Navigation,
  Star,
  ShieldCheck,
  MapPin,
  Headphones,
  ArrowUpRight,
  Settings,
  Snowflake,
  Car,
  Droplets,
  Maximize2,
  X,
  ExternalLink,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Menu,
  Calendar,
  Cpu,
} from 'lucide-react';
import {
  WORKSHOP_CONTACT,
  HERO_IMAGE,
  PRIMARY_SERVICES,
  STAGE_SERVICES,
  DIAGNOSTIC_MODULES,
  GALLERY_ITEMS,
  REVIEWS,
  FAQS,
  BOOKING_SERVICES,
  StageService,
} from './data/workshopData';
import { WorkshopImage } from './components/WorkshopImage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('services');
  const [selectedDiagnosticId, setSelectedDiagnosticId] = useState<string>(
    DIAGNOSTIC_MODULES[0].id
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Booking form state
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [serviceType, setServiceType] = useState(BOOKING_SERVICES[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [problemDesc, setProblemDesc] = useState('');
  const [submittedWaUrl, setSubmittedWaUrl] = useState<string | null>(null);
  const [copiedTicket, setCopiedTicket] = useState(false);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleSelectServiceForBooking = (bookingOption: string) => {
    setServiceType(bookingOption);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(WORKSHOP_CONTACT.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketMessage = [
      'Assalam-o-Alaikum EDITION-1 Atelier,',
      '',
      'I want to book an inspection/service:',
      `• Name: ${custName.trim()}`,
      `• Phone: ${custPhone.trim()}`,
      `• Vehicle: ${carMake.trim()} ${carModel.trim()} (${carYear.trim() || 'N/A'})`,
      `• Requested Service: ${serviceType}`,
      preferredDate ? `• Preferred Date: ${preferredDate}` : null,
      `• Symptoms/Notes: ${problemDesc.trim() || 'None specified'}`,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = `https://wa.me/${WORKSHOP_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      ticketMessage
    )}`;
    setSubmittedWaUrl(waUrl);

    setTimeout(() => {
      const el = document.getElementById('booking-success');
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const handleCopyTicketSummary = () => {
    const summary = `EDITION-1 BOOKING | ${custName} | ${carMake} ${carModel} (${
      carYear || 'N/A'
    }) | ${serviceType} | ${custPhone}`;
    navigator.clipboard?.writeText(summary);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2500);
  };

  const renderStageIcon = (iconName: StageService['iconName']) => {
    switch (iconName) {
      case 'settings':
        return <Settings className="w-6 h-6 text-primary shrink-0" />;
      case 'snowflake':
        return <Snowflake className="w-6 h-6 text-primary shrink-0" />;
      case 'car':
        return <Car className="w-6 h-6 text-primary shrink-0" />;
      case 'droplet':
        return <Droplets className="w-6 h-6 text-primary shrink-0" />;
    }
  };

  const activeDiagnostic =
    DIAGNOSTIC_MODULES.find((d) => d.id === selectedDiagnosticId) ||
    DIAGNOSTIC_MODULES[0];

  const navLinks = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'diagnostics', label: 'Diagnostic Bay', href: '#diagnostics' },
    { id: 'about', label: 'Atelier', href: '#about' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'reviews', label: 'Reviews', href: '#reviews' },
    { id: 'location', label: 'Location', href: '#location' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="bg-surface-container-lowest text-on-surface antialiased selection:bg-primary-container selection:text-white custom-grid-pattern min-h-screen flex flex-col">
      {/* 1. Top Navigation Bar - Strict Single-Row Alignment */}
      <header className="bg-surface-container-lowest/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30">
        <div className="flex items-center justify-between gap-6 w-full px-5 md:px-12 max-w-[1440px] mx-auto h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex flex-col justify-center shrink-0 group focus:outline-none"
          >
            <span className="font-display-text text-lg sm:text-xl tracking-tight text-on-surface font-bold group-hover:text-primary transition-colors whitespace-nowrap">
              EDITION-1 ATELIER
            </span>
            <span className="font-mono-label text-[10px] uppercase tracking-[0.12em] text-secondary whitespace-nowrap">
              GARAGE &amp; AUTO WORKSHOP · SIALKOT
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links (Strictly Single-Line) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-6"
          >
            {navLinks.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveNav(item.id)}
                  className={`font-mono-label text-[12px] uppercase tracking-[0.08em] whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                    isActive
                      ? 'text-primary border-primary-container font-semibold'
                      : 'text-secondary border-transparent hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Action Cluster (Strictly Single-Line) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={WORKSHOP_CONTACT.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded font-mono-label text-[11px] font-medium uppercase tracking-[0.06em] text-secondary hairline-border bg-surface-container-low hover:text-on-surface hover:border-outline transition-all active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{WORKSHOP_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={WORKSHOP_CONTACT.defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2.5 rounded font-mono-label text-[12px] font-semibold uppercase tracking-[0.08em] hover:bg-inverse-primary transition-all shadow-[0_0_14px_rgba(229,26,44,0.35)] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>BOOK SERVICE</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded hairline-border bg-surface-container-low text-on-surface hover:text-primary transition-colors shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-outline-variant/30 bg-surface-container-lowest/98 backdrop-blur-lg px-5 py-4">
            <nav className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2.5 rounded bg-surface-container-low hairline-border font-mono-label text-[11px] uppercase tracking-wider text-secondary hover:text-primary hover:border-primary/40 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-outline-variant/20">
              <a
                href={WORKSHOP_CONTACT.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded hairline-border bg-surface-container text-on-surface font-mono-label text-xs uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call {WORKSHOP_CONTACT.phoneDisplay}</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-primary-container text-white font-mono-label text-xs uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Online</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 2. Cinematic Hero Section */}
        <section className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center overflow-hidden border-b border-outline-variant/30">
          <div className="absolute inset-0 z-0">
            <WorkshopImage
              src={HERO_IMAGE}
              alt="EDITION-1 Workshop Arena Sialkot"
              className="w-full h-full object-cover object-center brightness-[0.42] contrast-125 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-surface-container-lowest/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/75" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <div className="max-w-3xl">
              {/* Eyebrow Lead-in */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-surface-container-high/85 hairline-border rounded mb-5 backdrop-blur-md">
                <span className="font-mono-label text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-primary font-medium">
                  EDITION-1 · PROFESSIONAL GARAGE &amp; AUTO WORKSHOP · SIALKOT
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-display-text text-[38px] leading-[44px] sm:text-[52px] sm:leading-[58px] lg:text-[56px] lg:leading-[64px] text-on-surface font-bold tracking-[-0.03em] mb-5"
                style={{ textWrap: 'balance' }}
              >
                Precision Care for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-primary-container">
                  Every Drive.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="font-body-text text-base sm:text-lg leading-[27px] text-secondary max-w-2xl mb-8">
                Professional automotive care in Sialkot Cantonment, focused on
                computerized OBD-II diagnostics, mechanical repairs, and
                dependable service engineered to European paddock standards.
              </p>

              {/* CTA Cluster */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-12">
                <a
                  href={WORKSHOP_CONTACT.defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-primary-container text-white px-6 py-3.5 rounded font-mono-label text-[13px] font-semibold uppercase tracking-[0.08em] hover:bg-inverse-primary border border-primary/40 crimson-glow active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp the Workshop</span>
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2.5 bg-surface-container text-on-surface px-6 py-3.5 rounded font-mono-label text-[13px] font-semibold uppercase tracking-[0.08em] hairline-border hover:border-outline hover:bg-surface-container-high active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
                >
                  <SlidersHorizontal className="w-4 h-4 text-primary shrink-0" />
                  <span>Explore Our Services</span>
                </a>

                <a
                  href="#location"
                  className="inline-flex items-center gap-2 font-mono-label text-[12px] uppercase tracking-[0.06em] text-secondary hover:text-primary transition-colors py-2.5 px-2 whitespace-nowrap shrink-0"
                >
                  <Navigation className="w-4 h-4 text-primary shrink-0" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Full-Width Aligned 4-Column Trust Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-7 border-t border-outline-variant/30">
              <div className="p-4 bg-surface-container-lowest/85 hairline-border rounded backdrop-blur-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-primary-container mb-1">
                  <Star className="w-4 h-4 fill-primary-container text-primary-container shrink-0" />
                  <span className="font-mono-label text-sm font-bold text-on-surface">
                    4.9 / 5.0
                  </span>
                </div>
                <p className="font-mono-label text-[11px] uppercase tracking-wider text-secondary">
                  Verified Google Rating
                </p>
              </div>

              <div className="p-4 bg-surface-container-lowest/85 hairline-border rounded backdrop-blur-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-primary-container mb-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="font-mono-label text-sm font-bold text-on-surface">
                    121+ Reviews
                  </span>
                </div>
                <p className="font-mono-label text-[11px] uppercase tracking-wider text-secondary">
                  Sialkot Motorists
                </p>
              </div>

              <div className="p-4 bg-surface-container-lowest/85 hairline-border rounded backdrop-blur-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-primary-container mb-1">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="font-mono-label text-sm font-bold text-on-surface">
                    Khawaja Safdar Rd
                  </span>
                </div>
                <p className="font-mono-label text-[11px] uppercase tracking-wider text-secondary">
                  Sialkot Cantonment Atelier
                </p>
              </div>

              <div className="p-4 bg-surface-container-lowest/85 hairline-border rounded backdrop-blur-sm flex flex-col justify-between">
                <div className="flex items-center gap-2 text-primary-container mb-1">
                  <Headphones className="w-4 h-4 shrink-0" />
                  <span className="font-mono-label text-sm font-bold text-on-surface">
                    Direct Dispatch
                  </span>
                </div>
                <p className="font-mono-label text-[11px] uppercase tracking-wider text-secondary">
                  {WORKSHOP_CONTACT.phoneDisplay}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Services Grid */}
        <section
          id="services"
          className="py-14 md:py-20 border-b border-outline-variant/30 relative scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="text-primary-container font-mono-label text-[11px] font-semibold uppercase tracking-[0.08em]">
                    01. CALIBRATION &amp; ENGINEERING
                  </span>
                </div>
                <h2 className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface">
                  Specialized Workshop Solutions
                </h2>
                <p className="font-body-text text-sm md:text-base text-secondary mt-1.5">
                  Engineered for high-spec diagnostics, mechanical reliability,
                  and factory torque tolerances.
                </p>
              </div>

              <div className="font-mono-label text-[11px] text-secondary uppercase tracking-[0.08em] px-3.5 py-2 rounded bg-surface-container-low hairline-border self-start md:self-auto whitespace-nowrap">
                6 DEDICATED SERVICE BAYS · MON–SAT 09:00–20:00
              </div>
            </div>

            {/* Primary 4 Image Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {PRIMARY_SERVICES.map((service) => {
                const waHref = `https://wa.me/${
                  WORKSHOP_CONTACT.whatsappNumber
                }?text=${encodeURIComponent(service.whatsappText)}`;

                return (
                  <article
                    key={service.id}
                    className="bg-surface-container-low hairline-border rounded group hover:border-primary/40 transition-all duration-200 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="flex flex-col flex-1">
                      <div className="relative h-52 overflow-hidden border-b border-outline-variant/20 bg-surface-container-lowest">
                        <WorkshopImage
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded hairline-border font-mono-label text-[10px] uppercase tracking-[0.1em] text-primary">
                          [{service.bayCode}]
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-display-text text-xl font-medium text-on-surface mb-2">
                            {service.title}
                          </h3>
                          <p className="font-body-text text-xs leading-[19px] text-secondary mb-4">
                            {service.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 font-mono-label text-[11px] text-on-surface-variant pt-2 border-t border-outline-variant/15">
                          {service.tags.map((tag, idx) => (
                            <React.Fragment key={tag}>
                              {idx > 0 && (
                                <span
                                  aria-hidden="true"
                                  className="text-secondary/50"
                                >
                                  ·
                                </span>
                              )}
                              <span>{tag}</span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleSelectServiceForBooking(service.bookingOption)
                        }
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 px-3 rounded hairline-border font-mono-label text-[11px] uppercase tracking-[0.06em] transition-colors whitespace-nowrap"
                      >
                        <span>Book Bay</span>
                      </button>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-white py-2.5 px-3 rounded font-mono-label text-[11px] uppercase tracking-[0.06em] transition-all whitespace-nowrap"
                      >
                        <span>WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Secondary 4 Stage Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAGE_SERVICES.map((stage) => {
                const waHref = `https://wa.me/${
                  WORKSHOP_CONTACT.whatsappNumber
                }?text=${encodeURIComponent(stage.whatsappText)}`;

                return (
                  <article
                    key={stage.id}
                    className="bg-surface-container-low hairline-border rounded group hover:border-primary/40 transition-all duration-200 flex flex-col justify-between p-5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-outline-variant/15">
                        {renderStageIcon(stage.iconName)}
                        <span className="font-mono-label text-[11px] uppercase tracking-[0.1em] text-secondary">
                          [{stage.stageCode}]
                        </span>
                      </div>
                      <h3 className="font-display-text text-xl font-medium text-on-surface mb-2">
                        {stage.title}
                      </h3>
                      <p className="font-body-text text-xs leading-[19px] text-secondary mb-6">
                        {stage.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-outline-variant/15">
                      <button
                        type="button"
                        onClick={() =>
                          handleSelectServiceForBooking(stage.bookingOption)
                        }
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 px-3 rounded hairline-border font-mono-label text-[11px] uppercase tracking-[0.06em] transition-colors whitespace-nowrap"
                      >
                        <span>Book Bay</span>
                      </button>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-container-high hover:bg-primary-container text-on-surface hover:text-white py-2.5 px-3 rounded font-mono-label text-[11px] uppercase tracking-[0.06em] transition-all whitespace-nowrap"
                      >
                        <span>WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3B. Interactive Diagnostic Bay Telemetry Console (#diagnostics) */}
        <section
          id="diagnostics"
          className="py-14 md:py-20 border-b border-outline-variant/30 bg-surface-container-lowest scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <span className="text-primary-container font-mono-label text-[11px] font-semibold uppercase tracking-[0.08em] block mb-2">
                  02. DIAGNOSTIC BAY &amp; TELEMETRY BENCH
                </span>
                <h2 className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface">
                  Computerized Fault Interrogation
                </h2>
                <p className="font-body-text text-sm md:text-base text-secondary mt-1.5 max-w-2xl">
                  Select a subsystem protocol below to inspect our diagnostic
                  bench tolerances before scheduling a bay session.
                </p>
              </div>

              {/* Segmented Filter Controls */}
              <div
                role="tablist"
                aria-label="Diagnostic Subsystem Protocols"
                className="flex flex-wrap items-center gap-2 bg-surface-container-low p-1.5 rounded hairline-border self-start"
              >
                {DIAGNOSTIC_MODULES.map((mod) => {
                  const isSelected = mod.id === selectedDiagnosticId;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setSelectedDiagnosticId(mod.id)}
                      className={`px-3.5 py-2 rounded font-mono-label text-[11px] uppercase tracking-[0.08em] transition-all whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-primary-container text-white font-semibold shadow-sm'
                          : 'text-secondary hover:text-on-surface'
                      }`}
                    >
                      {mod.code}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-8 bg-surface-container-low hairline-border rounded p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-outline-variant/20">
                    <div className="flex items-center gap-2.5">
                      <Cpu className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-mono-label text-xs uppercase tracking-widest text-primary font-semibold">
                        [{activeDiagnostic.code}]
                      </span>
                    </div>
                    <span className="font-mono-label text-xs text-secondary">
                      PROTOCOL: {activeDiagnostic.protocol}
                    </span>
                  </div>

                  <h3 className="font-display-text text-2xl md:text-[28px] font-semibold text-on-surface mb-3">
                    {activeDiagnostic.system}
                  </h3>
                  <p className="font-body-text text-sm md:text-base text-secondary leading-relaxed mb-6">
                    {activeDiagnostic.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-outline-variant/20">
                  {activeDiagnostic.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 bg-surface-container rounded hairline-border"
                    >
                      <span className="font-mono-label text-[10px] uppercase tracking-widest text-secondary block mb-1">
                        {m.label}
                      </span>
                      <span className="font-mono-label text-lg font-bold text-on-surface">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-surface-container hairline-border rounded p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono-label text-[11px] uppercase tracking-widest text-primary block mb-2">
                    [DIRECT BAY RESERVATION]
                  </span>
                  <h4 className="font-display-text text-xl font-semibold text-on-surface mb-3">
                    Experience Zero-Guesswork Diagnostics
                  </h4>
                  <p className="font-body-text text-sm text-secondary leading-relaxed mb-6">
                    Every diagnostic session includes a printed &amp; WhatsApp
                    PDF fault report detailing live sensor graphs, OEM repair
                    procedures, and transparent parts breakdown before mechanical
                    work begins.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-outline-variant/20">
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectServiceForBooking(
                        activeDiagnostic.bookingService
                      )
                    }
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-inverse-primary text-white py-3 px-4 rounded font-mono-label text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Schedule {activeDiagnostic.code} Scan</span>
                  </button>
                  <a
                    href={`https://wa.me/${
                      WORKSHOP_CONTACT.whatsappNumber
                    }?text=${encodeURIComponent(
                      `Assalam-o-Alaikum, I want to book a ${activeDiagnostic.system} (${activeDiagnostic.code}) scan at EDITION-1.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-surface-container-high hover:bg-surface-bright text-on-surface py-3 px-4 rounded hairline-border font-mono-label text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>Ask Master Technician</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Editorial About Section */}
        <section
          id="about"
          className="py-14 md:py-20 border-b border-outline-variant/30 bg-surface-container-low/50 scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="font-mono-label text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                      03. THE SIALKOT ATELIER PHILOSOPHY
                    </span>
                  </div>

                  <h2
                    className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface"
                    style={{ textWrap: 'balance' }}
                  >
                    Calculated Excellence. Zero Guesswork.
                  </h2>

                  <p className="font-body-text text-base md:text-lg leading-[27px] text-secondary">
                    Automotive diagnostics and repair, with clear communication
                    and a practical approach to getting your vehicle back on the
                    road in prime operating condition.
                  </p>

                  <p className="font-body-text text-sm md:text-base leading-[24px] text-secondary">
                    Founded in Sialkot Cantonment to solve the chronic
                    frustration of trial-and-error mechanics, EDITION-1
                    implements structured diagnostics protocols used in modern
                    European workshops. We combine computerized scan tools,
                    physical precision gauges, and verified OEM assembly
                    tolerances before touching a single bolt.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-surface-container hairline-border rounded flex flex-col justify-between">
                    <span className="font-mono-label text-xs font-bold uppercase tracking-wider text-primary block mb-1.5">
                      100% TRANSPARENCY
                    </span>
                    <p className="font-body-text text-xs leading-[19px] text-secondary">
                      Pre-repair live telemetry logs and digital estimate
                      confirmations delivered directly via WhatsApp.
                    </p>
                  </div>

                  <div className="p-5 bg-surface-container hairline-border rounded flex flex-col justify-between">
                    <span className="font-mono-label text-xs font-bold uppercase tracking-wider text-primary block mb-1.5">
                      TORQUE COMPLIANT
                    </span>
                    <p className="font-body-text text-xs leading-[19px] text-secondary">
                      Calibrated digital torque wrenches applied to all chassis,
                      brake caliper, and cylinder head assemblies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex">
                <div className="relative w-full min-h-[380px] lg:min-h-[460px] rounded overflow-hidden hairline-border bg-surface-container-lowest">
                  <WorkshopImage
                    src={HERO_IMAGE}
                    alt="EDITION-1 Cleanroom Workshop Sialkot"
                    className="w-full h-full object-cover object-center brightness-90"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 hairline-border rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="font-mono-label text-[10px] text-primary uppercase tracking-widest">
                        [CLEANROOM WORKSHOP PROTOCOL]
                      </p>
                      <p className="font-mono-label text-xs text-on-surface font-semibold mt-0.5">
                        Khawaja Safdar Road Facility
                      </p>
                    </div>
                    <div className="sm:text-right font-mono-label text-[10px] text-secondary uppercase tracking-widest">
                      <span>SIALKOT CANTONMENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Technical Gallery */}
        <section
          id="gallery"
          className="py-14 md:py-20 border-b border-outline-variant/30 scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
              <div>
                <span className="text-primary-container font-mono-label text-[11px] font-semibold uppercase tracking-[0.08em] block mb-2">
                  04. WORKSHOP TELEMETRY &amp; OPERATIONS
                </span>
                <h2 className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface">
                  Precision in Action
                </h2>
              </div>
              <p className="font-mono-label text-[10px] uppercase tracking-[0.1em] text-secondary">
                SELECT ANY FRAME TO EXPAND HIGH-RESOLUTION FEED
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GALLERY_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="relative group cursor-pointer overflow-hidden rounded hairline-border bg-surface-container-high h-72 text-left focus:outline-none focus:ring-2 focus:ring-primary-container"
                >
                  <WorkshopImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex justify-between items-end gap-2">
                    <div>
                      <span className="font-mono-label text-[10px] text-primary uppercase tracking-widest block">
                        [{item.code}]
                      </span>
                      <p className="font-mono-label text-xs text-on-surface font-medium mt-0.5">
                        {item.title}
                      </p>
                    </div>
                    <Maximize2 className="w-4 h-4 text-secondary group-hover:text-primary transition-colors shrink-0 mb-0.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Workshop Gallery Lightbox"
            className="fixed inset-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxIndex(null);
            }}
          >
            <div className="relative max-w-5xl w-full bg-surface hairline-border rounded p-3 md:p-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="font-mono-label text-xs text-primary uppercase tracking-widest">
                    [{GALLERY_ITEMS[lightboxIndex].code}]
                  </span>
                  <span className="font-mono-label text-xs text-secondary">
                    · FRAME {lightboxIndex + 1} OF {GALLERY_ITEMS.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Close lightbox"
                  className="w-9 h-9 bg-surface-container-high rounded flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative flex items-center justify-center bg-surface-container-lowest rounded overflow-hidden">
                <WorkshopImage
                  src={GALLERY_ITEMS[lightboxIndex].image}
                  alt={GALLERY_ITEMS[lightboxIndex].alt}
                  className="w-full max-h-[70vh] object-contain"
                />
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + GALLERY_ITEMS.length) %
                        GALLERY_ITEMS.length
                    )
                  }
                  aria-label="Previous image"
                  className="absolute left-3 w-10 h-10 rounded bg-surface-container-lowest/85 hairline-border flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length)
                  }
                  aria-label="Next image"
                  className="absolute right-3 w-10 h-10 rounded bg-surface-container-lowest/85 hairline-border flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="font-mono-label text-xs text-secondary text-center mt-3">
                {GALLERY_ITEMS[lightboxIndex].caption}
              </p>
            </div>
          </div>
        )}

        {/* 6. Verified Google Reviews & Trust */}
        <section
          id="reviews"
          className="py-14 md:py-20 border-b border-outline-variant/30 bg-surface-container-low/40 scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-mono-label text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-400">
                    05. AUTHENTIC SIALKOT MOTORIST REVIEWS
                  </span>
                </div>
                <h2 className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface">
                  Client Telemetry &amp; Trust
                </h2>
              </div>

              <a
                href={WORKSHOP_CONTACT.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-mono-label text-xs uppercase tracking-[0.06em] hover:underline whitespace-nowrap"
              >
                <span>Read All 121+ Reviews on Google</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Rating Highlight Header Banner */}
            <div className="bg-surface-container hairline-border rounded p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl sm:text-4xl font-bold font-display-text text-on-surface tabular-nums">
                  4.9
                </div>
                <div>
                  <div className="flex items-center text-amber-400 gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="font-mono-label text-[11px] text-secondary">
                    Based on 121 Verified Client Submissions
                  </p>
                </div>
              </div>

              <div className="font-mono-label text-[11px] uppercase tracking-wider text-primary bg-surface-container-high px-3.5 py-2 rounded hairline-border">
                SIALKOT&apos;S TOP RATED PRECISION WORKSHOP
              </div>
            </div>

            {/* Review Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="bg-surface-container-lowest p-6 rounded hairline-border flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="font-mono-label text-[10px] uppercase tracking-wider text-secondary">
                        {review.timeAgo}
                      </span>
                    </div>

                    <p className="font-body-text text-sm leading-[22px] text-on-surface mb-6">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-surface-container-high hairline-border flex items-center justify-center font-mono-label text-xs text-primary font-bold shrink-0">
                      {review.initial}
                    </span>
                    <div>
                      <p className="font-mono-label text-xs text-on-surface font-semibold">
                        {review.author}
                      </p>
                      <p className="font-mono-label text-[10px] text-secondary">
                        {review.vehicle}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Interactive Location & Google Maps */}
        <section
          id="location"
          className="py-14 md:py-20 border-b border-outline-variant/30 scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="mb-8">
              <span className="text-primary-container font-mono-label text-[11px] font-semibold uppercase tracking-[0.08em] block mb-2">
                06. PHYSICAL WORKSHOP FACILITY
              </span>
              <h2 className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface">
                Location &amp; Access Coordinates
              </h2>
              <p className="font-body-text text-sm md:text-base text-secondary mt-1">
                Conveniently positioned on Khawaja Safdar Road in Sialkot
                Cantonment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Map Iframe Container */}
              <div className="lg:col-span-7 bg-surface-container hairline-border rounded overflow-hidden min-h-[380px] lg:min-h-[420px] relative flex">
                <iframe
                  src={WORKSHOP_CONTACT.googleMapsEmbedUrl}
                  title="EDITION-1 Workshop Location Map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full min-h-[380px] lg:min-h-[420px] border-0 grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-3.5 left-3.5 bg-surface-container-lowest/90 backdrop-blur px-3 py-1.5 rounded hairline-border font-mono-label text-[10px] uppercase tracking-widest text-primary">
                  [NAV TARGET: KHAWAJA SAFDAR RD, SIALKOT]
                </div>
              </div>

              {/* Facility Logistics Panel */}
              <div className="lg:col-span-5 bg-surface-container-low p-6 md:p-8 rounded hairline-border flex flex-col justify-between">
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono-label text-[10px] text-primary uppercase tracking-widest">
                        [ATELIER ADDRESS]
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1 font-mono-label text-[10px] uppercase tracking-wider text-secondary hover:text-primary transition-colors"
                      >
                        {copiedAddress ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY ADDRESS</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="font-body-text text-base leading-[25px] text-on-surface font-semibold">
                      {WORKSHOP_CONTACT.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="font-mono-label text-[10px] text-secondary uppercase tracking-widest block">
                        DIRECT DISPATCH
                      </span>
                      <a
                        href={WORKSHOP_CONTACT.phoneHref}
                        className="block font-mono-label text-xs text-primary font-bold hover:underline mt-1"
                      >
                        {WORKSHOP_CONTACT.phoneDisplay}
                      </a>
                    </div>
                    <div>
                      <span className="font-mono-label text-[10px] text-secondary uppercase tracking-widest block">
                        WHATSAPP HOTLINE
                      </span>
                      <a
                        href={`https://wa.me/${WORKSHOP_CONTACT.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-mono-label text-xs text-primary font-bold hover:underline mt-1"
                      >
                        {WORKSHOP_CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/20">
                    <span className="font-mono-label text-[10px] text-secondary uppercase tracking-widest block mb-2">
                      OPERATING PROTOCOL
                    </span>
                    <div className="space-y-2 text-xs font-body-text text-on-surface">
                      <div className="flex justify-between items-center">
                        <span className="text-secondary">
                          Monday – Saturday:
                        </span>
                        <span className="font-mono-label text-[11px]">
                          09:00 AM – 08:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-secondary">Sunday:</span>
                        <span className="font-mono-label text-[11px] text-primary">
                          On-Call Urgent Assistance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-outline-variant/20">
                  <a
                    href={WORKSHOP_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-container text-white py-3.5 px-4 rounded font-mono-label text-xs font-semibold uppercase tracking-[0.08em] hover:bg-inverse-primary transition-all whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 shrink-0" />
                    <span>Get Directions in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Interactive Service Booking & Enquiry Form */}
        <section
          id="booking"
          className="py-14 md:py-20 border-b border-outline-variant/30 bg-surface-container-low/30 scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-primary-container font-mono-label text-[11px] font-semibold uppercase tracking-[0.08em] block mb-2">
                  07. DIRECT ATELIER SCHEDULING
                </span>
                <h2 className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface">
                  Book Vehicle Diagnostics &amp; Service
                </h2>
                <p className="font-body-text text-sm md:text-base text-secondary mt-1.5">
                  Submit your vehicle specifications below. Our diagnostic
                  technician reviews your ticket and confirms your bay slot via
                  WhatsApp.
                </p>
              </div>

              <form
                onSubmit={handleBookingSubmit}
                className="bg-surface-container p-6 md:p-10 rounded hairline-border space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="cust-name"
                      className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                    >
                      Customer Name *
                    </label>
                    <input
                      id="cust-name"
                      type="text"
                      required
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cust-phone"
                      className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                    >
                      WhatsApp / Contact Phone *
                    </label>
                    <input
                      id="cust-phone"
                      type="tel"
                      required
                      value={custPhone}
                      onChange={(e) => setCustPhone(e.target.value)}
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="car-make"
                      className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                    >
                      Vehicle Make *
                    </label>
                    <input
                      id="car-make"
                      type="text"
                      required
                      value={carMake}
                      onChange={(e) => setCarMake(e.target.value)}
                      placeholder="e.g. Toyota, Honda, Audi"
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="car-model"
                      className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                    >
                      Vehicle Model *
                    </label>
                    <input
                      id="car-model"
                      type="text"
                      required
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      placeholder="e.g. Corolla, Civic, Prado"
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="car-year"
                      className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                    >
                      Model Year
                    </label>
                    <input
                      id="car-year"
                      type="text"
                      value={carYear}
                      onChange={(e) => setCarYear(e.target.value)}
                      placeholder="e.g. 2022"
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label
                      htmlFor="service-type"
                      className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                    >
                      Service Required *
                    </label>
                    <select
                      id="service-type"
                      required
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                    >
                      {BOOKING_SERVICES.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="bg-surface-container-lowest text-on-surface"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferred-date"
                      className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="preferred-date"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="problem-desc"
                    className="block font-mono-label text-[10px] uppercase tracking-widest text-secondary mb-1.5"
                  >
                    Describe Fault Symptoms / Vehicle Condition
                  </label>
                  <textarea
                    id="problem-desc"
                    rows={3}
                    value={problemDesc}
                    onChange={(e) => setProblemDesc(e.target.value)}
                    placeholder="Describe warning lights, odd noises, vibration speeds, or service goals..."
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3.5 py-2.5 text-on-surface font-body-text text-sm focus:border-primary-container focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary-container hover:bg-inverse-primary text-white py-3.5 px-6 rounded font-mono-label text-xs font-semibold uppercase tracking-[0.08em] crimson-glow transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>Submit Booking Enquiry</span>
                  </button>
                </div>

                {submittedWaUrl && (
                  <div
                    id="booking-success"
                    className="p-5 bg-surface-container-high hairline-border border-emerald-500/40 rounded text-center space-y-3"
                  >
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-mono-label text-xs font-semibold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>ENQUIRY TICKET PREPARED FOR DISPATCH</span>
                    </div>
                    <p className="font-body-text text-xs text-secondary max-w-lg mx-auto">
                      Your vehicle dossier for{' '}
                      <strong className="text-on-surface">
                        {carMake} {carModel}
                      </strong>{' '}
                      ({serviceType}) is ready. Launch WhatsApp below for direct
                      5-minute slot confirmation:
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                      <a
                        href={submittedWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded font-mono-label text-[11px] font-semibold uppercase tracking-wider transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>Open Instant WhatsApp Dispatch</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyTicketSummary}
                        className="inline-flex items-center gap-1.5 bg-surface-container px-4 py-2.5 rounded hairline-border font-mono-label text-[11px] uppercase tracking-wider text-secondary hover:text-on-surface transition-colors"
                      >
                        {copiedTicket ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">
                              Ticket Copied
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Ticket Summary</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* 9. FAQ Accordion */}
        <section
          id="faq"
          className="py-14 md:py-20 border-b border-outline-variant/30 scroll-mt-20"
        >
          <div className="max-w-[1440px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-primary-container font-mono-label text-[11px] font-semibold uppercase tracking-[0.08em] block mb-2">
                  08. CLEAR PROTOCOLS
                </span>
                <h2 className="font-display-text text-3xl md:text-[40px] md:leading-[48px] font-semibold tracking-[-0.02em] text-on-surface">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-surface-container hairline-border rounded overflow-hidden"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenFaqId((prev) =>
                            prev === faq.id ? null : faq.id
                          )
                        }
                        className="w-full p-4 md:p-5 text-left flex justify-between items-center gap-4 font-display-text text-base md:text-lg font-medium text-on-surface hover:text-primary transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-primary' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 md:px-5 pb-5 pt-3 font-body-text text-sm leading-[22px] text-secondary border-t border-outline-variant/15">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center group">
        <div className="mr-3 hidden md:block bg-surface-container-high/95 hairline-border text-on-surface px-3.5 py-2 rounded font-mono-label text-[10px] uppercase tracking-widest backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Master Technician
        </div>
        <a
          href={WORKSHOP_CONTACT.defaultWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Master Technician on WhatsApp"
          className="relative w-14 h-14 bg-primary-container text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(229,26,44,0.45)] hover:bg-inverse-primary hover:scale-105 active:scale-95 transition-all"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

      {/* 11. Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="w-full px-5 md:px-12 py-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Brand & Local SEO Citation */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <a
              href="#"
              className="font-display-text text-2xl font-bold tracking-tight text-on-surface hover:text-primary transition-colors"
            >
              EDITION-1 ATELIER
            </a>
            <p className="font-body-text text-xs text-secondary mt-1 max-w-md">
              © {new Date().getFullYear()} EDITION-1 AUTOMOTIVE ATELIER. SIALKOT
              CANTONMENT, PAKISTAN. PRECISION ENGINEERED.
            </p>
          </div>

          {/* Links Cluster */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
            <a
              href="#diagnostics"
              className="text-secondary font-mono-label text-[10px] uppercase tracking-[0.1em] hover:text-primary transition-colors whitespace-nowrap"
            >
              Diagnostic Telemetry
            </a>
            <a
              href="#services"
              className="text-secondary font-mono-label text-[10px] uppercase tracking-[0.1em] hover:text-primary transition-colors whitespace-nowrap"
            >
              Mechanical Overhaul
            </a>
            <a
              href="#services"
              className="text-secondary font-mono-label text-[10px] uppercase tracking-[0.1em] hover:text-primary transition-colors whitespace-nowrap"
            >
              Hybrid/EV Calibration
            </a>
            <a
              href={WORKSHOP_CONTACT.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-mono-label text-[10px] uppercase tracking-[0.1em] hover:text-primary transition-colors whitespace-nowrap"
            >
              Google Reviews
            </a>
            <a
              href="#location"
              className="text-secondary font-mono-label text-[10px] uppercase tracking-[0.1em] hover:text-primary transition-colors whitespace-nowrap"
            >
              Khawaja Safdar Road Route
            </a>
            <a
              href={WORKSHOP_CONTACT.phoneHref}
              className="text-primary font-mono-label text-[10px] uppercase tracking-[0.1em] hover:underline transition-colors whitespace-nowrap"
            >
              Direct Dispatch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
