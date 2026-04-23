import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const TrafficPatternFull = () => (
  <svg viewBox="0 0 560 360" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="360" fill="#f0fdf4" />
    <rect x="240" y="150" width="50" height="180" fill="#334155" />
    <text x="260" y="340" fontSize="10" fill="#334155" textAnchor="middle">RWY 36</text>
    <g stroke="#2563eb" strokeWidth="3" fill="none">
      <path d="M 265 320 L 480 320" markerEnd="url(#arrA)" />
      <path d="M 480 320 L 480 90" markerEnd="url(#arrA)" />
      <path d="M 480 90 L 265 90" markerEnd="url(#arrA)" />
      <path d="M 265 90 L 265 150" markerEnd="url(#arrA)" />
      <path d="M 265 330 L 265 320" />
      <path d="M 530 180 L 480 150" strokeDasharray="5 3" markerEnd="url(#arrA)" />
    </g>
    <defs>
      <marker id="arrA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb" />
      </marker>
    </defs>
    <text x="340" y="312" fontSize="12" fontWeight="bold" fill="#1e40af">Crosswind</text>
    <text x="490" y="200" fontSize="12" fontWeight="bold" fill="#1e40af" transform="rotate(-90 490 200)">Downwind</text>
    <text x="330" y="82" fontSize="12" fontWeight="bold" fill="#1e40af">Base</text>
    <text x="205" y="200" fontSize="12" fontWeight="bold" fill="#1e40af">Final</text>
    <text x="215" y="345" fontSize="11" fill="#334155">Upwind</text>
    <text x="500" y="165" fontSize="11" fill="#334155">45° entry</text>
    <text x="20" y="30" fontSize="12" fontWeight="bold" fill="#334155">Standard LEFT traffic pattern (default FAR 91.126)</text>
    <text x="20" y="50" fontSize="11" fill="#334155">• Enter downwind at 45° at TPA (typically 1,000 AGL)</text>
    <text x="20" y="68" fontSize="11" fill="#334155">• Fly the rectangle. Announce each leg on CTAF.</text>
  </svg>
);

const WindRunway = () => (
  <svg viewBox="0 0 520 300" className="w-full max-w-lg">
    <rect x="0" y="0" width="520" height="300" fill="#f8fafc" />
    <rect x="220" y="60" width="50" height="200" fill="#475569" />
    <text x="245" y="275" textAnchor="middle" fontSize="11" fill="#334155">36</text>
    <text x="245" y="55" textAnchor="middle" fontSize="11" fill="#334155">18</text>
    {/* Wind arrow */}
    <g transform="translate(380,120)">
      <line x1="0" y1="0" x2="-100" y2="50" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrW)" />
      <text x="20" y="0" fontSize="13" fontWeight="bold" fill="#991b1b">Wind 210°@15</text>
    </g>
    {/* Crosswind component */}
    <line x1="245" y1="160" x2="245" y2="100" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 3" />
    <text x="255" y="125" fontSize="11" fill="#5b21b6">Headwind comp</text>
    <line x1="245" y1="160" x2="195" y2="160" stroke="#059669" strokeWidth="2" strokeDasharray="4 3" />
    <text x="150" y="180" fontSize="11" fill="#047857">Crosswind comp</text>
    <defs>
      <marker id="arrW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626" />
      </marker>
    </defs>
    <text x="20" y="30" fontSize="12" fontWeight="bold" fill="#334155">Wind vector → Headwind + Crosswind components</text>
    <text x="20" y="285" fontSize="11" fill="#334155">Rule: Land on the runway whose heading most closely matches wind direction (min crosswind, max headwind).</text>
  </svg>
);

const WakeTurbulence = () => (
  <svg viewBox="0 0 560 300" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="300" fill="#eff6ff" />
    {/* Heavy aircraft */}
    <g transform="translate(120,90)">
      <path d="M 0 0 L 60 0 L 55 -6 L 0 -3 Z" fill="#1e40af" />
      <path d="M 20 0 L 30 -20 L 35 -20 L 25 0 Z" fill="#1e40af" />
      <path d="M 20 0 L 30 15 L 35 15 L 25 0 Z" fill="#1e40af" />
    </g>
    <text x="100" y="75" fontSize="11" fontWeight="bold" fill="#1e40af">Heavy (generator)</text>
    {/* Vortices */}
    <g fill="none" stroke="#7c3aed" strokeWidth="2">
      <path d="M 180 90 C 220 90, 240 120, 280 130 C 320 140, 360 150, 420 155" />
      <path d="M 180 90 C 220 90, 250 70, 290 70 C 330 70, 370 80, 420 90" />
      <circle cx="420" cy="155" r="20" strokeDasharray="3 2" />
      <circle cx="420" cy="90" r="20" strokeDasharray="3 2" />
    </g>
    <text x="390" y="180" fontSize="11" fill="#5b21b6">Counter-rotating</text>
    <text x="390" y="195" fontSize="11" fill="#5b21b6">vortices sink ~500 fpm</text>
    {/* Rules box */}
    <rect x="20" y="220" width="520" height="75" fill="#fef3c7" stroke="#d97706" />
    <text x="30" y="240" fontSize="12" fontWeight="bold" fill="#9a3412">Avoidance rules:</text>
    <text x="30" y="257" fontSize="11" fill="#78350f">• Takeoff behind heavy: rotate PRIOR to heavy's rotation point, climb above its path.</text>
    <text x="30" y="272" fontSize="11" fill="#78350f">• Landing behind heavy: stay ABOVE its flight path, touch down BEYOND its touchdown point.</text>
    <text x="30" y="287" fontSize="11" fill="#78350f">• ATC separation: 2–3 min wait behind heavy; light quartering tailwind = worst case.</text>
  </svg>
);

const ScanPattern = () => (
  <svg viewBox="0 0 520 260" className="w-full max-w-lg">
    <rect x="0" y="0" width="520" height="260" fill="#f0f9ff" />
    <rect x="60" y="40" width="400" height="150" fill="#bfdbfe" stroke="#334155" />
    <text x="260" y="35" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">Windshield (forward view)</text>
    {/* Grid of 10° blocks */}
    {Array.from({length: 10}).map((_, i) => (
      <g key={i}>
        <line x1={60 + i*40} y1="40" x2={60 + i*40} y2="190" stroke="#cbd5e1" />
        <circle cx={80 + i*40} cy="115" r="4" fill="#0369a1" />
      </g>
    ))}
    <text x="260" y="220" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0369a1">10° block scan method — pause 1 sec per block, move left to right</text>
    <text x="260" y="240" textAnchor="middle" fontSize="11" fill="#334155">Eye requires ~1 second to focus at each block. Total scan takes 10-15 seconds.</text>
  </svg>
);

export default {
  id: 2,
  title: 'Airport Ops, Wind & Wake Turbulence',
  subtitle: 'Traffic patterns, runway selection, visual scanning, collision avoidance, and wake turbulence.',
  blocks: [
    {
      id: 'traffic-pattern',
      title: 'Airport Traffic Patterns',
      subtitle: 'Upwind, crosswind, downwind, base, final — and the 45° entry.',
      content: (
        <>
          <p>At non-towered airports, the <b>standard traffic pattern is all LEFT turns</b> at 1,000 AGL (typical TPA). The pattern exists to sequence inbound and outbound aircraft safely. Always check the Chart Supplement or segmented circle for right-traffic indications — some runways use right traffic due to terrain or noise abatement.</p>
          <div className="flex justify-center my-3"><TrafficPatternFull /></div>
          <p><b>Legs of the pattern:</b></p>
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li><b>Upwind:</b> Flight path parallel to runway after takeoff (not departure, which tracks runway centerline).</li>
            <li><b>Crosswind:</b> Turn perpendicular to departure end of runway.</li>
            <li><b>Downwind:</b> Parallel to runway, opposite direction of landing — typically 1/2 to 1 NM out at TPA.</li>
            <li><b>Base:</b> Descending turn toward final, abeam the threshold.</li>
            <li><b>Final:</b> Aligned with runway centerline, descending to land.</li>
          </ul>
          <Callout kind="tip" title="Entry">Enter downwind at a <b>45° angle</b> at pattern altitude, roughly abeam the midpoint of the runway. Announce: "Centerline traffic, Cessna 12345, 2 miles west, entering left downwind runway 36."</Callout>
        </>
      )
    },
    {
      id: 'wind-runways',
      title: 'Wind & Runway Selection',
      subtitle: 'Headwind vs. crosswind components, runway numbering, and the wind sock/tetrahedron.',
      content: (
        <>
          <p>Runways are numbered by their magnetic heading rounded to the nearest 10° (runway 36 = 360°, runway 18 = 180°). They come in opposing pairs (36/18, 09/27). You always want the runway with the most <b>headwind</b> and least <b>crosswind</b>.</p>
          <div className="flex justify-center my-3"><WindRunway /></div>
          <p><b>Wind indicators at the field:</b></p>
          <Table
            headers={['Indicator', 'Reads']}
            rows={[
              ['Wind sock', 'Points DOWNWIND; full extension ≈ 15 kt'],
              ['Tetrahedron', 'Points INTO the wind'],
              ['Wind tee', 'Points INTO the wind (like a small airplane parked into wind)'],
              ['Segmented circle', 'Central structure shows pattern indicators (L-shape = landing direction)']
            ]}
          />
          <Callout kind="warn" title="Crosswind component">Crosswind = wind speed × sin(angle between wind and runway). At 30° off runway centerline, cw ≈ 50% of wind speed. At 60°, ≈ 87%. At 90°, 100% (a pure crosswind). Know your aircraft's max demonstrated crosswind — it's the limit the test pilot demonstrated, not a hard certification limit.</Callout>
        </>
      )
    },
    {
      id: 'visual-scan',
      title: 'Visual Scanning & See-and-Avoid',
      subtitle: 'The 10° block scan, empty-field myopia, and physiology.',
      content: (
        <>
          <p>The <b>see-and-avoid</b> doctrine makes VFR traffic separation a shared pilot responsibility (FAR 91.113). Because the human eye has physiological limits, random scanning is ineffective — use a <b>systematic</b> method.</p>
          <div className="flex justify-center my-3"><ScanPattern /></div>
          <p><b>Physiology quick facts:</b></p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Eye needs ~<b>1 second per 10° block</b> to focus and detect motion.</li>
            <li>Peripheral vision is motion-sensitive; foveal (central) vision detects detail.</li>
            <li>A constant bearing and growing size = <b>collision course</b>. No relative motion is the warning sign.</li>
            <li><b>Empty-field myopia:</b> Eyes relax and focus ~1–2 m out when nothing is in view — scan terrain/structures periodically.</li>
            <li>At night, use <b>off-center viewing</b> — look ~10° to the side; rods (peripheral) dominate night vision.</li>
          </ul>
          <Callout kind="tip" title="Clearing turns">Before any significant maneuver, perform <b>two 90° clearing turns</b> (or one 180°) to scan the area you're about to enter.</Callout>
        </>
      )
    },
    {
      id: 'collision-avoidance',
      title: 'Collision Avoidance & Right of Way',
      subtitle: 'Priority rules and how to break from converging traffic.',
      content: (
        <>
          <p>FAR 91.113 defines right-of-way. Memorize the hierarchy — from most maneuverable (most obligated to yield) to least maneuverable (has priority).</p>
          <Table
            headers={['Who yields to whom', 'Rule']}
            rows={[
              ['Aircraft in distress', 'Has right of way over ALL other traffic'],
              ['Balloons > Gliders > Airships > Airplanes/Rotorcraft', 'Less maneuverable has priority'],
              ['Aircraft towing/refueling', 'Priority over all other engine-driven aircraft'],
              ['Head-on (converging)', 'Both alter course to the RIGHT'],
              ['Converging at same altitude (similar category)', 'Aircraft on the RIGHT has right of way'],
              ['Overtaking', 'Overtaken aircraft has right of way; overtaker passes on the RIGHT'],
              ['Landing', 'Aircraft on final or lower on approach has right of way']
            ]}
          />
          <Callout kind="warn" title="Constant bearing = danger">If another aircraft's relative position in your windshield stays the same but it is getting LARGER, you are on a collision course. Break immediately — climb and right per head-on rule if in doubt.</Callout>
        </>
      )
    },
    {
      id: 'wake-turb',
      title: 'Wake Turbulence',
      subtitle: 'Vortices, avoidance, and the ATC separation rules.',
      content: (
        <>
          <p>Every wing generates <b>wingtip vortices</b> as a byproduct of lift — high-pressure air under the wing spills up and around the tip, creating horizontal tornadoes that can flip a small aircraft. They are worst behind <b>HEAVY, CLEAN, SLOW</b> aircraft (high AOA, maximum lift, minimum speed dissipation).</p>
          <div className="flex justify-center my-3"><WakeTurbulence /></div>
          <p><b>Avoidance:</b></p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Takeoff behind heavy:</b> Rotate prior to their rotation point; climb above and upwind of their flight path.</li>
            <li><b>Landing behind heavy:</b> Stay above their glidepath; touch down beyond their touchdown point.</li>
            <li><b>Crossing behind heavy:</b> Cross above their flight path if possible.</li>
            <li><b>Intersection departure:</b> Do not depart from an intersection less than 2,000 ft beyond a preceding heavy takeoff point.</li>
            <li><b>Opposite-direction same runway:</b> Vortices can linger — extra caution on light-wind days.</li>
          </ul>
          <Callout kind="danger" title="Worst case">A <b>light quartering tailwind</b> holds vortices over the runway instead of blowing them off to the side — the trap for landing light aircraft.</Callout>
          <p className="text-sm"><b>ATC separation:</b> 3 min for small/medium behind heavy on same runway, 2 min for intersection departures behind heavy. Pilots can waive the 3-min spacing on request — but assume the risk.</p>
        </>
      )
    },
    {
      id: 'runway-markings',
      title: 'Runway & Taxiway Markings, Signs, Lights',
      subtitle: 'White = runway, yellow = taxiway; mandatory vs. informational signs.',
      content: (
        <>
          <p><b>Runway markings are WHITE. Taxiway markings are YELLOW.</b></p>
          <Table
            headers={['Marking/Light', 'Meaning']}
            rows={[
              ['Solid double yellow line', 'Hold-short line; do not cross without clearance'],
              ['Dashed yellow line', 'You may cross from this side without clearance'],
              ['Red sign with white letters', 'Mandatory instruction (e.g., runway designator, hold-short)'],
              ['Black sign with yellow letters', 'Location sign (where you are)'],
              ['Yellow sign with black letters', 'Direction sign (what taxiway lies ahead)'],
              ['REIL (Runway End Identifier Lights)', 'Synchronized flashing white strobes at threshold'],
              ['PAPI / VASI', 'Visual glide slope: red-red = low, white-white = high, red-over-white = on glidepath']
            ]}
          />
          <Callout kind="tip" title="PAPI mnemonic">"<b>White over white, check your height</b> (high). <b>Red over red, you're dead</b> (too low). <b>Red over white, you're alright.</b>"</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'TPA', def: 'Traffic Pattern Altitude — typically 1,000 AGL at non-towered fields.' },
      { term: 'Upwind leg', def: 'Parallel to runway, after takeoff (vs. departure leg = centerline).' },
      { term: 'Downwind leg', def: 'Parallel to runway at TPA, opposite landing direction.' },
      { term: 'Segmented circle', def: 'Centered airport marker showing pattern indicators and wind/landing direction.' },
      { term: 'Wingtip vortex', def: 'Counter-rotating air spiral from wingtip; descends ~500 fpm; lingers 3-5 min.' },
      { term: 'Heavy aircraft', def: 'Max takeoff weight > 41,000 lbs (ATC category); produces severe wake.' },
      { term: 'See-and-avoid', def: 'FAR 91.113 pilot responsibility to visually scan for traffic.' },
      { term: 'Empty-field myopia', def: 'Eyes focus 1-2 m out with no visual reference — degrades detection.' },
      { term: 'Constant bearing', def: 'Another aircraft holds the same position in your windshield = collision risk.' },
      { term: 'REIL', def: 'Runway End Identifier Lights — synchronized white strobes.' },
      { term: 'VASI/PAPI', def: 'Visual glide slope indicator — red/white light combinations for on-path guidance.' }
    ],
    laws: [
      { name: 'FAR 91.113 — Right-of-way', desc: 'Distress > balloon > glider > airship > airplane/rotorcraft. Converging same-category: right-hand aircraft has ROW. Head-on: both break right. Overtaking: overtaken has ROW; pass right.' },
      { name: 'FAR 91.126 — Non-towered airports', desc: 'Left traffic unless right traffic is indicated. Comply with the established pattern.' },
      { name: 'FAR 91.129 — Class D operations', desc: 'Two-way radio contact before entering; comply with tower instructions.' },
      { name: 'AIM 4-3-3 — Traffic pattern', desc: 'Enter downwind at 45°, pattern altitude. Fly rectangle. Announce each leg on CTAF.' },
      { name: 'AIM 7-3 — Wake turbulence', desc: 'Separation standards 2–3 min behind heavy; pilot may waive with risk acceptance.' }
    ],
    methods: [
      { name: '10° Block Scan', expand: 'Systematic visual scan', desc: 'Scan left-to-right, pause 1 sec per 10° block. Scan foreground AND horizon. Never fixate.' },
      { name: 'Runway selection', desc: 'Choose runway whose heading is nearest wind direction. Max headwind, min crosswind.' },
      { name: 'Wake avoidance', desc: 'Takeoff: rotate before their rotation; land: above their path. Avoid light-quartering-tailwinds.' },
      { name: 'PAPI reading', expand: '"Red over red, you\'re dead"', desc: 'White-white = high. Red-red = low. Red-white = on glidepath.' }
    ],
    diagrams: [
      { title: 'Full traffic pattern', visual: <TrafficPatternFull />, caption: 'Standard left pattern legs and 45° entry.' },
      { title: 'Wind vs. runway', visual: <WindRunway />, caption: 'Wind decomposes into headwind + crosswind components.' },
      { title: 'Wake turbulence', visual: <WakeTurbulence />, caption: 'Counter-rotating vortices sink 500 fpm; avoid flying below/behind heavies.' },
      { title: 'Visual scan method', visual: <ScanPattern />, caption: '10° block scan, ~1 sec per block.' }
    ]
  },
  questions: [
    { q: 'The standard traffic pattern direction at a non-towered airport is:', choices: ['Right turns', 'Left turns unless otherwise indicated', 'Either direction', 'Right turns at night'], correct: 1, explanation: 'FAR 91.126 defaults to LEFT turns unless the segmented circle or chart supplement indicates right traffic.' },
    { q: 'Recommended entry to a non-towered traffic pattern is:', choices: ['Straight-in to final', '45° entry to downwind at TPA', 'Overhead break', '90° to base'], correct: 1, explanation: 'The 45° entry to mid-downwind at TPA is the AIM-recommended entry, giving you time to spot traffic and sequence.' },
    { q: 'Runway 27 is aligned:', choices: ['090° magnetic', '180° magnetic', '270° magnetic', '360° magnetic'], correct: 2, explanation: 'Runway numbers are magnetic heading / 10. RWY 27 = 270°.' },
    { q: 'A wind sock points:', choices: ['Into the wind', 'Downwind (direction wind is blowing toward)', '90° to wind', 'Always north'], correct: 1, explanation: 'A wind sock is a cone open to the wind — it extends DOWNWIND. A tetrahedron/wind tee points INTO the wind.' },
    { q: 'You and another aircraft are converging at the same altitude from different directions. Who has right of way?', choices: ['Aircraft on the left', 'Aircraft on the right', 'The faster aircraft', 'The one lower'], correct: 1, explanation: 'FAR 91.113: the aircraft on the right has right of way for converging traffic of same category.' },
    { q: 'You are overtaking another aircraft. You should:', choices: ['Pass on the left', 'Pass on the right', 'Descend below', 'Climb over'], correct: 1, explanation: '"Overtaking aircraft pass on the RIGHT" (similar to boats, opposite of cars).' },
    { q: 'Wake turbulence is most severe behind a large aircraft that is:', choices: ['Light, dirty, fast', 'Heavy, clean, slow', 'Heavy, dirty, slow', 'Light, clean, fast'], correct: 1, explanation: 'High weight requires high AOA to generate lift — clean configuration and slow speed produce maximum vortex strength.' },
    { q: 'You are landing behind a B-757 (heavy). You should:', choices: ['Land short of its touchdown point', 'Land long — beyond its touchdown point', 'Land at the same point', 'Request a different runway'], correct: 1, explanation: 'Stay ABOVE the heavy\'s flight path and touchdown BEYOND its touchdown point — vortices sit below and short of its path.' },
    { q: 'A constant-bearing, growing target in your windshield indicates:', choices: ['The other aircraft is passing behind you', 'Imminent collision course', 'No threat', 'The aircraft is descending'], correct: 1, explanation: 'Constant relative position + growing size = you are on the collision course. Break immediately.' },
    { q: 'The proper way to scan for traffic is:', choices: ['Sweep left-to-right quickly', '10° block method, 1 second each block', 'Only scan ahead', 'Rely on ATC'], correct: 1, explanation: 'The eye requires ~1 second to focus; move in 10° segments to cover the field of view systematically.' },
    { q: 'Empty-field myopia means your eyes:', choices: ['Focus at infinity when no reference is present', 'Focus 1-2 meters out when no reference is present', 'Cannot focus at night', 'Become nearsighted permanently'], correct: 1, explanation: 'Without visual references (haze, clear sky) the eyes relax to near focus — scan structures/terrain periodically to reset focus.' },
    { q: 'A solid double yellow line on a taxiway means:', choices: ['You may cross freely', 'Hold short — do not cross without clearance', 'Lane divider', 'Non-movement area boundary'], correct: 1, explanation: 'Solid double yellow is the hold-short line for a runway or critical area.' },
    { q: 'A red sign with white letters is:', choices: ['Location sign', 'Direction sign', 'Mandatory instruction sign (e.g., hold-short)', 'Informational sign'], correct: 2, explanation: 'Red = mandatory. Yellow/black = direction or location.' },
    { q: 'PAPI showing RED-RED-RED-RED means:', choices: ['On glidepath', 'Slightly low', 'Slightly high', 'Well below glidepath'], correct: 3, explanation: 'All four red = significantly below glidepath. Red-over-white = on path. All white = high.' },
    { q: 'Wake turbulence vortices sink at approximately:', choices: ['100 fpm', '500 fpm', '1,000 fpm', '2,000 fpm'], correct: 1, explanation: 'Wingtip vortices descend roughly 300-500 fpm and level off ~900 ft below the generating aircraft.' },
    { q: 'You must avoid operating from an intersection behind a heavy aircraft\'s takeoff for at least:', choices: ['1 min', '2 min', '3 min', '5 min'], correct: 2, explanation: 'ATC uses 3 min for same-runway behind heavy; 2 min for intersection takeoff on same runway.' },
    { q: 'A glider and an airplane are converging. Which has right of way?', choices: ['The airplane', 'The glider', 'The faster one', 'The higher one'], correct: 1, explanation: 'Less maneuverable has priority: balloon > glider > airship > airplane.' },
    { q: 'Standard Traffic Pattern Altitude for most airports is:', choices: ['500 AGL', '1,000 AGL', '1,500 AGL', '2,500 AGL'], correct: 1, explanation: '1,000 AGL is typical. Some airports use 1,500 AGL, and turbine aircraft often 1,500 AGL — always check Chart Supplement.'},
    { q: 'At night, to detect traffic most effectively, use:', choices: ['Direct central vision', 'Off-center vision ~10° to the side', 'Night-vision goggles', 'Blink rapidly'], correct: 1, explanation: 'At night, the retinal center (cones) is weak; rods dominate and are most sensitive 10° off axis.' },
    { q: 'Which pattern leg parallels the runway after takeoff?', choices: ['Upwind', 'Crosswind', 'Downwind', 'Base'], correct: 0, explanation: 'Upwind parallels the runway. "Departure leg" tracks the runway centerline.' },
    { q: 'You should make clearing turns before practicing steep turns or stalls because:', choices: ['It looks professional', 'It ensures the area is clear of traffic', 'It\'s required to maintain altitude', 'It warms up the engine'], correct: 1, explanation: 'Two 90° clearing turns let you scan the airspace you\'re about to maneuver in.' },
    { q: 'Wind is from 030° at 20 kt. Runway 36 and 09 are available. Best choice?', choices: ['Runway 36 (smaller angle)', 'Runway 09 (smaller angle)', 'Either is equal', 'Runway 18'], correct: 0, explanation: 'Runway 36 = 360°. Wind 030° is 30° off its nose → mostly headwind. RWY 09 (090°) is 60° off → large crosswind.' }
  ]
};
