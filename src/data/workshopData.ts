export interface PrimaryService {
  id: string;
  bayCode: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  whatsappText: string;
  bookingOption: string;
}

export interface StageService {
  id: string;
  stageCode: string;
  iconName: 'settings' | 'snowflake' | 'car' | 'droplet';
  title: string;
  description: string;
  whatsappText: string;
  bookingOption: string;
}

export interface DiagnosticModule {
  id: string;
  code: string;
  system: string;
  protocol: string;
  metrics: { label: string; value: string }[];
  summary: string;
  bookingService: string;
}

export interface GalleryItem {
  id: string;
  code: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export interface ReviewItem {
  id: string;
  initial: string;
  author: string;
  vehicle: string;
  timeAgo: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const WORKSHOP_CONTACT = {
  phoneDisplay: '+92 346 6764277',
  phoneHref: 'tel:+923466764277',
  whatsappNumber: '923466764277',
  defaultWhatsappUrl:
    'https://wa.me/923466764277?text=Assalam-o-Alaikum,%20I%20would%20like%20to%20enquire%20about%20vehicle%20inspection%20or%20repair%20services%20at%20EDITION-1.',
  address:
    'Khawaja Safdar Road, near Chairman Filling Station, Sialkot Cantonment, Sialkot, Punjab, Pakistan.',
  googleMapsUrl:
    'https://maps.google.com/maps?q=Khawaja%20Safdar%20Road,%20Sialkot%20Cantonment,%20Pakistan',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Khawaja%20Safdar%20Road,%20Sialkot%20Cantonment,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=EDITION-1+Professional+Garage+Auto+Workshop+Sialkot',
};

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDoJ5yXKq5DOavj3un8QMi859s6IvcAtPsz0Rhqxkh2Q7a5FRYLc3pLw72vlhHH7WfcyjpGl9-8S3EPLtbmxkgFz-HXWYJyv1gsqwLMxP5qJvDneHHr6H8dLP8vGiYeRnHDTwnhxlVUYCQuz81EeHuyeaZlwtcAQCDbxv8qR7YznqsvGtdzqzjWZyy-gg9f0ZXl83R78GpnZH1K3BQw9Js19uL7ZeAmvx00PN-Hns4rzQCPEANDThrPww';

export const PRIMARY_SERVICES: PrimaryService[] = [
  {
    id: 'diagnostics',
    bayCode: 'BAY-01 : DIAGNOSTIC',
    title: 'Computerized Diagnostics',
    description:
      'OBD-II scanner telemetry, live ECU fault-code tracing, real-time sensor calibration, and module reprogram adaptation.',
    tags: ['ECU Scan', 'Live Bus Telemetry'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXeYjjZvtwvESCYgxFt83U4XUXs6WgpcH8Qa022cDwqGVGq9dBXE1DCrxMzLgGLyv7_i-WsqI1gMv-PJVqbbsGQQ6RDp1BJtVTWRIALdhvJ9p7Lw3r65Q4Kea6TPF8RuKpvFNllJpIuFPCQNmAGQ_lrsnBSEPubYazuSa2m6qp4zZDXiq0gxHG51faOGTCpXDhp6Q1LRhKuoNXLEzzDAzH-d4Zq0tx19NGstruEucpkuTC2JfAtIvn8w',
    imageAlt: 'OBD-II Diagnostic Telemetry Sialkot',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about Computerized Vehicle Diagnostics at EDITION-1.',
    bookingOption: 'Computerized Diagnostics & ECU Scan',
  },
  {
    id: 'engine-repair',
    bayCode: 'BAY-02 : POWERTRAIN',
    title: 'Engine & Mechanical Repair',
    description:
      'Timing component overhaul, cylinder head gasket replacements, cooling circuit pressurization, and factory torque-spec assembly.',
    tags: ['OEM Spec', 'Micrometer Verified'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB21uYU-Sgjp3X1zLqtSSey-oACaxu-TPSnnzIbMc8K-4tBkXR2NTKl0mxi0NjyKLoXmtCJtBvRWBmtltclrae4InCjzepaYMKBCqsh6JUxRvI8lM_KG26r4_hmD_dGymUF-dm7YwveyUWc_q_ASzLpE35m7g0NcJzYeoDINAaq6iuex1P4kAwmDnhTQDUsPomk3_uNv0b5HLXYUKvbyIRKePUa0sgNlFdMf-9BiA0gAlW-1_v1fQpYXQ',
    imageAlt: 'Engine and Mechanical Overhaul Sialkot',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about Precision Engine and Mechanical Repair at EDITION-1.',
    bookingOption: 'Engine & Mechanical Repair',
  },
  {
    id: 'brake-overhaul',
    bayCode: 'BAY-03 : BRAKING',
    title: 'Brake & ABS Overhaul',
    description:
      'Ventilated rotor runout machining, multi-piston caliper bleeding, computerized ABS module validation, and ceramic pad fitting.',
    tags: ['Ceramic Comp', 'Zero Vibration'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsI1nzEVsYdJZhirkZ4kFBf-6sXPJb30GRbTwtNITfitynxs_G4JmkhtHUYObmLzVS0Kns5Yq-FoZygj7uI0CkieGMq3fXC_u5ndQwwN2U00IaF2vYchDkdMd-AI6jcr7d_2a5hq8WarmWtbbS-Lw_mBR9ZiUoY0utet8w52FxL-0fSNLLxHTgkwd14-DDO1_5fO6Y09JOgzGTPzwpTVeHHRzOrMn9j5ma-CjLyUa8mRSVjF5aQNY9uA',
    imageAlt: 'Brembo Caliper and Rotor Brake Overhaul',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about High-Performance Brake and ABS Overhaul at EDITION-1.',
    bookingOption: 'High-Performance Brake / ABS Overhaul',
  },
  {
    id: 'hybrid-ev',
    bayCode: 'BAY-04 : HYBRID/EV',
    title: 'Hybrid & EV Powertrain',
    description:
      'High-voltage inverter checks, cell-by-cell battery pack health analytics, cooling fan service, and regenerative brake balance.',
    tags: ['HV Insulated', 'Degradation Map'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB21uYU-Sgjp3X1zLqtSSey-oACaxu-TPSnnzIbMc8K-4tBkXR2NTKl0mxi0NjyKLoXmtCJtBvRWBmtltclrae4InCjzepaYMKBCqsh6JUxRvI8lM_KG26r4_hmD_dGymUF-dm7YwveyUWc_q_ASzLpE35m7g0NcJzYeoDINAaq6iuex1P4kAwmDnhTQDUsPomk3_uNv0b5HLXYUKvbyIRKePUa0sgNlFdMf-9BiA0gAlW-1_v1fQpYXQ',
    imageAlt: 'Hybrid and EV Inverter Diagnostics Sialkot',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about Hybrid and EV Powertrain Diagnostics at EDITION-1.',
    bookingOption: 'Hybrid / EV Powertrain Diagnostics',
  },
];

export const STAGE_SERVICES: StageService[] = [
  {
    id: 'transmission',
    stageCode: 'STAGE-T',
    iconName: 'settings',
    title: 'Transmission & DCT Calibration',
    description:
      'Dual-clutch fluid circulation flushes, mechatronics valve body repairs, clutch point adaptation, and torque converter locking checks.',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about Transmission and DCT Service at EDITION-1.',
    bookingOption: 'Transmission & DCT Fluid / Mechatronics',
  },
  {
    id: 'climate-ac',
    stageCode: 'STAGE-AC',
    iconName: 'snowflake',
    title: 'Climate Control & AC System',
    description:
      'Laser refrigerant leak detection, high-vacuum R134a/R1234yf replenishment, compressor clutch rebuilds, and cabin anti-bacterial hygiene.',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about Car AC and Climate Control Service at EDITION-1.',
    bookingOption: 'Climate Control & AC System Overhaul',
  },
  {
    id: 'suspension',
    stageCode: 'STAGE-SUSP',
    iconName: 'car',
    title: 'Suspension & Dynamic Steering',
    description:
      'Hydraulic press bushing restoration, electronically damped coilovers, rack recalibration, and camber-caster geometric alignment.',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about Suspension and Steering Work at EDITION-1.',
    bookingOption: 'Suspension & Laser Alignment',
  },
  {
    id: 'preventive-lube',
    stageCode: 'STAGE-LUBE',
    iconName: 'droplet',
    title: 'Preventive Care & Lube',
    description:
      'Pure synthetic spec lubricants (0W-20 / 5W-40), OEM oil/air filtration, multi-point fluid titration, and 40-point safety inspection.',
    whatsappText:
      'Assalam-o-Alaikum, I would like to enquire about Preventive Maintenance and Oil Service at EDITION-1.',
    bookingOption: 'Complete Synthetic Oil & Safety Inspection',
  },
];

export const DIAGNOSTIC_MODULES: DiagnosticModule[] = [
  {
    id: 'ecu-can',
    code: 'OBD-II / CAN-FD',
    system: 'Engine Control & Fuel Trim Telemetry',
    protocol: 'ISO 15765-4 CAN (11/29 bit ID, 500 kbaud)',
    metrics: [
      { label: 'Scan Duration', value: '25 MIN' },
      { label: 'Channels Read', value: '128 PIDs' },
      { label: 'Trim Accuracy', value: '±0.05%' },
    ],
    summary:
      'Full bi-directional ECU interrogation capturing live air-fuel ratio lambda curves, knock-sensor retard events, injector pulse widths, and freeze-frame fault memory.',
    bookingService: 'Computerized Diagnostics & ECU Scan',
  },
  {
    id: 'hv-battery',
    code: 'HV-PACK / ISOLATION',
    system: 'Hybrid & EV Cell Delta Analytics',
    protocol: 'High-Voltage NiMH & Lithium-Ion Block Profiling',
    metrics: [
      { label: 'Cell Resolution', value: '1.0 mV' },
      { label: 'Insulation Test', value: '500V DC' },
      { label: 'Thermal Loop', value: 'VERIFIED' },
    ],
    summary:
      'Individual module internal resistance (IR) mapping under load, inverter IGBT thermal verification, and electric coolant pump duty-cycle testing.',
    bookingService: 'Hybrid / EV Powertrain Diagnostics',
  },
  {
    id: 'abs-chassis',
    code: 'ABS / ESP / EPB',
    system: 'Braking Pressure & Wheel-Speed Bus',
    protocol: 'Active Solenoid Bleed & Yaw Rate Calibration',
    metrics: [
      { label: 'Rotor Runout', value: '< 0.04 mm' },
      { label: 'Wheel Sensors', value: '4-CH LIVE' },
      { label: 'Fluid Boiling', value: '> 260°C' },
    ],
    summary:
      'Oscilloscope verification of hall-effect wheel speed sensors, electronic parking brake (EPB) service retraction, and hydraulic modulator valve actuation.',
    bookingService: 'High-Performance Brake / ABS Overhaul',
  },
  {
    id: 'dct-tcm',
    code: 'TCM / MECHATRONICS',
    system: 'Dual-Clutch & Automatic Shift Adaptation',
    protocol: 'Clutch Kiss-Point & Solenoid Pressure Sweep',
    metrics: [
      { label: 'Line Pressure', value: '4.2–60 BAR' },
      { label: 'Shift Latency', value: '< 85 ms' },
      { label: 'ATF Temp Gate', value: '35–45°C' },
    ],
    summary:
      'Digital calibration of dual-clutch shift forks, synchro engagement positions, torque converter lock-up slip RPM, and thermal fluid level leveling.',
    bookingService: 'Transmission & DCT Fluid / Mechatronics',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'bay-01',
    code: 'BAY-01 / 02',
    title: 'Hydraulic Lift Center',
    caption: 'Workshop Floor & Dual Hydraulic Bay, EDITION-1 Sialkot',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoJ5yXKq5DOavj3un8QMi859s6IvcAtPsz0Rhqxkh2Q7a5FRYLc3pLw72vlhHH7WfcyjpGl9-8S3EPLtbmxkgFz-HXWYJyv1gsqwLMxP5qJvDneHHr6H8dLP8vGiYeRnHDTwnhxlVUYCQuz81EeHuyeaZlwtcAQCDbxv8qR7YznqsvGtdzqzjWZyy-gg9f0ZXl83R78GpnZH1K3BQw9Js19uL7ZeAmvx00PN-Hns4rzQCPEANDThrPww',
    alt: 'Workshop Floor & Hydraulic Lifts',
  },
  {
    id: 'can-bus',
    code: 'CAN-BUS TELEMETRY',
    title: 'ECU Parameter Tracing',
    caption: 'Live Diagnostic Telemetry & ECU Scan',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXeYjjZvtwvESCYgxFt83U4XUXs6WgpcH8Qa022cDwqGVGq9dBXE1DCrxMzLgGLyv7_i-WsqI1gMv-PJVqbbsGQQ6RDp1BJtVTWRIALdhvJ9p7Lw3r65Q4Kea6TPF8RuKpvFNllJpIuFPCQNmAGQ_lrsnBSEPubYazuSa2m6qp4zZDXiq0gxHG51faOGTCpXDhp6Q1LRhKuoNXLEzzDAzH-d4Zq0tx19NGstruEucpkuTC2JfAtIvn8w',
    alt: 'Live OBD-II Diagnostic Telemetry',
  },
  {
    id: 'chassis-brake',
    code: 'PRECISION CHASSIS',
    title: 'Torque-Calibrated Calipers',
    caption: 'High-Spec Caliper & Brake Overhaul',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsI1nzEVsYdJZhirkZ4kFBf-6sXPJb30GRbTwtNITfitynxs_G4JmkhtHUYObmLzVS0Kns5Yq-FoZygj7uI0CkieGMq3fXC_u5ndQwwN2U00IaF2vYchDkdMd-AI6jcr7d_2a5hq8WarmWtbbS-Lw_mBR9ZiUoY0utet8w52FxL-0fSNLLxHTgkwd14-DDO1_5fO6Y09JOgzGTPzwpTVeHHRzOrMn9j5ma-CjLyUa8mRSVjF5aQNY9uA',
    alt: 'Caliper & Brake Servicing',
  },
  {
    id: 'hybrid-bench',
    code: 'HYBRID BENCH',
    title: 'Inverter Thermals',
    caption: 'High-Voltage Hybrid Inverter Overhaul',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB21uYU-Sgjp3X1zLqtSSey-oACaxu-TPSnnzIbMc8K-4tBkXR2NTKl0mxi0NjyKLoXmtCJtBvRWBmtltclrae4InCjzepaYMKBCqsh6JUxRvI8lM_KG26r4_hmD_dGymUF-dm7YwveyUWc_q_ASzLpE35m7g0NcJzYeoDINAaq6iuex1P4kAwmDnhTQDUsPomk3_uNv0b5HLXYUKvbyIRKePUa0sgNlFdMf-9BiA0gAlW-1_v1fQpYXQ',
    alt: 'Hybrid Inverter & Engine Testing',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    initial: 'M',
    author: 'Majid H. Cheema',
    vehicle: 'Toyota Land Cruiser Prado',
    timeAgo: '3 weeks ago',
    rating: 5,
    quote:
      'Had an intermittent ABS warning light on my Prado that local mechanics in Cantt couldn\'t diagnose. EDITION-1 plugged in computerized telemetry, isolated the exact rear wheel speed sensor fault in 15 minutes, and replaced it cleanly. No guesswork.',
  },
  {
    id: 'rev-2',
    initial: 'U',
    author: 'Usman Dar',
    vehicle: 'Honda Civic 1.5T',
    timeAgo: '1 month ago',
    rating: 5,
    quote:
      'Best workshop experience in Sialkot. The workshop floor looks like an F1 garage. They did a complete suspension bushing overhaul and laser alignment for my Civic RS. The car feels brand new on the motorway.',
  },
  {
    id: 'rev-3',
    initial: 'R',
    author: 'Raza Butt',
    vehicle: 'Toyota Aqua / Prius Hybrid',
    timeAgo: '2 months ago',
    rating: 5,
    quote:
      'Finding genuine hybrid battery diagnostics in Sialkot used to be impossible. Their technicians checked individual cell resistances and inverter coolant loops. Honest pricing sent via WhatsApp before work started.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'How long does a computerized vehicle diagnostic scan take?',
    answer:
      'A comprehensive OBD-II live telemetry scan typically takes 20 to 35 minutes. This includes tracing current and historical ECU error codes, checking fuel trim parameters, battery state-of-health, and verifying live sensor graphs while the vehicle is idling or road-tested.',
  },
  {
    id: 2,
    question: 'Do you service Japanese and European hybrid models?',
    answer:
      'Yes. Our facility is equipped with high-voltage testing instruments for Toyota/Lexus (Prius, Aqua, Axio, RX), Honda (Vezel, Fit, Grace), and European mild-hybrid setups. We test individual cell delta voltages, inverter thermal performance, and inverter water pump cycles.',
  },
  {
    id: 3,
    question: 'Do I need to book an appointment before visiting?',
    answer:
      'While walk-ins are welcomed, booking an appointment via WhatsApp or our online portal reserves your specific diagnostic bay and ensures our senior master technician is dedicated to your vehicle without waiting.',
  },
  {
    id: 4,
    question: 'Do you use genuine OEM parts for replacements?',
    answer:
      'Always. We maintain transparent sourcing with verified OEM part numbers for Japanese, German, and domestic vehicles. Clients receive old parts returned in factory boxes, complete with digital batch authenticity slips.',
  },
  {
    id: 5,
    question: 'Do you provide breakdown assistance or flatbed towing in Sialkot?',
    answer:
      'Yes. We offer direct flatbed tow truck coordination throughout Sialkot Cantonment, Sambrial, Daska road, and airport approaches. Call our dispatch hotline at +92 346 6764277 for emergency recovery.',
  },
];

export const BOOKING_SERVICES = [
  'Computerized Diagnostics & ECU Scan',
  'Engine & Mechanical Repair',
  'High-Performance Brake / ABS Overhaul',
  'Hybrid / EV Powertrain Diagnostics',
  'Transmission & DCT Fluid / Mechatronics',
  'Climate Control & AC System Overhaul',
  'Suspension & Laser Alignment',
  'Complete Synthetic Oil & Safety Inspection',
];
