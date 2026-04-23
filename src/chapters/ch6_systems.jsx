import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const Magneto = () => (
  <svg viewBox="0 0 520 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="520" height="280" fill="#f8fafc" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Magneto Ignition — Independent of Aircraft Battery</text>
    <g transform="translate(40,60)">
      <rect width="120" height="160" rx="8" fill="#475569" />
      <text x="60" y="30" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">LEFT MAG</text>
      <text x="60" y="55" fontSize="11" textAnchor="middle" fill="#cbd5e1">Fires upper plug</text>
      <text x="60" y="75" fontSize="11" textAnchor="middle" fill="#cbd5e1">(RH cylinders)</text>
      <text x="60" y="100" fontSize="11" textAnchor="middle" fill="#cbd5e1">lower plug (LH)</text>
      <circle cx="60" cy="135" r="20" fill="#fbbf24" />
      <text x="60" y="140" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#78350f">L</text>
    </g>
    <g transform="translate(360,60)">
      <rect width="120" height="160" rx="8" fill="#475569" />
      <text x="60" y="30" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">RIGHT MAG</text>
      <text x="60" y="55" fontSize="11" textAnchor="middle" fill="#cbd5e1">Fires lower plug</text>
      <text x="60" y="75" fontSize="11" textAnchor="middle" fill="#cbd5e1">(RH cylinders)</text>
      <text x="60" y="100" fontSize="11" textAnchor="middle" fill="#cbd5e1">upper plug (LH)</text>
      <circle cx="60" cy="135" r="20" fill="#fbbf24" />
      <text x="60" y="140" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#78350f">R</text>
    </g>
    <g transform="translate(200,90)">
      <rect width="120" height="110" rx="8" fill="#dc2626" />
      <text x="60" y="30" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Cylinder</text>
      <text x="60" y="50" fontSize="11" textAnchor="middle" fill="white">2 spark plugs</text>
      <text x="60" y="67" fontSize="11" textAnchor="middle" fill="white">per cyl (dual)</text>
      <text x="60" y="92" fontSize="10" textAnchor="middle" fill="white">redundancy + better burn</text>
    </g>
    <line x1="160" y1="140" x2="200" y2="140" stroke="#fbbf24" strokeWidth="2" />
    <line x1="320" y1="140" x2="360" y2="140" stroke="#fbbf24" strokeWidth="2" />
    <text x="260" y="262" fontSize="11" textAnchor="middle" fill="#334155">Mag check (runup): expect slight RPM drop on each side; max drop & max differential per POH</text>
  </svg>
);

const CarburetorIcing = () => (
  <svg viewBox="0 0 540 300" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="300" fill="#eff6ff" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Carburetor Icing — Temp Drops 30-70°F at Venturi</text>
    {/* Carburetor */}
    <g transform="translate(150,55)">
      <rect x="60" y="0" width="120" height="40" fill="#64748b" />
      <path d="M 60 40 L 100 100 L 140 100 L 180 40 Z" fill="#64748b" />
      <rect x="80" y="100" width="80" height="30" fill="#94a3b8" />
      <rect x="90" y="130" width="60" height="80" fill="#475569" />
      <text x="120" y="165" fontSize="10" textAnchor="middle" fill="white">Engine</text>
      <text x="120" y="180" fontSize="10" textAnchor="middle" fill="white">intake</text>
      {/* Ice */}
      <g transform="translate(100,55)">
        <path d="M 0 0 L 40 0 L 35 8 L 15 8 L 10 18 L 30 18 L 25 30 L 5 30 Z" fill="#bae6fd" stroke="#0284c7" />
      </g>
      <text x="20" y="70" fontSize="11" fill="#0284c7">ICE</text>
      {/* Venturi */}
      <text x="100" y="130" fontSize="10" fill="white">venturi</text>
    </g>
    <text x="20" y="230" fontSize="11" fill="#334155"><b>Ideal conditions:</b> 20-70°F ambient, high humidity (even visible moisture not required). Ice blocks venturi throat → RPM drops, roughness.</text>
    <text x="20" y="250" fontSize="11" fill="#334155"><b>Detection:</b> Fixed-pitch → RPM decrease. Constant-speed → MP decrease. Rough engine.</text>
    <text x="20" y="270" fontSize="11" fill="#334155"><b>Remedy:</b> Full CARB HEAT (initial RPM drop, then recovery as ice melts). Use as preventative in descents/low power.</text>
  </svg>
);

const ElectricalSystem = () => (
  <svg viewBox="0 0 560 290" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="290" fill="#f8fafc" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">DC Electrical System — Typical GA</text>
    {/* Components */}
    <g>
      <rect x="30" y="110" width="100" height="60" fill="#dc2626" stroke="#7f1d1d" />
      <text x="80" y="135" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Battery</text>
      <text x="80" y="155" fontSize="10" textAnchor="middle" fill="white">12V or 24V</text>

      <rect x="180" y="110" width="110" height="60" fill="#0ea5e9" stroke="#0369a1" />
      <text x="235" y="135" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Alternator</text>
      <text x="235" y="155" fontSize="10" textAnchor="middle" fill="white">engine-driven</text>

      <rect x="330" y="60" width="100" height="60" fill="#7c3aed" stroke="#5b21b6" />
      <text x="380" y="85" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Voltage</text>
      <text x="380" y="105" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Regulator</text>

      <rect x="330" y="160" width="100" height="60" fill="#059669" stroke="#065f46" />
      <text x="380" y="185" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Master</text>
      <text x="380" y="205" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Switch</text>

      <rect x="460" y="110" width="80" height="60" fill="#f59e0b" stroke="#78350f" />
      <text x="500" y="135" fontSize="12" fontWeight="bold" textAnchor="middle" fill="white">Bus Bar</text>
      <text x="500" y="155" fontSize="9" textAnchor="middle" fill="white">→ loads</text>

      <line x1="130" y1="140" x2="180" y2="140" stroke="#334155" strokeWidth="2" />
      <line x1="290" y1="140" x2="330" y2="90" stroke="#334155" strokeWidth="2" />
      <line x1="290" y1="140" x2="330" y2="190" stroke="#334155" strokeWidth="2" />
      <line x1="430" y1="190" x2="460" y2="150" stroke="#334155" strokeWidth="2" />
      <line x1="430" y1="90" x2="460" y2="130" stroke="#334155" strokeWidth="2" />
    </g>
    <text x="20" y="260" fontSize="11" fill="#334155"><b>Key:</b> Magnetos are INDEPENDENT of this system — engine keeps running if electrical fails.</text>
    <text x="20" y="278" fontSize="11" fill="#334155"><b>Ammeter +:</b> alternator charging battery. <b>Ammeter -:</b> battery discharging (alt failure).</text>
  </svg>
);

const FourStroke = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#fff7ed" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Four-Stroke Cycle — "Suck, Squeeze, Bang, Blow"</text>
    {[
      { x: 20, c: '#2563eb', t: '1. Intake', d: 'Piston DOWN. Intake valve open. Fuel-air mixture drawn in.' },
      { x: 155, c: '#7c3aed', t: '2. Compression', d: 'Piston UP. Both valves closed. Mixture compressed ~8:1.' },
      { x: 290, c: '#dc2626', t: '3. Power', d: 'Spark fires just BEFORE TDC. Combustion drives piston DOWN.' },
      { x: 425, c: '#059669', t: '4. Exhaust', d: 'Piston UP. Exhaust valve open. Burnt gases pushed out.' }
    ].map((s, i) => (
      <g key={i} transform={`translate(${s.x}, 55)`}>
        <rect width="125" height="200" rx="8" fill={s.c} fillOpacity="0.1" stroke={s.c} strokeWidth="2" />
        <text x="62" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill={s.c}>{s.t}</text>
        {/* Cylinder */}
        <rect x="35" y="40" width="55" height="110" fill="white" stroke={s.c} strokeWidth="2" />
        <rect x="35" y={i===1||i===3 ? 40 : 90} width="55" height={i===1||i===3 ? 60 : 60} fill={s.c} fillOpacity="0.25" />
        <text x="62" y={i===1||i===3 ? 75 : 120} fontSize="11" fontWeight="bold" textAnchor="middle" fill={s.c}>Piston</text>
        <foreignObject x="5" y="160" width="115" height="40">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '9.5px', color: '#374151', lineHeight: '1.3'}}>{s.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const CarbVsFuelInj = () => (
  <svg viewBox="0 0 560 240" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="240" fill="#f8fafc" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Carburetor vs. Fuel Injection</text>
    <g transform="translate(30,50)">
      <rect width="240" height="170" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
      <text x="120" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#991b1b">CARBURETED</text>
      <foreignObject x="10" y="35" width="220" height="130">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize:'11px', color: '#7f1d1d', lineHeight:'1.5'}}>
          <b>Pro:</b> Simple, cheap, reliable.<br/>
          <b>Con:</b> Susceptible to carb ice. Uneven distribution to cylinders. Less responsive throttle.<br/>
          <b>Accelerator pump</b> injects extra fuel on rapid throttle application.<br/>
          <b>Carb heat:</b> unfiltered, reduces density → enrichens mixture.
        </div>
      </foreignObject>
    </g>
    <g transform="translate(290,50)">
      <rect width="240" height="170" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
      <text x="120" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#065f46">FUEL INJECTED</text>
      <foreignObject x="10" y="35" width="220" height="130">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize:'11px', color: '#065f46', lineHeight:'1.5'}}>
          <b>Pro:</b> No carb ice. Precise metering per cylinder. Better high-altitude performance. Faster throttle response.<br/>
          <b>Con:</b> Vapor lock at high temps. Harder to start hot.<br/>
          <b>Alternate air</b> source used if intake blocked.
        </div>
      </foreignObject>
    </g>
  </svg>
);

export default {
  id: 6,
  title: 'Aircraft Systems',
  subtitle: 'Magnetos, carburetors, fuel injection, electrical, oil, supercharging, detonation/pre-ignition, FADEC.',
  blocks: [
    {
      id: 'four-stroke',
      title: 'The Four-Stroke Engine Cycle',
      subtitle: 'Intake → Compression → Power → Exhaust.',
      content: (
        <>
          <p>Nearly all piston aircraft engines are four-stroke, horizontally-opposed, air-cooled, spark-ignition internal combustion engines. The cycle runs once per two crankshaft revolutions.</p>
          <div className="flex justify-center my-3"><FourStroke /></div>
          <p><b>Key timing detail:</b> the spark actually fires <b>BEFORE top dead center</b> (advance ~20-25°) so peak pressure coincides with ~10° after TDC — maximum mechanical advantage.</p>
        </>
      )
    },
    {
      id: 'magnetos',
      title: 'Magnetos — Independent Ignition',
      subtitle: 'Dual mags for redundancy and better combustion.',
      content: (
        <>
          <p><b>Magnetos</b> generate their own electrical pulses from engine rotation — they do NOT rely on the aircraft battery or alternator. Every certified piston engine has <b>two mags</b> and <b>two spark plugs per cylinder</b>. This gives:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Redundancy</b>: one mag fails, engine keeps running.</li>
            <li><b>Better combustion</b>: two flame fronts meet in the middle = faster, more even burn.</li>
          </ul>
          <div className="flex justify-center my-3"><Magneto /></div>
          <Callout kind="info" title="Mag check (runup)">Pilot tests each mag at runup by switching to LEFT then RIGHT. Expect a small RPM drop (usually 75-175 RPM per POH), and drops between the two within ~50 RPM of each other. Excessive drop = fouled plugs / bad mag. No drop = wiring issue (engine may keep running after MAGS OFF = HOT MAG!).</Callout>
          <Callout kind="danger" title="Hot prop always">Because magnetos generate their own voltage, a propeller may be "hot" even with the master switch OFF. ALWAYS treat props as live.</Callout>
        </>
      )
    },
    {
      id: 'fuel-systems',
      title: 'Carburetors, Fuel Injection & Mixture',
      subtitle: 'Two ways to meter fuel/air — and carb ice.',
      content: (
        <>
          <p>Both systems mix fuel with air at the correct ratio before combustion. Ideal ratio is ~1:15 (stoichiometric), but we usually run richer for cooling and leaner for efficiency at altitude.</p>
          <div className="flex justify-center my-3"><CarbVsFuelInj /></div>
          <p><b>Mixture control</b> lets the pilot adjust the fuel-to-air ratio. As altitude rises, air density drops — a fixed fuel metering would run too rich. <b>Lean</b> for best economy or peak power/EGT above 3,000 ft (or per POH).</p>
          <div className="flex justify-center my-3"><CarburetorIcing /></div>
          <p><b>Carburetor icing</b> occurs because fuel vaporization + venturi acceleration drops air temp 30-70°F. At 20-70°F ambient with high humidity, atmospheric moisture freezes in the venturi. Fix: <b>CARB HEAT ON</b> (pulls hot air from exhaust manifold). Use PROACTIVELY in descents with low power.</p>
          <Callout kind="tip" title="First indication of carb ice"><b>Fixed-pitch prop:</b> RPM decrease (rough running). <b>Constant-speed prop:</b> manifold pressure decrease (governor keeps RPM constant). If you apply carb heat and RPM drops further then rises, you had ice.</Callout>
        </>
      )
    },
    {
      id: 'detonation-preignition',
      title: 'Detonation & Pre-Ignition',
      subtitle: 'Two different abnormal combustion events.',
      content: (
        <>
          <Table
            headers={['Event', 'What happens', 'Causes', 'Symptoms', 'Remedy']}
            rows={[
              ['Detonation', 'Mixture auto-ignites explosively AFTER spark — shock wave damages engine', 'Low-octane fuel, excessive heat, high MP/low RPM, lean mixture', 'Engine roughness, high CHT, power loss, "pinging"', 'Rich mixture, reduce MP, increase RPM, open cowl flaps, descend'],
              ['Pre-ignition', 'Mixture ignites BEFORE spark (hot spot in cylinder — carbon deposit, glowing plug)', 'Hot spot in combustion chamber, glowing object', 'Same as detonation + backfire, engine damage', 'Same actions as detonation']
            ]}
          />
          <Callout kind="danger" title="Both destroy engines quickly">Detonation and pre-ignition produce extreme cylinder temperatures and shock loads. Either can burn through a piston in minutes. Use correct fuel grade (100LL, never auto fuel unless STC'd) and monitor CHT/EGT.</Callout>
        </>
      )
    },
    {
      id: 'electrical',
      title: 'Electrical System',
      subtitle: 'Battery, alternator, bus, master switch, ammeter.',
      content: (
        <>
          <p>The electrical system powers avionics, lights, starter, and fuel pump (if any) — but NOT ignition (magnetos self-power) and NOT gyros that are vacuum-driven.</p>
          <div className="flex justify-center my-3"><ElectricalSystem /></div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Battery</b>: 12V or 24V lead-acid; powers starter, backup for avionics.</li>
            <li><b>Alternator</b>: engine-driven; supplies current in flight and recharges battery.</li>
            <li><b>Voltage regulator</b>: keeps alternator output at ~14V (12V system) or ~28V (24V).</li>
            <li><b>Master switch</b>: two halves — BAT and ALT. Both ON for normal ops.</li>
            <li><b>Ammeter</b>: +ve reading = battery charging. -ve = battery discharging (alternator failed).</li>
            <li><b>Bus bar</b>: distribution point for all electrical loads.</li>
          </ul>
          <Callout kind="tip" title="Alternator failure">Reduce electrical load (turn off non-essential). Battery lasts ~30-60 min. Land at nearest suitable.</Callout>
        </>
      )
    },
    {
      id: 'oil',
      title: 'Oil System & Cooling',
      subtitle: 'Lubrication, cooling, sealing, cleaning.',
      content: (
        <>
          <p>Aircraft engine oil performs FOUR functions:</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><b>Lubrication</b> — reduces metal-on-metal friction.</li>
            <li><b>Cooling</b> — carries heat away from pistons, bearings (up to 40% of cooling).</li>
            <li><b>Sealing</b> — film between piston rings and cylinder walls.</li>
            <li><b>Cleaning</b> — carries combustion byproducts to the oil filter.</li>
          </ol>
          <Table
            headers={['Instrument', 'Normal', 'Abnormal']}
            rows={[
              ['Oil temp', 'Green arc', 'Red = overheat, check CHT/cowl flaps'],
              ['Oil pressure', 'Green arc', 'High at startup in cold (normal), low in flight = serious (land ASAP)'],
              ['Oil quantity', 'Check preflight', 'Loss in flight = leak or burn']
            ]}
          />
          <Callout kind="warn" title="Low oil pressure in flight">Treat as emergency. Engine failure imminent. Reduce power, land at nearest suitable.</Callout>
        </>
      )
    },
    {
      id: 'supercharge-turbo',
      title: 'Supercharging & Turbocharging',
      subtitle: 'Compressing intake air to restore sea-level power at altitude.',
      content: (
        <>
          <Table
            headers={['System', 'Driver', 'Pros', 'Cons']}
            rows={[
              ['Supercharger', 'Engine-driven (gear/belt)', 'Instant response, simple', 'Parasitic power loss (engine drives it)'],
              ['Turbocharger', 'Exhaust-gas driven', 'Free energy (otherwise wasted)', 'Turbo lag, requires cool-down, complex wastegate'],
              ['Turbonormalizer', 'Exhaust-driven, but restores SEA LEVEL pressure only', 'No over-boost at altitude', 'Same complexity as turbo']
            ]}
          />
          <Callout kind="info" title="Why it matters">At 18,000 MSL, air density is ~50% of sea level. A normally aspirated engine loses power proportionally. A turbocharged engine maintains near-sea-level power up to its <b>critical altitude</b>, dramatically extending service ceiling and climb performance.</Callout>
          <Callout kind="warn" title="Turbocharger cool-down">After high-power flight, idle for 3-5 min before shutdown to let the turbo spool down — otherwise oil in the bearings cokes (turns to carbon) and kills the turbo.</Callout>
        </>
      )
    },
    {
      id: 'starting',
      title: 'Starting Systems',
      subtitle: 'Priming, mag impulse coupling, and the starter cycle.',
      content: (
        <>
          <p>Cold-start procedure for a typical GA engine:</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><b>Master ON</b>, beacon ON.</li>
            <li><b>Mixture RICH</b>, throttle cracked (quarter-inch).</li>
            <li><b>Prime</b>: carbureted → primer strokes (more in cold); fuel-injected → boost pump a few seconds with throttle open, then throttle back to idle.</li>
            <li><b>Clear prop</b> — shout "CLEAR!" and verify.</li>
            <li>Mag to START → engine catches → release to BOTH.</li>
            <li>Oil pressure check within 30 sec — if no indication, SHUT DOWN.</li>
          </ol>
          <p><b>Impulse coupling</b>: a spring-loaded device in the left magneto that retards spark timing and delivers a strong spark at low cranking RPM. Engages only at low RPM; disengages once running.</p>
          <p><b>FADEC (Full Authority Digital Engine Control)</b>: computer manages ignition timing, fuel mixture, cooling — no pilot mixture or prop lever. Auto-compensates for altitude and conditions.</p>
        </>
      )
    },
    {
      id: 'carbon-monoxide',
      title: 'Carbon Monoxide (CO)',
      subtitle: 'Odorless, colorless, deadly — produced by the engine.',
      content: (
        <>
          <p><b>CO</b> is a byproduct of incomplete hydrocarbon combustion. It binds to hemoglobin <b>200-300× stronger than oxygen</b>, effectively suffocating you from the inside out. Cabin heat systems route air over the exhaust muffler — a crack in the muffler can leak CO directly into the cabin.</p>
          <Table
            headers={['Symptom', 'Description']}
            rows={[
              ['Headache', 'Often the first warning — can be mistaken for altitude'],
              ['Drowsiness / fatigue', 'Reduced oxygen delivery'],
              ['Dizziness', 'Progressive'],
              ['Nausea, vomiting', 'Moderate poisoning'],
              ['Loss of consciousness', 'Fatal without intervention']
            ]}
          />
          <Callout kind="danger" title="Action if suspected">Cabin heat OFF, open fresh air vents, window cracked, descend, declare emergency, land ASAP, get medical. Disposable CO detectors (chemical spot) should be replaced annually.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Magneto', def: 'Self-powered AC generator providing ignition spark. Independent of battery.' },
      { term: 'Impulse coupling', def: 'Spring device in left mag delivering strong retarded spark at cranking.' },
      { term: 'Carb heat', def: 'Hot air source bypassing filter, prevents/clears carb ice. Enrichens mixture.' },
      { term: 'Mixture', def: 'Control for fuel:air ratio. Lean with altitude.' },
      { term: 'Detonation', def: 'Explosive auto-ignition AFTER spark. Destroys engine.' },
      { term: 'Pre-ignition', def: 'Ignition BEFORE spark — hot spot in cylinder.' },
      { term: 'Alternator', def: 'Engine-driven AC generator, rectified to DC. Charges battery in flight.' },
      { term: 'Ammeter', def: 'Shows battery charging (+) or discharging (-).' },
      { term: 'FADEC', def: 'Full Authority Digital Engine Control — computer manages fuel/ignition.' },
      { term: 'Supercharger', def: 'Engine-driven air compressor; instant response, parasitic loss.' },
      { term: 'Turbocharger', def: 'Exhaust-driven compressor; higher efficiency, needs cooldown.' },
      { term: 'Critical altitude', def: 'Highest altitude a turbo can maintain rated power.' },
      { term: 'CO (carbon monoxide)', def: 'Odorless gas from incomplete combustion; exhaust leak into cabin heat = fatal.' }
    ],
    laws: [
      { name: 'FAR 91.205 — Equipment required', desc: 'Required VFR equipment includes fuel gauge, oil pressure, oil temp, magnetic compass, tachometer, airspeed, altimeter, etc.' },
      { name: 'FAR 91.207 — ELT', desc: 'Emergency Locator Transmitter required; 12-mo battery inspection.' },
      { name: 'POH limitations', desc: 'Never-exceed manifold pressure/RPM combos, CHT/EGT limits, oil temp red line.' }
    ],
    methods: [
      { name: 'Mag check', desc: 'Runup: BOTH → L → BOTH → R → BOTH. Drop within POH limits; differential between mags <50 RPM typical.' },
      { name: 'Carb heat use', desc: 'Apply at start of descent, any power reduction, conditions favorable for ice.' },
      { name: 'Leaning procedure', desc: 'Above 3,000 MSL (or per POH). Pull mixture until peak EGT, enrich for LOP/ROP per POH.' },
      { name: 'Detonation remedy', desc: 'Enrich mixture → reduce MP → increase RPM → open cowl flaps → descend.' },
      { name: 'CO action', desc: 'Cabin heat OFF → fresh air → descend → emergency → medical.' }
    ],
    diagrams: [
      { title: 'Four-stroke cycle', visual: <FourStroke />, caption: 'Suck, Squeeze, Bang, Blow.' },
      { title: 'Magneto system', visual: <Magneto />, caption: 'Dual mags, dual plugs — independent of electrical.' },
      { title: 'Carb icing', visual: <CarburetorIcing />, caption: 'Ice forms at venturi; 20-70°F + humidity.' },
      { title: 'Carb vs. fuel injection', visual: <CarbVsFuelInj />, caption: 'Trade-offs in simplicity vs. precision.' },
      { title: 'Electrical schematic', visual: <ElectricalSystem />, caption: 'Mags NOT on this bus.' }
    ]
  },
  questions: [
    { q: 'Aircraft magnetos are:', choices: ['Powered by the battery', 'Powered by the alternator', 'Self-powered by engine rotation', 'Powered by exhaust gas'], correct: 2, explanation: 'Magnetos generate their own AC voltage from engine rotation — independent of aircraft electrical system.' },
    { q: 'Why do aircraft engines have dual magnetos and dual spark plugs?', choices: ['To run rich', 'Redundancy AND more efficient combustion (two flame fronts)', 'To reduce weight', 'To allow LOP operation only'], correct: 1, explanation: 'Two benefits: redundancy (one fails, engine still runs) + better combustion (faster, more even burn).' },
    { q: 'Conditions favorable for carburetor ice are:', choices: ['Below freezing, dry', 'Warm and dry', '20-70°F ambient with high humidity', 'Only when raining'], correct: 2, explanation: 'Carb ice needs 20-70°F + moisture. Fuel vaporization and venturi drop temp ~30-70°F, freezing atmospheric moisture.' },
    { q: 'First sign of carb ice in a FIXED-PITCH prop aircraft is:', choices: ['MP drop', 'RPM drop and engine roughness', 'Oil pressure drop', 'Increased fuel flow'], correct: 1, explanation: 'Fixed-pitch: ice restricts airflow → less fuel/air → lower RPM. Constant-speed props: MP drop (RPM held by governor).' },
    { q: 'Carburetor heat:', choices: ['Uses filtered cold air', 'Uses UNFILTERED hot air from exhaust', 'Uses cabin heat', 'Uses fuel heaters'], correct: 1, explanation: 'Carb heat pulls unfiltered hot air from around the exhaust manifold — bypasses the air filter. Never use on ground unless needed.' },
    { q: 'Detonation is:', choices: ['Fuel igniting before spark', 'Mixture auto-igniting AFTER spark (shockwave)', 'Normal combustion', 'Exhaust valve leak'], correct: 1, explanation: 'Detonation = after spark. Pre-ignition = before spark. Both destroy engines.' },
    { q: 'Best remedy for detonation in flight is:', choices: ['Lean mixture further', 'Enrich mixture, reduce MP, increase RPM, descend', 'Full throttle', 'Lean to peak EGT'], correct: 1, explanation: 'Cool the cylinder and reduce cylinder pressure: rich mixture, lower MP, higher RPM, cool descent.' },
    { q: 'A positive reading on the ammeter means:', choices: ['Battery is discharging', 'Alternator is charging the battery / powering the bus', 'Alternator failed', 'Short circuit'], correct: 1, explanation: '+ reading = current flow INTO battery (charging). - reading = battery supplying current (alternator failed).' },
    { q: 'The FOUR purposes of engine oil are:', choices: ['Lubricate, cool, seal, clean', 'Lubricate only', 'Lubricate and cool only', 'Lubricate, cool, seal, energize'], correct: 0, explanation: 'Lubricate, cool (~40% of cooling), seal (piston rings), clean (carry debris to filter).' },
    { q: 'A turbocharger is powered by:', choices: ['The battery', 'Engine crankshaft (gear drive)', 'Exhaust gas', 'Fuel pressure'], correct: 2, explanation: 'Turbocharger uses otherwise-wasted exhaust energy. Supercharger uses crankshaft (parasitic loss).' },
    { q: 'Why should a turbocharged engine be cooled down for 3-5 min before shutdown?', choices: ['To save fuel', 'To prevent oil coking in hot turbo bearings', 'To cool the battery', 'To allow mags to cool'], correct: 1, explanation: 'Turbo bearings get very hot; sudden shutdown without oil circulation cokes (carbonizes) oil in the bearings.' },
    { q: 'Carbon monoxide poisoning in the cabin typically comes from:', choices: ['Leaking fuel tank', 'Cracked exhaust muffler leaking into cabin heat', 'Battery venting', 'Engine oil'], correct: 1, explanation: 'Cabin heat systems route air over the exhaust muffler. A crack in the muffler dumps CO-laden gas into the cabin.' },
    { q: 'First sign of CO poisoning is typically:', choices: ['Euphoria', 'Headache, drowsiness', 'Chest pain', 'Shortness of breath'], correct: 1, explanation: 'Headache is often the first warning; then drowsiness, dizziness, nausea. Easy to misattribute to altitude or fatigue.' },
    { q: 'FADEC stands for:', choices: ['Fully Automated Digital Engine Control', 'Full Authority Digital Engine Control', 'Fuel Acceleration Digital Electronic Computer', 'Fast Altitude Density-Engine Controller'], correct: 1, explanation: 'FADEC: Full Authority Digital Engine Control — computer fully manages ignition/fuel/mixture. No manual mixture or prop.' },
    { q: 'At higher altitude, you should LEAN the mixture because:', choices: ['Less air per volume → same fuel = too rich', 'Engine needs more fuel', 'Air is denser at altitude', 'Carb ice is more likely'], correct: 0, explanation: 'Air density drops with altitude, so a fixed fuel flow becomes too rich. Lean to restore correct ratio.' },
    { q: 'Impulse coupling in a magneto:', choices: ['Delivers retarded, strong spark at cranking speed', 'Powers the starter', 'Connects battery to starter', 'Times the exhaust valves'], correct: 0, explanation: 'Impulse coupling winds a spring at low RPM to release a strong, retarded spark for starting. Disengages at normal RPM.' },
    { q: 'Mag check: L drop 50 RPM, R drop 150 RPM. Your assessment:', choices: ['Normal', 'Fouled plugs or bad mag on R side — investigate', 'Fouled plugs on L', 'Engine fine'], correct: 1, explanation: 'Differential > ~50 RPM between mags indicates a problem on the higher-drop side.' },
    { q: 'A critical altitude for a turbocharged engine is:', choices: ['Highest altitude the engine can start', 'Highest altitude at which it maintains rated sea-level power', 'Stall altitude', 'Altitude where alternator fails'], correct: 1, explanation: 'Critical altitude: highest altitude at which the turbo system can maintain rated MP / sea-level power.' },
    { q: 'Why do piston engines run 100LL fuel, not auto fuel?', choices: ['Cheaper', 'Higher octane to prevent detonation at high MP', 'Lower viscosity', 'Colored blue'], correct: 1, explanation: '100LL is high-octane (100 aviation octane) to resist detonation in high-compression, high-MP operations. Auto fuel requires STC approval.' },
    { q: 'During startup, oil pressure must show indication within:', choices: ['5 seconds', '30 seconds', '2 minutes', '5 minutes'], correct: 1, explanation: 'Most POHs require an oil pressure reading within ~30 seconds; shut down if no pressure — means no lubrication.' },
    { q: 'If the engine keeps running after you turn MAGS OFF at shutdown:', choices: ['Normal — let it run', 'Hot mag — dangerous. Diagnose the grounding fault', 'Leave it; will stop eventually', 'Spray fuel'], correct: 1, explanation: 'A "hot mag" means the mag P-lead (ground wire) is broken. Mag is still live and prop can start spontaneously. Treat as unsafe until fixed.' }
  ]
};
