import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const CFRParts = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#f8fafc" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">14 CFR — Key Parts for the Pilot</text>
    {[
      { x: 20,  c: '#2563eb', p: 'Part 1', t: 'Definitions', d: 'Every term used in FARs. "Night", "flight time", "ceiling", etc.' },
      { x: 155, c: '#7c3aed', p: 'Part 39', t: 'Airworthiness Directives (AD)', d: 'Mandatory actions for safety. Must be complied with.' },
      { x: 290, c: '#dc2626', p: 'Part 43', t: 'Maintenance', d: 'Who can work on aircraft. Preventive maintenance pilot privileges.' },
      { x: 425, c: '#059669', p: 'Part 61', t: 'Pilot Certification', d: 'Certificate requirements, currency, ratings, flight reviews.' }
    ].map((pt, i) => (
      <g key={i} transform={`translate(${pt.x},55)`}>
        <rect width="125" height="210" rx="8" fill={pt.c} fillOpacity="0.1" stroke={pt.c} strokeWidth="2" />
        <rect x="0" y="0" width="125" height="40" rx="8" fill={pt.c} />
        <text x="62" y="25" fontSize="13" fontWeight="bold" textAnchor="middle" fill="white">{pt.p}</text>
        <text x="62" y="62" fontSize="11" fontWeight="bold" textAnchor="middle" fill={pt.c}>{pt.t}</text>
        <foreignObject x="5" y="75" width="115" height="130">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10.5px', color: '#374151', lineHeight:'1.4'}}>{pt.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const DocumentsARROW = () => (
  <svg viewBox="0 0 560 240" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="240" fill="#fff7ed" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">AROW — Documents REQUIRED in the Aircraft</text>
    {[
      { l: 'A', t: 'Airworthiness Certificate', d: 'Standard airworthiness cert (issued by FAA).' },
      { l: 'R', t: 'Registration Certificate', d: 'FAA registration (tail number). Renew every 7 years.' },
      { l: 'O', t: 'Operating limitations', d: 'POH/AFM, placards, markings.' },
      { l: 'W', t: 'Weight & Balance', d: 'Current W&B documents for this aircraft.' }
    ].map((d, i) => (
      <g key={i} transform={`translate(${20 + i*135}, 50)`}>
        <rect width="125" height="170" rx="8" fill="#fef3c7" stroke="#92400e" strokeWidth="2" />
        <circle cx="62" cy="35" r="22" fill="#92400e" />
        <text x="62" y="43" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">{d.l}</text>
        <text x="62" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">{d.t}</text>
        <foreignObject x="8" y="95" width="110" height="75">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10px', color: '#78350f', lineHeight:'1.4'}}>{d.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const Inspections = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#f0fdf4" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Required Inspections — "AV1ATE" (memory aid)</text>
    {[
      { l: 'A', t: 'Annual', e: 'Every 12 calendar months', who: 'A&P with IA' },
      { l: 'V', t: 'VOR (IFR)', e: 'Every 30 days', who: 'Pilot (logged)' },
      { l: '1', t: '100-Hour', e: 'Every 100 hours (if for hire / flight instruction)', who: 'A&P' },
      { l: 'A', t: 'Altimeter/Pitot-Static (IFR)', e: 'Every 24 calendar months', who: 'Certified shop' },
      { l: 'T', t: 'Transponder', e: 'Every 24 calendar months', who: 'Certified shop' },
      { l: 'E', t: 'ELT', e: 'Every 12 months (inspection) + battery 50% lifespan OR 1 hr cumulative', who: 'A&P' }
    ].map((r, i) => (
      <g key={i} transform={`translate(20, ${45 + i*37})`}>
        <rect width="520" height="32" rx="4" fill="white" stroke="#059669" />
        <circle cx="20" cy="16" r="12" fill="#059669" />
        <text x="20" y="21" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">{r.l}</text>
        <text x="42" y="13" fontSize="11" fontWeight="bold" fill="#065f46">{r.t}</text>
        <text x="42" y="26" fontSize="10" fill="#374151">{r.e}</text>
        <text x="360" y="20" fontSize="10" fill="#374151">{r.who}</text>
      </g>
    ))}
  </svg>
);

export default {
  id: 9,
  title: 'Regulations & Documents',
  subtitle: '14 CFR (Parts 1, 39, 43, 61, 67, 91), NTSB 830, aircraft documents, inspections, MELs, ADs.',
  blocks: [
    {
      id: 'cfr-overview',
      title: 'Title 14 CFR — The Pilot\'s Rulebook',
      subtitle: 'The FARs that define what you can and cannot do.',
      content: (
        <>
          <p><b>Title 14 of the Code of Federal Regulations</b> contains the FAA\'s rules. You don\'t need to memorize every part — but you do need to know what each major one covers.</p>
          <div className="flex justify-center my-3"><CFRParts /></div>
          <Table
            headers={['Part', 'Title', 'Key topics']}
            rows={[
              ['Part 1', 'Definitions', 'Night, ceiling, IFR, VFR, approved, preventive maintenance'],
              ['Part 39', 'Airworthiness Directives', 'Mandatory safety actions issued by FAA'],
              ['Part 43', 'Maintenance', 'Who can perform work; preventive maintenance pilots may do'],
              ['Part 61', 'Pilot Certification', 'Licenses, ratings, currency, flight reviews, endorsements'],
              ['Part 67', 'Medical Standards', 'Class 1/2/3 medical certificate criteria'],
              ['Part 91', 'General Operating Rules', 'THE BIG ONE — all the VFR/IFR ops rules most GA pilots fly under'],
              ['Part 135', 'Commuter / On-demand', 'Charter ops; stricter than 91'],
              ['Part 121', 'Scheduled Airlines', 'Airlines — most stringent']
            ]}
          />
        </>
      )
    },
    {
      id: 'documents',
      title: 'Required Aircraft Documents (AROW)',
      subtitle: 'What must be ON the aircraft.',
      content: (
        <>
          <div className="flex justify-center my-3"><DocumentsARROW /></div>
          <p><b>Extended version (ARROW):</b> some instructors include a second "R" for Radio Station License — required for INTERNATIONAL operations only (not domestic US).</p>
          <Callout kind="info" title="The pilot's documents">Don't forget yours: pilot certificate, government photo ID, current medical certificate (or BasicMed), logbook with flight review within 24 calendar months.</Callout>
        </>
      )
    },
    {
      id: 'inspections',
      title: 'Required Inspections — AV1ATE',
      subtitle: 'The schedule of mandatory aircraft checks.',
      content: (
        <>
          <div className="flex justify-center my-3"><Inspections /></div>
          <Callout kind="warn" title="Annual vs. 100-hour"><b>Annual</b> is required for ALL aircraft every 12 calendar months. <b>100-hour</b> is ONLY required for aircraft used for hire or flight instruction (a 100-hour inspection satisfies the annual AT THAT TIME). The 100-hour can be exceeded by up to 10 hours to reach an inspection facility, but the excess counts against the next interval.</Callout>
        </>
      )
    },
    {
      id: 'mel-inop',
      title: 'MELs, Inoperative Equipment & Special Flight Permits',
      subtitle: 'When you can legally fly with broken stuff.',
      content: (
        <>
          <p><b>Minimum Equipment List (MEL)</b>: aircraft-specific document approved by FAA that allows flight with certain items inoperative under defined conditions. Without an MEL, FAR 91.213(d) provides default rules:</p>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li>Item is NOT required by Part 91 for the planned flight (day VFR, etc.)?</li>
            <li>Item is NOT required by airworthiness directive or type certificate?</li>
            <li>Item is NOT required by the aircraft\'s equipment list / KOEL?</li>
            <li>Item is deactivated/removed AND placarded INOP by an authorized person?</li>
          </ol>
          <p>All four must be met to fly with the item inoperative.</p>
          <Callout kind="tip" title='Special Flight Permit (ferry permit)'>Issued by FAA to fly an aircraft NOT meeting airworthiness standards to a location for repair, delivery, production flight test, etc. Limited by FSDO-issued operating limitations.</Callout>
        </>
      )
    },
    {
      id: 'airworthiness-directives',
      title: 'Airworthiness Directives & Preventive Maintenance',
      subtitle: 'What pilots can do, and what must be done.',
      content: (
        <>
          <p><b>Airworthiness Directive (AD)</b>: FAA-issued mandatory action addressing unsafe condition. Compliance is legally required — checked at annual, sometimes sooner. ADs may be one-time or recurring.</p>
          <p><b>Preventive Maintenance (Part 43 Appendix A)</b>: minor tasks private pilots may legally perform on THEIR OWN aircraft (not for hire). Examples:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Replace defective safety wire / cotter keys.</li>
            <li>Lubricate items not requiring disassembly.</li>
            <li>Simple fabric patches (not on structural surfaces).</li>
            <li>Replenish hydraulic fluid.</li>
            <li>Replace landing/position light bulbs, wheels, tires (non-brake).</li>
            <li>Servicing battery, including cleaning.</li>
            <li>Replacing spark plugs (not re-timing).</li>
            <li>Replacing/servicing oil filters.</li>
          </ul>
          <p>All work must be entered in aircraft logbook with signature, date, tach time, and pilot certificate number.</p>
        </>
      )
    },
    {
      id: 'ntsb-830',
      title: 'NTSB Part 830 — Accident Reporting',
      subtitle: 'When you must call the NTSB — immediately or later.',
      content: (
        <>
          <Table
            headers={['Event', 'When to notify NTSB', 'Written report']}
            rows={[
              ['Accident (death, serious injury, substantial damage)', 'IMMEDIATELY', 'Within 10 days'],
              ['Flight control system malfunction', 'IMMEDIATELY', 'Within 10 days'],
              ['In-flight fire', 'IMMEDIATELY', 'Within 10 days'],
              ['Crew incapacitation', 'IMMEDIATELY', 'Within 10 days'],
              ['Aircraft overdue believed accident', 'IMMEDIATELY', 'Within 10 days'],
              ['Prop or turbine engine structural failure', 'IMMEDIATELY', 'Within 10 days'],
              ['Serious incident (if requested)', 'ASAP', 'Within 7 days']
            ]}
          />
          <Callout kind="info" title="Definitions">An <b>accident</b> is any occurrence in flight operations causing death, serious injury, or substantial damage. <b>Substantial damage</b> is damage affecting structural strength/performance — NOT engine failure alone, bent prop, minor dents. <b>Serious injury</b> = hospitalization {'>'}48 hrs, fracture (except simple fingers/nose/toes), severe hemorrhage/organ damage, 2nd/3rd degree burns.</Callout>
        </>
      )
    },
    {
      id: 'faa-publications',
      title: 'AIM, Advisory Circulars, Handbooks',
      subtitle: 'Reference material — not enforceable but always relevant.',
      content: (
        <>
          <Table
            headers={['Publication', 'Purpose', 'Enforceable?']}
            rows={[
              ['Aeronautical Information Manual (AIM)', 'Official guide: ATC procedures, radio comm, weather, safety', 'No (but your knowledge is tested)'],
              ['Advisory Circulars (AC)', 'FAA guidance on specific topics (AC 60-22 = ADM)', 'No (except when referenced by FAR)'],
              ['Pilot Handbook of Aeronautical Knowledge (PHAK)', 'FAA\'s comprehensive GA knowledge textbook', 'No'],
              ['Airplane Flying Handbook (AFH)', 'Maneuvers and procedures reference', 'No'],
              ['Chart Supplement (formerly A/FD)', 'Airport-specific data: services, frequencies, runway info', 'Reference'],
              ['NOTAMs', 'Time-critical notices — TFRs, outages, closures', 'Legally mandatory to check']
            ]}
          />
        </>
      )
    },
    {
      id: 'currency-review',
      title: 'Pilot Currency & Flight Review',
      subtitle: 'How to stay legal to fly.',
      content: (
        <>
          <Table
            headers={['Requirement', 'Rule']}
            rows={[
              ['Flight Review', 'Every 24 calendar months; ≥1 hr ground + ≥1 hr flight with CFI'],
              ['Day passenger currency', '3 takeoffs & landings within prior 90 days (same category/class)'],
              ['Night passenger currency', '3 takeoffs & landings to a FULL STOP between 1 hr after sunset and 1 hr before sunrise'],
              ['Tailwheel landings', '3 T/O & landings in tailwheel within 90 days for tailwheel pax'],
              ['Complex/high-perf endorsement', 'One-time endorsement, not recurring'],
              ['IPC (Instrument Proficiency Check)', 'Required if instrument currency (6 approaches, holding, tracking in last 6 months + 6 more in next 6) has lapsed']
            ]}
          />
          <Callout kind="info" title="BasicMed">Alternative to 3rd-class medical for many Part 91 pilots. Requires: state driver\'s license, most-recent medical exam, take BasicMed online course every 24 months, see any state-licensed physician every 48 months, treat any new conditions.</Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'FAR (14 CFR)', def: 'Federal Aviation Regulations — binding law.' },
      { term: 'AIM', def: 'Aeronautical Information Manual — not law but authoritative.' },
      { term: 'AC', def: 'Advisory Circular — FAA guidance on specific topics.' },
      { term: 'AD', def: 'Airworthiness Directive — mandatory safety action.' },
      { term: 'MEL', def: 'Minimum Equipment List — FAA-approved inop items.' },
      { term: 'NOTAM', def: 'Notice to Air Missions — time-critical info; must check.' },
      { term: 'Special Flight Permit', def: 'Ferry permit to fly aircraft to repair facility.' },
      { term: 'Preventive maintenance', def: 'Minor tasks pilots may do on their own aircraft per Part 43.' },
      { term: 'Annual', def: '12-calendar-month inspection by A&P with IA.' },
      { term: '100-hour', def: 'Every 100 hrs for aircraft for hire / flight instruction.' },
      { term: 'Flight Review', def: '24-calendar-month CFI review: 1 hr ground + 1 hr flight.' },
      { term: 'BasicMed', def: 'Alternative to 3rd-class medical for Part 91.' }
    ],
    laws: [
      { name: 'FAR 91.103 — Preflight', desc: 'PIC must become familiar with all available information for the flight: NOTAMs, weather, fuel, alternates, delay.' },
      { name: 'FAR 91.7 — Airworthiness', desc: 'PIC is responsible for determining aircraft airworthiness before each flight.' },
      { name: 'FAR 91.203 — Certifications', desc: 'No person may operate without a current airworthiness cert and registration aboard.' },
      { name: 'FAR 91.207 — ELT', desc: 'Required; battery replaced when >50% life expired OR 1 hr cumulative use.' },
      { name: 'FAR 91.213 — Inoperative instruments', desc: 'Flow chart of when inop items allow flight (no MEL pathway).' },
      { name: 'FAR 91.411/413 — Altimeter & xpdr checks', desc: '24 calendar months.' },
      { name: 'NTSB 830.5 — Immediate notification', desc: 'Defined events require immediate NTSB notification.' }
    ],
    methods: [
      { name: 'AROW', expand: 'Airworthiness/Registration/Operating limits/Weight&Balance', desc: 'Required aircraft docs.' },
      { name: 'AV1ATE', desc: 'Annual, VOR (IFR), 100-hr, Altimeter/pitot-static, Transponder, ELT.' },
      { name: 'ARROW', desc: 'AROW + Radio Station (international only).' },
      { name: '91.213(d) flow', desc: '4 tests to fly with inop equipment without MEL.' },
      { name: 'PIC responsibilities', desc: '91.3 authority; 91.7 airworthiness; 91.103 preflight action.' }
    ],
    diagrams: [
      { title: '14 CFR parts', visual: <CFRParts />, caption: 'Parts 1, 39, 43, 61, 67, 91.' },
      { title: 'Required documents (AROW)', visual: <DocumentsARROW />, caption: 'Must be in the aircraft.' },
      { title: 'Inspections (AV1ATE)', visual: <Inspections />, caption: 'Frequency and responsible party.' }
    ]
  },
  questions: [
    { q: 'Which CFR Part contains the general operating rules most GA pilots fly under?', choices: ['Part 61', 'Part 91', 'Part 43', 'Part 67'], correct: 1, explanation: 'Part 91 is the general operating/flight rules. Part 61 is pilot certification; 43 maintenance; 67 medical.' },
    { q: 'The documents required to be ONBOARD the aircraft are (AROW):', choices: ['Airworthiness, Registration, Operating limits, Weight & Balance', 'AFM, radio license, logbook, checklist', 'Medical, certificate, ID, logbook', 'Annual, logbook, pilot cert'], correct: 0, explanation: 'AROW: Airworthiness cert, Registration, Operating limitations (POH/AFM/placards), current Weight & Balance.' },
    { q: 'An annual inspection is required:', choices: ['Every 100 hours', 'Every 12 calendar months', 'Every 24 calendar months', 'Every 6 months'], correct: 1, explanation: 'Every 12 calendar months regardless of hours flown. Must be by A&P with IA.' },
    { q: '100-hour inspection is required:', choices: ['For all aircraft every 100 hrs', 'Only for aircraft used for hire or flight instruction', 'Only IFR aircraft', 'Only experimental aircraft'], correct: 1, explanation: '100-hr is only required when aircraft is used for hire or flight instruction given for hire.' },
    { q: 'Transponder inspection is required every:', choices: ['12 calendar months', '24 calendar months', '30 days', '100 hours'], correct: 1, explanation: 'FAR 91.413 — transponder checked every 24 calendar months by certified shop.' },
    { q: 'An Airworthiness Directive (AD):', choices: ['Is optional guidance', 'Is legally mandatory compliance', 'Applies only to experimental aircraft', 'Is issued by the manufacturer'], correct: 1, explanation: 'ADs are issued by FAA and are LEGAL requirements. Non-compliance = unairworthy.' },
    { q: 'Under FAR 91.213(d), to fly with an inoperative item WITHOUT an MEL you must verify:', choices: ['It doesn\'t matter', 'Item is not required by Part 91, AD, type cert, or equipment list; is placarded INOP and deactivated/removed', 'Just placard it', 'Log it and go'], correct: 1, explanation: 'All four conditions must be met — plus proper placarding and deactivation by authorized person.' },
    { q: 'A Special Flight Permit ("ferry permit") allows:', choices: ['Long-distance flights', 'Flight of aircraft not meeting airworthiness to a repair location', 'IFR without instruments', 'Carrying passengers for hire'], correct: 1, explanation: 'Issued by FAA FSDO for non-airworthy aircraft to travel to repair/delivery/etc. under specific limitations.' },
    { q: 'Flight Review is required every:', choices: ['12 calendar months', '24 calendar months', '36 calendar months', 'Only on demand'], correct: 1, explanation: '24 calendar months; 1 hour ground + 1 hour flight with CFI.' },
    { q: 'Night passenger currency requires:', choices: ['3 takeoffs and landings in the prior 90 days', '3 takeoffs and landings to a FULL STOP at night (1 hr after sunset to 1 hr before sunrise) in prior 90 days', '6 landings', 'An IPC'], correct: 1, explanation: 'Night-specific currency requires full-stop landings in the defined night period.' },
    { q: 'Immediate NTSB notification is required for:', choices: ['Any engine issue', 'Substantial damage, serious injury, fatality, in-flight fire, control malfunction', 'Minor incidents', 'Any flight >500 NM'], correct: 1, explanation: 'NTSB 830.5 lists the specific triggers — substantial damage or serious injury are the main ones.' },
    { q: 'Preventive maintenance a private pilot can perform INCLUDES:', choices: ['Engine overhaul', 'Replacing spark plugs, landing light bulbs, tires, oil filter', 'Replacing magnetos', 'Reweighing the aircraft'], correct: 1, explanation: 'Part 43 Appendix A lists allowed tasks; involves minor replacements and fluid servicing.' },
    { q: 'The Aeronautical Information Manual (AIM) is:', choices: ['Federal law', 'Official guide to procedures and safety, not binding law', 'Manufacturer\'s book', 'A flight plan form'], correct: 1, explanation: 'AIM is authoritative FAA guidance but not itself enforceable regulation (though failures to follow recommended procedures can contribute to enforcement actions).' },
    { q: 'ELT battery must be replaced or recharged when:', choices: ['Every 12 calendar months regardless', 'After 50% of useful life OR 1 hour cumulative use', 'Only after activation', 'Never'], correct: 1, explanation: 'FAR 91.207: replace/recharge after 50% useful life expired OR 1 hr cumulative use.' },
    { q: 'A private pilot may carry passengers if they have done ___ in the prior 90 days:', choices: ['3 takeoffs and landings in same category/class', '1 flight', '6 takeoffs', 'Any currency'], correct: 0, explanation: 'FAR 61.57: 3 takeoffs and landings in the prior 90 days (same cat/class/type if applicable).' },
    { q: 'Class 3 medical under age 40 is valid:', choices: ['1 year', '2 years', '3 years', '5 years (60 months)'], correct: 3, explanation: '60 calendar months under 40; 24 months ≥40.' },
    { q: 'BasicMed requires:', choices: ['Class 1 medical', 'State DL, one prior medical, online course every 24 months, physician exam every 48 months', 'No requirements', 'Class 3 medical'], correct: 1, explanation: 'BasicMed: previously held medical, state DL, online course q24mo, physician exam q48mo, treat new conditions.' },
    { q: 'A serious injury under NTSB 830 includes:', choices: ['A minor cut', 'Hospitalization >48 hours, bone fracture (not fingers/nose/toes), severe hemorrhage, 2nd/3rd degree burns', 'Any injury', 'Missed work'], correct: 1, explanation: 'Specific NTSB 830 definition of serious injury.' },
    { q: 'The Chart Supplement (formerly A/FD) contains:', choices: ['Weather data', 'Airport-specific info: services, runways, frequencies, remarks', 'Regulations', 'Flight plans'], correct: 1, explanation: 'Chart Supplement is the authoritative airport directory for US.' },
    { q: 'VOR accuracy check for IFR flight must be done:', choices: ['Every 30 days', 'Every flight', 'Every 100 hours', 'Once per year'], correct: 0, explanation: 'FAR 91.171: within 30 days for IFR. Ground ±4°, airborne ±6°, dual VOR ±4°.' }
  ]
};
