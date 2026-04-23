import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const EmergencyTypes = () => (
  <svg viewBox="0 0 560 260" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="260" fill="#fff7ed" />
    {[
      { x: 30,  c: '#065f46', bg: '#d1fae5', t: 'Precautionary Landing', d: 'Planned landing before it becomes an emergency (e.g., weather deteriorating, fuel low, unfamiliar terrain).' },
      { x: 200, c: '#92400e', bg: '#fef3c7', t: 'Forced Landing', d: 'Immediate landing required (engine failure, fire, structural damage). No time to pick airport — pick the best available surface.' },
      { x: 370, c: '#7f1d1d', bg: '#fee2e2', t: 'Ditching', d: 'Forced landing on water. Land parallel to swells, max headwind possible; flaps as required.' }
    ].map((e, i) => (
      <g key={i}>
        <rect x={e.x} y="30" width="160" height="200" rx="10" fill={e.bg} stroke={e.c} strokeWidth="2" />
        <text x={e.x + 80} y="55" fontSize="14" fontWeight="bold" textAnchor="middle" fill={e.c}>{e.t}</text>
        <foreignObject x={e.x + 10} y="65" width="140" height="160">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '11px', color: '#374151', lineHeight: '1.4'}}>{e.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const EngineFailureAltitudes = () => (
  <svg viewBox="0 0 540 320" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="320" fill="#f0f9ff" />
    <rect x="0" y="285" width="540" height="35" fill="#65a30d" />
    {/* Runway */}
    <rect x="50" y="280" width="120" height="8" fill="#374151" />
    <text x="70" y="303" fontSize="11" fill="white">RWY</text>
    {/* Aircraft path */}
    <path d="M 50 280 Q 120 150, 260 60 Q 320 50, 400 100" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 3" />
    <polygon points="260,60 272,54 275,66" fill="#1e40af" />
    <text x="280" y="52" fontSize="12" fontWeight="bold" fill="#1e40af">Initial climb</text>

    <rect x="110" y="115" width="160" height="75" fill="#fee2e2" stroke="#dc2626" />
    <text x="190" y="135" fontSize="12" fontWeight="bold" fill="#991b1b" textAnchor="middle">Below 500 AGL</text>
    <text x="190" y="152" fontSize="10" textAnchor="middle" fill="#7f1d1d">LAND STRAIGHT AHEAD</text>
    <text x="190" y="167" fontSize="10" textAnchor="middle" fill="#7f1d1d">± 30° of heading</text>
    <text x="190" y="182" fontSize="10" textAnchor="middle" fill="#7f1d1d">Do NOT try to turn back</text>

    <rect x="300" y="40" width="200" height="80" fill="#fef3c7" stroke="#d97706" />
    <text x="400" y="60" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#92400e">500 – 1,000 AGL</text>
    <text x="400" y="77" fontSize="10" textAnchor="middle" fill="#78350f">Consider small off-angle turn</text>
    <text x="400" y="92" fontSize="10" textAnchor="middle" fill="#78350f">to better terrain / suitable field</text>
    <text x="400" y="107" fontSize="10" textAnchor="middle" fill="#78350f">"Impossible turn" is risky</text>

    <text x="30" y="30" fontSize="12" fontWeight="bold" fill="#334155">Engine Failure After Takeoff — altitude dictates options</text>
  </svg>
);

const ForcedLandingABCDE = () => (
  <svg viewBox="0 0 560 320" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="320" fill="#fafafa" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Forced Landing Priorities — "ABCDE"</text>
    {[
      { x: 20,  c: '#2563eb', l: 'A', t: 'Airspeed', d: 'Establish best glide speed immediately (pitch for airspeed, NOT altitude).' },
      { x: 120, c: '#0891b2', l: 'B', t: 'Best field', d: 'Pick the best available landing site — into wind if possible, flat, obstacle-free.' },
      { x: 220, c: '#9333ea', l: 'C', t: 'Checklist', d: 'Flow through restart items: fuel selector, mixture, carb heat, mags, primer locked.' },
      { x: 320, c: '#c026d3', l: 'D', t: 'Declare', d: 'Mayday on 121.5 or assigned freq. Squawk 7700. Share position.' },
      { x: 420, c: '#ea580c', l: 'E', t: 'Exit', d: 'Shut down systems: fuel OFF, mags OFF, master OFF, doors UNLATCHED just before touchdown.' }
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y="50" width="100" height="260" rx="8" fill={s.c} fillOpacity="0.1" stroke={s.c} strokeWidth="2" />
        <circle cx={s.x + 50} cy="80" r="22" fill={s.c} />
        <text x={s.x + 50} y="87" fontSize="20" fontWeight="bold" textAnchor="middle" fill="white">{s.l}</text>
        <text x={s.x + 50} y="120" fontSize="12" fontWeight="bold" textAnchor="middle" fill={s.c}>{s.t}</text>
        <foreignObject x={s.x + 5} y="130" width="90" height="170">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10px', color: '#374151', lineHeight: '1.3'}}>{s.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

export default {
  id: 4,
  title: 'Emergencies',
  subtitle: 'Engine failure, forced vs. precautionary vs. ditching, terrain selection, and distress vs. urgent.',
  blocks: [
    {
      id: 'emerg-types',
      title: 'Emergency Classifications',
      subtitle: 'Precautionary · Forced · Ditching — and the 3 states (normal, urgent, distress).',
      content: (
        <>
          <p>FAA defines two classes of emergency radio call: <b>Distress</b> (grave and imminent danger — MAYDAY) and <b>Urgency</b> (concerning safety but not immediate — PAN-PAN). Land-type emergencies fall into three flavors:</p>
          <div className="flex justify-center my-3"><EmergencyTypes /></div>
          <Table
            headers={['Call', 'Use when...', 'Words']}
            rows={[
              ['MAYDAY', 'Grave/imminent danger — fire, engine out, control loss', '"Mayday, Mayday, Mayday."'],
              ['PAN-PAN', 'Urgency — fuel concerns, disoriented, injured pax', '"Pan-pan, Pan-pan, Pan-pan."']
            ]}
          />
          <Callout kind="info" title="Squawk 7700">Declaring an emergency turns 7700 on your transponder into a red alert on every ATC screen for hundreds of miles. Don't hesitate — declare early to maximize help.</Callout>
        </>
      )
    },
    {
      id: 'engine-failure-takeoff',
      title: 'Engine Failure After Takeoff',
      subtitle: 'The "impossible turn" and altitude-based decision rules.',
      content: (
        <>
          <p>Engine failure on takeoff is the most time-critical emergency. Your decision depends on <b>altitude AGL when the engine quits</b>.</p>
          <div className="flex justify-center my-3"><EngineFailureAltitudes /></div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Below 500 AGL:</b> <b>Land straight ahead</b> (±30° heading). The "impossible turn" back to the runway requires enough altitude for a 180° + realignment — typically 700-1000 AGL minimum, and most light aircraft stall during the attempt.</li>
            <li><b>500–1,000 AGL:</b> Consider a slight off-angle turn to a better surface. Do NOT attempt full 180° turn unless briefed and practiced.</li>
            <li><b>Above 1,000 AGL:</b> Turn-back may be feasible if briefed, aircraft allows, and wind is favorable.</li>
          </ul>
          <Callout kind="danger" title="Pitch for speed, not altitude">The first action after power loss: lower the nose to best glide speed. Many takeoff engine-failure fatalities are stall-spin accidents from trying to stretch the glide.</Callout>
        </>
      )
    },
    {
      id: 'forced-landing',
      title: 'Forced Landing Procedure (ABCDE)',
      subtitle: 'The flow every pilot should memorize.',
      content: (
        <>
          <p>When the engine quits at altitude, run through the ABCDE flow in parallel — don't let one step block the others.</p>
          <div className="flex justify-center my-3"><ForcedLandingABCDE /></div>
          <p><b>Expanded actions:</b></p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><b>Airspeed</b> — pitch for <b>best glide</b> (Vg). This maximizes time and distance.</li>
            <li><b>Best field</b> — into wind, flat, obstacle-free, uphill if possible (bleeds energy).</li>
            <li><b>Checklist</b> — attempt restart: fuel selector to fullest tank, mixture rich, carb heat on, mags BOTH, primer in/locked, master ON. If no restart after ~5 sec, commit to landing.</li>
            <li><b>Declare</b> — Mayday on 121.5 or current freq, state position, intentions, souls on board, fuel.</li>
            <li><b>Exit</b> — fuel OFF, mags OFF, flaps as required, master OFF just before touchdown, doors UNLATCHED to prevent jamming.</li>
          </ol>
        </>
      )
    },
    {
      id: 'terrain-selection',
      title: 'Terrain Selection',
      subtitle: 'Picking the least-bad landing surface.',
      content: (
        <>
          <p>Priority order — but these are all trade-offs:</p>
          <Table
            headers={['Surface', 'Priority', 'Notes']}
            rows={[
              ['Airport / runway', '1 (highest)', 'Even a closed or abandoned strip is better than a field.'],
              ['Road', '2', 'Straight, paved. Watch: power lines, signs, cars, traffic direction.'],
              ['Open field (plowed, grass)', '3', 'Plow lines visible = orient with furrows to minimize drag/tumbling.'],
              ['Crops', '4', 'Tall crops decelerate but can flip aircraft.'],
              ['Trees', '5 (last resort)', 'Aim between trunks; aircraft decelerates through canopy. Survivable with proper technique.'],
              ['Water (ditching)', '— (separate technique)', 'Parallel to swells, max headwind, flaps as POH says']
            ]}
          />
          <Callout kind="tip" title="Deceleration is energy absorption">Survival depends on <b>slowing the deceleration pulse</b>. Hitting something that gives (corn, snow, brush) over distance = survivable. Hitting rigid (rock, trunk) at impact speed = catastrophic. The whole point of terrain choice is to spread the deceleration over time/distance.</Callout>
        </>
      )
    },
    {
      id: 'ditching',
      title: 'Ditching',
      subtitle: 'Water landings — swells, wind, and flap configuration.',
      content: (
        <>
          <p><b>Ditching</b> is a forced landing on water. Most survivable ditchings happen with:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Land parallel to major swells</b> (long axis of wave), not into the face — this avoids wave impact.</li>
            <li>If possible, compromise with <b>max headwind</b> component (to reduce ground speed).</li>
            <li>In <b>low wind / big swell</b>: parallel swell wins.</li>
            <li>In <b>high wind / small swell</b>: into wind wins.</li>
            <li>Flaps as POH specifies (many recommend full for lowest touchdown speed).</li>
            <li><b>Touchdown attitude</b>: slightly nose-high, tail first, minimum sink, wings level — like a soft-field landing.</li>
            <li><b>After landing</b>: fuselage usually sinks within seconds in fixed-gear airplanes. Exit promptly.</li>
          </ul>
          <Callout kind="warn" title="PFD/life raft">Brief passengers before ditching. Life vests on but NOT inflated inside the aircraft (they'll block egress). Inflate OUTSIDE.</Callout>
        </>
      )
    },
    {
      id: 'systems-malfunctions',
      title: 'Systems Malfunctions & Psychological Hazards',
      subtitle: 'Electrical, pitot-static, cabin fire, smoke — plus the psychology of emergencies.',
      content: (
        <>
          <Table
            headers={['Malfunction', 'Immediate actions']}
            rows={[
              ['Electrical fire / smoke', 'Master OFF. Vent the cabin. Land as soon as possible.'],
              ['Cabin fire', 'Extinguisher, vent, land ASAP. Fly the aircraft first.'],
              ['Engine fire (in flight)', 'Mixture ICO (idle cutoff), fuel OFF, dive to extinguish, land.'],
              ['Alternator failure', 'Reduce electrical load. Land at earliest suitable.'],
              ['Pitot-static blockage', 'Cross-check other instruments; use pitot heat, alternate static source if available.'],
              ['Partial power loss', 'Troubleshoot (carb heat, mixture, tanks); plan precautionary landing.'],
              ['Door open', 'Fly aircraft. Don\'t try to close in flight — land and fix.']
            ]}
          />
          <h4 className="font-semibold text-slate-900 mt-4">Psychological hazards</h4>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Panic</b> — freezing or wild action. Counter: scripted procedures.</li>
            <li><b>Denial</b> — "the engine will come back" — wastes altitude. Counter: commit early.</li>
            <li><b>Tunnel vision</b> — fixating on one instrument or problem. Counter: "aviate, navigate, communicate."</li>
            <li><b>Task saturation</b> — overload. Counter: delegate, declare emergency for ATC help.</li>
          </ul>
          <Callout kind="tip" title="The priority mantra"><b>Aviate. Navigate. Communicate.</b> In that order, always. Flying the airplane comes first — even before talking to ATC.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'MAYDAY', def: 'Distress call — grave and imminent danger. Said 3 times.' },
      { term: 'PAN-PAN', def: 'Urgency call — concerning safety but not immediate. Said 3 times.' },
      { term: 'Vg (best glide)', def: 'Speed providing maximum glide ratio (L/D max).' },
      { term: 'Impossible turn', def: 'Attempted 180° turn-back after engine failure on takeoff; often fatal below 1,000 AGL.' },
      { term: 'Forced landing', def: 'Landing with no option — engine failure, fire, loss of controls.' },
      { term: 'Precautionary landing', def: 'Proactive landing before situation becomes emergency.' },
      { term: 'Ditching', def: 'Forced landing on water.' },
      { term: 'Deceleration pulse', def: 'Rate of speed change at impact — long/soft = survivable.' },
      { term: '7700', def: 'Transponder emergency code.' },
      { term: '121.5', def: 'Guard frequency — emergency monitored 24/7.' }
    ],
    laws: [
      { name: 'FAR 91.3(b) — Emergency authority', desc: 'PIC may deviate from any rule in an emergency to extent required to meet the emergency.' },
      { name: 'FAR 91.3(c) — Emergency reporting', desc: 'Upon request, PIC must provide written report of deviation to FAA.' },
      { name: 'NTSB 830 — Reporting', desc: 'Immediate notification for accidents, serious injury, substantial damage; report to NTSB.' },
      { name: 'AIM 6-3-1 — Distress/Urgency', desc: 'MAYDAY for distress (grave/imminent), PAN-PAN for urgency. 121.5 if no contact on current freq.' }
    ],
    methods: [
      { name: 'ABCDE', expand: 'Airspeed/Best field/Checklist/Declare/Exit', desc: 'Forced-landing flow.' },
      { name: 'Aviate/Navigate/Communicate', desc: 'Emergency priority order — always fly first.' },
      { name: '"Impossible turn" rule', desc: '<500 AGL = straight ahead. 500-1000 AGL = slight turn. >1000 AGL = turn-back may be possible.' },
      { name: 'Ditching', desc: 'Parallel to swells + max headwind component. Tail-first, wings level, minimum sink.' },
      { name: 'Distress triangle', desc: 'FIRE: mixture ICO, fuel off, mags off, dive to extinguish, land.' }
    ],
    diagrams: [
      { title: 'Three emergency landing types', visual: <EmergencyTypes />, caption: 'Precautionary vs. forced vs. ditching.' },
      { title: 'Engine failure altitude decisions', visual: <EngineFailureAltitudes />, caption: 'AGL determines options; <500 = straight ahead.' },
      { title: 'ABCDE Forced Landing Flow', visual: <ForcedLandingABCDE />, caption: 'Memorize and run in parallel.' }
    ]
  },
  questions: [
    { q: 'The difference between MAYDAY and PAN-PAN is:', choices: ['MAYDAY is for lost comm', 'MAYDAY = distress (grave and imminent); PAN-PAN = urgency (concern)', 'Both are interchangeable', 'PAN-PAN is for IFR'], correct: 1, explanation: 'MAYDAY is reserved for immediate life threats. PAN-PAN for urgency without imminent danger.' },
    { q: 'Transponder code for emergency is:', choices: ['1200', '7500', '7600', '7700'], correct: 3, explanation: '7700 is the emergency squawk.' },
    { q: 'The emergency guard frequency is:', choices: ['121.5 MHz', '122.9 MHz', '123.45 MHz', '118.0 MHz'], correct: 0, explanation: '121.5 is the civilian emergency frequency and is always monitored.' },
    { q: 'Engine failure at 300 AGL after takeoff. Best action:', choices: ['Turn 180° back to the runway', 'Land straight ahead (±30° heading)', 'Dive to build speed, then return', 'Feather the prop'], correct: 1, explanation: 'Below ~500 AGL the "impossible turn" is usually fatal. Land straight ahead within 30° of heading.' },
    { q: 'The first action after engine failure at altitude is to:', choices: ['Declare emergency', 'Pitch for best glide speed', 'Turn back toward an airport', 'Start an engine restart checklist'], correct: 1, explanation: 'Aviate first: pitch for Vg (best glide) to maximize time/distance available.' },
    { q: 'When ditching in significant swell with light wind, you should:', choices: ['Land into the wind', 'Land parallel to swells', 'Land perpendicular to swells', 'Land downwind'], correct: 1, explanation: 'With big swells and light wind, the swell wins — land parallel to the long axis to avoid wave-face impact.' },
    { q: 'In a cabin fire of electrical origin, you should first:', choices: ['Open the window', 'Turn MASTER switch OFF', 'Land immediately', 'Pull fuses'], correct: 1, explanation: 'Remove the source of current. Master OFF, vent, land ASAP. Aviate first.' },
    { q: 'The priority order in any emergency is:', choices: ['Communicate, Aviate, Navigate', 'Aviate, Navigate, Communicate', 'Navigate, Aviate, Communicate', 'Aviate, Communicate, Navigate'], correct: 1, explanation: 'AVIATE first (fly the airplane), then NAVIGATE (go somewhere safe), then COMMUNICATE (tell ATC).' },
    { q: 'A precautionary landing is:', choices: ['A dead-stick no-power landing', 'A landing to avoid an imminent emergency', 'A missed approach go-around', 'A landing at an alternate airport'], correct: 1, explanation: 'Precautionary: you pick the time/place before things get dangerous (deteriorating weather, low fuel).' },
    { q: 'When choosing terrain for forced landing, priority is usually:', choices: ['Tree line first', 'Airport > road > open field > crops > trees', 'Nearest any surface', 'Water first'], correct: 1, explanation: 'Always an airport if reachable; otherwise road, then open field, crops, trees (last resort).' },
    { q: 'During a forced landing through trees, the best technique is to:', choices: ['Dive at max speed', 'Stall the aircraft just above the canopy at minimum speed', 'Aim for the biggest tree', 'Keep full power to smash through'], correct: 1, explanation: 'Stall at minimum speed into the treetops — the canopy absorbs energy while you decelerate.'},
    { q: 'Upon engine failure, the TYPICAL restart checklist flow includes all EXCEPT:', choices: ['Fuel selector to fullest tank', 'Mixture rich, carb heat on', 'Master OFF', 'Mags BOTH'], correct: 2, explanation: 'Master OFF would kill electrical systems needed for the restart. Master stays ON while attempting restart.' },
    { q: 'A door pops open on climb-out. Best action:', choices: ['Turn immediately and land', 'Ignore — fly normally and land at earliest suitable', 'Push the door closed', 'Reduce speed to minimum controllable'], correct: 1, explanation: 'An open door is noisy but rarely dangerous. Fly the airplane, land normally, fix on the ground.' },
    { q: 'Before touchdown in a forced landing, you should:', choices: ['Leave doors latched so they don\'t interfere', 'Unlatch doors to prevent jamming on impact', 'Jettison windows', 'Throw away loose items'], correct: 1, explanation: 'Structural deformation on impact can jam latched doors. Unlatching before touchdown prevents entrapment.' },
    { q: 'Squawking 7700 will:', choices: ['Be ignored unless you call ATC', 'Alert every ATC facility within radar range instantly', 'Notify only your current ATC', 'Require a phone number'], correct: 1, explanation: '7700 flashes as an EMERGENCY target on every scope nearby.' },
    { q: 'Psychological hazard "denial" in an emergency leads to:', choices: ['Proper checklist execution', 'Wasting altitude/time hoping engine restarts', 'Declaring emergency too early', 'Aggressive maneuvering'], correct: 1, explanation: 'Denial = "it\'ll come back" — costs valuable altitude/time. Commit early to the forced landing.' },
    { q: 'FAR 91.3(b) states the PIC may:', choices: ['Never deviate from rules', 'Deviate from any rule to the extent required in an emergency', 'Deviate only with ATC approval', 'Only deviate IFR'], correct: 1, explanation: 'In an emergency, the PIC has absolute authority to deviate from any FAR as required.' },
    { q: 'Major NTSB accident reporting event requiring IMMEDIATE notification includes:', choices: ['Any engine issue', 'Serious injury, fatality, or substantial damage', 'Minor taxi incident', 'All precautionary landings'], correct: 1, explanation: 'NTSB Part 830: immediate notification for death, serious injury, substantial damage, flight control system failure, etc.' }
  ]
};
