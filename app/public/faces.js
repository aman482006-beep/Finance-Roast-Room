// ============================================================================
// Finance Roast Room: Custom Lifelike Face Renderers for All 20 Personas
// Handcrafted SVG vector caricatures with lifelike features, custom hairstyles,
// signature glasses, facial expressions, and animated mouth/eye shapes.
// ============================================================================

function esc(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function getCustomFace(key, shape = "base", s = {}) {
  const c = s.color || "#37bdf8";
  const initials = esc((s.initials || s.short || key).slice(0, 3).toUpperCase());

  // Eye renderer helper
  // blink: realistic closed curved eye slits
  // normal: sclera, iris, pupil, and dual specular catchlights
  const makeEyes = (eyeY = 248, eyeLeftX = 236, eyeRightX = 324, irisColor = "#3d271d", eyeScale = 1) => {
    if (shape === "blink") {
      return `
        <path d="M${eyeLeftX - 16} ${eyeY}q16 6 32 0" stroke="#221511" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M${eyeRightX - 16} ${eyeY}q16 6 32 0" stroke="#221511" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <path d="M${eyeLeftX - 12} ${eyeY + 3}q12 4 24 0" stroke="rgba(0,0,0,0.15)" stroke-width="2" fill="none"/>
        <path d="M${eyeRightX - 12} ${eyeY + 3}q12 4 24 0" stroke="rgba(0,0,0,0.15)" stroke-width="2" fill="none"/>
      `;
    }
    const r = 12 * eyeScale;
    const ir = 7 * eyeScale;
    const pr = 4 * eyeScale;
    return `
      <!-- Left Eye -->
      <ellipse cx="${eyeLeftX}" cy="${eyeY}" rx="${r}" ry="${r * 0.85}" fill="#ffffff" stroke="#c4b5a5" stroke-width="1"/>
      <circle cx="${eyeLeftX}" cy="${eyeY}" r="${ir}" fill="${irisColor}"/>
      <circle cx="${eyeLeftX}" cy="${eyeY}" r="${pr}" fill="#0d0d11"/>
      <circle cx="${eyeLeftX + 2.5}" cy="${eyeY - 2.5}" r="2.5" fill="#ffffff"/>
      <circle cx="${eyeLeftX - 3}" cy="${eyeY + 3}" r="1.2" fill="rgba(255,255,255,0.7)"/>
      <path d="M${eyeLeftX - 16} ${eyeY - 11}q16 -4 32 1" stroke="#221511" stroke-width="2.5" stroke-linecap="round" fill="none"/>

      <!-- Right Eye -->
      <ellipse cx="${eyeRightX}" cy="${eyeY}" rx="${r}" ry="${r * 0.85}" fill="#ffffff" stroke="#c4b5a5" stroke-width="1"/>
      <circle cx="${eyeRightX}" cy="${eyeY}" r="${ir}" fill="${irisColor}"/>
      <circle cx="${eyeRightX}" cy="${eyeY}" r="${pr}" fill="#0d0d11"/>
      <circle cx="${eyeRightX + 2.5}" cy="${eyeY - 2.5}" r="2.5" fill="#ffffff"/>
      <circle cx="${eyeRightX - 3}" cy="${eyeY + 3}" r="1.2" fill="rgba(255,255,255,0.7)"/>
      <path d="M${eyeRightX - 16} ${eyeY - 11}q16 -4 32 1" stroke="#221511" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    `;
  };

  // Mouth renderer helper with 4 states: base (smile/neutral), mid (talking vowel), open (talking wide)
  const makeMouth = (mouthY = 326, mouthW = 44, smileCurve = 14) => {
    if (shape === "open") {
      return `
        <!-- Mouth Open Speaking -->
        <path d="M${280 - mouthW * 0.45} ${mouthY - 6}q${mouthW * 0.45} -4 ${mouthW * 0.9} 0q0 24 -${mouthW * 0.45} 24q-${mouthW * 0.45} 0 -${mouthW * 0.45} -24z" fill="#42121c"/>
        <path d="M${280 - mouthW * 0.35} ${mouthY - 4}q${mouthW * 0.35} 0 ${mouthW * 0.7} 0c0 5 -5 7 -${mouthW * 0.35} 7s-${mouthW * 0.35} -2 -${mouthW * 0.35} -7z" fill="#f8fafc"/>
        <path d="M${280 - mouthW * 0.25} ${mouthY + 12}q${mouthW * 0.25} -4 ${mouthW * 0.5} 0q-${mouthW * 0.25} 6 -${mouthW * 0.5} 0z" fill="#cf5668"/>
        <path d="M${280 - mouthW * 0.45} ${mouthY - 6}q${mouthW * 0.45} 2 ${mouthW * 0.9} 0" stroke="#a33d4b" stroke-width="2.5" fill="none"/>
      `;
    }
    if (shape === "mid") {
      return `
        <!-- Mouth Mid Speaking -->
        <ellipse cx="280" cy="${mouthY}" rx="${mouthW * 0.38}" ry="9" fill="#42121c"/>
        <rect x="${280 - mouthW * 0.25}" y="${mouthY - 8}" width="${mouthW * 0.5}" height="4.5" rx="1.5" fill="#f8fafc"/>
        <ellipse cx="280" cy="${mouthY + 5}" rx="${mouthW * 0.2}" ry="3" fill="#cf5668"/>
        <path d="M${280 - mouthW * 0.4} ${mouthY - 2}q${mouthW * 0.4} -2 ${mouthW * 0.8} 0" stroke="#a33d4b" stroke-width="2" fill="none"/>
      `;
    }
    // Base & Blink: Natural signature resting smile
    return `
      <!-- Mouth Base/Resting -->
      <path d="M${280 - mouthW * 0.5} ${mouthY - 2}q${mouthW * 0.5} ${smileCurve} ${mouthW} 0" fill="none" stroke="#66222b" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M${280 - mouthW * 0.55} ${mouthY - 1}c2 -3 4 -1 4 2" stroke="#66222b" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M${280 + mouthW * 0.55} ${mouthY - 1}c-2 -3 -4 -1 -4 2" stroke="#66222b" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M${280 - mouthW * 0.25} ${mouthY + smileCurve * 0.5}q${mouthW * 0.25} 4 ${mouthW * 0.5} 0" fill="none" stroke="rgba(163,61,75,0.4)" stroke-width="2"/>
    `;
  };

  // Base head template helper
  const headBase = (skinGrad, headRx = 108, headRy = 126, headY = 252) => `
    <!-- Neck -->
    <rect x="246" y="332" width="68" height="74" rx="20" fill="url(#skinShadow)"/>
    <ellipse cx="280" cy="342" rx="36" ry="12" fill="rgba(0,0,0,0.12)"/>
    <!-- Head -->
    <ellipse cx="280" cy="${headY}" rx="${headRx}" ry="${headRy}" fill="url(#${skinGrad})"/>
    <!-- Ears -->
    <ellipse cx="${280 - headRx - 2}" cy="${headY + 2}" rx="14" ry="24" fill="url(#${skinGrad})"/>
    <path d="M${280 - headRx + 2} ${headY - 10}c-6 4 -6 16 0 20" stroke="rgba(0,0,0,0.15)" stroke-width="2.5" fill="none"/>
    <ellipse cx="${280 + headRx + 2}" cy="${headY + 2}" rx="14" ry="24" fill="url(#${skinGrad})"/>
    <path d="M${280 + headRx - 2} ${headY - 10}c6 4 6 16 0 20" stroke="rgba(0,0,0,0.15)" stroke-width="2.5" fill="none"/>
    <!-- Cheek Rosiness -->
    <circle cx="215" cy="${headY + 28}" r="22" fill="rgba(235, 110, 110, 0.12)"/>
    <circle cx="345" cy="${headY + 28}" r="22" fill="rgba(235, 110, 110, 0.12)"/>
  `;

  // Nose helper
  const makeNose = (noseY = 278, w = 18, style = "standard") => {
    if (style === "broad") {
      return `
        <path d="M280 ${noseY - 18}v16c-8 0 -14 6 -14 10c0 4 6 6 14 6s14 -2 14 -6c0 -4 -6 -10 -14 -10" stroke="rgba(0,0,0,0.22)" stroke-width="2.5" fill="rgba(0,0,0,0.06)"/>
      `;
    }
    if (style === "aquiline") {
      return `
        <path d="M278 ${noseY - 24}l-3 18l5 8l6 -4" stroke="rgba(0,0,0,0.25)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <ellipse cx="280" cy="${noseY + 4}" rx="8" ry="4" fill="rgba(0,0,0,0.08)"/>
      `;
    }
    return `
      <path d="M276 ${noseY - 16}c2 8 0 16 -6 20c8 3 16 3 24 0c-6 -4 -8 -12 -6 -20" stroke="rgba(0,0,0,0.2)" stroke-width="2.2" stroke-linecap="round" fill="rgba(0,0,0,0.05)"/>
    `;
  };

  // Suit / Torso helper
  const makeTorso = (suitColor = "#1e293b", shirtColor = "#ffffff", tieColor = "#c5222d", style = "suit") => {
    if (style === "white-safari") {
      // Radhakishan Damani's iconic all-white safari shirt
      return `
        <path d="M70 640c0-160 86-250 210-250s210 90 210 250z" fill="#f8fafc"/>
        <path d="M70 640c0-160 86-250 210-250s210 90 210 250z" fill="url(#fabricShadow)"/>
        <!-- Collar -->
        <path d="M242 390l38 46l38 -46l-20 -14l-18 20l-18 -20z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <path d="M280 436v150" stroke="#cbd5e1" stroke-width="2.5"/>
        <circle cx="280" cy="460" r="4.5" fill="#94a3b8"/>
        <circle cx="280" cy="500" r="4.5" fill="#94a3b8"/>
        <!-- Chest Pockets -->
        <rect x="150" y="470" width="56" height="52" rx="4" fill="none" stroke="#cbd5e1" stroke-width="2"/>
        <path d="M150 470l28 12l28 -12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="354" y="470" width="56" height="52" rx="4" fill="none" stroke="#cbd5e1" stroke-width="2"/>
        <path d="M354 470l28 12l28 -12" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      `;
    }
    if (style === "open-collar") {
      // Jhunjhunwala / Damodaran open collar style
      return `
        <path d="M70 640c0-160 86-250 210-250s210 90 210 250z" fill="${suitColor}"/>
        <!-- Lapels -->
        <path d="M210 390l70 120l70 -120l-30 80l-40 40l-40 -40z" fill="rgba(0,0,0,0.18)"/>
        <!-- Open Shirt V -->
        <path d="M246 390l34 90l34 -90z" fill="${shirtColor}"/>
        <path d="M266 390l14 42l14 -42" stroke="rgba(0,0,0,0.2)" stroke-width="2" fill="none"/>
        <ellipse cx="280" cy="414" rx="14" ry="18" fill="url(#skinLight)"/>
        <!-- Suit lapel folds -->
        <path d="M216 390l64 150h-40z" fill="${suitColor}" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
        <path d="M344 390l-64 150h40z" fill="${suitColor}" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
      `;
    }
    if (style === "black-fitted") {
      // Mark Minervini modern performance black look
      return `
        <path d="M70 640c0-160 86-250 210-250s210 90 210 250z" fill="#111317"/>
        <path d="M240 390l40 60l40 -60h-16l-24 38l-24 -38z" fill="#20242c" stroke="#2d333f" stroke-width="2"/>
        <path d="M280 450v140" stroke="#252a34" stroke-width="2"/>
      `;
    }
    // Classic Wall Street Suit & Tie
    return `
      <!-- Jacket -->
      <path d="M70 640c0-160 86-250 210-250s210 90 210 250z" fill="${suitColor}"/>
      <!-- Shirt V -->
      <path d="M236 390h88l-44 110z" fill="${shirtColor}"/>
      <!-- Collar wings -->
      <path d="M236 390l44 38l-24 -38z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M324 390l-44 38l24 -38z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Tie -->
      <path d="M272 414h16l-3 36l-5 110l-5 -110z" fill="${tieColor}"/>
      <polygon points="271,414 289,414 285,434 275,434" fill="${tieColor}" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <!-- Lapels -->
      <path d="M208 390l72 160l-16 10l-80 -150z" fill="${suitColor}" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
      <path d="M352 390l-72 160l16 10l80 -150z" fill="${suitColor}" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
    `;
  };

  // Glasses helper
  const makeGlasses = (style = "round", frameColor = "#1a1d24", glassY = 248) => {
    if (style === "munger-thick") {
      return `
        <!-- Charlie Munger iconic thick tortoiseshell/black round glasses -->
        <g stroke="${frameColor}" stroke-width="7" fill="none" stroke-linejoin="round">
          <ellipse cx="236" cy="${glassY}" rx="29" ry="26" fill="rgba(255,255,255,0.22)"/>
          <ellipse cx="324" cy="${glassY}" rx="29" ry="26" fill="rgba(255,255,255,0.22)"/>
          <path d="M265 ${glassY - 4}q15 -6 30 0" stroke-width="6"/>
          <path d="M207 ${glassY - 4}l-35 -6" stroke-width="5"/>
          <path d="M353 ${glassY - 4}l35 -6" stroke-width="5"/>
        </g>
        <!-- Glass reflections -->
        <path d="M220 ${glassY - 14}l16 -10" stroke="rgba(255,255,255,0.6)" stroke-width="3" stroke-linecap="round"/>
        <path d="M308 ${glassY - 14}l16 -10" stroke="rgba(255,255,255,0.6)" stroke-width="3" stroke-linecap="round"/>
      `;
    }
    if (style === "rectangular") {
      return `
        <!-- Modern Rectangular Glasses (Jhunjhunwala, Damodaran, Agrawal) -->
        <g stroke="${frameColor}" stroke-width="4.5" fill="none" stroke-linejoin="round">
          <rect x="210" y="${glassY - 18}" width="52" height="34" rx="6" fill="rgba(255,255,255,0.18)"/>
          <rect x="298" y="${glassY - 18}" width="52" height="34" rx="6" fill="rgba(255,255,255,0.18)"/>
          <path d="M262 ${glassY - 2}h36" stroke-width="4"/>
          <path d="M210 ${glassY - 4}l-35 -6" stroke-width="3.5"/>
          <path d="M350 ${glassY - 4}l35 -6" stroke-width="3.5"/>
        </g>
        <path d="M220 ${glassY - 10}l20 -8" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M308 ${glassY - 10}l20 -8" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round"/>
      `;
    }
    if (style === "vintage-wire") {
      // Benjamin Graham / Howard Marks thin wire glasses
      return `
        <g stroke="${frameColor}" stroke-width="3" fill="none">
          <circle cx="236" cy="${glassY}" r="25" fill="rgba(255,255,255,0.15)"/>
          <circle cx="324" cy="${glassY}" r="25" fill="rgba(255,255,255,0.15)"/>
          <path d="M261 ${glassY}q19 -7 38 0" stroke-width="3"/>
          <path d="M211 ${glassY}l-38 -5" stroke-width="2.5"/>
          <path d="M349 ${glassY}l38 -5" stroke-width="2.5"/>
        </g>
        <path d="M222 ${glassY - 12}l14 -8" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>
        <path d="M310 ${glassY - 12}l14 -8" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>
      `;
    }
    return "";
  };

  // ==========================================================================
  // INDIVIDUAL PERSONA RENDERERS
  // ==========================================================================

  let defs = `
    <defs>
      <radialGradient id="skinLight" cx="45%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#fff0e5"/>
        <stop offset="70%" stop-color="#ebd1c0"/>
        <stop offset="100%" stop-color="#d6b29c"/>
      </radialGradient>
      <radialGradient id="skinWarmIndian" cx="45%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#ecc0a2"/>
        <stop offset="70%" stop-color="#d8a888"/>
        <stop offset="100%" stop-color="#b88365"/>
      </radialGradient>
      <radialGradient id="skinSouthAsian" cx="45%" cy="40%" r="65%">
        <stop offset="0%" stop-color="#cb9673"/>
        <stop offset="70%" stop-color="#b67f5b"/>
        <stop offset="100%" stop-color="#935e3c"/>
      </radialGradient>
      <radialGradient id="skinElder" cx="45%" cy="38%" r="65%">
        <stop offset="0%" stop-color="#fdf0e6"/>
        <stop offset="60%" stop-color="#ebd0bd"/>
        <stop offset="100%" stop-color="#d1b09b"/>
      </radialGradient>
      <linearGradient id="skinShadow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b5876e"/>
        <stop offset="100%" stop-color="#8d634d"/>
      </linearGradient>
      <linearGradient id="fabricShadow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.1)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0.15)"/>
      </linearGradient>
    </defs>
  `;

  let body = "";

  // 1. CHARLIE MUNGER (munger)
  if (key === "munger") {
    body = `
      ${defs}
      ${makeTorso("#1c2e4a", "#e2edfa", "#7f1d1d", "suit")}
      ${headBase("skinElder", 114, 126, 256)}
      <!-- Munger Bald Top Highlight -->
      <ellipse cx="280" cy="180" rx="72" ry="34" fill="rgba(255,255,255,0.22)"/>
      <!-- Fluffy White Side Hair -->
      <path d="M166 220c-15 15 -18 55 -4 80c10 -20 18 -45 22 -65z" fill="#f1f5f9"/>
      <path d="M166 220c-10 20 -12 60 8 85c-2 -25 5 -55 12 -75z" fill="#cbd5e1"/>
      <path d="M394 220c15 15 18 55 4 80c-10 -20 -18 -45 -22 -65z" fill="#f1f5f9"/>
      <path d="M394 220c10 20 12 60 -8 85c2 -25 -5 -55 -12 -75z" fill="#cbd5e1"/>
      <!-- Elder Brow & Furrows -->
      <path d="M220 216q30 -4 48 4" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M340 216q-30 -4 -48 4" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M256 195q24 -5 48 0" stroke="rgba(0,0,0,0.12)" stroke-width="2" fill="none"/>
      <path d="M260 205q20 -4 40 0" stroke="rgba(0,0,0,0.12)" stroke-width="2" fill="none"/>
      ${makeEyes(250, 236, 324, "#4a5568", 0.95)}
      ${makeGlasses("munger-thick", "#181a1f", 250)}
      ${makeNose(282, 20, "broad")}
      ${makeMouth(328, 48, 8)}
    `;
  }

  // 2. PETER LYNCH (lynch)
  else if (key === "lynch") {
    body = `
      ${defs}
      ${makeTorso("#1a3052", "#ffffff", "#dc2626", "suit")}
      ${headBase("skinLight", 106, 122, 252)}
      ${makeEyes(248, 238, 322, "#2563eb", 1.05)}
      ${makeNose(278, 16, "standard")}
      ${makeMouth(322, 48, 16)}
      <!-- Peter Lynch's Signature Thick Shock of Snow-White Wavy Hair -->
      <path d="M160 240c-12 -60 20 -120 120 -122c100 -2 135 60 122 120c15 -18 18 -45 10 -75c-15 -55 -65 -85 -132 -82c-70 3 -118 35 -132 90c-8 32 -2 52 12 69z" fill="#e2e8f0"/>
      <path d="M165 210c10 -70 65 -105 125 -105c75 0 115 45 120 100c-25 -45 -65 -65 -125 -65c-60 0 -95 30 -120 70z" fill="#ffffff"/>
      <path d="M210 135c35 -20 85 -20 120 5c-30 -10 -80 -10 -120 -5z" fill="#cbd5e1"/>
      <!-- Cheerful White Eyebrows -->
      <path d="M218 226q24 -8 46 2" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M342 226q-24 -8 -46 2" stroke="#ffffff" stroke-width="6" stroke-linecap="round" fill="none"/>
    `;
  }

  // 3. RADHAKISHAN DAMANI (damani)
  else if (key === "damani") {
    body = `
      ${defs}
      <!-- Signature All-White Safari Shirt -->
      ${makeTorso("#ffffff", "#ffffff", "", "white-safari")}
      ${headBase("skinWarmIndian", 108, 124, 252)}
      <!-- Parted Silver/White Hair -->
      <path d="M172 235c-8 -50 25 -100 108 -102c85 -2 118 45 110 100c-20 -35 -55 -55 -110 -55c-55 0 -90 22 -108 57z" fill="#f1f5f9"/>
      <path d="M176 220c10 -40 50 -75 104 -75c60 0 95 35 104 75c-20 -30 -50 -50 -104 -50c-55 0 -85 20 -104 50z" fill="#cbd5e1"/>
      <!-- Warm Wise Eyebrows -->
      <path d="M220 230q22 -5 44 2" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M340 230q-22 -5 -44 2" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#261d18", 0.95)}
      ${makeNose(278, 16, "standard")}
      <!-- Gentle Mustache -->
      <path d="M256 312q24 -8 48 0c-4 5 -12 7 -24 7s-20 -2 -24 -7z" fill="#94a3b8"/>
      ${makeMouth(326, 42, 12)}
    `;
  }

  // 4. RAKESH JHUNJHUNWALA (jhunjhunwala)
  else if (key === "jhunjhunwala") {
    body = `
      ${defs}
      <!-- Big Bull Open Collar Suit -->
      ${makeTorso("#1e293b", "#e0f2fe", "", "open-collar")}
      <!-- Jolly Round Face Shape -->
      ${headBase("skinWarmIndian", 118, 122, 256)}
      <!-- Double Chin Curve -->
      <path d="M246 362q34 16 68 0" stroke="rgba(0,0,0,0.18)" stroke-width="3" fill="none"/>
      <!-- Receding Dark Salt-and-Pepper Hair -->
      <path d="M165 240c-10 -50 20 -95 115 -95c95 0 125 45 115 95c-15 -35 -55 -55 -115 -55c-60 0 -98 22 -115 55z" fill="#2d3748"/>
      <path d="M170 230c10 -35 45 -65 110 -65c65 0 100 30 110 65c-25 -25 -55 -40 -110 -40c-55 0 -85 15 -110 40z" fill="#718096"/>
      <!-- Eyebrows -->
      <path d="M220 228q24 -6 48 4" stroke="#2d3748" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M340 228q-24 -6 -48 4" stroke="#2d3748" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      ${makeEyes(250, 236, 324, "#1a202c", 1.0)}
      ${makeGlasses("rectangular", "#374151", 250)}
      ${makeNose(282, 22, "broad")}
      <!-- Broad Big Bull Smile -->
      ${makeMouth(328, 54, 20)}
    `;
  }

  // 5. ASWATH DAMODARAN (damodaran)
  else if (key === "damodaran") {
    body = `
      ${defs}
      <!-- Professorial Blazer with Open Shirt -->
      ${makeTorso("#1f2937", "#991b1b", "", "open-collar")}
      ${headBase("skinSouthAsian", 110, 126, 252)}
      <!-- Distinguished Wavy Salt-and-Pepper Hair -->
      <path d="M166 235c-15 -60 25 -115 114 -115c90 0 130 55 114 115c-18 -40 -50 -65 -114 -65c-64 0 -96 25 -114 65z" fill="#1f2937"/>
      <path d="M172 220c8 -45 50 -80 108 -80c60 0 100 35 108 80c-25 -30 -60 -50 -108 -50c-50 0 -85 20 -108 50z" fill="#6b7280"/>
      <!-- Eyebrows -->
      <path d="M220 228q24 -6 46 2" stroke="#374151" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M340 228q-24 -6 -46 2" stroke="#374151" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#281b16", 1.0)}
      <!-- Modern Rectangular Glasses -->
      ${makeGlasses("rectangular", "#111827", 248)}
      ${makeNose(280, 18, "standard")}
      <!-- Warm Professorial Smile -->
      ${makeMouth(324, 48, 16)}
    `;
  }

  // 6. BENJAMIN GRAHAM (bgraham)
  else if (key === "bgraham") {
    body = `
      ${defs}
      <!-- 1940s Vintage Wool Suit & Striped Tie -->
      ${makeTorso("#27272a", "#f8fafc", "#475569", "suit")}
      ${headBase("skinElder", 108, 126, 252)}
      <!-- 1940s Classic Side-Part Receding Hair -->
      <path d="M170 235c-10 -55 30 -105 110 -105c80 0 120 50 110 105c-15 -35 -50 -55 -110 -55c-60 0 -95 20 -110 55z" fill="#64748b"/>
      <path d="M175 220c15 -45 55 -75 105 -75c50 0 90 30 105 75c-20 -25 -55 -45 -105 -45c-50 0 -85 20 -105 45z" fill="#94a3b8"/>
      <!-- Serious Analytical Eyebrows -->
      <path d="M222 226q22 -3 44 4" stroke="#475569" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M338 226q-22 -3 -44 4" stroke="#475569" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 236, 324, "#334155", 0.95)}
      ${makeGlasses("vintage-wire", "#18181b", 248)}
      ${makeNose(280, 17, "aquiline")}
      ${makeMouth(326, 42, 6)}
    `;
  }

  // 7. HOWARD MARKS (marks)
  else if (key === "marks") {
    body = `
      ${defs}
      <!-- Elegant Charcoal Bespoke Suit -->
      ${makeTorso("#1f2937", "#ffffff", "#475569", "suit")}
      ${headBase("skinLight", 108, 124, 252)}
      <!-- Sleek Swept-Back Silver Hair -->
      <path d="M170 230c-10 -65 35 -115 110 -115c75 0 120 50 110 115c-15 -40 -50 -65 -110 -65c-60 0 -95 25 -110 65z" fill="#cbd5e1"/>
      <path d="M175 210c15 -50 55 -80 105 -80c50 0 90 30 105 80c-20 -30 -55 -50 -105 -50c-50 0 -85 20 -105 50z" fill="#f1f5f9"/>
      <!-- Sophisticated Eyebrows -->
      <path d="M222 228q22 -4 44 2" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M338 228q-22 -4 -44 2" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#334155", 0.95)}
      ${makeGlasses("vintage-wire", "#334155", 248)}
      ${makeNose(280, 16, "aquiline")}
      <!-- Calm Second-Level Thinker Smile -->
      ${makeMouth(324, 44, 10)}
    `;
  }

  // 8. RAY DALIO (dalio)
  else if (key === "dalio") {
    body = `
      ${defs}
      <!-- Bridgewater Navy Suit & Sky Blue Shirt -->
      ${makeTorso("#1e3a5f", "#e0f2fe", "#1e293b", "suit")}
      ${headBase("skinLight", 106, 126, 252)}
      <!-- Classic Sandy-Silver Parted Hair -->
      <path d="M172 230c-12 -60 30 -115 108 -115c78 0 120 55 108 115c-15 -40 -50 -65 -108 -65c-58 0 -93 25 -108 65z" fill="#94a3b8"/>
      <path d="M176 215c15 -45 50 -75 104 -75c54 0 90 30 104 75c-20 -30 -50 -50 -104 -50c-54 0 -84 20 -104 50z" fill="#cbd5e1"/>
      <!-- Focus Furrows & Brows -->
      <path d="M220 226q24 -6 46 2" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M340 226q-24 -6 -46 2" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#1e40af", 1.0)}
      ${makeNose(280, 18, "aquiline")}
      <!-- Principled Thinker Smile -->
      ${makeMouth(324, 46, 12)}
    `;
  }

  // 9. GEORGE SOROS (soros)
  else if (key === "soros") {
    body = `
      ${defs}
      <!-- Midnight Navy Suit & Sapphire Tie -->
      ${makeTorso("#0f172a", "#f8fafc", "#2563eb", "suit")}
      ${headBase("skinElder", 112, 126, 254)}
      <!-- European Wavy Silver Hair -->
      <path d="M168 235c-14 -60 30 -115 112 -115c82 0 126 55 112 115c-16 -40 -52 -65 -112 -65c-60 0 -96 25 -112 65z" fill="#94a3b8"/>
      <path d="M172 218c15 -45 52 -78 108 -78c56 0 94 33 108 78c-22 -30 -52 -48 -108 -48c-56 0 -86 18 -108 48z" fill="#e2e8f0"/>
      <!-- Characteristic Smile Lines & Brows -->
      <path d="M220 226q24 -5 46 3" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M340 226q-24 -5 -46 3" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Crows Feet Lines -->
      <path d="M210 248l-8 -4M210 252l-9 1M210 256l-7 5" stroke="rgba(0,0,0,0.18)" stroke-width="1.8"/>
      <path d="M350 248l8 -4M350 252l9 1M350 256l7 5" stroke="rgba(0,0,0,0.18)" stroke-width="1.8"/>
      ${makeEyes(250, 238, 322, "#334155", 0.95)}
      ${makeNose(280, 20, "aquiline")}
      ${makeMouth(326, 50, 16)}
    `;
  }

  // 10. MOHNISH PABRAI (pabrai)
  else if (key === "pabrai") {
    body = `
      ${defs}
      <!-- Smart Casual Dark Blazer -->
      ${makeTorso("#1e293b", "#0f172a", "", "open-collar")}
      <!-- Smooth Shaved Dome Shape -->
      ${headBase("skinSouthAsian", 112, 124, 252)}
      <!-- High Dome Specular Highlight -->
      <ellipse cx="280" cy="175" rx="65" ry="32" fill="rgba(255,255,255,0.22)"/>
      <ellipse cx="265" cy="165" rx="35" ry="16" fill="rgba(255,255,255,0.3)"/>
      <!-- Expressive Brows -->
      <path d="M220 228q24 -8 46 2" stroke="#1f2937" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M340 228q-24 -8 -46 2" stroke="#1f2937" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      ${makeEyes(250, 236, 324, "#1f2937", 1.0)}
      ${makeGlasses("rectangular", "#1f2937", 250)}
      ${makeNose(280, 20, "broad")}
      <!-- Goatee -->
      <path d="M266 348q14 8 28 0c-2 6 -6 10 -14 10s-12 -4 -14 -10z" fill="#374151"/>
      <!-- Big Dhandho Smile -->
      ${makeMouth(324, 52, 22)}
    `;
  }

  // 11. RAAMDEO AGRAWAL (agrawal)
  else if (key === "agrawal") {
    body = `
      ${defs}
      ${makeTorso("#1f2937", "#ffffff", "#991b1b", "suit")}
      ${headBase("skinWarmIndian", 108, 124, 252)}
      <!-- Neatly Parted Salt-and-Pepper Hair -->
      <path d="M172 232c-10 -55 30 -105 108 -105c78 0 118 50 108 105c-16 -35 -52 -55 -108 -55c-56 0 -92 20 -108 55z" fill="#2d3748"/>
      <path d="M176 218c12 -42 50 -75 104 -75c54 0 92 33 104 75c-20 -28 -50 -48 -104 -48c-54 0 -84 20 -104 48z" fill="#718096"/>
      <path d="M220 228q24 -5 46 3" stroke="#2d3748" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M340 228q-24 -5 -46 3" stroke="#2d3748" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#1a202c", 1.0)}
      ${makeGlasses("rectangular", "#334155", 248)}
      ${makeNose(280, 18, "standard")}
      ${makeMouth(324, 46, 14)}
    `;
  }

  // 12. VIJAY KEDIA (kedia)
  else if (key === "kedia") {
    body = `
      ${defs}
      <!-- Stylish Teal Blazer with Open Shirt -->
      ${makeTorso("#0f766e", "#ffffff", "", "open-collar")}
      ${headBase("skinWarmIndian", 108, 124, 252)}
      <!-- Stylized Dark Hair with Silver Volume -->
      <path d="M170 230c-12 -60 25 -110 110 -110c85 0 122 50 110 110c-18 -38 -55 -60 -110 -60c-55 0 -92 22 -110 60z" fill="#1e293b"/>
      <path d="M175 212c14 -45 50 -78 105 -78c55 0 91 33 105 78c-20 -30 -50 -50 -105 -50c-55 0 -85 20 -105 50z" fill="#475569"/>
      <path d="M220 228q24 -6 46 2" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M340 228q-24 -6 -46 2" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#1e293b", 1.0)}
      ${makeGlasses("rectangular", "#0f172a", 248)}
      ${makeNose(280, 18, "standard")}
      <!-- Trimmed Stylish Mustache -->
      <path d="M256 312q24 -6 48 0c-4 6 -12 8 -24 8s-20 -2 -24 -8z" fill="#1e293b"/>
      ${makeMouth(326, 46, 18)}
    `;
  }

  // 13. MARK MINERVINI (minervini)
  else if (key === "minervini") {
    body = `
      ${defs}
      <!-- Modern Athletic Black Fitted Outfit -->
      ${makeTorso("#111317", "", "", "black-fitted")}
      ${headBase("skinLight", 106, 124, 250)}
      <!-- Tight Buzz/Fade Hair Outline -->
      <path d="M174 225c-6 -50 25 -95 106 -95c81 0 112 45 106 95c-15 -35 -45 -55 -106 -55c-61 0 -91 20 -106 55z" fill="#334155"/>
      <!-- Intense Piercing Eyebrows -->
      <path d="M220 225l46 6" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <path d="M340 225l-46 6" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      ${makeEyes(246, 238, 322, "#0f172a", 1.05)}
      ${makeNose(278, 16, "aquiline")}
      <!-- Crisp Modern Goatee -->
      <path d="M264 308q16 -4 32 0c-2 6 -6 8 -16 8s-14 -2 -16 -8z" fill="#1e293b"/>
      <path d="M268 338q12 6 24 0c-2 8 -6 12 -12 12s-10 -4 -12 -12z" fill="#1e293b"/>
      <!-- Focused Champion Mouth -->
      ${makeMouth(322, 42, 8)}
    `;
  }

  // 14. PAUL TUDOR JONES (ptj)
  else if (key === "ptj") {
    body = `
      ${defs}
      <!-- Wall Street Trader Navy Jacket -->
      ${makeTorso("#1e3a8a", "#ffffff", "#dc2626", "suit")}
      ${headBase("skinLight", 108, 126, 252)}
      <!-- Dynamic Brown/Silver Wavy Hair -->
      <path d="M168 230c-12 -60 25 -112 112 -112c87 0 124 52 112 112c-18 -40 -52 -62 -112 -62c-60 0 -94 22 -112 62z" fill="#475569"/>
      <path d="M174 212c12 -45 50 -78 106 -78c56 0 94 33 106 78c-20 -30 -50 -50 -106 -50c-56 0 -86 20 -106 50z" fill="#64748b"/>
      <!-- Confident Eyebrows -->
      <path d="M220 226q24 -6 46 2" stroke="#334155" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M340 226q-24 -6 -46 2" stroke="#334155" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#1e3a8a", 1.0)}
      <!-- Trader Aviator/Wire Glasses -->
      <g stroke="#b45309" stroke-width="3" fill="none">
        <rect x="210" y="232" width="52" height="36" rx="10" fill="rgba(255,255,255,0.18)"/>
        <rect x="298" y="232" width="52" height="36" rx="10" fill="rgba(255,255,255,0.18)"/>
        <path d="M262 242h36" stroke-width="3.5"/>
        <path d="M210 240l-35 -6" stroke-width="3"/>
        <path d="M350 240l35 -6" stroke-width="3"/>
      </g>
      ${makeNose(280, 18, "standard")}
      <!-- Confident Smirk -->
      ${makeMouth(324, 48, 14)}
    `;
  }

  // 15. JESSE LIVERMORE (livermore)
  else if (key === "livermore") {
    body = `
      ${defs}
      <!-- 1920s Gatsby Era Stiff Collar & Ascot -->
      <path d="M70 640c0-160 86-250 210-250s210 90 210 250z" fill="#0f172a"/>
      <!-- High Stiff 1920s Wing Collar -->
      <path d="M232 378h96l-14 36l-34 20l-34 -20z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <path d="M272 406h16l-4 80l-4 40l-4 -40z" fill="#334155"/>
      <path d="M212 390l68 150l-16 10l-76 -140z" fill="#0f172a" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      <path d="M348 390l-68 150l16 10l76 -140z" fill="#0f172a" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
      ${headBase("skinLight", 106, 126, 250)}
      <!-- 1920s Slicked-Back Dark Parted Hair with Sheen -->
      <path d="M168 230c-10 -65 30 -115 112 -115c82 0 122 50 112 115c-15 -42 -52 -68 -112 -68c-60 0 -97 26 -112 68z" fill="#090a0f"/>
      <path d="M174 210c14 -48 52 -80 106 -80c54 0 92 32 106 80c-22 -32 -52 -52 -106 -52c-54 0 -84 20 -106 52z" fill="#1e293b"/>
      <!-- Hair Sheen -->
      <path d="M220 148q40 -12 80 0" stroke="rgba(255,255,255,0.25)" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Intense Brooding Eyebrows -->
      <path d="M220 224q24 -6 46 2" stroke="#090a0f" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M340 224q-24 -6 -46 2" stroke="#090a0f" stroke-width="5" stroke-linecap="round" fill="none"/>
      ${makeEyes(246, 238, 322, "#090a0f", 1.05)}
      ${makeNose(278, 17, "aquiline")}
      <!-- Resolute Tape-Reader Mouth -->
      ${makeMouth(324, 42, 6)}
    `;
  }

  // 16. WILLIAM O'NEIL (oneil)
  else if (key === "oneil") {
    body = `
      ${defs}
      <!-- Wall Street Forest Green Suit -->
      ${makeTorso("#143628", "#ffffff", "#991b1b", "suit")}
      ${headBase("skinElder", 108, 124, 252)}
      <!-- Neat White Trimmed Hair -->
      <path d="M170 232c-10 -55 30 -105 110 -105c80 0 120 50 110 105c-16 -35 -50 -55 -110 -55c-60 0 -94 20 -110 55z" fill="#cbd5e1"/>
      <path d="M175 218c14 -42 52 -75 105 -75c53 0 91 33 105 75c-20 -28 -51 -48 -105 -48c-54 0 -85 20 -105 48z" fill="#f8fafc"/>
      <path d="M222 228q22 -5 44 2" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M338 228q-22 -5 -44 2" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#334155", 0.95)}
      ${makeGlasses("vintage-wire", "#475569", 248)}
      ${makeNose(280, 18, "standard")}
      ${makeMouth(324, 44, 12)}
    `;
  }

  // 17. STANLEY DRUCKENMILLER (druckenmiller)
  else if (key === "druckenmiller") {
    body = `
      ${defs}
      <!-- Power Charcoal Suit & Gold/Navy Tie -->
      ${makeTorso("#1f2937", "#dbeafe", "#d97706", "suit")}
      ${headBase("skinLight", 106, 126, 250)}
      <!-- Side-Parted Silver-Grey Hair -->
      <path d="M170 230c-12 -60 28 -112 110 -112c82 0 122 52 110 112c-18 -40 -52 -62 -110 -62c-58 0 -92 22 -110 62z" fill="#94a3b8"/>
      <path d="M176 212c14 -45 50 -78 104 -78c54 0 90 33 104 78c-20 -30 -50 -50 -104 -50c-54 0 -84 20 -104 50z" fill="#e2e8f0"/>
      <!-- Piercing Eyes & Brows -->
      <path d="M220 225l46 4" stroke="#475569" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M340 225l-46 4" stroke="#475569" stroke-width="4.5" stroke-linecap="round"/>
      ${makeEyes(246, 238, 322, "#0284c7", 1.05)}
      ${makeNose(278, 17, "aquiline")}
      <!-- Razor-Sharp Macro Smile -->
      ${makeMouth(322, 44, 10)}
    `;
  }

  // 18. PARAG PARIKH (parikh)
  else if (key === "parikh") {
    body = `
      ${defs}
      <!-- Classic Gentleman Navy Blazer -->
      ${makeTorso("#1e293b", "#e0f2fe", "", "open-collar")}
      ${headBase("skinWarmIndian", 110, 124, 254)}
      <!-- Soft Receding Silver-Grey Hair -->
      <path d="M172 235c-10 -50 28 -100 108 -100c80 0 118 50 108 100c-16 -35 -52 -55 -108 -55c-56 0 -92 20 -108 55z" fill="#94a3b8"/>
      <path d="M176 220c12 -40 50 -72 104 -72c54 0 92 32 104 72c-20 -28 -50 -46 -104 -46c-54 0 -84 18 -104 46z" fill="#cbd5e1"/>
      <path d="M220 228q24 -5 46 3" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M340 228q-24 -5 -46 3" stroke="#64748b" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#1a202c", 0.95)}
      ${makeGlasses("rectangular", "#475569", 248)}
      ${makeNose(280, 18, "standard")}
      <!-- Reassuring Contrarian Smile -->
      ${makeMouth(326, 48, 16)}
    `;
  }

  // 19. SANJAY BAKSHI (bakshi)
  else if (key === "bakshi") {
    body = `
      ${defs}
      <!-- Slate Professor Blazer -->
      ${makeTorso("#334155", "#ffffff", "#0369a1", "suit")}
      ${headBase("skinWarmIndian", 108, 126, 252)}
      <!-- Neat Dark Hair with Silver Temples -->
      <path d="M170 232c-12 -58 28 -110 110 -110c82 0 122 52 110 110c-18 -38 -52 -60 -110 -60c-58 0 -92 22 -110 60z" fill="#1e293b"/>
      <path d="M175 215c12 -42 50 -75 105 -75c55 0 93 33 105 75c-20 -28 -51 -48 -105 -48c-54 0 -85 20 -105 48z" fill="#64748b"/>
      <path d="M220 228q24 -5 46 2" stroke="#334155" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M340 228q-24 -5 -46 2" stroke="#334155" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#1a202c", 1.0)}
      ${makeGlasses("rectangular", "#1e293b", 248)}
      ${makeNose(280, 17, "standard")}
      <!-- Thoughtful Scholarly Smile -->
      ${makeMouth(324, 44, 12)}
    `;
  }

  // 20. WARREN BUFFETT (buffett - vector fallback)
  else {
    body = `
      ${defs}
      ${makeTorso("#27272a", "#ffffff", "#b91c1c", "suit")}
      ${headBase("skinElder", 112, 126, 254)}
      <!-- Soft White Wisps -->
      <path d="M166 230c-10 -55 30 -105 114 -105c84 0 124 50 114 105c-18 -35 -54 -55 -114 -55c-60 0 -96 20 -114 55z" fill="#f1f5f9"/>
      <path d="M172 215c14 -42 52 -75 108 -75c56 0 94 33 108 75c-22 -28 -53 -48 -108 -48c-55 0 -86 20 -108 48z" fill="#cbd5e1"/>
      <path d="M220 224q24 -6 48 3" stroke="#cbd5e1" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <path d="M340 224q-24 -6 -48 3" stroke="#cbd5e1" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      ${makeEyes(248, 238, 322, "#1e293b", 1.0)}
      ${makeGlasses("vintage-wire", "#18181b", 248)}
      ${makeNose(280, 20, "broad")}
      ${makeMouth(326, 50, 16)}
    `;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560">
    <g transform="translate(-14 -64) scale(1.05)">
      ${body}
      <text x="280" y="545" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-weight="800" font-size="44" fill="rgba(255,255,255,.94)">${initials}</text>
    </g>
  </svg>`;

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
