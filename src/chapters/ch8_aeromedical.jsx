import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const EarInnerEar = () => (
  <svg viewBox="0 0 540 300" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="300" fill="#fefce8" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Vestibular System — Semicircular Canals</text>
    <g transform="translate(80,60)">
      <ellipse cx="100" cy="100" rx="90" ry="70" fill="#fef3c7" stroke="#92400e" strokeWidth="2" />
      <ellipse cx="100" cy="80" rx="55" ry="30" fill="none" stroke="#dc2626" strokeWidth="3" />
      <text x="75" y="55" fontSize="10" fill="#991b1b" fontWeight="bold">YAW canal</text>
      <ellipse cx="80" cy="110" rx="25" ry="55" fill="none" stroke="#2563eb" strokeWidth="3" />
      <text x="40" y="150" fontSize="10" fill="#1e40af" fontWeight="bold">PITCH</text>
      <ellipse cx="130" cy="115" rx="45" ry="22" fill="none" stroke="#059669" strokeWidth="3" />
      <text x="140" y="150" fontSize="10" fill="#065f46" fontWeight="bold">ROLL</text>
      <text x="100" y="210" fontSize="10" textAnchor="middle" fill="#334155">Three canals at 90° = sense all rotation</text>
    </g>
    <g transform="translate(300,60)">
      <rect width="220" height="210" fill="white" stroke="#334155" strokeWidth="1" rx="6" />
      <text x="110" y="25" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#334155">Common vestibular illusions</text>
      <foreignObject x="10" y="35" width="200" height="175">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10.5px', color: '#374151', lineHeight:'1.5'}}>
          <b>The Leans:</b> Slow roll unnoticed, abrupt correction feels like roll in opposite direction.<br/>
          <b>Graveyard Spiral:</b> Prolonged turn feels like straight flight; pilot pulls back in "straight" descent → tightening spiral.<br/>
          <b>Coriolis:</b> Head movement during turn creates intense tumbling sensation.<br/>
          <b>Somatogravic:</b> Accel feels like pitch-up; decel like pitch-down.<br/>
          <b>Antidote:</b> Trust instruments, not sensation.
        </div>
      </foreignObject>
    </g>
  </svg>
);

const HypoxiaStages = () => (
  <svg viewBox="0 0 540 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="280" fill="#f0f9ff" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Hypoxia — Four Types</text>
    {[
      { x: 20,  c: '#dc2626', t: 'Hypoxic', d: 'Insufficient O₂ at altitude. Most common in aviation.' },
      { x: 150, c: '#ea580c', t: 'Hypemic', d: 'Blood cannot carry O₂ (CO poisoning, anemia, blood donation).' },
      { x: 280, c: '#f59e0b', t: 'Stagnant', d: 'Blood flow impaired (G-forces, cold extremities, shock).' },
      { x: 410, c: '#7c3aed', t: 'Histotoxic', d: 'Cells cannot use O₂ (alcohol, drugs, cyanide).' }
    ].map((h, i) => (
      <g key={i} transform={`translate(${h.x},55)`}>
        <rect width="120" height="200" rx="8" fill={h.c} fillOpacity="0.1" stroke={h.c} strokeWidth="2" />
        <text x="60" y="30" fontSize="13" fontWeight="bold" textAnchor="middle" fill={h.c}>{h.t}</text>
        <foreignObject x="8" y="45" width="104" height="150">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '11px', color: '#374151', lineHeight:'1.4'}}>{h.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const OxygenAlts = () => (
  <svg viewBox="0 0 560 240" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="240" fill="#fefce8" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">FAR 91.211 — Supplemental Oxygen Rules</text>
    <line x1="60" y1="190" x2="540" y2="190" stroke="#334155" strokeWidth="2" />
    <line x1="60" y1="40" x2="60" y2="190" stroke="#334155" strokeWidth="2" />
    {[
      { alt: 12500, y: 145, color: '#22c55e', label: 'No requirement below' },
      { alt: 14000, y: 100, color: '#f97316', label: 'Crew: O₂ for flights > 30 min above 12,500 MSL' },
      { alt: 15000, y: 65, color: '#dc2626', label: 'Crew must use continuously above 14,000 MSL' },
      { alt: 18000, y: 40, color: '#7c3aed', label: 'Pax must be provided O₂ above 15,000 MSL' }
    ].map((l, i) => (
      <g key={i}>
        <line x1="60" y1={l.y} x2="540" y2={l.y} stroke={l.color} strokeDasharray="4 3" />
        <text x="50" y={l.y + 4} fontSize="10" textAnchor="end" fill="#334155">{l.alt.toLocaleString()} ft</text>
        <text x="70" y={l.y - 4} fontSize="10" fill={l.color}>{l.label}</text>
      </g>
    ))}
    <text x="60" y="210" fontSize="10" fill="#334155">Time of useful consciousness drops rapidly with altitude:</text>
    <text x="60" y="225" fontSize="10" fill="#334155">15k: 30 min · 25k: 3-5 min · 30k: 1-2 min · 35k: 30-60 sec · 40k: 15-20 sec</text>
  </svg>
);

const RodCone = () => (
  <svg viewBox="0 0 540 260" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="260" fill="#f8fafc" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Vision in Flight — Rods vs. Cones</text>
    <g transform="translate(30,50)">
      <rect width="230" height="180" rx="8" fill="#fef3c7" stroke="#92400e" strokeWidth="2" />
      <text x="115" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#92400e">CONES (day)</text>
      <foreignObject x="10" y="40" width="210" height="130">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '11px', color: '#78350f', lineHeight:'1.5'}}>
          <b>Location:</b> Concentrated in fovea (center of retina).<br/>
          <b>Vision:</b> High acuity, color, daylight.<br/>
          <b>Scanning:</b> Direct central vision works in day.<br/>
          <b>Weakness:</b> Near-useless below ~0.01 lux (moonless night).
        </div>
      </foreignObject>
    </g>
    <g transform="translate(280,50)">
      <rect width="230" height="180" rx="8" fill="#dbeafe" stroke="#1e40af" strokeWidth="2" />
      <text x="115" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#1e40af">RODS (night)</text>
      <foreignObject x="10" y="40" width="210" height="130">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '11px', color: '#1e3a8a', lineHeight:'1.5'}}>
          <b>Location:</b> Dominant in peripheral retina.<br/>
          <b>Vision:</b> Shades of gray, motion-sensitive.<br/>
          <b>Scanning:</b> OFF-CENTER (~10°) for best night detection.<br/>
          <b>Dark adaptation:</b> ~30 minutes to fully develop.<br/>
          <b>Red cockpit light</b> preserves night vision.
        </div>
      </foreignObject>
    </g>
  </svg>
);

export default {
  id: 8,
  title: 'Aeromedical Factors',
  subtitle: 'Hypoxia, CO, hyperventilation, spatial disorientation, illusions, stress, fatigue, alcohol, drugs, scuba, vision.',
  blocks: [
    {
      id: 'hypoxia',
      title: 'Hypoxia — 4 Types',
      subtitle: 'When cells cannot get the oxygen they need.',
      content: (
        <>
          <p><b>Hypoxia</b> is a lack of oxygen sufficient to impair function. The FAA categorizes it four ways by mechanism.</p>
          <div className="flex justify-center my-3"><HypoxiaStages /></div>
          <p><b>Symptoms (progressive, insidious):</b></p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Cyanosis (blueish lips/fingernails)</li>
            <li>Headache, fatigue, drowsiness</li>
            <li>Dizziness, numbness, tingling</li>
            <li>Impaired judgment, <b>EUPHORIA</b> (dangerous — pilot feels fine)</li>
            <li>Visual disturbance, tunnel vision</li>
            <li>Unconsciousness → death</li>
          </ul>
          <div className="flex justify-center my-3"><OxygenAlts /></div>
          <Callout kind="danger" title="Time of Useful Consciousness">At 25,000 ft, decompressed, you have ~3-5 minutes. At 40,000 ft, 15-20 seconds. Don mask IMMEDIATELY upon any decompression — don't try to diagnose.</Callout>
        </>
      )
    },
    {
      id: 'hyperventilation',
      title: 'Hyperventilation',
      subtitle: 'Too much O₂ — the opposite-looking twin of hypoxia.',
      content: (
        <>
          <p><b>Hyperventilation</b> is breathing faster/deeper than required, blowing off too much CO₂. Causes alkalosis (blood pH rises) and mimics hypoxia symptoms almost exactly:</p>
          <Table
            headers={['Symptom', 'Hypoxia', 'Hyperventilation']}
            rows={[
              ['Dizziness, tingling', 'Yes', 'Yes'],
              ['Visual impairment', 'Yes', 'Yes'],
              ['Muscle spasms (hands, face)', 'Rare', 'Common'],
              ['Euphoria', 'Yes', 'No (usually anxiety)'],
              ['Altitude', 'Above 10-12k', 'Any altitude (often anxiety-driven)']
            ]}
          />
          <Callout kind="tip" title="Treatment"><b>If unsure which:</b> assume hypoxia, put O₂ mask on 100%. Then: slow breathing rate (count aloud, talk to ATC, breathe into a bag) to resolve hyperventilation.</Callout>
        </>
      )
    },
    {
      id: 'middle-ear-sinus',
      title: 'Middle Ear & Sinus',
      subtitle: 'Pressure equalization during climb/descent.',
      content: (
        <>
          <p>The middle ear is connected to the throat via the <b>eustachian tube</b>, which is a one-way valve that vents well during climb (pressure equalizes out) but can stick during descent.</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Ear block on descent</b>: sharp pain, reduced hearing. Valsalva maneuver (pinch nose, blow gently) or yawn/swallow.</li>
            <li><b>Sinus block</b>: similar mechanism in sinuses; can be excruciating. Do not fly with upper respiratory infection.</li>
            <li><b>Rupture:</b> extreme pressure differential can rupture eardrum. Vertigo and bleeding possible.</li>
          </ul>
          <Callout kind="warn" title="Don't fly with a cold">Most common cause of ear/sinus blocks. Decongestants can mask symptoms but are generally banned for flying (or require flight surgeon approval).</Callout>
        </>
      )
    },
    {
      id: 'spatial-disorientation',
      title: 'Spatial Disorientation & Vestibular Illusions',
      subtitle: 'When your body tells you lies.',
      content: (
        <>
          <p>Spatial disorientation occurs when your <b>body's sensors</b> (vestibular, somatosensory, visual) give conflicting or wrong information about the aircraft's attitude. In IMC or dark night, inner ear will almost always win unless overridden by instruments.</p>
          <div className="flex justify-center my-3"><EarInnerEar /></div>
          <Table
            headers={['Illusion', 'Trigger', 'Sensation']}
            rows={[
              ['The Leans', 'Slow roll unnoticed, rapid correction', 'Feel like rolling the opposite way — attempts to "correct" into a bank'],
              ['Graveyard Spiral', 'Prolonged coordinated turn', 'Feels like straight flight; pulling back tightens the spiral'],
              ['Coriolis Illusion', 'Head tilt during a turn', 'Violent tumbling; can cause total loss of control'],
              ['Somatogravic', 'Rapid acceleration (takeoff)', 'Feels like pitch-up — pilot pushes nose down into ground'],
              ['Somatogravic (decel)', 'Rapid deceleration', 'Feels like pitch-down — pilot pulls up into stall'],
              ['Inversion', 'Level-off from steep climb', 'Feels like tumbling backward'],
              ['Elevator illusion', 'Updraft', 'Feels like pitch-up'],
              ['Autokinesis', 'Stare at single light in dark', 'Light appears to move erratically']
            ]}
          />
          <Callout kind="danger" title="Antidote"><b>Trust the instruments.</b> Do not trust seat-of-pants in IMC or dark night. Non-instrument-rated pilot entering IMC → 178 seconds to impact (classic "178-seconds to live" study).</Callout>
        </>
      )
    },
    {
      id: 'visual-illusions',
      title: 'Visual Illusions — Landing',
      subtitle: 'When the runway deceives you.',
      content: (
        <>
          <Table
            headers={['Illusion', 'Runway characteristic', 'Pilot tendency']}
            rows={[
              ['Upsloping runway', 'Appears steeper / higher', 'Pilot flies LOW approach'],
              ['Downsloping runway', 'Appears shallower / lower', 'Pilot flies HIGH approach'],
              ['Narrow runway', 'Appears further away / higher', 'Pilot flies LOW, early descent'],
              ['Wide runway', 'Appears closer / lower', 'Pilot flies HIGH (late flare)'],
              ['Featureless terrain', 'No references', 'Altitude under-estimated; low approach'],
              ['Rain on windshield', 'Runway appears further', 'High approach'],
              ['Haze', 'Runway appears further/lower', 'Low approach'],
              ['Bright runway lights at night', 'Runway appears closer', 'High approach'],
              ['Fog obscuration illusion', 'Pitch-up sensation entering fog', 'Pilot pushes nose down']
            ]}
          />
          <Callout kind="tip" title="Antidote for visual illusions">Use the <b>VASI/PAPI glidepath</b>. Trust pitch attitude + airspeed. Don't fly the visual picture alone at night or marginal conditions.</Callout>
        </>
      )
    },
    {
      id: 'vision-flight',
      title: 'Vision in Flight — Rods & Cones',
      subtitle: 'Day vision vs. night vision.',
      content: (
        <>
          <div className="flex justify-center my-3"><RodCone /></div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Dark adaptation:</b> Cones ~10 min; rods ~30 min for full sensitivity. Bright light resets the process.</li>
            <li><b>Off-center scanning</b> at night — look 10° to the side of a target; rods are densest there.</li>
            <li><b>Red cockpit lighting</b> preserves night vision (rods are less sensitive to red).</li>
            <li><b>O₂ above 5,000 ft at night</b> preserves night vision (hypoxia degrades rods first).</li>
          </ul>
        </>
      )
    },
    {
      id: 'stress-fatigue-soda',
      title: 'Stress, Fatigue & SODA',
      subtitle: 'Pilot-state factors that amplify every other hazard.',
      content: (
        <>
          <p><b>Acute fatigue</b>: short-term, relieved by rest. <b>Chronic fatigue</b>: long-term buildup, requires significant recovery (days, not hours). Both dramatically degrade judgment, reaction time, and SA.</p>
          <p><b>Stress</b> narrows attention, reduces memory recall, and can induce tunnel vision. Moderate stress may improve performance; high stress always degrades.</p>
          <p><b>SODA</b> = <b>S</b>tatement <b>O</b>f <b>D</b>emonstrated <b>A</b>bility. FAA waiver issued to pilots with a permanent (but stable) disqualifying medical condition after demonstrating safe operation with the condition.</p>
          <Callout kind="info" title="Medical classes">Class 1 (ATP) – 12 months under 40, 6 months over. Class 2 (commercial) – 12 months. Class 3 (private) – 60 months under 40, 24 months over. BasicMed is alternative for most Part 91.</Callout>
        </>
      )
    },
    {
      id: 'alcohol-drugs-scuba',
      title: 'Alcohol, Drugs, Scuba',
      subtitle: 'Physiological rules beyond the cockpit.',
      content: (
        <>
          <Table
            headers={['Factor', 'Rule']}
            rows={[
              ['Alcohol', '8 hrs bottle-to-throttle, BAC <0.04%, not under influence (FAR 91.17). Effects linger longer than blood alcohol.'],
              ['OTC drugs', 'Antihistamines (Benadryl) ground you for multiple half-lives. Sedating = disqualifying while active.'],
              ['Prescription drugs', 'Must be approved by AME or flight surgeon. No flying while adjusting to a new med.'],
              ['Scuba diving', 'No flight above 8,000 MSL within 12 hrs (controlled ascent) or 24 hrs (uncontrolled, required decompression) after last dive. Prevents the bends.']
            ]}
          />
          <Callout kind="warn" title="Scuba math">Dissolved nitrogen in blood from diving expands at altitude. Fly too soon = decompression sickness (DCS) aka "the bends" = potentially fatal.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'Hypoxia', def: 'Insufficient O₂ to cells. 4 types: hypoxic/hypemic/stagnant/histotoxic.' },
      { term: 'Hyperventilation', def: 'Excessive CO₂ loss; mimics hypoxia but with muscle spasms and no euphoria.' },
      { term: 'Spatial disorientation', def: 'Body sensors disagree with reality about attitude.' },
      { term: 'The Leans', def: 'Illusion: slow roll unnoticed, abrupt correction feels like opposite bank.' },
      { term: 'Coriolis', def: 'Head movement during turn → tumbling sensation.' },
      { term: 'Somatogravic', def: 'Acceleration feels like pitch-up; deceleration like pitch-down.' },
      { term: 'Autokinesis', def: 'Fixed light appears to move when stared at in dark.' },
      { term: 'Rods', def: 'Peripheral retina photoreceptors; night vision, motion-sensitive.' },
      { term: 'Cones', def: 'Foveal photoreceptors; color and detail in day.' },
      { term: 'Dark adaptation', def: 'Full night vision takes ~30 minutes.' },
      { term: 'SODA', def: 'Statement Of Demonstrated Ability — FAA medical waiver.' },
      { term: 'DCS / bends', def: 'Decompression sickness from rapid ascent after diving.' }
    ],
    laws: [
      { name: 'FAR 91.211 — Supplemental O₂', desc: '>12,500 to 14,000 MSL: crew O₂ if >30 min. >14,000: crew continuous. >15,000: passengers provided.' },
      { name: 'FAR 91.17 — Alcohol', desc: '8 hrs bottle to throttle, <0.04% BAC, not under influence.' },
      { name: 'FAR 61.53 — Medical deficiency', desc: 'No flying with known condition affecting safety, even with valid medical.' },
      { name: 'AIM 8-1-2 — Hypoxia', desc: 'Effects begin above 10,000 MSL daytime (5,000 at night due to vision).' }
    ],
    methods: [
      { name: 'IMSAFE', expand: 'Illness/Med/Stress/Alc/Fatigue/Emotion', desc: 'Pilot self-check.' },
      { name: 'Valsalva', desc: 'Pinch nose, close mouth, blow — equalizes middle ear on descent.' },
      { name: '178 seconds', desc: 'Non-instrument pilot in IMC → ~178 sec to loss of control.' },
      { name: 'Off-center scanning', desc: 'Look ~10° off target at night — rods dominate periphery.' },
      { name: 'Scuba', desc: 'Wait 12 hr after controlled dive / 24 hr after uncontrolled before flight >8,000 MSL.' }
    ],
    diagrams: [
      { title: 'Hypoxia types', visual: <HypoxiaStages />, caption: 'Hypoxic, Hypemic, Stagnant, Histotoxic.' },
      { title: 'O₂ altitude rules', visual: <OxygenAlts />, caption: 'FAR 91.211 breakpoints.' },
      { title: 'Rods vs. Cones', visual: <RodCone />, caption: 'Day (central) vs. Night (peripheral).' },
      { title: 'Vestibular illusions', visual: <EarInnerEar />, caption: 'Three canals sense rotation; inner ear can mislead.' }
    ]
  },
  questions: [
    { q: 'The most common form of hypoxia in aviation is:', choices: ['Histotoxic', 'Stagnant', 'Hypoxic (altitude)', 'Hypemic'], correct: 2, explanation: 'Hypoxic hypoxia: simply too little O₂ in the air at altitude — the standard aviation hypoxia.' },
    { q: 'Carbon monoxide poisoning causes which type of hypoxia?', choices: ['Hypoxic', 'Hypemic', 'Stagnant', 'Histotoxic'], correct: 1, explanation: 'Hypemic: blood cannot carry oxygen because CO binds hemoglobin 200-300x stronger than O₂.' },
    { q: 'Alcohol-induced impairment of oxygen use at the cellular level is which hypoxia?', choices: ['Histotoxic', 'Hypoxic', 'Stagnant', 'Hypemic'], correct: 0, explanation: 'Histotoxic: cells can\'t use O₂. Also caused by cyanide, some drugs.' },
    { q: 'FAR 91.211 requires supplemental oxygen for crew continuously above:', choices: ['10,000 MSL', '12,500 MSL', '14,000 MSL', '15,000 MSL'], correct: 2, explanation: 'Above 14,000 MSL crew must use O₂ at all times. 12,500-14,000 only if flight > 30 min. Above 15,000 passengers must be provided.' },
    { q: 'Hyperventilation is distinguished from hypoxia by:', choices: ['Dizziness', 'Muscle spasms/tingling (hands, face), no euphoria', 'Visual impairment', 'Nothing — identical'], correct: 1, explanation: 'Hyperventilation: alkalosis causes muscle spasms (tetany) in hands and face. Hypoxia: euphoria and no tetany.' },
    { q: 'The best way to equalize middle ear pressure on descent is:', choices: ['Hold breath', 'Valsalva maneuver (pinch nose, blow gently) or yawn/swallow', 'Descend slower', 'Climb back up'], correct: 1, explanation: 'Valsalva forces air up the eustachian tube. Yawning/swallowing also opens it.' },
    { q: 'The "leans" illusion occurs because:', choices: ['ATC vectored wrong', 'Slow roll is unnoticed; rapid correction feels like opposite bank', 'Vertigo', 'Too much rudder'], correct: 1, explanation: 'Slow roll under threshold of inner ear detection. Correction feels like new bank in opposite direction.' },
    { q: 'The graveyard spiral is caused by:', choices: ['Engine failure', 'Prolonged turn feeling like straight flight → pilot pulls back → tighter spiral', 'Iced pitot tube', 'Aft CG'], correct: 1, explanation: 'After ~20 sec in a coordinated turn, vestibular system "catches up" — feels like level flight. Pulling back in a turn tightens the spiral.' },
    { q: 'To preserve night vision in the cockpit, use:', choices: ['Bright white light', 'Red or low-intensity light', 'UV light', 'Full sunlight'], correct: 1, explanation: 'Red light has minimal effect on rods. Bright white destroys ~30 min of dark adaptation instantly.' },
    { q: 'For best night traffic detection, scan:', choices: ['Directly at the target', 'About 10° off to the side', 'In circles', 'Only at horizon'], correct: 1, explanation: 'Rods are densest ~10° off fovea. Direct central vision (cones) is useless in dim light.' },
    { q: 'Dark adaptation takes approximately:', choices: ['30 seconds', '5 minutes', '30 minutes', '2 hours'], correct: 2, explanation: 'Full rod adaptation requires ~30 minutes. Cones adapt faster (~10 min).' },
    { q: 'A narrow runway compared to a standard width will cause the pilot to:', choices: ['Perceive higher than actual → fly LOW approach', 'Perceive lower → fly high', 'No effect', 'Flare early'], correct: 0, explanation: 'Narrow runway looks further away and higher — pilot descends early/low.' },
    { q: 'A wide runway can cause:', choices: ['Low approach', 'High approach with late flare', 'No effect', 'Stall on final'], correct: 1, explanation: 'Wide runway looks closer/lower — pilot flies high and flares late.' },
    { q: 'After scuba diving to 40 ft (controlled ascent), minimum wait before flight above 8,000 MSL:', choices: ['4 hours', '12 hours', '24 hours', '48 hours'], correct: 1, explanation: '12 hours minimum for controlled ascent. 24 hrs if decompression required or multi-day diving.' },
    { q: 'Alcohol regulation for pilots is all EXCEPT:', choices: ['8 hrs bottle-to-throttle', 'BAC <0.04%', 'Must not be under influence of any drug', 'BAC < 0.08 is fine'], correct: 3, explanation: 'FAR 91.17 limit is 0.04 — half the DUI limit. Effects linger even with cleared BAC.' },
    { q: 'Somatogravic illusion on takeoff causes the pilot to feel:', choices: ['Descending', 'Pitching UP (then push nose down into terrain)', 'Yawing', 'Rolling'], correct: 1, explanation: 'Rapid forward acceleration feels like pitch-up. Pilot pushes nose down → CFIT shortly after takeoff on dark nights.' },
    { q: 'Coriolis illusion is triggered by:', choices: ['Tight turn alone', 'Head movement during a turn → violent tumbling sensation', 'Descent', 'Autopilot engagement'], correct: 1, explanation: 'Looking down at a chart during a steady turn triggers multiple semicircular canals — chaotic tumbling sensation.' },
    { q: 'Non-instrument-rated pilot inadvertently entering IMC has approximately:', choices: ['5 minutes', '178 seconds to loss of control', '30 minutes', '60 seconds'], correct: 1, explanation: 'Classic "178 seconds to live" study by UIUC. Trust instruments or perish within ~3 min.' },
    { q: 'A SODA is:', choices: ['Statement Of Demonstrated Ability — FAA medical waiver', 'A type of supplemental oxygen', 'An approved beverage', 'A stall avoidance device'], correct: 0, explanation: 'SODA: issued after pilot demonstrates safe operation with a permanent medical condition.' },
    { q: 'Class 3 medical for private pilot under age 40 is valid for:', choices: ['12 months', '24 months', '60 months', 'Indefinitely'], correct: 2, explanation: 'Class 3 is valid 60 months (5 years) under 40; 24 months 40 and over.' },
    { q: 'Symptoms of CO poisoning include:', choices: ['Chest pain', 'Headache, drowsiness, nausea', 'Rapid breathing only', 'Blurred vision only'], correct: 1, explanation: 'Classic CO triad: headache, drowsiness, then dizziness/nausea. First sign = headache.' },
    { q: 'Hypoxia begins affecting night vision at approximately:', choices: ['Sea level', '2,000 MSL', '5,000 MSL', '18,000 MSL'], correct: 2, explanation: 'Rod function (night vision) begins degrading around 5,000 MSL — FAA recommends O₂ for night flights above 5,000.' }
  ]
};
