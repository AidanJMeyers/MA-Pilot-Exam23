import React from 'react';
import { Callout, Table, Pill, Card } from '../components/Visual.jsx';

// ==== Diagrams ====
const AirspaceStack = () => (
  <svg viewBox="0 0 520 340" className="w-full max-w-lg">
    <defs>
      <linearGradient id="skyG" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" /><stop offset="100%" stopColor="#dbeafe" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="520" height="340" fill="url(#skyG)" />
    <rect x="0" y="320" width="520" height="20" fill="#65a30d" />
    {/* Class A */}
    <rect x="40" y="20" width="440" height="40" fill="#1e3a8a" fillOpacity="0.35" stroke="#1e3a8a" />
    <text x="50" y="45" fontSize="13" fontWeight="bold" fill="#1e3a8a">Class A — 18,000' MSL to FL600 (IFR only)</text>
    {/* Class E above */}
    <rect x="40" y="60" width="440" height="50" fill="#6b21a8" fillOpacity="0.15" stroke="#6b21a8" strokeDasharray="4 3" />
    <text x="50" y="85" fontSize="12" fill="#6b21a8">Class E (generally starts 14,500 MSL, 1,200 AGL, or 700 AGL)</text>
    {/* Class B */}
    <polygon points="140,110 360,110 360,320 140,320" fill="#2563eb" fillOpacity="0.3" stroke="#2563eb" />
    <text x="230" y="220" fontSize="16" fontWeight="bold" fill="#1e40af">Class B</text>
    <text x="215" y="240" fontSize="10" fill="#1e40af">(inverted wedding cake)</text>
    {/* Class C */}
    <polygon points="380,180 480,180 480,320 380,320" fill="#d97706" fillOpacity="0.4" stroke="#d97706" />
    <text x="400" y="260" fontSize="14" fontWeight="bold" fill="#9a3412">Class C</text>
    {/* Class D */}
    <rect x="60" y="230" width="70" height="90" fill="#1e40af" fillOpacity="0.25" stroke="#1e40af" strokeDasharray="3 2" />
    <text x="70" y="275" fontSize="12" fontWeight="bold" fill="#1e40af">Class D</text>
    {/* Class G */}
    <text x="180" y="315" fontSize="11" fill="#15803d">Class G (uncontrolled, surface to base of E)</text>
  </svg>
);

const TransponderChart = () => (
  <svg viewBox="0 0 480 280" className="w-full max-w-md">
    <rect x="0" y="0" width="480" height="280" fill="#f8fafc" />
    <line x1="60" y1="240" x2="460" y2="240" stroke="#334155" strokeWidth="2" />
    <line x1="60" y1="20" x2="60" y2="240" stroke="#334155" strokeWidth="2" />
    <text x="30" y="30" fontSize="11" fill="#334155">10k</text>
    <text x="30" y="80" fontSize="11" fill="#334155">8k</text>
    <text x="30" y="140" fontSize="11" fill="#334155">4k</text>
    <text x="30" y="200" fontSize="11" fill="#334155">2k</text>
    <text x="30" y="245" fontSize="11" fill="#334155">0</text>
    <text x="200" y="270" fontSize="12" fontWeight="bold" fill="#334155">Mode C Required (altitude encoding)</text>

    <rect x="70" y="15" width="380" height="55" fill="#7c3aed" fillOpacity="0.25" stroke="#7c3aed" />
    <text x="80" y="45" fontSize="11" fill="#5b21b6">Above 10,000' MSL (except ≤2,500 AGL)</text>

    <rect x="110" y="80" width="130" height="160" fill="#2563eb" fillOpacity="0.3" stroke="#2563eb" />
    <text x="125" y="170" fontSize="12" fontWeight="bold" fill="#1e40af">Class B + 30 NM</text>

    <rect x="250" y="150" width="100" height="90" fill="#d97706" fillOpacity="0.35" stroke="#d97706" />
    <text x="260" y="205" fontSize="12" fontWeight="bold" fill="#9a3412">Class C</text>
  </svg>
);

const VFRCloudClearance = () => (
  <svg viewBox="0 0 560 240" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="240" fill="#f0f9ff" />
    <ellipse cx="280" cy="70" rx="160" ry="40" fill="#e2e8f0" stroke="#64748b" />
    <text x="240" y="75" fontSize="13" fontWeight="bold" fill="#334155">Cloud</text>
    <line x1="280" y1="110" x2="280" y2="150" stroke="#0891b2" strokeDasharray="3 3" />
    <text x="290" y="135" fontSize="11" fill="#0e7490">500' below</text>
    <line x1="280" y1="30" x2="280" y2="15" stroke="#0891b2" strokeDasharray="3 3" />
    <text x="290" y="25" fontSize="11" fill="#0e7490">1,000' above</text>
    <line x1="440" y1="70" x2="490" y2="70" stroke="#0891b2" strokeDasharray="3 3" />
    <text x="445" y="90" fontSize="11" fill="#0e7490">2,000' horizontal</text>
    <path d="M 50 170 l 40 -10 l 10 20 l 15 -15 l 20 15 z" fill="#1e40af" />
    <text x="40" y="200" fontSize="12" fontWeight="bold" fill="#1e40af">Aircraft</text>
    <text x="50" y="225" fontSize="11" fill="#334155">Class E below 10,000': 3 SM · 152 cloud clearance</text>
  </svg>
);

const TrafficPattern = () => (
  <svg viewBox="0 0 520 320" className="w-full max-w-lg">
    <rect x="0" y="0" width="520" height="320" fill="#f0fdf4" />
    {/* Runway */}
    <rect x="210" y="120" width="50" height="180" fill="#334155" />
    <text x="215" y="250" fontSize="11" fill="white" transform="rotate(-90 220 250)">RWY 36</text>
    {/* Pattern legs */}
    <path d="M 260 280 L 460 280" stroke="#2563eb" strokeWidth="3" fill="none" markerEnd="url(#arr)" />
    <path d="M 460 280 L 460 100" stroke="#2563eb" strokeWidth="3" fill="none" markerEnd="url(#arr)" />
    <path d="M 460 100 L 235 100" stroke="#2563eb" strokeWidth="3" fill="none" markerEnd="url(#arr)" />
    <path d="M 235 100 L 235 120" stroke="#2563eb" strokeWidth="3" fill="none" markerEnd="url(#arr)" />
    <path d="M 235 300 L 235 280" stroke="#2563eb" strokeWidth="3" fill="none" />
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb" />
      </marker>
    </defs>
    <text x="320" y="275" fontSize="12" fontWeight="bold" fill="#1e40af">Crosswind →</text>
    <text x="470" y="200" fontSize="12" fontWeight="bold" fill="#1e40af" transform="rotate(-90 470 200)">Downwind</text>
    <text x="300" y="95" fontSize="12" fontWeight="bold" fill="#1e40af">← Base</text>
    <text x="155" y="200" fontSize="12" fontWeight="bold" fill="#1e40af">Final</text>
    <text x="95" y="30" fontSize="11" fill="#334155">Standard: all left turns, 1000' AGL, 45° entry to downwind</text>
  </svg>
);

const AirspaceCompare = () => (
  <Table
    headers={['Class', 'Entry Req', 'Comm', 'Speed Limit', 'Equipment']}
    rows={[
      ['A', 'ATC clearance, IFR only', 'Required', '—', 'Mode C + ADS-B Out, DME'],
      ['B', 'ATC clearance', 'Required', '250 kt below 10k / 200 kt under shelf', 'Mode C + ADS-B Out, two-way radio'],
      ['C', 'Two-way comm established', 'Required', '200 kt ≤ 4,000 AGL/10 NM', 'Mode C + ADS-B Out'],
      ['D', 'Two-way comm established', 'Required', '200 kt ≤ 2,500 AGL/4 NM', 'Two-way radio'],
      ['E', 'None (VFR)', 'Not req (VFR)', '250 kt < 10k MSL', 'Mode C above 10k MSL'],
      ['G', 'None', 'Not required', '250 kt < 10k MSL', 'None (except above 10k)']
    ]}
  />
);

export default {
  id: 1,
  title: 'Airspace, Charts & Radio',
  subtitle: 'Classes A–G, sectional chart interpretation, transponders, VHF comms, CTAF/UNICOM, and Lat/Long.',
  blocks: [
    {
      id: 'classes',
      title: 'Airspace Classification (A, B, C, D, E, G)',
      subtitle: 'The vertical "wedding cake" structure and who needs what to enter.',
      content: (
        <>
          <p>U.S. airspace is divided into two regulatory categories: <b>controlled</b> (A, B, C, D, E) and <b>uncontrolled</b> (G). Each class has its own entry requirements, equipment rules, weather minimums, and speed limits. The letter tells you how much ATC service you get and how much coordination is required before you enter.</p>
          <div className="flex justify-center my-3"><AirspaceStack /></div>
          <p><b>Class A</b> is the high-altitude IFR-only environment from 18,000' MSL up to FL600 — you cannot operate VFR here at all. <b>Class B</b> surrounds the busiest terminal airports (e.g., ATL, JFK). It looks like an "inverted wedding cake" of stacked shelves and requires an explicit ATC clearance before entry ("cleared into Class Bravo"). <b>Class C</b> rings medium-sized airports with a control tower, TRACON/approach radar, and airline service; entry only requires that two-way communication be established (the magic phrase is ATC using your tail number). <b>Class D</b> surrounds smaller towered airports; same comm rule as C, but no radar-provided separation for VFR. <b>Class E</b> is "controlled but not towered" — nearly everything above 1,200 AGL (and often 700 AGL near airports) up to 17,999 MSL. <b>Class G</b> is uncontrolled airspace, usually only the bottom few hundred feet in most of the country.</p>
          <Callout kind="tip" title="Why it matters"><b>Communication</b> is the currency. B requires a <i>clearance</i>; C and D require two-way comm <i>established</i>. If you call the tower and they respond "N12345, standby," you've established comm and may enter D/C. If they say "Aircraft calling, standby" without your tail number — comm is NOT established. Know the difference.</Callout>
          <AirspaceCompare />
        </>
      )
    },
    {
      id: 'special-use',
      title: 'Special Use Airspace (SUA)',
      subtitle: 'Prohibited, Restricted, Warning, MOA, Alert, CFAs, and TFRs.',
      content: (
        <>
          <p><b>Special Use Airspace</b> segregates specific activities from general flight. Sectional charts depict SUA with blue or magenta hatched boundaries.</p>
          <Table
            headers={['SUA Type', 'What it is', 'VFR pilot action']}
            rows={[
              ['Prohibited (P-)', 'Flight absolutely forbidden (e.g., P-56 over White House)', 'Do NOT enter. Ever.'],
              ['Restricted (R-)', 'Hazardous ops — artillery, missile testing', 'Check status; "hot" = entry only with controlling agency permission'],
              ['Warning (W-)', 'Like Restricted but over international waters', 'Same caution; coordinate with controlling agency'],
              ['MOA (Military Operations Area)', 'Non-hazardous military training (ACM, intercepts)', 'VFR may transit; strongly advised to contact controlling agency'],
              ['Alert Area (A-)', 'High-volume pilot training', 'Transit allowed; exercise extreme vigilance'],
              ['CFA (Controlled Firing Area)', 'Activities suspended when aircraft detected', 'Not charted — no pilot action required'],
              ['TFR (Temp Flight Restriction)', 'Disasters, VIP movement, sports events', 'CHECK NOTAMS — often a busted TFR = enforcement action']
            ]}
          />
          <Callout kind="warn" title="Restricted vs. Prohibited">A <b>Prohibited</b> area means you cannot enter under any circumstances. A <b>Restricted</b> area means you cannot enter when it is "hot" without permission from the controlling agency — some R-areas are cold 90% of the time.</Callout>
        </>
      )
    },
    {
      id: 'sectional',
      title: 'Sectional Chart Symbology',
      subtitle: 'Reading airports, airspace, terrain, obstructions, frequencies, and Lat/Long.',
      content: (
        <>
          <p>Sectional charts (1:500,000) are the VFR pilot's primary map. Every symbol has meaning — memorize the legend.</p>
          <Table
            headers={['Feature', 'Depiction']}
            rows={[
              ['Towered airport', 'Blue airport symbol with runway orientation'],
              ['Non-towered airport', 'Magenta airport symbol'],
              ['Services available (fuel, attended)', 'Small tick marks around symbol'],
              ['Class B airspace', 'Solid blue line'],
              ['Class C airspace', 'Solid magenta line'],
              ['Class D', 'Blue dashed line'],
              ['Class E (700 AGL)', 'Magenta shaded/vignette band'],
              ['Class E (1,200 AGL)', 'Blue shaded/vignette band (or lack of magenta)'],
              ['Obstruction (< 1,000 AGL)', 'Small tower symbol with MSL/AGL altitudes'],
              ['Obstruction (≥ 1,000 AGL)', 'Large tower symbol (lightning bolt if lit)'],
              ['MEF (Max Elevation Figure)', 'Large number per quadrangle — tallest obstacle + 100 ft rounded up']
            ]}
          />
          <p className="mt-3"><b>Airport data block</b> lists (in order): airport name, CT frequency (tower) or CTAF, ATIS/AWOS/ASOS, field elevation, lighting, runway length (hundreds of feet). A star ★ next to the tower freq means part-time tower — look up hours of operation.</p>
          <Callout kind="tip" title="Lat/Long">Latitude lines run east-west (parallel to equator), measure <b>north/south</b>. Longitude lines run north-south, measure <b>east/west</b>. Format: <code>N 28°32.5'</code> (28 degrees, 32.5 minutes North). On a sectional, each minute of latitude ≈ 1 NM.</Callout>
        </>
      )
    },
    {
      id: 'transponder',
      title: 'Transponders & Mode C (FAR 91.215)',
      subtitle: 'When altitude-reporting is required and why.',
      content: (
        <>
          <p>A <b>transponder</b> replies to ATC radar interrogations. <b>Mode C</b> adds altitude encoding (pressure altitude reported to ATC). <b>Mode S</b> is newer and ADS-B compliant.</p>
          <div className="flex justify-center my-3"><TransponderChart /></div>
          <p><b>Mode C is required in:</b></p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li>All Class A, B, and C airspace.</li>
            <li>Within 30 NM of a Class B primary airport, surface to 10,000 MSL (the "Mode C veil").</li>
            <li>Above 10,000 MSL (except the airspace at or below 2,500 AGL).</li>
            <li>Above the lateral limits of Class B or C, up to 10,000 MSL.</li>
            <li>Within 10 NM of certain designated airports (check sectional).</li>
          </ul>
          <Callout kind="warn" title="Squawk codes to memorize"><b>1200</b> = VFR cruise. <b>7500</b> = hijack. <b>7600</b> = lost comm (radio failure). <b>7700</b> = emergency. Never squawk these inadvertently; they trigger immediate ATC response.</Callout>
        </>
      )
    },
    {
      id: 'vhf-radio',
      title: 'VHF Radio Communications',
      subtitle: 'Frequency ranges, phraseology, CTAF/UNICOM, and lost-comm procedures.',
      content: (
        <>
          <p>Aviation VHF runs <b>118.000–136.975 MHz</b>, line-of-sight propagation. 25 kHz or 8.33 kHz channel spacing. The standard order of radio calls is <b>Who you're calling — Who you are — Where you are — What you want</b>.</p>
          <Table
            headers={['Freq type', 'Meaning', 'Typical use']}
            rows={[
              ['CTAF', 'Common Traffic Advisory Frequency', 'Self-announce at non-towered airports'],
              ['UNICOM', 'Universal Communication (private operator)', 'Fuel, parking, ground services'],
              ['MULTICOM', '122.9 default pilot-to-pilot', 'Airports without CTAF assigned'],
              ['ATIS', 'Automatic Terminal Info Service', 'Recorded weather + active runway'],
              ['AWOS / ASOS', 'Automated Weather Observing', 'Continuous weather at smaller fields'],
              ['Emergency', '121.5 MHz (guard)', 'ALWAYS monitored — mayday channel'],
              ['FSS', 'Flight Service Station', '122.2 or 122.55 — file flight plans, PIREPs']
            ]}
          />
          <Callout kind="info" title="Lost communications">Squawk <b>7600</b>. If VFR, continue and land at nearest suitable airport; attempt comm on other frequencies (121.5, last assigned, FSS). If IFR, fly AVE-F: Assigned route, Vector, Expected, Filed route — and altitudes per the highest of Minimum, Expected, Assigned (MEA).</Callout>
        </>
      )
    },
    {
      id: 'vfr-weather',
      title: 'VFR Weather Minimums & Cloud Clearance',
      subtitle: 'The famous 3-152 / 5-111 rule.',
      content: (
        <>
          <p>VFR flight requires minimum visibility and separation from clouds so you can "see and avoid." Memorize by airspace class and altitude block.</p>
          <div className="flex justify-center my-3"><VFRCloudClearance /></div>
          <Table
            headers={['Airspace', 'Vis', 'Cloud Clearance']}
            rows={[
              ['Class B', '3 SM', 'Clear of clouds'],
              ['Class C / D / E < 10k MSL', '3 SM', '500 below / 1,000 above / 2,000 horizontal'],
              ['Class E ≥ 10k MSL', '5 SM', '1,000 below / 1,000 above / 1 SM horizontal (5-111)'],
              ['Class G day < 1,200 AGL', '1 SM', 'Clear of clouds'],
              ['Class G night < 1,200 AGL', '3 SM', '500/1,000/2,000'],
              ['Class G day 1,200 AGL–10k MSL', '1 SM', '500/1,000/2,000'],
              ['Class G ≥ 10k MSL', '5 SM', '1,000/1,000/1 SM']
            ]}
          />
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Class A', def: '18,000 MSL to FL600; IFR only. Altimeter set 29.92.' },
      { term: 'Class B', def: 'Busiest terminal; clearance required; inverted wedding cake.' },
      { term: 'Class C', def: 'Radar-equipped medium-traffic; 2-way comm established to enter; 10 NM outer, 5 NM inner.' },
      { term: 'Class D', def: 'Towered airport, typically 4 NM radius to 2,500 AGL; 2-way comm to enter.' },
      { term: 'Class E', def: 'Controlled but non-towered; base at 700/1,200 AGL commonly.' },
      { term: 'Class G', def: 'Uncontrolled; surface to base of E.' },
      { term: 'CTAF', def: 'Common Traffic Advisory Frequency — self-announce at non-towered fields.', tag: 'RADIO', tagColor: 'sky' },
      { term: 'UNICOM', def: 'Private operator freq for services; may double as CTAF.', tag: 'RADIO', tagColor: 'sky' },
      { term: 'MULTICOM', def: '122.9 default for airports without assigned CTAF.', tag: 'RADIO', tagColor: 'sky' },
      { term: 'ATIS', def: 'Recorded terminal info: wx, active runway, NOTAMs.' },
      { term: 'Mode C', def: 'Transponder with altitude encoding (pressure altitude).' },
      { term: 'Mode C Veil', def: '30 NM ring around Class B primary airport requiring Mode C.' },
      { term: 'TFR', def: 'Temporary Flight Restriction — must check NOTAMs.' },
      { term: 'MEF', def: 'Max Elevation Figure on sectional: tallest obstacle in quadrangle + buffer.' },
      { term: 'Prohibited Area', def: 'P-designated; entry forbidden (e.g., P-56 White House).' },
      { term: 'Restricted Area', def: 'R-designated; enter only when cold or with controlling agency approval.' },
      { term: 'MOA', def: 'Military Operations Area; VFR may transit but coordinate.' },
      { term: 'Latitude', def: 'Parallels; measure N/S from equator (0° to 90°).' },
      { term: 'Longitude', def: 'Meridians; measure E/W from Greenwich (0° to 180°).' }
    ],
    laws: [
      { name: 'FAR 91.215 — Transponder', desc: 'Mode C required in A/B/C, within Mode C veil, above 10,000 MSL (except ≤2,500 AGL).' },
      { name: 'FAR 91.155 — VFR wx minimums', desc: '3 SM visibility + 500/1,000/2,000 cloud clearance in Class C/D/E <10k MSL. Class B is 3 SM clear-of-clouds.' },
      { name: 'FAR 91.117 — Speed limits', desc: '250 KIAS below 10,000 MSL; 200 KIAS under Class B shelf or within Class C/D at/below 2,500 AGL within 4 NM.' },
      { name: 'FAR 91.119 — Minimum safe altitudes', desc: 'Congested area: 1,000 AGL above highest obstacle within 2,000 ft horizontal. Other: 500 AGL / 500 ft from any person, vessel, structure.' },
      { name: 'FAR 91.126/.129 — Non-towered/towered', desc: 'Left traffic unless otherwise indicated; two-way comm established before entering D/C.' }
    ],
    methods: [
      { name: 'Radio call', expand: 'Who / You / Where / What', desc: '"Centerline Tower, Cessna 12345, 10 miles north at 3,500, landing with Information Bravo."' },
      { name: 'Class C entry', desc: 'Contact approach 20 NM out. Wait for tail number response — that establishes comm. "Standby" = OK to enter.' },
      { name: 'VFR wx mnemonic', expand: '3-152 / 5-111', desc: '3 SM, 1 (above in thousands), 5 (below in hundreds), 2 (horizontal thousands) under 10k. 5 SM, 1/1/1 at/above 10k.' },
      { name: 'Squawks', expand: '1200 / 7500 / 7600 / 7700', desc: 'VFR / hijack / lost comm / emergency.' }
    ],
    diagrams: [
      { title: 'Airspace wedding-cake', visual: <AirspaceStack />, caption: 'Vertical stack: A on top, B/C/D at terminals, E fills controlled gaps, G underneath.' },
      { title: 'Mode C requirement chart', visual: <TransponderChart />, caption: 'Altitude and lateral rules for Mode C.' },
      { title: 'Standard traffic pattern', visual: <TrafficPattern />, caption: 'Left traffic: upwind → crosswind → downwind → base → final. Pattern altitude 1,000 AGL default.' },
      { title: 'VFR cloud clearance', visual: <VFRCloudClearance />, caption: '500 below / 1,000 above / 2,000 horizontal (Class C/D/E <10k).' }
    ]
  },
  questions: [
    { q: 'Class A airspace extends from what altitudes?', choices: ['14,500 MSL to FL450', '18,000 MSL to FL600', '10,000 MSL to FL500', '12,500 MSL to FL600'], correct: 1, explanation: 'Class A is 18,000 MSL up to and including FL600. Above FL600 is Class E.' },
    { q: 'You are 10 NM from a Class B primary airport at 3,000 MSL. Which equipment is required?', choices: ['Two-way radio only', 'Mode C transponder + ADS-B Out', 'VOR receiver', 'DME'], correct: 1, explanation: 'Inside the 30 NM Mode C veil, Mode C + ADS-B Out are required regardless of whether you enter Class B itself.' },
    { q: 'Two-way communications with ATC are "established" for Class C entry when:', choices: ['You hear ATIS', 'Controller uses your tail number (even to say "standby")', 'You key the mic', 'Your radio check is good'], correct: 1, explanation: 'Once ATC says your full call sign you have established comm. "Standby" tail number is clearance to enter; "Aircraft calling, standby" without tail number is NOT.' },
    { q: 'What is the VFR visibility minimum in Class E airspace below 10,000 MSL?', choices: ['1 SM', '3 SM', '5 SM', '5 NM'], correct: 1, explanation: '3 SM with 500 below / 1,000 above / 2,000 horizontal cloud clearance.' },
    { q: 'Squawk code 7600 indicates:', choices: ['Emergency', 'Hijacking', 'Lost communications', 'VFR cruise'], correct: 2, explanation: '7500 = hijack, 7600 = lost comm, 7700 = emergency, 1200 = VFR.' },
    { q: 'On a sectional chart, a blue dashed line depicts:', choices: ['Class B boundary', 'Class C boundary', 'Class D boundary', 'MOA'], correct: 2, explanation: 'Class D = blue dashed. Class B = solid blue, Class C = solid magenta.' },
    { q: 'You see "CT — 118.3 ★" on an airport data block. The star means:', choices: ['24-hour tower', 'Part-time tower (check hours)', 'Contract tower', 'IFR only'], correct: 1, explanation: 'A star next to the tower frequency indicates a part-time tower; when closed, Class D reverts to Class E or G depending on surface area.' },
    { q: 'MEF (Maximum Elevation Figure) on a sectional represents:', choices: ['Highest obstacle in the quadrangle plus buffer', 'Minimum safe altitude for the area', 'Highest airport elevation', 'Tallest tower only'], correct: 0, explanation: 'MEF accounts for the highest known obstacle (natural or man-made) plus a vertical buffer, rounded up to the next 100 feet.' },
    { q: 'UNICOM refers to:', choices: ['ATC tower frequency', 'Universal emergency frequency', 'Private radio for operator services (fuel, parking)', 'FSS flight plan frequency'], correct: 2, explanation: 'UNICOM is operated by a private entity (FBO) for services. At fields without a tower or CTAF assigned, UNICOM may double as CTAF.' },
    { q: 'MULTICOM default frequency is:', choices: ['122.75', '122.9', '122.95', '123.0'], correct: 1, explanation: '122.9 MHz is the MULTICOM frequency for airports without an assigned CTAF.' },
    { q: 'The emergency / guard frequency is:', choices: ['121.5 MHz', '122.2 MHz', '123.0 MHz', '243.0 MHz'], correct: 0, explanation: '121.5 MHz is monitored 24/7 as the civilian emergency frequency. 243.0 MHz is the military equivalent.' },
    { q: 'A Restricted Area on a sectional means:', choices: ['You can never enter', 'You may enter when "cold" or with controlling agency permission', 'IFR only', 'No action required'], correct: 1, explanation: 'Prohibited = never enter. Restricted = enter only when the hazardous activity is not taking place, or with permission.' },
    { q: 'Latitude lines:', choices: ['Run N-S and measure E-W', 'Run E-W and measure N-S', 'All pass through the poles', 'Are all equidistant around the globe'], correct: 1, explanation: 'Parallels of latitude run east-west and measure your distance north or south of the equator.' },
    { q: 'One minute of latitude equals approximately:', choices: ['1 statute mile', '1 nautical mile', '6,080 feet × 1.15', '1 degree'], correct: 1, explanation: 'One minute of latitude ≈ 1 NM (this is where the nautical mile definition originates).' },
    { q: 'Class B VFR weather minimums are:', choices: ['3 SM, 500/1,000/2,000', '3 SM, clear of clouds', '5 SM, 1/1/1', '1 SM, clear of clouds'], correct: 1, explanation: 'Class B uses 3 SM visibility but only requires "clear of clouds" — because ATC separates IFR from VFR inside.' },
    { q: 'A part-time Class D tower closes. What does the airspace become?', choices: ['Automatically Class G', 'Class E or G depending on published info', 'Class C', 'Still Class D'], correct: 1, explanation: 'Many Class D airports revert to Class E (if they have a surface E area) or Class G after the tower closes — check chart supplement and sectional.' },
    { q: 'Which of the following requires Mode C?', choices: ['Above 10,000 MSL, 3,000 AGL', 'Within 30 NM of Class B primary airport at 2,000 MSL', 'At 2,500 AGL over mountains at 13,000 MSL', 'None of the above'], correct: 1, explanation: 'The Mode C veil requires Mode C from surface to 10,000 MSL within 30 NM of a Class B primary airport. Option A and C are within the "above 10,000 MSL but ≤ 2,500 AGL" exception.' },
    { q: 'You are entering Class D and the tower says "Aircraft calling, stand by." You may:', choices: ['Enter — comm established', 'Not enter — comm not yet established', 'Enter as long as you squawk 1200', 'Enter if you have a transponder'], correct: 1, explanation: 'Without your tail number in the reply, two-way comm is NOT established. Wait for a response using your call sign.' },
    { q: 'The maximum speed under a Class B shelf is:', choices: ['250 KIAS', '200 KIAS', '180 KIAS', '156 KIAS'], correct: 1, explanation: 'FAR 91.117: 200 KIAS below the lateral limits of Class B or in VFR corridor through Class B.' },
    { q: 'You want to check whether a TFR is active along your route. Where do you look?', choices: ['Sectional chart only', 'FAA NOTAMs (1-800-WX-BRIEF or tfr.faa.gov)', 'ATIS', 'The chart supplement'], correct: 1, explanation: 'TFRs are issued via NOTAMs and published at tfr.faa.gov. Sectionals cannot show temporary restrictions.' },
    { q: 'You hear the tower issue an ATIS code "Information Charlie." On your initial call you should:', choices: ['Not mention it', 'State "with Charlie" or "information Charlie"', 'Request the latest', 'Request weather update'], correct: 1, explanation: 'Acknowledging the ATIS code tells the controller you have the current wx/runway info and saves them having to repeat it.' },
    { q: 'Class C outer area extends to what radius and altitude from the primary airport?', choices: ['5 NM, 1,200 AGL', '10 NM, 4,000 AGL (shelf)', '20 NM, 10,000 MSL', '30 NM, surface'], correct: 1, explanation: 'Class C surface area is typically 5 NM to 4,000 AGL; the outer shelf extends to 10 NM from 1,200 AGL to 4,000 AGL.' },
    { q: 'You see a small tower symbol with numbers "1149/299" on a sectional. This means:', choices: ['Tower base 1,149 MSL, height 299 feet', 'Top 1,149 MSL / 299 AGL', 'Distance 1,149 NM', 'Frequency 1149 kHz'], correct: 1, explanation: 'Obstacle altitudes: top of the obstacle in MSL with AGL in parentheses.' }
  ]
};
