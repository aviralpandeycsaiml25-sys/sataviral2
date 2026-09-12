/**
 * Sample satellite images utility.
 * Generates realistic SVG data-URLs simulating T0 (Pre-Flood 2024) and T1 (Post-Flood 2026)
 * satellite imagery patches for Nepal/Assam river basin regions.
 */

export function getSampleT0Scene(): { name: string; b64: string } {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
    <defs>
      <linearGradient id="terrain0" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2d5a27"/>
        <stop offset="40%" stop-color="#3d7a34"/>
        <stop offset="70%" stop-color="#4e8c3f"/>
        <stop offset="100%" stop-color="#284e22"/>
      </linearGradient>
      <linearGradient id="river0" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1e3a8a"/>
        <stop offset="100%" stop-color="#2563eb"/>
      </linearGradient>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="400" height="300" fill="url(#terrain0)"/>
    <rect width="400" height="300" fill="url(#grid)"/>

    <path d="M0,80 Q120,60 200,90 T400,70" fill="none" stroke="#22421c" stroke-width="8" opacity="0.4"/>
    <path d="M0,220 Q160,200 280,240 T400,210" fill="none" stroke="#22421c" stroke-width="12" opacity="0.3"/>

    <path d="M 50,0 Q 140,90 170,150 T 260,300" fill="none" stroke="url(#river0)" stroke-width="26" stroke-linecap="round"/>
    <path d="M 170,150 Q 230,190 320,240" fill="none" stroke="url(#river0)" stroke-width="12" stroke-linecap="round"/>

    <rect x="230" y="40" width="60" height="40" fill="#589e47" opacity="0.7" rx="3"/>
    <rect x="300" y="35" width="50" height="55" fill="#4d8b3e" opacity="0.7" rx="3"/>
    <rect x="40" y="180" width="70" height="50" fill="#5c9a4a" opacity="0.7" rx="3"/>
    <rect x="50" y="240" width="55" height="40" fill="#3f7532" opacity="0.7" rx="3"/>

    <circle cx="210" cy="80" r="14" fill="#94a3b8" opacity="0.6"/>
    <circle cx="280" cy="140" r="18" fill="#94a3b8" opacity="0.6"/>
    <rect x="270" y="130" width="22" height="18" fill="#cbd5e1" opacity="0.8"/>
    <rect x="200" y="74" width="16" height="12" fill="#cbd5e1" opacity="0.8"/>

    <rect x="10" y="10" width="175" height="42" rx="6" fill="rgba(15,23,42,0.85)" stroke="rgba(59,130,246,0.4)" stroke-width="1"/>
    <text x="20" y="27" fill="#60a5fa" font-size="11" font-family="monospace" font-weight="bold">SENTINEL-2 MSI · T0</text>
    <text x="20" y="42" fill="#94a3b8" font-size="9" font-family="monospace">DATE: 2024-05-12 · BASELINE</text>
    <circle cx="370" cy="25" r="5" fill="#22c55e"/>
    <text x="315" y="28" fill="#86efac" font-size="9" font-family="monospace">PRE-FLOOD</text>
  </svg>`;
  return {
    name: 'Nepal_Kosi_2024_T0_PreFlood.png',
    b64: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  };
}

export function getSampleT1Scene(): { name: string; b64: string } {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
    <defs>
      <linearGradient id="terrain1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#24451f"/>
        <stop offset="40%" stop-color="#2d5727"/>
        <stop offset="70%" stop-color="#3c6530"/>
        <stop offset="100%" stop-color="#1f3b1a"/>
      </linearGradient>
      <linearGradient id="floodWater" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f2b5c"/>
        <stop offset="50%" stop-color="#1e40af"/>
        <stop offset="100%" stop-color="#172554"/>
      </linearGradient>
      <pattern id="floodHatch" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="rgba(96,165,250,0.35)" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="400" height="300" fill="url(#terrain1)"/>

    <path d="M 50,0 Q 140,90 170,150 T 260,300" fill="none" stroke="#1d4ed8" stroke-width="32" stroke-linecap="round"/>

    <path d="M 30,0 Q 110,70 110,130 Q 110,180 80,220 Q 50,260 90,300 L 290,300 Q 340,240 280,180 Q 230,130 200,90 Q 160,50 80,0 Z"
          fill="url(#floodWater)" opacity="0.88"/>
    <path d="M 30,0 Q 110,70 110,130 Q 110,180 80,220 Q 50,260 90,300 L 290,300 Q 340,240 280,180 Q 230,130 200,90 Q 160,50 80,0 Z"
          fill="url(#floodHatch)"/>

    <rect x="230" y="40" width="60" height="40" fill="#365314" opacity="0.5" rx="3"/>
    <rect x="40" y="180" width="70" height="50" fill="#1e3a8a" opacity="0.9" rx="3"/>

    <path d="M 30,0 Q 110,70 110,130 Q 110,180 80,220 Q 50,260 90,300 L 290,300 Q 340,240 280,180 Q 230,130 200,90 Q 160,50 80,0 Z"
          fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6,3"/>

    <circle cx="210" cy="80" r="14" fill="#64748b" opacity="0.4"/>
    <rect x="200" y="74" width="16" height="12" fill="#94a3b8" opacity="0.6"/>
    <circle cx="340" cy="90" r="22" fill="#475569" opacity="0.7"/>

    <rect x="10" y="10" width="185" height="42" rx="6" fill="rgba(15,23,42,0.85)" stroke="rgba(239,68,68,0.5)" stroke-width="1"/>
    <text x="20" y="27" fill="#f87171" font-size="11" font-family="monospace" font-weight="bold">SENTINEL-1/2 · T1 (POST)</text>
    <text x="20" y="42" fill="#fca5a5" font-size="9" font-family="monospace">DATE: 2026-08-18 · FLOOD EVENT</text>
    <circle cx="370" cy="25" r="5" fill="#ef4444"/>
    <text x="300" y="28" fill="#fca5a5" font-size="9" font-family="monospace">+34.2% INUNDATED</text>
  </svg>`;
  return {
    name: 'Nepal_Kosi_2026_T1_PostFlood.png',
    b64: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  };
}
