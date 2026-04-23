import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const CGEnvelope = () => (
  <svg viewBox="0 0 540 320" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="320" fill="#f8fafc" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">CG Envelope — Weight vs. CG Position</text>
    <line x1="80" y1="290" x2="510" y2="290" stroke="#334155" strokeWidth="2" />
    <line x1="80" y1="40" x2="80" y2="290" stroke="#334155" strokeWidth="2" />
    <text x="290" y="310" textAnchor="middle" fontSize="11" fill="#334155">CG location (inches from datum) →</text>
    <text x="65" y="165" fontSize="11" fill="#334155" transform="rotate(-90 65 165)">Weight (lbs) ↑</text>
    {/* Envelope */}
    <polygon points="150,280 200,180 320,60 450,60 470,180 450,280" fill="#bbf7d0" stroke="#059669" strokeWidth="2" />
    <text x="330" y="170" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">VALID</text>
    <text x="330" y="190" textAnchor="middle" fontSize="11" fill="#065f46">Envelope</text>
    {/* Labels */}
    <text x="140" y="295" fontSize="9" fill="#334155">Fwd limit</text>
    <text x="465" y="295" fontSize="9" fill="#334155">Aft limit</text>
    <text x="70" y="60" fontSize="9" fill="#334155">Max gross</text>
    <text x="70" y="285" fontSize="9" fill="#334155">Empty</text>
    {/* Example point */}
    <circle cx="360" cy="140" r="6" fill="#dc2626" />
    <text x="365" y="138" fontSize="10" fill="#dc2626">Loaded aircraft (should be inside)</text>
  </svg>
);

const MomentArms = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#fefce8" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Moment = Weight × Arm (Arm measured from DATUM)</text>
    {/* Datum line */}
    <line x1="40" y1="200" x2="40" y2="60" stroke="#dc2626" strokeWidth="3" strokeDasharray="5 3" />
    <text x="15" y="55" fontSize="11" fontWeight="bold" fill="#991b1b">DATUM</text>
    <text x="15" y="215" fontSize="10" fill="#991b1b">(LE wing or nose)</text>
    {/* Aircraft */}
    <g transform="translate(80,140)">
      <path d="M 0 0 L 380 0 L 370 -8 L 0 -3 Z" fill="#64748b" />
      <rect x="40" y="-20" width="30" height="20" fill="#2563eb" stroke="white" />
      <text x="55" y="-6" textAnchor="middle" fontSize="9" fill="white">Pilot</text>
      <rect x="100" y="-20" width="30" height="20" fill="#2563eb" stroke="white" />
      <text x="115" y="-6" textAnchor="middle" fontSize="9" fill="white">Pax1</text>
      <rect x="170" y="-20" width="30" height="20" fill="#7c3aed" stroke="white" />
      <text x="185" y="-6" textAnchor="middle" fontSize="9" fill="white">Pax2</text>
      <rect x="260" y="-20" width="40" height="20" fill="#ea580c" stroke="white" />
      <text x="280" y="-6" textAnchor="middle" fontSize="9" fill="white">Bag</text>
    </g>
    {/* Arms */}
    {[
      { x: 135, arm: 55, c: '#2563eb' },
      { x: 195, arm: 100, c: '#2563eb' },
      { x: 265, arm: 150, c: '#7c3aed' },
      { x: 360, arm: 220, c: '#ea580c' }
    ].map((a, i) => (
      <g key={i}>
        <line x1="40" y1={160 + i*10} x2={a.x} y2={160 + i*10} stroke={a.c} strokeWidth="1.5" />
        <text x={(a.x + 40) / 2} y={172 + i*10} fontSize="9" fill={a.c}>arm {a.arm}"</text>
      </g>
    ))}
    <text x="20" y="255" fontSize="11" fill="#334155">CG = Total Moment ÷ Total Weight. Forward = nose-heavy, Aft = tail-heavy.</text>
    <text x="20" y="272" fontSize="11" fill="#334155">Units: lb × in = in-lb. Sometimes divided by 1000 in POH.</text>
  </svg>
);

const CGEffects = () => (
  <svg viewBox="0 0 560 260" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="260" fill="#f0f9ff" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Effects of Forward vs. Aft CG</text>
    <g transform="translate(20,50)">
      <rect width="250" height="195" rx="8" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
      <text x="125" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">FORWARD CG</text>
      <foreignObject x="10" y="35" width="230" height="155">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '11px', color: '#1e3a8a', lineHeight:'1.5'}}>
          + More stable<br/>
          + Higher stall speed (nose-heavy)<br/>
          + Slower cruise (more drag from trim)<br/>
          + Better stall recovery<br/>
          + More difficult to flare on landing<br/>
          + Reduced climb performance<br/>
          + Longer takeoff roll
        </div>
      </foreignObject>
    </g>
    <g transform="translate(290,50)">
      <rect width="250" height="195" rx="8" fill="#fee2e2" stroke="#991b1b" strokeWidth="2" />
      <text x="125" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">AFT CG</text>
      <foreignObject x="10" y="35" width="230" height="155">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '11px', color: '#7f1d1d', lineHeight:'1.5'}}>
          − Less stable (approaches neutral)<br/>
          + Lower stall speed<br/>
          + Faster cruise (less trim drag)<br/>
          − Harder stall recovery (may be impossible behind aft limit)<br/>
          − Easier to over-rotate<br/>
          + Better climb performance<br/>
          − Can cause uncontrollable pitch-up in stall
        </div>
      </foreignObject>
    </g>
  </svg>
);

export default {
  id: 10,
  title: 'Weight & Balance',
  subtitle: 'Weight control, CG, moment arms, 3 calculation methods, and weight-shift.',
  blocks: [
    {
      id: 'wb-fundamentals',
      title: 'Fundamentals — Weight, CG, Moment',
      subtitle: 'Definitions, datum, and why balance matters.',
      content: (
        <>
          <p>The aircraft is a giant lever. Every item aboard creates a <b>moment</b> — a rotational force equal to its weight times its distance (<b>arm</b>) from a reference point called the <b>datum</b>.</p>
          <div className="flex justify-center my-3"><MomentArms /></div>
          <Table
            headers={['Term', 'Definition']}
            rows={[
              ['Datum', 'Reference point (often leading edge of wing or firewall) from which all arms are measured.'],
              ['Arm', 'Horizontal distance (inches) from datum to an item.'],
              ['Moment', 'Weight × Arm (lb-in). Rotational effect.'],
              ['CG (Center of Gravity)', 'Point where total moment divides total weight.'],
              ['Empty Weight', 'Airframe + installed equipment + unusable fuel + full oil (depends on definition).'],
              ['Useful Load', 'Max gross − empty weight. Fuel + people + bags.'],
              ['Ramp Weight', 'Total weight at engine start; includes taxi fuel.'],
              ['Takeoff Weight', 'Ramp − taxi fuel burn before takeoff.'],
              ['Landing Weight', 'Takeoff weight − fuel burn en route.']
            ]}
          />
          <Callout kind="info" title="CG formula"><code>CG = Σ(Moments) ÷ Σ(Weights)</code>. Result is in inches from datum. Result must fall within POH-published forward and aft CG limits at the given total weight.</Callout>
        </>
      )
    },
    {
      id: 'envelope',
      title: 'The CG Envelope',
      subtitle: 'Why a weight AND a CG location must both be valid.',
      content: (
        <>
          <p>Every aircraft has a POH-published <b>CG envelope</b> — a plot of allowable CG position vs. weight. The envelope typically narrows at higher weights. You can have:</p>
          <div className="flex justify-center my-3"><CGEnvelope /></div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Acceptable weight with UNACCEPTABLE CG (too far fwd or aft) = illegal.</li>
            <li>Acceptable CG with OVER gross weight = illegal.</li>
            <li>Both valid, AND you remain within limits throughout flight as fuel burns off.</li>
          </ul>
          <Callout kind="warn" title="Fuel burn moves CG">As fuel burns, CG shifts because fuel tanks are rarely at the CG location. A loading that\'s legal at takeoff might drift forward or aft as fuel is consumed — check endpoints.</Callout>
        </>
      )
    },
    {
      id: 'effects',
      title: 'Effects of Forward vs. Aft CG',
      subtitle: 'Stability, performance, and stall behavior.',
      content: (
        <>
          <div className="flex justify-center my-3"><CGEffects /></div>
          <Callout kind="danger" title="Beyond aft limit">Aft of aft CG limit, the aircraft approaches neutral static stability. It may be impossible to recover from a stall. The "classic" aft-CG accident: overloaded rear baggage, pilot pulls back at low speed on takeoff, enters stall, and cannot bring nose down.</Callout>
        </>
      )
    },
    {
      id: 'computation-methods',
      title: 'Three Methods for W&B Computation',
      subtitle: 'Computation / Graph / Table methods.',
      content: (
        <>
          <ol className="list-decimal ml-6 text-sm space-y-2">
            <li><b>Computation (formula) method</b>: List weights, arms (from POH), calculate moments, sum both columns, divide:
              <pre className="bg-slate-100 text-xs p-2 rounded mt-1">CG = Σ(Moments) / Σ(Weights)</pre>
            </li>
            <li><b>Graph method</b>: POH provides a loading graph with weight on one axis, moment on the other, and station lines. Read moment for each position, sum, plot on CG envelope graph.</li>
            <li><b>Table method</b>: POH provides tables showing moment-at-weight for each station. Look up values, sum, plot on envelope.</li>
          </ol>
          <Callout kind="tip" title="Moments often divided by 1000">Many POHs express moments as "moment/1000" to keep numbers manageable. Just remember to use the same units consistently.</Callout>
        </>
      )
    },
    {
      id: 'weight-shift',
      title: 'Weight-Shift Formulas',
      subtitle: 'Moving weight to bring CG into limits.',
      content: (
        <>
          <p>When the loaded CG is outside limits, you have three options:</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><b>Shift weight</b>: move existing load forward or aft.</li>
            <li><b>Add weight</b>: load ballast (e.g., additional passenger).</li>
            <li><b>Remove weight</b>: unload baggage or fuel.</li>
          </ol>
          <p><b>The classic weight-shift equations:</b></p>
          <pre className="bg-slate-100 text-xs p-2 rounded">
Weight to move / Total weight = Δ CG / Distance to move{'\n'}
{'\n'}
Solve for whichever variable is unknown.
          </pre>
          <p>And for adding/removing weight:</p>
          <pre className="bg-slate-100 text-xs p-2 rounded">
Weight added (or removed) / New total weight = Δ CG / (Distance from CG to new weight arm){'\n'}
          </pre>
          <p>Or, more pragmatically, recompute the total moment after the proposed change and divide by new total weight.</p>
          <Callout kind="info" title="Quick tip">To shift CG forward, move weight FORWARD or remove weight AFT (and vice versa).</Callout>
        </>
      )
    },
    {
      id: 'example',
      title: 'Worked Example',
      subtitle: 'Walk through a realistic loading problem.',
      content: (
        <>
          <p><b>Example:</b> Cessna 172 with empty weight 1,600 lb and empty moment of 63,200 lb-in. Pilot 175 lb at arm 37"; passenger 165 lb at arm 37"; rear pax 140 lb at arm 73"; baggage 40 lb at arm 95"; fuel 35 gal at arm 48" (6 lb/gal).</p>
          <Table
            headers={['Item', 'Weight (lb)', 'Arm (in)', 'Moment (lb-in)']}
            rows={[
              ['Empty aircraft', '1,600', '39.5', '63,200'],
              ['Pilot', '175', '37', '6,475'],
              ['Front pax', '165', '37', '6,105'],
              ['Rear pax', '140', '73', '10,220'],
              ['Baggage', '40', '95', '3,800'],
              ['Fuel (35 gal × 6 lb)', '210', '48', '10,080'],
              ['TOTAL', '2,330', '—', '99,880']
            ]}
          />
          <p><b>CG = 99,880 ÷ 2,330 = 42.9 inches from datum.</b> Check POH envelope: at 2,330 lb, the CG range for a typical 172 is roughly 35-47 inches — we're inside. 👍</p>
          <p><b>What if we had 120 lb in the baggage compartment instead of 40?</b> Baggage arm 95 × 120 = 11,400 lb-in. New total weight = 2,410 lb. New moment = 99,880 − 3,800 + 11,400 = 107,480. CG = 107,480 ÷ 2,410 = <b>44.6 in</b>. Still inside envelope at 2,410 lb, but moving aft — check the aft limit carefully.</p>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Datum', def: 'Reference point from which arms are measured.' },
      { term: 'Arm', def: 'Horizontal distance (in) from datum to a weight.' },
      { term: 'Moment', def: 'Weight × Arm; rotational force. Units lb-in.' },
      { term: 'CG', def: 'Center of Gravity — Σ(moments) / Σ(weights).' },
      { term: 'Empty weight', def: 'Aircraft weight without useful load (includes unusable fuel + oil per POH).' },
      { term: 'Useful load', def: 'Max gross weight − empty weight.' },
      { term: 'Ramp weight', def: 'Total weight at start of taxi.' },
      { term: 'Zero fuel weight', def: 'Max weight of aircraft without fuel.' },
      { term: 'CG envelope', def: 'POH graph of allowable CG range vs. weight.' }
    ],
    laws: [
      { name: 'FAR 91.9 — Operating limitations', desc: 'No person may operate an aircraft without complying with its operating limitations.' },
      { name: 'FAR 23 Airworthiness', desc: 'Certification basis for most GA piston aircraft — structural limits, CG range.' },
      { name: 'FAR 91.103 — Preflight action', desc: 'Includes takeoff/landing distance data AND weight/balance verification for the flight.' }
    ],
    methods: [
      { name: 'Computation method', desc: 'W × arm = moment. Sum moments, sum weights, divide → CG.' },
      { name: 'Graph method', desc: 'POH loading graph gives moment per station; plot total on envelope.' },
      { name: 'Table method', desc: 'POH tables look up moment vs. weight per station.' },
      { name: 'Weight shift formula', desc: 'W_move / W_total = ΔCG / distance. Solve for unknown.' },
      { name: 'Fuel burn effect', desc: 'CG shifts as fuel burns. Check takeoff AND landing CG positions.' }
    ],
    diagrams: [
      { title: 'CG envelope', visual: <CGEnvelope />, caption: 'Allowable CG narrows at high weights.' },
      { title: 'Moment arms', visual: <MomentArms />, caption: 'Each load creates moment from datum.' },
      { title: 'Forward vs. Aft CG effects', visual: <CGEffects />, caption: 'Stability vs. performance tradeoff.' }
    ]
  },
  questions: [
    { q: 'CG is calculated as:', choices: ['Total weight × total arm', 'Total moment ÷ total weight', 'Average of arms', 'Empty weight × arm'], correct: 1, explanation: 'CG = Σ moments / Σ weights, measured in inches from datum.' },
    { q: 'Moment is:', choices: ['Weight − arm', 'Weight × arm', 'Weight ÷ arm', 'Arm ÷ weight'], correct: 1, explanation: 'Moment = Weight × Arm (rotational force). Units lb × in.' },
    { q: 'The datum is:', choices: ['Center of gravity', 'Reference point for measuring arms', 'Aft limit of CG', 'Maximum gross weight'], correct: 1, explanation: 'Datum is an arbitrary reference line (often LE of wing or firewall) established by manufacturer.' },
    { q: 'Forward CG causes (compared to aft CG):', choices: ['Faster cruise', 'Higher stall speed and better stability', 'Easier flare on landing', 'Lower stall speed'], correct: 1, explanation: 'Forward CG requires more tail-down force → more effective "weight" on wings → higher stall speed. Also more stable.' },
    { q: 'Aft CG beyond the aft limit results in:', choices: ['Safer flight', 'Reduced stability, possible impossible stall recovery', 'Shorter takeoff roll only', 'Lower fuel burn'], correct: 1, explanation: 'Aft of limit → stability may go neutral/negative; stall recovery may be impossible.' },
    { q: 'Empty weight typically includes:', choices: ['Full fuel', 'Pilot & passengers', 'Unusable fuel + full oil + installed equipment', 'Zero fluids'], correct: 2, explanation: 'Modern empty weight: airframe, engines, equipment, unusable fuel, full oil.' },
    { q: 'Useful load equals:', choices: ['Max gross weight', 'Max gross weight − empty weight', 'Fuel + baggage', 'Empty weight'], correct: 1, explanation: 'Useful load = max gross weight − empty weight; what you can fill with fuel, pax, bags.' },
    { q: 'If total weight = 2,200 lb and total moment = 92,400 lb-in, CG is:', choices: ['38 in', '42 in', '45 in', '50 in'], correct: 1, explanation: '92,400 ÷ 2,200 = 42.0 inches.' },
    { q: 'Ramp weight minus taxi fuel = :', choices: ['Empty weight', 'Takeoff weight', 'Landing weight', 'Gross weight'], correct: 1, explanation: 'Takeoff weight = ramp weight − taxi fuel burn.' },
    { q: 'To move CG forward, you should:', choices: ['Move weight aft', 'Add weight aft', 'Move weight forward OR remove weight aft', 'Burn fuel'], correct: 2, explanation: 'Forward shift: move weight forward or remove aft weight.' },
    { q: 'As fuel burns in a typical GA aircraft, CG:', choices: ['Stays constant', 'Shifts — check both endpoints of flight', 'Only moves aft', 'Only moves forward'], correct: 1, explanation: 'Fuel tanks are rarely at CG exactly. Always verify both takeoff and landing CG are inside envelope.' },
    { q: 'Weight-shift formula: W_move/W_total = ΔCG/distance. A 50 lb shift aft 30 in on a 2000 lb aircraft changes CG by:', choices: ['0.5 in', '0.75 in', '1.5 in', '2.5 in'], correct: 1, explanation: 'ΔCG = W_move × distance / W_total = 50 × 30 / 2000 = 0.75 inch aft.' },
    { q: 'Loading a narrow aircraft over its aft CG limit primarily compromises:', choices: ['Performance only', 'Longitudinal stability and stall recovery', 'Engine cooling', 'Radio reception'], correct: 1, explanation: 'Aft beyond limit → stability decreases; stall recovery may be impossible.' },
    { q: 'Three standard W&B calculation methods are:', choices: ['GPS, paper, tablet', 'Computation, Graph, Table', 'Empty, Ramp, Takeoff', 'Forward, Aft, Center'], correct: 1, explanation: 'Standard FAA-taught methods: computation (formula), graph (loading chart), table (lookup).' },
    { q: 'At higher gross weights, the CG envelope typically:', choices: ['Stays the same', 'Narrows', 'Widens', 'Shifts aft'], correct: 1, explanation: 'At high weight, structural limits force a narrower CG range to avoid overload.' },
    { q: 'Moment-per-1000 in a POH table means:', choices: ['Moment ÷ 1000', 'Moment × 1000', 'Weight × 1000', 'CG × 1000'], correct: 0, explanation: 'Many POHs express moments as "moment/1000" to make numbers manageable. Keep units consistent.' }
  ]
};
