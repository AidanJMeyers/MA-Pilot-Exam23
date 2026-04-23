import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const HazardousAttitudes = () => (
  <svg viewBox="0 0 600 340" className="w-full max-w-xl">
    <rect x="0" y="0" width="600" height="340" fill="#fefce8" />
    {[
      { x: 20,  color: '#dc2626', title: 'Anti-authority', thought: '"Don\'t tell me!"', antidote: 'Follow the rules. They are usually right.' },
      { x: 200, color: '#ea580c', title: 'Impulsivity', thought: '"Do it quickly!"', antidote: 'Not so fast. Think first.' },
      { x: 380, color: '#f59e0b', title: 'Invulnerability', thought: '"It won\'t happen to me"', antidote: 'It could happen to me.' }
    ].map((h, i) => (
      <g key={i} transform={`translate(${h.x},20)`}>
        <rect width="170" height="135" rx="8" fill={h.color} fillOpacity="0.15" stroke={h.color} strokeWidth="2" />
        <text x="85" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill={h.color}>{h.title}</text>
        <text x="85" y="55" fontSize="11" textAnchor="middle" fill="#1e293b" fontStyle="italic">{h.thought}</text>
        <rect x="10" y="75" width="150" height="50" fill="white" stroke={h.color} strokeDasharray="3 2" />
        <text x="85" y="92" fontSize="10" textAnchor="middle" fill="#334155" fontWeight="bold">ANTIDOTE:</text>
        <text x="85" y="108" fontSize="9.5" textAnchor="middle" fill="#334155">{h.antidote}</text>
      </g>
    ))}
    {[
      { x: 110, color: '#7c3aed', title: 'Macho', thought: '"I can do it — watch!"', antidote: 'Taking chances is foolish.' },
      { x: 310, color: '#0369a1', title: 'Resignation', thought: '"What\'s the use?"', antidote: 'I\'m not helpless. I can make a difference.' }
    ].map((h, i) => (
      <g key={i} transform={`translate(${h.x},175)`}>
        <rect width="170" height="140" rx="8" fill={h.color} fillOpacity="0.15" stroke={h.color} strokeWidth="2" />
        <text x="85" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill={h.color}>{h.title}</text>
        <text x="85" y="55" fontSize="11" textAnchor="middle" fill="#1e293b" fontStyle="italic">{h.thought}</text>
        <rect x="10" y="75" width="150" height="55" fill="white" stroke={h.color} strokeDasharray="3 2" />
        <text x="85" y="92" fontSize="10" textAnchor="middle" fill="#334155" fontWeight="bold">ANTIDOTE:</text>
        <text x="85" y="110" fontSize="9.5" textAnchor="middle" fill="#334155">{h.antidote.slice(0, 32)}</text>
        {h.antidote.length > 32 && <text x="85" y="122" fontSize="9.5" textAnchor="middle" fill="#334155">{h.antidote.slice(32)}</text>}
      </g>
    ))}
  </svg>
);

const DecideLoop = () => (
  <svg viewBox="0 0 520 320" className="w-full max-w-lg">
    <rect x="0" y="0" width="520" height="320" fill="#f0f9ff" />
    {[
      { x: 260, y: 40,  l: 'D', t: 'Detect' },
      { x: 430, y: 110, l: 'E', t: 'Estimate' },
      { x: 400, y: 240, l: 'C', t: 'Choose' },
      { x: 260, y: 280, l: 'I', t: 'Identify' },
      { x: 120, y: 240, l: 'D', t: 'Do' },
      { x: 90,  y: 110, l: 'E', t: 'Evaluate' }
    ].map((n, i) => (
      <g key={i}>
        <circle cx={n.x} cy={n.y} r="35" fill="#0284c7" />
        <text x={n.x} y={n.y - 2} fontSize="22" fontWeight="bold" fill="white" textAnchor="middle">{n.l}</text>
        <text x={n.x} y={n.y + 15} fontSize="10" fill="white" textAnchor="middle">{n.t}</text>
      </g>
    ))}
    <path d="M 290 60 Q 400 60 425 95" fill="none" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrD)" />
    <path d="M 430 140 Q 440 200 415 220" fill="none" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrD)" />
    <path d="M 370 260 Q 330 280 295 280" fill="none" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrD)" />
    <path d="M 225 280 Q 170 280 145 260" fill="none" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrD)" />
    <path d="M 100 220 Q 85 180 90 140" fill="none" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrD)" />
    <path d="M 115 85 Q 180 50 225 50" fill="none" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrD)" />
    <defs><marker id="arrD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#0ea5e9" /></marker></defs>
    <text x="260" y="170" fontSize="12" fontWeight="bold" fill="#0369a1" textAnchor="middle">DECIDE Model</text>
    <text x="260" y="188" fontSize="10" fill="#334155" textAnchor="middle">Continuous loop — re-evaluate</text>
  </svg>
);

const RiskMatrix = () => (
  <svg viewBox="0 0 480 320" className="w-full max-w-md">
    <rect x="0" y="0" width="480" height="320" fill="#fafafa" />
    <text x="240" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#334155">Hazard × Risk — Severity/Likelihood Matrix</text>
    <text x="30" y="80" fontSize="11" fill="#334155" transform="rotate(-90 30 120)">← LIKELIHOOD ←</text>
    <text x="240" y="305" textAnchor="middle" fontSize="11" fill="#334155">SEVERITY →</text>
    {/* Grid 4x4 */}
    {[
      ['#22c55e', '#84cc16', '#eab308', '#f97316'],
      ['#84cc16', '#eab308', '#f97316', '#dc2626'],
      ['#eab308', '#f97316', '#dc2626', '#991b1b'],
      ['#f97316', '#dc2626', '#991b1b', '#7f1d1d']
    ].map((row, r) =>
      row.map((c, col) => (
        <rect key={`${r}-${col}`} x={80 + col*90} y={50 + r*55} width="90" height="55" fill={c} stroke="white" strokeWidth="2" />
      ))
    )}
    {['Negligible', 'Minor', 'Major', 'Catastrophic'].map((t, i) => (
      <text key={t} x={125 + i*90} y={45} fontSize="9" textAnchor="middle" fill="#334155">{t}</text>
    ))}
    {['Frequent', 'Probable', 'Occasional', 'Improbable'].map((t, i) => (
      <text key={t} x={75} y={80 + i*55} fontSize="9" textAnchor="end" fill="#334155">{t}</text>
    ))}
    <text x="440" y="305" textAnchor="end" fontSize="10" fill="#334155">Green low → Red high</text>
  </svg>
);

export default {
  id: 3,
  title: 'Aeronautical Decision Making',
  subtitle: 'Hazardous attitudes, IMSAFE, PACE, CRM/SRM, SA, CFIT, DECIDE, hazard vs. risk.',
  blocks: [
    {
      id: 'adm-overview',
      title: 'What is ADM? (CRM, SRM, SA, CFIT)',
      subtitle: 'Systematic approach to mental process used by pilots to consistently determine the best course of action.',
      content: (
        <>
          <p><b>Aeronautical Decision Making (ADM)</b> is the structured process pilots use to identify hazards, assess risk, and choose the best action. Humans don't naturally make optimal decisions under stress — ADM exists to force discipline into the cockpit.</p>
          <Table
            headers={['Term', 'Expansion', 'Meaning']}
            rows={[
              ['ADM', 'Aeronautical Decision Making', 'Structured cognitive process for flight decisions'],
              ['CRM', 'Crew Resource Management', 'Effective use of all resources — crew, systems, info — in multi-pilot ops'],
              ['SRM', 'Single-pilot Resource Management', 'CRM adapted for single-pilot ops; manages workload and automation'],
              ['SA', 'Situational Awareness', 'Accurate perception of the aircraft, environment, and own state'],
              ['CFIT', 'Controlled Flight Into Terrain', 'Flying an airworthy aircraft into the ground/water/obstacles — #1 killer'],
              ['Mitigate', '—', 'Reduce risk to an acceptable level (not eliminate — risk is inherent)']
            ]}
          />
          <Callout kind="info" title="SA breaks down in stages">Level 1: Perception ("what's happening?"). Level 2: Comprehension ("what does it mean?"). Level 3: Projection ("what will happen next?"). Most accidents involve failures at level 2 or 3.</Callout>
        </>
      )
    },
    {
      id: 'hazardous-attitudes',
      title: 'The Five Hazardous Attitudes',
      subtitle: 'Anti-authority, impulsivity, invulnerability, macho, resignation — and their antidotes.',
      content: (
        <>
          <p>Every pilot has unconscious attitudes that degrade decision-making. The FAA identifies <b>five hazardous attitudes</b>; each has an <b>antidote</b> you must speak to yourself when you recognize the attitude.</p>
          <div className="flex justify-center my-3"><HazardousAttitudes /></div>
          <Table
            headers={['Attitude', 'Thought pattern', 'Antidote']}
            rows={[
              ['Anti-authority', '"Don\'t tell me!"', 'Follow the rules. They are usually right.'],
              ['Impulsivity', '"Do something — quickly!"', 'Not so fast. Think first.'],
              ['Invulnerability', '"It won\'t happen to me."', 'It could happen to me.'],
              ['Macho', '"I can do it — watch me!"', 'Taking chances is foolish.'],
              ['Resignation', '"What\'s the use?"', 'I\'m not helpless. I can make a difference.']
            ]}
          />
          <Callout kind="warn" title="Recognition"><b>Step 1: recognize</b> the attitude in your thinking. <b>Step 2: label</b> it. <b>Step 3: apply</b> the antidote. Without recognition, you can't override it.</Callout>
        </>
      )
    },
    {
      id: 'imsafe',
      title: 'IMSAFE — Pilot Self-Assessment',
      subtitle: 'The personal checklist every pilot does before every flight.',
      content: (
        <>
          <p><b>IMSAFE</b> is your personal "am I fit to fly?" checklist. It runs parallel to the aircraft preflight — because you are the most variable component of the flight.</p>
          <Table
            headers={['Letter', 'Factor', 'Self-question']}
            rows={[
              ['I', 'Illness', 'Do I have any symptoms (fever, cold, dizziness)?'],
              ['M', 'Medication', 'Am I taking prescription or OTC drugs that could impair?'],
              ['S', 'Stress', 'Work, family, financial — am I mentally distracted?'],
              ['A', 'Alcohol', 'Last drink ≥ 8 hrs ago AND BAC < 0.04 AND I feel sober?'],
              ['F', 'Fatigue', 'Am I adequately rested? Sleep quality and quantity?'],
              ['E', 'Emotion / Eating', 'Emotional events? Recent meal — hypoglycemia?']
            ]}
          />
          <Callout kind="danger" title="Alcohol rules (FAR 91.17)"><b>"8 hours bottle to throttle"</b> minimum. BAC must be {'<'} 0.04%. No flight while under the influence of any drug affecting faculties. Many drugs require a 5× longest dosing interval wait.</Callout>
        </>
      )
    },
    {
      id: 'pace-decide',
      title: 'PACE & DECIDE',
      subtitle: 'Assertive communication and the 6-step decision model.',
      content: (
        <>
          <p><b>PACE</b> is an assertive-communication ladder for when you disagree with a captain, controller, or another crew member and need to escalate respectfully.</p>
          <Table
            headers={['Letter', 'Meaning', 'Example phrase']}
            rows={[
              ['P', 'Probe', '"I\'m seeing X — can you help me understand?"'],
              ['A', 'Alert', '"I\'m concerned about Y — here\'s why…"'],
              ['C', 'Challenge', '"I cannot do this — we need to change course."'],
              ['E', 'Emergency', '"I am taking control. This is a safety issue."']
            ]}
          />
          <div className="flex justify-center my-3"><DecideLoop /></div>
          <p><b>DECIDE</b> is the classic 6-step model:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>D</b>etect that a change has occurred</li>
            <li><b>E</b>stimate the need to counter/react to the change</li>
            <li><b>C</b>hoose a desirable outcome</li>
            <li><b>I</b>dentify actions to control the change</li>
            <li><b>D</b>o the necessary action</li>
            <li><b>E</b>valuate the effect — and restart the loop</li>
          </ul>
        </>
      )
    },
    {
      id: 'hazard-risk',
      title: 'Hazard vs. Risk & PAVE',
      subtitle: 'Distinguishing the two, and the PAVE preflight risk model.',
      content: (
        <>
          <p>A <b>hazard</b> is a condition with potential to cause harm (e.g., low clouds, low fuel, fatigue). <b>Risk</b> is hazard × exposure × likelihood — the probability and severity of the hazard causing an actual problem. Hazards are inherent; risk can be <i>mitigated</i>.</p>
          <div className="flex justify-center my-3"><RiskMatrix /></div>
          <p><b>PAVE</b> is the preflight risk-evaluation checklist:</p>
          <Table
            headers={['Letter', 'Factor', 'Examples']}
            rows={[
              ['P', 'Pilot', 'IMSAFE items, experience, currency, proficiency'],
              ['A', 'Aircraft', 'Airworthy? Fuel? Weight/CG? Performance at density altitude?'],
              ['V', 'enVironment', 'Weather, airspace, terrain, day/night, NOTAMs'],
              ['E', 'External pressures', 'Get-home-itis, boss, passengers, cost sunk — "have to make it"']
            ]}
          />
          <Callout kind="tip" title="Risk management = three actions">Identify hazard → assess risk → mitigate (reduce, transfer, or avoid). If you cannot reduce risk to acceptable level, don't fly.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'ADM', def: 'Structured decision-making process for flight.' },
      { term: 'CRM', def: 'Crew Resource Management — using all crew resources in multi-pilot cockpits.' },
      { term: 'SRM', def: 'Single-pilot Resource Management.' },
      { term: 'SA', def: 'Situational Awareness — perception → comprehension → projection.' },
      { term: 'CFIT', def: 'Controlled Flight Into Terrain — airworthy aircraft flown into obstacle.' },
      { term: 'Hazard', def: 'Condition with potential for harm.' },
      { term: 'Risk', def: 'Likelihood × severity of a hazard causing harm.' },
      { term: 'Mitigate', def: 'Reduce risk to acceptable level.' },
      { term: 'Get-home-itis', def: 'External pressure to complete the flight at the cost of safety.' },
      { term: 'Automation complacency', def: 'Over-reliance on autopilot/GPS leading to reduced awareness.' }
    ],
    laws: [
      { name: 'FAR 91.17 — Alcohol/Drugs', desc: '8 hrs bottle-to-throttle, <0.04% BAC, no flying under influence of any drug affecting faculties.' },
      { name: 'FAR 61.53 — Medical deficiency', desc: 'No operations when known condition would make flying unsafe, even with valid medical.' },
      { name: 'FAR 91.3 — PIC authority', desc: 'Pilot in command is directly responsible for and final authority on operation of the aircraft.' },
      { name: 'AC 60-22 — ADM', desc: 'Advisory Circular introducing the ADM framework, hazardous attitudes and antidotes.' }
    ],
    methods: [
      { name: 'IMSAFE', expand: 'Illness/Medication/Stress/Alcohol/Fatigue/Emotion-Eating', desc: 'Personal pilot checklist before every flight.' },
      { name: 'PAVE', expand: 'Pilot/Aircraft/enVironment/External pressures', desc: 'Preflight risk model.' },
      { name: 'DECIDE', expand: 'Detect/Estimate/Choose/Identify/Do/Evaluate', desc: '6-step decision loop, repeated.' },
      { name: 'PACE', expand: 'Probe/Alert/Challenge/Emergency', desc: 'Assertive communication ladder for disagreement.' },
      { name: '5 P Check', expand: 'Plan/Plane/Pilot/Passengers/Programming', desc: 'SRM in-flight task management checklist.' },
      { name: '3P Model', expand: 'Perceive/Process/Perform', desc: 'Simplified inflight decision loop.' }
    ],
    diagrams: [
      { title: 'Five Hazardous Attitudes', visual: <HazardousAttitudes />, caption: 'Recognize → label → antidote.' },
      { title: 'DECIDE Loop', visual: <DecideLoop />, caption: 'Continuous closed-loop decision cycle.' },
      { title: 'Risk Matrix', visual: <RiskMatrix />, caption: 'Severity × Likelihood. Green = acceptable; Red = unacceptable.' }
    ]
  },
  questions: [
    { q: 'Which hazardous attitude is the antidote "Follow the rules" for?', choices: ['Macho', 'Anti-authority', 'Impulsivity', 'Resignation'], correct: 1, explanation: 'Anti-authority ("Don\'t tell me!") is countered with "Follow the rules. They are usually right."' },
    { q: '"It won\'t happen to me" reflects which hazardous attitude?', choices: ['Macho', 'Invulnerability', 'Resignation', 'Impulsivity'], correct: 1, explanation: 'Invulnerability: belief that accidents happen to other pilots.' },
    { q: '"I can do it — watch me" is:', choices: ['Macho', 'Invulnerability', 'Impulsivity', 'Anti-authority'], correct: 0, explanation: 'Macho: showing off or taking chances to prove yourself. Antidote: "Taking chances is foolish."' },
    { q: '"What\'s the use?" reflects:', choices: ['Impulsivity', 'Macho', 'Resignation', 'Invulnerability'], correct: 2, explanation: 'Resignation: belief you cannot influence the outcome. Antidote: "I\'m not helpless."' },
    { q: 'The IMSAFE "S" stands for:', choices: ['Sleep', 'Stress', 'Sickness', 'Schedule'], correct: 1, explanation: 'Stress — mental/emotional distraction that degrades performance.' },
    { q: 'The FAA alcohol rule for pilots is:', choices: ['No alcohol within 24 hrs', 'No alcohol within 8 hrs, BAC <0.04, not under influence', 'No alcohol within 12 hrs', 'Just BAC < 0.08'], correct: 1, explanation: 'FAR 91.17: minimum 8 hrs bottle-to-throttle, BAC must be <0.04%, and no flying while under the influence.' },
    { q: 'PAVE is a checklist for:', choices: ['In-flight decision-making', 'Preflight risk assessment', 'Emergency procedures', 'Radio calls'], correct: 1, explanation: 'PAVE = Pilot / Aircraft / enVironment / External pressures — used before flight to assess risks.' },
    { q: 'DECIDE stands for:', choices: ['Detect/Estimate/Choose/Identify/Do/Evaluate', 'Detect/Execute/Confirm/Identify/Do/Evaluate', 'Decide/Estimate/Choose/Identify/Do/Evaluate', 'Detect/Estimate/Confirm/Inspect/Do/Evaluate'], correct: 0, explanation: 'D-E-C-I-D-E: Detect the change, Estimate its significance, Choose a safe outcome, Identify actions, Do them, Evaluate results.' },
    { q: 'What is CFIT?', choices: ['Crew Functional Information Training', 'Controlled Flight Into Terrain', 'Certified Flight Instructor Training', 'Critical Flight In-flight Turbulence'], correct: 1, explanation: 'CFIT: an airworthy aircraft flown under pilot control into the ground, water, or obstacle.' },
    { q: 'Situational Awareness has three levels. Level 3 is:', choices: ['Perception', 'Comprehension', 'Projection of future state', 'Identification'], correct: 2, explanation: 'Level 1 = perception, Level 2 = comprehension, Level 3 = projection ("what will happen next?").' },
    { q: 'PACE escalation: "I am taking control" is which stage?', choices: ['Probe', 'Alert', 'Challenge', 'Emergency'], correct: 3, explanation: 'PACE final stage "Emergency" = take control for safety.' },
    { q: 'Get-home-itis is an example of a(n):', choices: ['Pilot factor (PAVE)', 'Aircraft factor (PAVE)', 'External pressure (PAVE)', 'Environmental factor (PAVE)'], correct: 2, explanation: 'External pressures: schedules, passengers, money, ego — factor "E" in PAVE.' },
    { q: 'The antidote for impulsivity is:', choices: ['"I can do it"', '"Not so fast. Think first."', '"It won\'t happen to me"', '"Follow the rules"'], correct: 1, explanation: 'Impulsivity ("Do it quickly!") antidote: "Not so fast. Think first."' },
    { q: 'Under FAR 91.3, the pilot in command:', choices: ['Is always the person at the left seat', 'Is directly responsible for and the final authority on operation of the aircraft', 'Must be a CFI', 'Must file a flight plan'], correct: 1, explanation: 'FAR 91.3: PIC has final authority. Also may deviate from any rule in an emergency to the extent required.' },
    { q: 'A hazard is:', choices: ['Probability of harm', 'A condition with potential to cause harm', 'An accident cause', 'A violation'], correct: 1, explanation: 'Hazard = condition (e.g., ice). Risk = likelihood × severity of that hazard.' },
    { q: 'Automation complacency is a symptom of:', choices: ['Good SRM', 'Loss of SA from over-reliance on technology', 'Anti-authority', 'Fatigue'], correct: 1, explanation: 'Pilots can become "spectators" when GPS/autopilot handles navigation — SA degrades until something unexpected happens.' },
    { q: 'You\'re a private pilot at minimums with the destination fogging in. Your passengers are pressuring you to push on. The best ADM response is:', choices: ['Press on to keep passengers happy', 'Divert, apply the "external pressures" check, land at an alternate', 'Descend below clouds', 'Speed up'], correct: 1, explanation: 'External pressures are the leading cause of get-home-itis crashes. Recognize the pressure → mitigate → divert.' },
    { q: 'The "5 Ps" in SRM are:', choices: ['Plan, Plane, Pilot, Passengers, Programming', 'Pilot, Plane, Passengers, Pressure, Priority', 'Power, Pitch, Plan, Performance, Precision', 'People, Place, Problem, Plan, Plane'], correct: 0, explanation: '5 P Check: Plan / Plane / Pilot / Passengers / Programming — used at key decision points in flight.' },
    { q: 'The biggest difference between a hazard and a risk:', choices: ['Hazards cause accidents, risks don\'t', 'Risks are mitigable; hazards are conditions', 'They\'re synonyms', 'Hazards are ATC-specific'], correct: 1, explanation: 'Hazards exist. Risk is what you do with a hazard (exposure × severity). You can mitigate risk by avoiding or transferring exposure.' },
    { q: 'A pilot decides after doing IMSAFE that fatigue and stress are both marginal. Best action:', choices: ['Fly but take coffee', 'Rest, reschedule — compound effect raises risk', 'Take OTC stimulants', 'Fly a shorter flight'], correct: 1, explanation: 'Marginal factors COMBINE (Swiss cheese). Two marginal items stacked = unacceptable. Cancel or delay.' }
  ]
};
