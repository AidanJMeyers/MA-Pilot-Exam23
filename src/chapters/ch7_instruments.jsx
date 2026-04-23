import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const PitotStatic = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#f0f9ff" />
    {/* Aircraft silhouette */}
    <path d="M 50 140 L 200 140 L 210 130 L 50 135 Z" fill="#64748b" />
    {/* Pitot tube */}
    <g transform="translate(45,138)">
      <rect x="-25" y="0" width="25" height="6" fill="#0ea5e9" />
      <line x1="-28" y1="3" x2="-10" y2="3" stroke="white" strokeWidth="1" />
    </g>
    <text x="10" y="125" fontSize="11" fill="#0369a1" fontWeight="bold">PITOT (ram air)</text>
    <line x1="25" y1="145" x2="25" y2="155" stroke="#0ea5e9" strokeWidth="2" />
    <line x1="25" y1="155" x2="320" y2="155" stroke="#0ea5e9" strokeWidth="2" />
    <line x1="320" y1="155" x2="320" y2="185" stroke="#0ea5e9" strokeWidth="2" />
    {/* Static port */}
    <circle cx="180" cy="145" r="4" fill="#dc2626" />
    <text x="155" y="170" fontSize="11" fill="#991b1b" fontWeight="bold">STATIC (still air)</text>
    <line x1="180" y1="149" x2="180" y2="200" stroke="#dc2626" strokeWidth="2" />
    <line x1="180" y1="200" x2="470" y2="200" stroke="#dc2626" strokeWidth="2" />
    <line x1="280" y1="200" x2="280" y2="225" stroke="#dc2626" strokeWidth="2" />
    <line x1="395" y1="200" x2="395" y2="225" stroke="#dc2626" strokeWidth="2" />
    {/* Instruments */}
    <g transform="translate(275,185)">
      <circle cx="0" cy="30" r="30" fill="white" stroke="#334155" strokeWidth="2" />
      <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">ASI</text>
      <text x="0" y="70" textAnchor="middle" fontSize="9" fill="#334155">Pitot+Static</text>
    </g>
    <g transform="translate(350,225)">
      <circle cx="0" cy="30" r="30" fill="white" stroke="#334155" strokeWidth="2" />
      <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">ALT</text>
      <text x="0" y="70" textAnchor="middle" fontSize="9" fill="#334155">Static only</text>
    </g>
    <g transform="translate(440,225)">
      <circle cx="0" cy="30" r="30" fill="white" stroke="#334155" strokeWidth="2" />
      <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">VSI</text>
      <text x="0" y="70" textAnchor="middle" fontSize="9" fill="#334155">Static only</text>
    </g>
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Pitot-Static System: ASI uses BOTH, ALT & VSI use static only</text>
  </svg>
);

const ASIMarkings = () => (
  <svg viewBox="0 0 300 300" className="w-full max-w-xs">
    <rect x="0" y="0" width="300" height="300" fill="#f8fafc" />
    <circle cx="150" cy="150" r="120" fill="white" stroke="#334155" strokeWidth="3" />
    {/* White arc (flap operating range) */}
    <path d="M 150 30 A 120 120 0 0 0 90 255" fill="none" stroke="white" strokeWidth="12" strokeOpacity="0" />
    <path d="M 66 230 A 120 120 0 0 1 40 70" fill="none" stroke="white" strokeWidth="14" />
    <path d="M 66 230 A 120 120 0 0 1 40 70" fill="none" stroke="#334155" strokeWidth="1" />
    <text x="20" y="175" fontSize="11" fontWeight="bold" fill="#334155">WHITE</text>
    <text x="15" y="188" fontSize="9" fill="#334155">flap range</text>
    {/* Green arc */}
    <path d="M 40 70 A 120 120 0 0 1 270 130" fill="none" stroke="#22c55e" strokeWidth="14" />
    <text x="130" y="45" fontSize="11" fontWeight="bold" fill="#15803d">GREEN</text>
    <text x="100" y="30" fontSize="9" fill="#15803d">normal operating</text>
    {/* Yellow arc */}
    <path d="M 270 130 A 120 120 0 0 1 270 170" fill="none" stroke="#eab308" strokeWidth="14" />
    <text x="230" y="155" fontSize="11" fontWeight="bold" fill="#a16207">YELLOW</text>
    <text x="225" y="170" fontSize="8" fill="#a16207">caution (smooth air)</text>
    {/* Red radial line */}
    <line x1="150" y1="150" x2="270" y2="170" stroke="#dc2626" strokeWidth="4" />
    <text x="232" y="192" fontSize="11" fontWeight="bold" fill="#dc2626">VNE</text>
    <text x="232" y="205" fontSize="9" fill="#dc2626">never exceed</text>
    {/* Label */}
    <text x="150" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">ASI</text>
    <text x="150" y="170" textAnchor="middle" fontSize="9" fill="#334155">Kt</text>
    {/* V-speeds */}
    <g fontSize="9" fill="#334155">
      <text x="30" y="270">VS0: stall dirty (white low)</text>
      <text x="30" y="282">VS1: stall clean (green low)</text>
      <text x="30" y="294">VNO: Max structural cruise (yellow start)</text>
    </g>
  </svg>
);

const Altitudes = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#fefce8" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">TAIPD — The 5 Kinds of Altitude</text>
    {[
      { l: 'T', t: 'True', d: 'Actual height above MSL. Used on charts.', c: '#059669' },
      { l: 'A', t: 'Absolute', d: 'Height ABOVE GROUND (AGL). Radar altimeter reads this.', c: '#2563eb' },
      { l: 'I', t: 'Indicated', d: 'What the altimeter shows with current Kollsman setting.', c: '#7c3aed' },
      { l: 'P', t: 'Pressure', d: 'Altitude referenced to STANDARD pressure (29.92" Hg). FL above 18k.', c: '#dc2626' },
      { l: 'D', t: 'Density', d: 'Pressure altitude CORRECTED for non-standard temperature. Performance.', c: '#ea580c' }
    ].map((a, i) => (
      <g key={i} transform={`translate(${20 + i*108}, 55)`}>
        <rect width="100" height="200" rx="8" fill={a.c} fillOpacity="0.1" stroke={a.c} strokeWidth="2" />
        <circle cx="50" cy="30" r="22" fill={a.c} />
        <text x="50" y="37" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">{a.l}</text>
        <text x="50" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill={a.c}>{a.t}</text>
        <foreignObject x="5" y="85" width="90" height="110">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10px', color: '#374151', lineHeight:'1.4'}}>{a.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const ASIErrors = () => (
  <svg viewBox="0 0 540 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="280" fill="#f0f9ff" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Airspeed Indicator Errors — ICE T</text>
    {[
      { l: 'I', t: 'Indicated', d: 'Raw reading off the dial; no corrections.' },
      { l: 'C', t: 'Calibrated', d: 'Indicated corrected for instrument & position (installation) error.' },
      { l: 'E', t: 'Equivalent', d: 'Calibrated corrected for compressibility (high altitude, high speed).' },
      { l: 'T', t: 'True', d: 'Actual speed through air mass. Use flight computer: adds 2%/1000 ft from CAS.' }
    ].map((v, i) => (
      <g key={i} transform={`translate(${30 + i*128}, 55)`}>
        <rect width="120" height="200" rx="8" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" />
        <circle cx="60" cy="30" r="22" fill="#0369a1" />
        <text x="60" y="38" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">{v.l}</text>
        <text x="60" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0369a1">{v.t}</text>
        <foreignObject x="8" y="85" width="104" height="110">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10px', color: '#374151', lineHeight:'1.4'}}>{v.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const MagCompassErrors = () => (
  <svg viewBox="0 0 520 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="520" height="280" fill="#fff7ed" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Magnetic Compass Errors — UNOS & ANDS</text>
    <g transform="translate(30,50)">
      <rect width="210" height="210" rx="8" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
      <text x="105" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#1e40af">UNOS (turns)</text>
      <text x="15" y="50" fontSize="11" fill="#1e3a8a" fontWeight="bold">In Northern Hemisphere:</text>
      <text x="15" y="75" fontSize="11" fill="#1e3a8a">U — Undershoot</text>
      <text x="15" y="92" fontSize="11" fill="#1e3a8a">N — North</text>
      <text x="15" y="109" fontSize="11" fill="#1e3a8a">O — Overshoot</text>
      <text x="15" y="126" fontSize="11" fill="#1e3a8a">S — South</text>
      <text x="15" y="155" fontSize="10" fill="#1e3a8a">Turning TO north: compass LAGS;</text>
      <text x="15" y="170" fontSize="10" fill="#1e3a8a">undershoot rollout by ~latitude.</text>
      <text x="15" y="185" fontSize="10" fill="#1e3a8a">Turning TO south: compass LEADS;</text>
      <text x="15" y="200" fontSize="10" fill="#1e3a8a">overshoot rollout by ~latitude.</text>
    </g>
    <g transform="translate(275,50)">
      <rect width="210" height="210" rx="8" fill="#fef3c7" stroke="#92400e" strokeWidth="2" />
      <text x="105" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#92400e">ANDS (acceleration)</text>
      <text x="15" y="50" fontSize="11" fill="#78350f" fontWeight="bold">On East/West heading:</text>
      <text x="15" y="75" fontSize="11" fill="#78350f">A — Accelerate</text>
      <text x="15" y="92" fontSize="11" fill="#78350f">N — North</text>
      <text x="15" y="109" fontSize="11" fill="#78350f">D — Decelerate</text>
      <text x="15" y="126" fontSize="11" fill="#78350f">S — South</text>
      <text x="15" y="155" fontSize="10" fill="#78350f">Accelerate → compass shows turn</text>
      <text x="15" y="170" fontSize="10" fill="#78350f">toward NORTH (error).</text>
      <text x="15" y="185" fontSize="10" fill="#78350f">Decelerate → compass shows turn</text>
      <text x="15" y="200" fontSize="10" fill="#78350f">toward SOUTH.</text>
    </g>
  </svg>
);

export default {
  id: 7,
  title: 'Flight Instruments',
  subtitle: 'Pitot-static system, ASI, altimeter, VSI, gyroscopic instruments, magnetic compass.',
  blocks: [
    {
      id: 'pitot-static',
      title: 'Pitot-Static System',
      subtitle: 'Ram air vs. still air — and the three instruments that use them.',
      content: (
        <>
          <p>Three flight instruments depend on air pressure sampled by the <b>pitot tube</b> (ram air / dynamic + static pressure) and <b>static ports</b> (still air / static pressure only).</p>
          <div className="flex justify-center my-3"><PitotStatic /></div>
          <Table
            headers={['Instrument', 'Uses', 'Measures']}
            rows={[
              ['Airspeed Indicator (ASI)', 'Pitot + Static', 'Difference = dynamic pressure = airspeed²'],
              ['Altimeter (ALT)', 'Static only', 'Ambient pressure vs. reference (Kollsman)'],
              ['Vertical Speed Indicator (VSI)', 'Static (via calibrated leak)', 'Rate of pressure change']
            ]}
          />
          <Callout kind="warn" title="Pitot/static blockages"><b>Pitot blocked:</b> ASI acts like an altimeter (reads higher as you climb, lower as you descend — static still operating).<br/><b>Static port blocked:</b> ASI will read LOW in climb, HIGH in descent; altimeter and VSI freeze. Use <b>alternate static source</b>.</Callout>
        </>
      )
    },
    {
      id: 'airspeed',
      title: 'Airspeed Indicator & V-Speeds',
      subtitle: 'Arcs, markings, and the ICE-T speed conversions.',
      content: (
        <>
          <div className="flex justify-center my-3"><ASIMarkings /></div>
          <Table
            headers={['Marking', 'Meaning', 'V-speed(s)']}
            rows={[
              ['White arc', 'Flap operating range (takeoff/landing)', 'VS0 (bottom) to VFE (top)'],
              ['Green arc', 'Normal operating range', 'VS1 (bottom) to VNO (top)'],
              ['Yellow arc', 'Caution — smooth air only', 'VNO to VNE'],
              ['Red radial', 'Never-exceed speed', 'VNE']
            ]}
          />
          <Table
            headers={['V-speed', 'Meaning']}
            rows={[
              ['VS0', 'Stall speed in landing config (full flaps, gear down)'],
              ['VS1', 'Stall speed in specified (clean) config'],
              ['VFE', 'Max flaps-extended speed (top of white arc)'],
              ['VX', 'Best angle of climb (altitude over distance)'],
              ['VY', 'Best rate of climb (altitude over time)'],
              ['VA', 'Maneuvering speed — maximum speed for full control deflection (varies with weight)'],
              ['VNO', 'Max structural cruise (top of green / start of yellow)'],
              ['VNE', 'Never-exceed (red line)'],
              ['VG', 'Best glide speed']
            ]}
          />
          <div className="flex justify-center my-3"><ASIErrors /></div>
          <Callout kind="tip" title="ICE-T conversion"><b>I</b>ndicated → <b>C</b>alibrated (instrument/position) → <b>E</b>quivalent (compressibility at high alt) → <b>T</b>rue (density effects — add ~2%/1000 ft). TAS &gt; IAS at altitude.</Callout>
        </>
      )
    },
    {
      id: 'altimeter',
      title: 'Altimeter & Altitude Types',
      subtitle: 'Kollsman window, "high to low, look out below," and TAIPD.',
      content: (
        <>
          <p>The altimeter is an aneroid barometer calibrated in feet. The <b>Kollsman window</b> sets the reference pressure (altimeter setting, typically 29.92 "Hg at standard or local setting from ATIS/AWOS).</p>
          <div className="flex justify-center my-3"><Altitudes /></div>
          <Callout kind="warn" title='"High to low, look out below"'>Flying from a <b>HIGH pressure/temperature</b> area into a <b>LOW pressure/temperature</b> area with an uncorrected altimeter setting causes the altimeter to <b>OVER-READ</b> — you're actually LOWER than the instrument shows. Same for cold air: cold → dense → altimeter reads higher than reality. Always update altimeter setting every 100 NM.</Callout>
          <p><b>Density altitude</b> is the ONLY altitude relevant to performance. It's pressure altitude corrected for non-standard temp. Hot/high/humid all INCREASE density altitude — your airplane thinks it's flying in thinner air.</p>
        </>
      )
    },
    {
      id: 'vsi',
      title: 'Vertical Speed Indicator',
      subtitle: 'Rate-of-change instrument with a calibrated leak.',
      content: (
        <>
          <p>The VSI measures the difference between instantaneous static pressure and a delayed static pressure (through a calibrated leak). It gives <b>rate of climb/descent in fpm</b>.</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Lag:</b> VSI shows rate with a 6-9 second lag on newer instruments, up to 30 sec on older needle/capillary types.</li>
            <li><b>Instantaneous VSI (IVSI)</b>: uses an accelerometer pump for zero lag.</li>
            <li><b>Static failure</b>: VSI freezes.</li>
          </ul>
        </>
      )
    },
    {
      id: 'gyros',
      title: 'Gyroscopic Instruments',
      subtitle: 'Attitude Indicator, Heading Indicator, Turn Coordinator.',
      content: (
        <>
          <p>Three instruments use spinning gyroscopes (vacuum-driven or electric) that exhibit <b>rigidity in space</b> and <b>precession</b>.</p>
          <Table
            headers={['Instrument', 'Power', 'Shows', 'Use']}
            rows={[
              ['Attitude Indicator (AI)', 'Vacuum (typically)', 'Pitch & roll vs. horizon', 'Primary attitude reference in IFR'],
              ['Heading Indicator (HI)', 'Vacuum', 'Magnetic heading (no mag errors)', 'Set to agree with mag compass every 15 min'],
              ['Turn Coordinator (TC)', 'Electric (typically)', 'Rate of roll + rate of turn + coordination ball', 'Partial-panel backup; std rate turn']
            ]}
          />
          <Callout kind="info" title="Why split power sources?">AI and HI typically run on the vacuum system (engine-driven pump). TC runs on electrical. This split means a single system failure won't take out all gyroscopic instruments.</Callout>
          <Callout kind="tip" title="Coordination ball">The ball in the TC is a mechanical slip indicator, not gyroscopic. <b>"Step on the ball"</b>: rudder toward the ball to coordinate.</Callout>
        </>
      )
    },
    {
      id: 'magnetic-compass',
      title: 'Magnetic Compass — Errors',
      subtitle: 'Variation, deviation, UNOS, ANDS, dip.',
      content: (
        <>
          <p>The magnetic compass is required equipment (FAR 91.205). It's a float compass — simple and reliable, but riddled with errors.</p>
          <Table
            headers={['Error', 'Cause', 'Effect']}
            rows={[
              ['Variation', 'Difference between true and magnetic north (isogonic lines on chart)', 'Applied by the pilot when converting true to magnetic'],
              ['Deviation', 'Local magnetic fields from aircraft (radios, metal, DC wires)', 'Compensated by compass card in cockpit'],
              ['Magnetic Dip', 'Earth\'s magnetic lines curve down at poles', 'Causes northerly/southerly turning errors and acceleration errors'],
              ['UNOS', 'Turning error (N hemisphere)', 'Turning TO North: UNDERSHOOT. Turning TO South: OVERSHOOT.'],
              ['ANDS', 'Acceleration error on E/W', 'Accelerate: reads NORTH turn. Decelerate: reads SOUTH turn.']
            ]}
          />
          <div className="flex justify-center my-3"><MagCompassErrors /></div>
          <Callout kind="tip" title="TVMDC">True → add Variation → Magnetic → add Deviation → Compass. "True Virgins Make Dull Companions" is the classic mnemonic.</Callout>
        </>
      )
    },
    {
      id: 'turn-rate',
      title: 'Turn Rate, Radius & True Airspeed',
      subtitle: 'How bank and airspeed determine your turn geometry.',
      content: (
        <>
          <p>Given bank angle and true airspeed:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Rate of turn</b> = 1091 × tan(bank) / TAS (deg/sec). Higher bank OR lower airspeed → higher rate.</li>
            <li><b>Radius of turn</b> = TAS² / (11.26 × tan(bank)) (ft). Lower airspeed OR higher bank → tighter radius.</li>
            <li><b>Standard rate</b>: 3°/sec → bank ≈ (TAS/10) + 7. So 100 KIAS std rate ≈ 17° bank.</li>
          </ul>
          <Callout kind="info" title="Why TAS matters">A faster aircraft at the same bank flies a much bigger radius. This matters at altitude (TAS {'>'} IAS) — a 60° bank at 12,000 ft is a much wider circle than at 2,000 ft.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Pitot tube', def: 'Ram air intake; pressure rises with airspeed.' },
      { term: 'Static port', def: 'Flush opening sensing ambient (still) pressure.' },
      { term: 'ASI', def: 'Airspeed Indicator — uses pitot & static.' },
      { term: 'ALT', def: 'Altimeter — static only; aneroid barometer.' },
      { term: 'VSI', def: 'Vertical Speed Indicator — static + calibrated leak.' },
      { term: 'Kollsman window', def: 'Altimeter setting window. 29.92 is standard.' },
      { term: 'Density altitude', def: 'Pressure altitude corrected for non-standard temperature. Performance metric.' },
      { term: 'VS0 / VS1', def: 'Stall speed dirty / clean.' },
      { term: 'VA', def: 'Maneuvering speed — max for full control deflection.' },
      { term: 'VX / VY', def: 'Best angle of climb / best rate of climb.' },
      { term: 'VNE', def: 'Never-exceed speed (red radial on ASI).' },
      { term: 'VFE', def: 'Max flap-extended (top of white arc).' },
      { term: 'VNO', def: 'Max structural cruise (top of green / start of yellow).' },
      { term: 'Gyroscopic rigidity', def: 'Spinning gyro resists change in orientation.' },
      { term: 'Precession', def: 'Gyro response to applied force 90° in direction of rotation.' },
      { term: 'Variation', def: 'True vs. magnetic north divergence (isogonic).' },
      { term: 'Deviation', def: 'Local magnetic interference in aircraft (compass card compensation).' }
    ],
    laws: [
      { name: 'FAR 91.205(b) — Day VFR instruments', desc: 'ATOMATOFLAMES: Airspeed, Tachometer, Oil pressure, Manifold pressure (if applicable), Altimeter, Temperature (liquid-cooled), Oil temperature (air-cooled), Fuel gauge, Landing gear position, Anti-collision lights, Magnetic compass, ELT, Seat belts.' },
      { name: 'FAR 91.205(c) — Night VFR', desc: 'FLAPS added: Fuses, Landing light (if for hire), Anti-collision, Position lights, Source of power (alternator).' },
      { name: 'FAR 91.171 — VOR check', desc: 'Within 30 days for IFR: ±4° ground, ±6° air.' }
    ],
    methods: [
      { name: 'ICE-T', expand: 'Indicated/Calibrated/Equivalent/True', desc: 'ASI error chain. TAS adds ~2%/1000 ft above CAS.' },
      { name: 'TAIPD', expand: 'True/Absolute/Indicated/Pressure/Density', desc: '5 altitudes. Density = performance.' },
      { name: 'UNOS', expand: 'Undershoot North / Overshoot South', desc: 'N hemisphere turn errors on magnetic compass.' },
      { name: 'ANDS', expand: 'Accelerate North / Decelerate South', desc: 'E/W heading acceleration errors on mag compass.' },
      { name: 'TVMDC', expand: 'True+Var=Mag+Dev=Compass', desc: 'Heading conversion. "East is least, West is best" (subtract E var, add W var).' },
      { name: 'Std rate bank', desc: 'Bank ≈ TAS/10 + 7. 100 kt = 17° bank for 3°/sec.' },
      { name: 'High-to-Low rule', desc: 'Flying into lower pressure/temp with old setting = altimeter over-reads (you\'re lower than indicated).' }
    ],
    diagrams: [
      { title: 'Pitot-Static system', visual: <PitotStatic />, caption: 'ASI uses both; ALT/VSI use static only.' },
      { title: 'ASI arcs/V-speeds', visual: <ASIMarkings />, caption: 'White/Green/Yellow/Red arc meanings.' },
      { title: 'ICE-T airspeed chain', visual: <ASIErrors />, caption: 'IAS → CAS → EAS → TAS.' },
      { title: 'TAIPD altitudes', visual: <Altitudes />, caption: '5 altitude types.' },
      { title: 'Mag compass errors', visual: <MagCompassErrors />, caption: 'UNOS turns + ANDS accel.' }
    ]
  },
  questions: [
    { q: 'If the PITOT tube is blocked but static is open, the ASI will:', choices: ['Read zero', 'Act like an altimeter — increase with altitude', 'Freeze at current value', 'Read TAS'], correct: 1, explanation: 'Pitot blocked traps pressure in the line; as you climb, static pressure drops → differential rises → ASI reads higher. Opposite in descent.' },
    { q: 'If the STATIC port is blocked:', choices: ['ASI, ALT, VSI all fail', 'Only ASI fails', 'ALT & VSI freeze; ASI reads wrong in climb/descent', 'Instruments unaffected'], correct: 2, explanation: 'Static feeds all three. Altimeter and VSI freeze at last value; ASI becomes inaccurate.' },
    { q: 'The bottom of the WHITE arc on the ASI is:', choices: ['VS1', 'VS0', 'VFE', 'VA'], correct: 1, explanation: 'VS0 (stall speed dirty) is the bottom of the white arc. Top is VFE (max flap speed).' },
    { q: 'Never-exceed speed is indicated by:', choices: ['Top of green arc', 'Top of yellow arc (red radial)', 'Top of white arc', 'Bottom of green arc'], correct: 1, explanation: 'VNE is the RED radial line at the top of the yellow caution range.' },
    { q: 'Maneuvering speed (VA):', choices: ['Is fixed regardless of weight', 'Increases with weight', 'Decreases with weight', 'Changes only with altitude'], correct: 1, explanation: 'VA increases with weight (heavier aircraft stalls before overstressing). LOWER VA at lighter weights — counterintuitive.' },
    { q: 'TAIPD altitude used for performance calculations is:', choices: ['True', 'Absolute', 'Pressure', 'Density'], correct: 3, explanation: 'Density altitude corrects for temperature — directly tied to aircraft performance.' },
    { q: 'Density altitude INCREASES when:', choices: ['Temperature rises', 'Pressure rises', 'Humidity drops', 'Altitude drops'], correct: 0, explanation: 'Hot = thin air = higher DA. Also high elevation and high humidity.' },
    { q: 'Flying from high pressure to low pressure without resetting altimeter causes the altimeter to:', choices: ['Read too low (you\'re higher than shown)', 'Read too high (you\'re lower than shown)', 'Freeze', 'Fluctuate'], correct: 1, explanation: '"High to low, look out below." Lower actual pressure = altimeter OVER-reads, you are actually LOWER.' },
    { q: 'ICE-T conversion: TAS is derived from CAS by:', choices: ['Subtracting compressibility', 'Adding roughly 2% per 1,000 ft of altitude', 'Dividing by density altitude', 'Using flaps correction'], correct: 1, explanation: 'TAS ≈ CAS × (1 + 0.02 × altitude/1000). At 10,000 ft, TAS is ~20% higher than CAS.' },
    { q: 'UNOS: turning from a heading of 090° to 360°, the compass:', choices: ['Leads the turn', 'Lags — roll out before 360° by about the latitude', 'Is accurate', 'Reads south'], correct: 1, explanation: 'Turning TO north in N hemisphere, the compass lags (Undershoot). Roll out early by ~the latitude in degrees.' },
    { q: 'ANDS: accelerating on an EAST heading, the magnetic compass will indicate:', choices: ['Accurate heading', 'Turn toward NORTH', 'Turn toward SOUTH', 'No change'], correct: 1, explanation: 'ANDS: Accelerate North, Decelerate South (on E/W headings, N hemisphere).' },
    { q: 'Variation is:', choices: ['Local magnetic disturbance in the aircraft', 'Angular difference between true north and magnetic north', 'Altimeter correction', 'Compass dip'], correct: 1, explanation: 'Variation = global phenomenon (isogonic lines). Deviation = local (aircraft magnets).' },
    { q: '"TVMDC" heading conversion chain stands for:', choices: ['True-Visual-Mag-Deviation-Compass', 'True-Variation-Magnetic-Deviation-Compass', 'Track-Vector-Magnetic-Direction-Compass', 'Tangent-Vert-Mag-Dec-Comp'], correct: 1, explanation: 'True + Variation = Magnetic + Deviation = Compass. "True Virgins Make Dull Companions."' },
    { q: 'Attitude Indicator primary power source in most GA aircraft is:', choices: ['Electric', 'Pneumatic/vacuum', 'Pitot pressure', 'GPS'], correct: 1, explanation: 'AI + HI typically vacuum-driven. TC typically electric (split for redundancy).' },
    { q: 'Standard rate turn is:', choices: ['1°/sec', '3°/sec', '6°/sec', '9°/sec'], correct: 1, explanation: '3°/sec = 180° in 1 min = 360° in 2 min.' },
    { q: 'Green arc on ASI represents:', choices: ['Flap operating range', 'Normal operating range (clean)', 'Caution range', 'Never exceed'], correct: 1, explanation: 'Green = normal operating, VS1 to VNO. White = flap range.' },
    { q: 'Yellow arc on ASI means:', choices: ['Normal operations', 'Caution — smooth air only', 'Stall speed range', 'IFR only'], correct: 1, explanation: 'Yellow = caution; exceeds VNO, below VNE. Only smooth air.' },
    { q: 'Which altitude is absolute (AGL)?', choices: ['Pressure', 'True', 'Absolute', 'Density'], correct: 2, explanation: 'Absolute altitude = height above the ground. Radar altimeters read absolute.' },
    { q: 'At 29.92" Hg Kollsman setting, altimeter reads:', choices: ['True altitude', 'Absolute altitude', 'Pressure altitude', 'Density altitude'], correct: 2, explanation: 'Setting 29.92 → altimeter reads PRESSURE altitude. Flight Levels above 18,000 MSL are based on 29.92.' },
    { q: 'The turn coordinator shows:', choices: ['Only rate of turn', 'Rate of roll AND rate of turn with slip/skid ball', 'Only heading', 'Pitch attitude'], correct: 1, explanation: 'Canted gyro in TC senses both rate of roll and rate of turn. Ball = coordination indicator.' },
    { q: 'A vacuum system failure would most likely cause loss of:', choices: ['Turn Coordinator', 'Attitude & Heading Indicators', 'All instruments', 'ASI'], correct: 1, explanation: 'Typical GA: AI and HI on vacuum. TC electric. Pitot-static is unaffected.' }
  ]
};
