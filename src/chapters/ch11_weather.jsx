import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const WeatherProducts = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#f0f9ff" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Aviation Weather Sources</text>
    {[
      { x: 20,  c: '#2563eb', t: 'FSS', d: '1-800-WX-BRIEF — full human briefing (standard, abbreviated, outlook)' },
      { x: 155, c: '#7c3aed', t: 'DUATS / ForeFlight', d: 'Self-service weather via Internet/app. Same FAA data.' },
      { x: 290, c: '#059669', t: 'AWC', d: 'aviationweather.gov — METAR, TAF, SIGMET, AIRMET products.' },
      { x: 425, c: '#dc2626', t: 'ATIS / AWOS', d: 'Local automated/live weather at airport (118-136 MHz).' }
    ].map((s, i) => (
      <g key={i} transform={`translate(${s.x},55)`}>
        <rect width="125" height="200" rx="8" fill={s.c} fillOpacity="0.1" stroke={s.c} strokeWidth="2" />
        <text x="62" y="30" fontSize="13" fontWeight="bold" textAnchor="middle" fill={s.c}>{s.t}</text>
        <foreignObject x="8" y="45" width="110" height="150">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10.5px', color: '#374151', lineHeight:'1.4'}}>{s.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const METARDecoded = () => (
  <svg viewBox="0 0 560 220" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="220" fill="#fefce8" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">METAR Decoded</text>
    <text x="20" y="65" fontSize="13" fontFamily="monospace" fill="#334155">METAR KATL 121753Z 27015G25KT 10SM FEW045 BKN080 22/15 A2992 RMK AO2</text>
    <g fontSize="10" fill="#475569">
      <line x1="38" y1="75" x2="38" y2="95" stroke="#dc2626" /><text x="45" y="108">METAR = routine</text>
      <line x1="80" y1="75" x2="80" y2="95" stroke="#dc2626" /><text x="87" y="128">KATL = Atlanta ICAO</text>
      <line x1="160" y1="75" x2="160" y2="95" stroke="#dc2626" /><text x="145" y="148">121753Z = 12th day, 17:53 UTC</text>
      <line x1="245" y1="75" x2="245" y2="95" stroke="#dc2626" /><text x="220" y="168">27015G25KT = wind 270° @ 15 gusting 25</text>
      <line x1="360" y1="75" x2="360" y2="95" stroke="#dc2626" /><text x="355" y="188">10SM visibility</text>
      <line x1="410" y1="75" x2="410" y2="95" stroke="#dc2626" /><text x="380" y="205">FEW045 BKN080 — few clouds 4500', broken 8000'</text>
    </g>
  </svg>
);

const AirmetSigmet = () => (
  <svg viewBox="0 0 560 260" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="260" fill="#fff7ed" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">AIRMETs & SIGMETs — Hazardous Weather</text>
    <g transform="translate(20,55)">
      <rect width="255" height="185" rx="8" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
      <text x="127" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">AIRMET (for ALL aircraft)</text>
      <text x="10" y="50" fontSize="11" fontWeight="bold" fill="#78350f">Moderate hazards, 6 hr validity</text>
      <text x="10" y="72" fontSize="11" fill="#78350f">• <b>Sierra (S):</b> IFR ceiling/vis, mountain obscuration</text>
      <text x="10" y="92" fontSize="11" fill="#78350f">• <b>Tango (T):</b> moderate turbulence, surface wind &gt;30kt</text>
      <text x="10" y="112" fontSize="11" fill="#78350f">• <b>Zulu (Z):</b> moderate icing, freezing level</text>
      <text x="10" y="140" fontSize="10" fill="#78350f">Issued every 6 hrs by AWC, or amended as needed.</text>
      <text x="10" y="160" fontSize="10" fill="#78350f">G-AIRMETs: graphical version, 3-hr resolution.</text>
    </g>
    <g transform="translate(290,55)">
      <rect width="255" height="185" rx="8" fill="#fee2e2" stroke="#991b1b" strokeWidth="2" />
      <text x="127" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">SIGMET (severe — small/large AC)</text>
      <text x="10" y="50" fontSize="11" fontWeight="bold" fill="#7f1d1d">SEVERE hazards, 4 hr validity</text>
      <text x="10" y="72" fontSize="11" fill="#7f1d1d">• Severe/extreme turbulence</text>
      <text x="10" y="92" fontSize="11" fill="#7f1d1d">• Severe icing</text>
      <text x="10" y="112" fontSize="11" fill="#7f1d1d">• Widespread dust/sand storms &lt;3 SM</text>
      <text x="10" y="132" fontSize="11" fill="#7f1d1d">• Volcanic ash</text>
      <text x="10" y="160" fontSize="10" fill="#7f1d1d">Convective SIGMET: TS, hail ≥3/4", tornadoes</text>
      <text x="10" y="175" fontSize="10" fill="#7f1d1d">(2 hr validity, issued hourly).</text>
    </g>
  </svg>
);

const ChartTypes = () => (
  <svg viewBox="0 0 560 320" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="320" fill="#f8fafc" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">Major Aviation Weather Charts & Products</text>
    {[
      { t: 'METAR / SPECI', d: 'Current (hourly/special) observed wx at airport.', c: '#0ea5e9' },
      { t: 'TAF', d: '24-30 hr forecast within 5 SM of airport.', c: '#2563eb' },
      { t: 'Radar Summary', d: 'Composite precipitation intensity / echo tops.', c: '#7c3aed' },
      { t: 'Weather Depiction Chart', d: 'VFR/MVFR/IFR/LIFR conditions, fronts, pressure systems.', c: '#0891b2' },
      { t: 'Low Level Significant WX', d: 'Fronts, turbulence, icing, cloud tops, TS (sfc-FL240).', c: '#059669' },
      { t: 'Surface Prog Chart', d: 'Forecast fronts, pressure centers, 12-48 hr out.', c: '#ea580c' },
      { t: 'Winds & Temps Aloft (FB)', d: 'Forecast winds and temps at altitude — plan cruise.', c: '#dc2626' },
      { t: 'Freezing Level Chart', d: 'Location & height of freezing (0°C isotherm).', c: '#0369a1' },
      { t: 'SIGMET / AIRMET', d: 'Hazardous wx advisories (severe vs. moderate).', c: '#92400e' },
      { t: 'Satellite (visible/IR)', d: 'Cloud cover imagery; IR shows temperature (cloud tops).', c: '#4c1d95' }
    ].map((chart, i) => (
      <g key={i} transform={`translate(${20 + (i%2)*270}, ${50 + Math.floor(i/2)*52})`}>
        <rect width="260" height="45" rx="4" fill={chart.c} fillOpacity="0.08" stroke={chart.c} strokeWidth="1.5" />
        <text x="10" y="20" fontSize="11" fontWeight="bold" fill={chart.c}>{chart.t}</text>
        <text x="10" y="36" fontSize="10" fill="#334155">{chart.d}</text>
      </g>
    ))}
  </svg>
);

export default {
  id: 11,
  title: 'Aviation Weather Services',
  subtitle: 'Sources, products (METAR/TAF/radar/prog charts/SIGMETs/AIRMETs/winds&temps), satellite imagery.',
  blocks: [
    {
      id: 'sources',
      title: 'Weather Sources & Briefings',
      subtitle: 'Who provides the data and the three types of briefing.',
      content: (
        <>
          <div className="flex justify-center my-3"><WeatherProducts /></div>
          <Table
            headers={['Briefing Type', 'When to request']}
            rows={[
              ['Standard briefing', 'Primary weather call — complete picture for a specific flight within ~6 hr'],
              ['Abbreviated briefing', 'Updates to a previous briefing, or specific items only'],
              ['Outlook briefing', 'Flights scheduled 6+ hours from now — big-picture forecast']
            ]}
          />
          <Callout kind="info" title="FAR 91.103 — Required preflight action">PIC must review ALL available information: weather, fuel, delays, runway requirements, alternates, NOTAMs.</Callout>
        </>
      )
    },
    {
      id: 'metar-taf',
      title: 'METARs & TAFs',
      subtitle: 'Current observations and terminal forecasts — decoded.',
      content: (
        <>
          <p><b>METAR (Meteorological Aerodrome Report)</b>: current (hourly, or SPECI for special) airport weather observation. <b>TAF (Terminal Aerodrome Forecast)</b>: 24-30 hour forecast within 5 SM of airport.</p>
          <div className="flex justify-center my-3"><METARDecoded /></div>
          <Table
            headers={['Field', 'Format', 'Example']}
            rows={[
              ['Report type', 'METAR or SPECI', 'METAR'],
              ['Station ICAO', 'K + 3 letters', 'KATL'],
              ['Date/time', 'DDHHMMZ (UTC)', '121753Z = 12th @ 17:53 Zulu'],
              ['Wind', 'DDDSSGKT', '27015G25KT = 270° @ 15kt gusting 25'],
              ['Visibility', 'N(N)SM', '10SM = 10 statute miles'],
              ['Weather', '±Intensity, descriptor, phenomenon', '-RA, +TSRA, BR, FG'],
              ['Clouds', 'COV HHH (hundreds of ft AGL)', 'FEW045 = few at 4,500 ft'],
              ['Temp/Dewpoint', 'TT/DD (°C, M for negative)', '22/15'],
              ['Altimeter', 'A + setting × 100', 'A2992 = 29.92" Hg'],
              ['Remarks', 'RMK ...', 'AO2 = automated with precip sensor']
            ]}
          />
          <Callout kind="tip" title="Cloud coverage">SKC/CLR = clear. FEW = 1-2 oktas. SCT = 3-4. BKN = 5-7 (BROKEN = CEILING). OVC = 8/8 overcast.</Callout>
        </>
      )
    },
    {
      id: 'airmet-sigmet',
      title: 'AIRMETs, SIGMETs, Convective SIGMETs',
      subtitle: 'Hazard warnings at three severity tiers.',
      content: (
        <>
          <div className="flex justify-center my-3"><AirmetSigmet /></div>
          <Table
            headers={['Product', 'Severity', 'Duration', 'Contents']}
            rows={[
              ['AIRMET Sierra', 'Moderate', '6 hr', 'IFR conditions, mountain obscuration'],
              ['AIRMET Tango', 'Moderate', '6 hr', 'Moderate turbulence, sustained surface winds ≥30 kt'],
              ['AIRMET Zulu', 'Moderate', '6 hr', 'Moderate icing, freezing level'],
              ['SIGMET', 'Severe (all aircraft)', '4 hr', 'Severe icing, severe/extreme turbulence, dust/sand <3 SM, volcanic ash'],
              ['Convective SIGMET', 'Severe (thunderstorm)', '2 hr', 'TS, hail ≥3/4", tornadoes, surface wind ≥50 kt']
            ]}
          />
        </>
      )
    },
    {
      id: 'charts',
      title: 'Weather Charts & Products',
      subtitle: 'What each aviation weather chart shows.',
      content: (
        <>
          <div className="flex justify-center my-3"><ChartTypes /></div>
          <Table
            headers={['Chart', 'Use in planning']}
            rows={[
              ['Radar Summary', 'Precipitation intensity & movement; storm tops & movement vectors'],
              ['Weather Depiction Chart', 'At-a-glance VFR vs. IFR areas; fronts, pressure systems, observed ceilings'],
              ['Low Level Significant Weather (SFC-FL240)', 'Fronts, turbulence, icing, TS, cloud tops — pre-flight overview'],
              ['Surface Prog Chart', '12/24/36/48 hour forecasts: fronts, pressure centers'],
              ['Winds & Temps Aloft (FB)', 'Forecast winds at altitudes 3,000-39,000 ft'],
              ['Freezing Level Chart', 'Height of 0°C isotherm; icing avoidance above this']
            ]}
          />
          <Callout kind="tip" title="Winds-aloft decoding">FB format: DDTTGG or DDSSTT. Example: 2315+02 = 230° at 15 kt, +2°C. Above 24,000 ft, temperature is always negative so the sign is omitted.</Callout>
        </>
      )
    },
    {
      id: 'satellite',
      title: 'Satellite Imagery — Visible & IR',
      subtitle: 'Cloud identification and cloud-top temperatures.',
      content: (
        <>
          <Table
            headers={['Type', 'Shows', 'Limitation']}
            rows={[
              ['Visible (VIS)', 'Reflected sunlight from cloud tops (white/gray levels)', 'Useless at night'],
              ['Infrared (IR)', 'Thermal radiation — bright = cold (high tops)', 'Available 24/7; reveals cloud height'],
              ['Water vapor', 'Atmospheric moisture patterns', 'Mid/upper-level analysis, jet streams']
            ]}
          />
          <Callout kind="info" title="Why IR matters">A thick thunderstorm cloud top is very COLD (high altitude). On IR imagery, coldest tops = brightest white = most dangerous. Radar shows precip; IR shows height & intensity indirectly.</Callout>
        </>
      )
    },
    {
      id: 'pireps-notams',
      title: 'PIREPs, NOTAMs, and Other Reports',
      subtitle: 'Pilot-generated and operational info.',
      content: (
        <>
          <p><b>PIREP (Pilot Report)</b>: real-time wx observations from aircraft in flight. Most valuable for icing, turbulence, and cloud tops — things no surface system measures directly. Format includes /OV (location), /TM (time), /FL (altitude), /TP (type aircraft), /SK (sky cover), /WX (weather), /TA (temp), /WV (wind), /TB (turbulence), /IC (icing), /RM (remarks).</p>
          <p><b>NOTAM</b>: Notice to Air Missions. TFRs, runway closures, outages, obstructions. Mandatory to check per FAR 91.103. Categories:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>NOTAM-D (Distant)</b>: airport services, runway conditions, outages.</li>
            <li><b>FDC NOTAM</b>: flight restrictions, procedures, TFRs, chart changes.</li>
            <li><b>Pointer NOTAM</b>: draws attention to another NOTAM.</li>
            <li><b>Military NOTAM</b>: affecting military fields only.</li>
          </ul>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'METAR', def: 'Hourly aerodrome observation. SPECI = special/unscheduled.' },
      { term: 'TAF', def: 'Terminal Aerodrome Forecast — 24-30 hr, within 5 SM of airport.' },
      { term: 'AIRMET', def: 'Moderate hazards advisory — 6 hr validity, 3 types (Sierra/Tango/Zulu).' },
      { term: 'SIGMET', def: 'Severe weather advisory — 4 hr validity, all aircraft.' },
      { term: 'Convective SIGMET', def: 'Thunderstorm-related hazards — 2 hr validity.' },
      { term: 'PIREP', def: 'Pilot-generated weather report. UA = routine, UUA = urgent.' },
      { term: 'NOTAM', def: 'Notice to Air Missions. Required check per 91.103.' },
      { term: 'Ceiling', def: 'Lowest BROKEN (BKN) or OVERCAST (OVC) layer.' },
      { term: 'Visibility', def: 'Prevailing visibility in statute miles.' },
      { term: 'FEW/SCT/BKN/OVC', def: 'Cloud cover: 1-2/3-4/5-7/8 oktas.' },
      { term: 'FSS', def: 'Flight Service Station — 1-800-WX-BRIEF.' },
      { term: 'AWC', def: 'Aviation Weather Center — aviationweather.gov.' }
    ],
    laws: [
      { name: 'FAR 91.103 — Preflight action', desc: 'Must review ALL available weather info before flight.' },
      { name: 'FAR 91.155 — VFR wx minimums', desc: 'See Chapter 1.' },
      { name: 'FAR 91.167 — IFR alternates', desc: 'Alternate required if weather at destination is below ceiling 2,000/vis 3 SM 1 hr before-after ETA.' },
      { name: 'AIM 7-1 — Weather services', desc: 'Describes products, sources, and briefings.' }
    ],
    methods: [
      { name: 'METAR read order', desc: 'Type → Station → Time → Wind → Vis → WX → Clouds → Temp/DP → Altim → RMK.' },
      { name: 'AIRMET SIGMET mnemonic', desc: 'S-Sierra IFR, T-Tango Turbulence, Z-Zulu iCing.' },
      { name: 'Briefing types', desc: 'Standard (full) / Abbreviated (update) / Outlook (6+ hrs).' },
      { name: 'Winds aloft', desc: 'DDSSTT. Above 24k: temp always negative, sign omitted.' },
      { name: 'Preflight flow', desc: 'Metar → TAF → Radar → Prog → Winds aloft → SIGMETs/AIRMETs → NOTAMs.' }
    ],
    diagrams: [
      { title: 'Weather sources', visual: <WeatherProducts />, caption: 'FSS, DUATS/ForeFlight, AWC, ATIS/AWOS.' },
      { title: 'METAR decoded', visual: <METARDecoded />, caption: 'Station, time, wind, vis, clouds, temp/DP, altimeter.' },
      { title: 'AIRMET vs. SIGMET', visual: <AirmetSigmet />, caption: 'Moderate (6 hr) vs. severe (4 hr).' },
      { title: 'Chart types', visual: <ChartTypes />, caption: 'Key aviation weather products.' }
    ]
  },
  questions: [
    { q: 'In a METAR, "27015G25KT" means:', choices: ['Wind from 15° at 27 kt gusting 25', 'Wind from 270° at 15 kt gusting 25', 'Wind from 270° at 25 kt', 'Wind variable'], correct: 1, explanation: 'DDDSSGKT: 270° direction, 15 kt speed, gusts to 25 kt.' },
    { q: '"BKN035" in a METAR indicates:', choices: ['Broken clouds at 35 feet', 'Broken clouds at 3,500 feet AGL', 'Clear at 35,000 feet', 'Scattered at 3,500 AGL'], correct: 1, explanation: 'Cloud heights in METAR are in hundreds of feet AGL; 035 = 3,500 AGL. BKN = 5-7 oktas = ceiling.' },
    { q: 'A "ceiling" is:', choices: ['The highest cloud layer', 'The lowest BROKEN (BKN) or OVERCAST (OVC) layer', 'Any scattered layer', 'Only OVC layers'], correct: 1, explanation: 'Ceiling = lowest layer reported as BKN or OVC (or any vertical visibility into surface-based phenomena).' },
    { q: 'A TAF covers what area and duration?', choices: ['200 NM / 48 hr', '5 SM of airport / 24-30 hr', 'Only overhead / 6 hr', 'Entire FSS area / 12 hr'], correct: 1, explanation: 'Terminal Aerodrome Forecast: within 5 SM of airport, valid 24 or 30 hours.' },
    { q: 'AIRMET Tango alerts for:', choices: ['IFR conditions', 'Moderate icing', 'Moderate turbulence and sustained surface winds ≥30 kt', 'Thunderstorms'], correct: 2, explanation: 'Sierra=IFR/mtn obscuration, Tango=turbulence/wind, Zulu=icing/freezing level.' },
    { q: 'A Convective SIGMET is valid for:', choices: ['30 min', '2 hours', '4 hours', '6 hours'], correct: 1, explanation: 'Convective SIGMET issued hourly, 2-hr validity.' },
    { q: 'The cloud-cover abbreviation for 8 oktas (full cover) is:', choices: ['FEW', 'SCT', 'BKN', 'OVC'], correct: 3, explanation: 'FEW 1-2 / SCT 3-4 / BKN 5-7 / OVC 8.' },
    { q: 'A standard preflight weather briefing includes:', choices: ['Only METARs', 'Adverse conditions, synopsis, current/forecast, winds aloft, NOTAMs, TFRs', 'Just the TAF', 'ATIS only'], correct: 1, explanation: 'Standard briefing = complete picture: adverse conditions first, synopsis, current conditions, forecast, destination forecast, winds aloft, NOTAMs/TFRs.' },
    { q: 'Winds aloft forecast "2315+02" means:', choices: ['Wind 230° at 15 kt, +2°C', 'Wind 23° at 15 kt at 2,000 ft', 'Wind 231° at 5 kt, 02°C', 'Wind 2,300 at 1502'], correct: 0, explanation: 'First 2 digits = direction in tens of degrees (23 → 230°). Next 2 = speed. Temp follows.' },
    { q: 'The primary source for aviation weather online is:', choices: ['Weather.com', 'aviationweather.gov (AWC)', 'NOAA general site', 'FAA safety'], correct: 1, explanation: 'Aviation Weather Center (aviationweather.gov) is the official AWC portal.' },
    { q: 'AWOS/ASOS are:', choices: ['IFR approach aids', 'Automated weather systems at airports broadcast on VHF', 'Transponder ground-based checks', 'Part of pitot-static system'], correct: 1, explanation: 'Automated Weather Observing/Surface Observing Systems — broadcast continuous wx on VHF.' },
    { q: 'Satellite IR imagery shows:', choices: ['Precipitation intensity', 'Thermal radiation — brightest = coldest tops = tallest (often TS)', 'Wind direction', 'Pressure'], correct: 1, explanation: 'IR uses thermal emission; coldest (highest) cloud tops appear brightest.' },
    { q: 'A PIREP is most valuable for reporting:', choices: ['Sea level pressure', 'Observed icing, turbulence, cloud tops from actual aircraft', 'Future forecast', 'Altimeter setting'], correct: 1, explanation: 'Pilot-generated reports give ground-truth observations for phenomena surface systems can\'t measure.' },
    { q: 'The Freezing Level Chart shows:', choices: ['Precipitation rates', 'Height of the 0°C isotherm', 'Wind at altitude', 'Fronts'], correct: 1, explanation: 'Critical for icing avoidance — flight below freezing level in visible moisture risks icing.' },
    { q: 'Call 1-800-WX-BRIEF to reach:', choices: ['NOAA', 'ATC', 'Flight Service Station', 'AWC'], correct: 2, explanation: 'FSS = Flight Service Station; human weather briefing and flight plan filing.' },
    { q: 'A Surface Prog Chart typically forecasts:', choices: ['Current weather only', '12 to 48 hours out with fronts and pressure systems', 'Wind aloft only', 'Turbulence only'], correct: 1, explanation: 'Surface progs show forecast positions of fronts, highs/lows at 12/24/36/48-hour intervals.' },
    { q: 'Radar Summary Chart shows:', choices: ['Visibility only', 'Precipitation intensity and storm tops and movement', 'Fronts only', 'Cloud amounts only'], correct: 1, explanation: 'Echo intensity in levels, echo tops, movement vectors, and precipitation type.' },
    { q: 'NOTAMs are required to check per:', choices: ['FAR 91.3', 'FAR 91.103', 'FAR 91.155', 'FAR 91.205'], correct: 1, explanation: '91.103 requires pilot to become familiar with ALL available info — including NOTAMs.' }
  ]
};
