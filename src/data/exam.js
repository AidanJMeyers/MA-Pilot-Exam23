// 50-question comprehensive practice exam, drawn proportionally from all chapters.
// Each question tagged with chapter name for score breakdown.

export const exam = [
  // === Airspace / Charts / Radio (5) ===
  { chapter: 'Airspace & Charts', q: 'Class A airspace extends from 18,000 MSL to:', choices: ['FL450', 'FL500', 'FL600', 'FL650'], correct: 2, explanation: 'Class A: 18,000 MSL up to and including FL600. IFR only.' },
  { chapter: 'Airspace & Charts', q: 'You are 20 NM from a Class B primary airport at 2,500 MSL. Which equipment is required?', choices: ['VOR only', 'Mode C transponder + ADS-B Out', 'Nothing', 'DME'], correct: 1, explanation: 'Within 30 NM Mode C veil, Mode C + ADS-B Out required regardless of entering B.' },
  { chapter: 'Airspace & Charts', q: 'VFR minimums in Class E below 10,000 MSL are:', choices: ['1 SM, clear of clouds', '3 SM / 500-1,000-2,000', '5 SM / 1-1-1', '3 SM / clear of clouds'], correct: 1, explanation: '3 SM visibility, 500 ft below / 1,000 ft above / 2,000 ft horizontal cloud clearance.' },
  { chapter: 'Airspace & Charts', q: 'Emergency squawk code is:', choices: ['1200', '7500', '7600', '7700'], correct: 3, explanation: '7700 = emergency. 7600 = lost comm. 7500 = hijack. 1200 = VFR.' },
  { chapter: 'Airspace & Charts', q: 'UNICOM serves primarily as:', choices: ['ATC frequency', 'Private operator service radio (fuel, parking)', 'Emergency freq', 'Weather'], correct: 1, explanation: 'UNICOM is FBO-operated for services. May double as CTAF at fields without one assigned.' },

  // === Airport Ops & Wake Turbulence (5) ===
  { chapter: 'Airport Ops & Wake', q: 'Standard traffic pattern at non-towered field uses:', choices: ['Right turns by default', 'Left turns unless indicated', 'Either direction', 'Straight-ins'], correct: 1, explanation: 'FAR 91.126 default = LEFT turns. Check chart/segmented circle for right traffic.' },
  { chapter: 'Airport Ops & Wake', q: 'You are landing behind a heavy 757. You should:', choices: ['Land short of its touchdown point', 'Stay above its flight path and land beyond its touchdown', 'Land at same point', 'Request another runway'], correct: 1, explanation: 'Vortices sit below and short of the heavy\'s path. Fly above, land beyond.' },
  { chapter: 'Airport Ops & Wake', q: 'Wake vortices are worst behind an aircraft that is:', choices: ['Light, dirty, fast', 'Heavy, clean, slow', 'Heavy, dirty, fast', 'Any'], correct: 1, explanation: 'Heavy (max lift) + clean (no flap dampening) + slow (high AOA) → strongest vortices.' },
  { chapter: 'Airport Ops & Wake', q: 'Converging aircraft at same altitude (same category): right-of-way goes to:', choices: ['Aircraft on the left', 'Aircraft on the right', 'Faster aircraft', 'Higher aircraft'], correct: 1, explanation: 'FAR 91.113(g): aircraft on the RIGHT has right of way.' },
  { chapter: 'Airport Ops & Wake', q: 'PAPI showing red-over-white means:', choices: ['Too high', 'On glidepath', 'Too low', 'Below glidepath'], correct: 1, explanation: 'Red over white = you\'re alright (on glidepath). Red-red = low. White-white = high.' },

  // === ADM (5) ===
  { chapter: 'ADM', q: 'The antidote for "Anti-authority" is:', choices: ['"Think first"', '"Follow the rules. They are usually right"', '"It could happen to me"', '"Taking chances is foolish"'], correct: 1, explanation: 'Anti-authority ("Don\'t tell me!") is countered by following the rules.' },
  { chapter: 'ADM', q: 'IMSAFE covers all EXCEPT:', choices: ['Illness', 'Medication', 'Stress', 'Skill'], correct: 3, explanation: 'IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, Emotion/Eating. "Skill" is not a letter.' },
  { chapter: 'ADM', q: 'DECIDE stands for:', choices: ['Detect/Estimate/Choose/Identify/Do/Evaluate', 'Detect/Execute/Consider/Identify/Do/Evaluate', 'Decide/Estimate/Choose/Identify/Do/Evaluate', 'Detect/Estimate/Check/Inspect/Do/Evaluate'], correct: 0, explanation: '6-step loop: Detect, Estimate, Choose, Identify, Do, Evaluate.' },
  { chapter: 'ADM', q: 'PAVE checklist assesses:', choices: ['In-flight decisions', 'Preflight risk (Pilot/Aircraft/enVironment/External pressures)', 'Emergencies', 'Radio procedures'], correct: 1, explanation: 'PAVE is for preflight risk management across 4 domains.' },
  { chapter: 'ADM', q: 'Get-home-itis is an example of:', choices: ['Pilot factor', 'External pressure', 'Aircraft factor', 'Weather factor'], correct: 1, explanation: 'External pressure — a leading cause of "press-on" accidents.' },

  // === Emergencies (5) ===
  { chapter: 'Emergencies', q: 'First action on engine failure at altitude:', choices: ['Declare emergency', 'Pitch for best glide', 'Start restart checklist', 'Turn toward airport'], correct: 1, explanation: 'AVIATE first — pitch for Vg to maximize glide.' },
  { chapter: 'Emergencies', q: 'Engine failure at 250 AGL on takeoff. Best action:', choices: ['Turn 180° back to runway', 'Land straight ahead ±30°', 'Retract flaps', 'Apply carb heat'], correct: 1, explanation: 'Below ~500 AGL the "impossible turn" typically stalls aircraft. Land straight.' },
  { chapter: 'Emergencies', q: 'MAYDAY vs. PAN-PAN:', choices: ['MAYDAY = urgency, PAN-PAN = distress', 'MAYDAY = distress (grave/imminent); PAN-PAN = urgency', 'Both mean same', 'MAYDAY is VFR only'], correct: 1, explanation: 'MAYDAY reserved for imminent life danger. PAN-PAN for concern without immediate danger.' },
  { chapter: 'Emergencies', q: 'Ditching in heavy swell with light wind, land:', choices: ['Into wind', 'Parallel to swells', 'Perpendicular to swells', 'Downwind'], correct: 1, explanation: 'Heavy swell + light wind = land parallel to swell long-axis to avoid wave face.' },
  { chapter: 'Emergencies', q: 'In-flight emergency priority order:', choices: ['Communicate, Aviate, Navigate', 'Aviate, Navigate, Communicate', 'Navigate, Communicate, Aviate', 'Aviate, Communicate, Navigate'], correct: 1, explanation: 'Always: AVIATE first, then NAVIGATE, then COMMUNICATE.' },

  // === Aerodynamics (5) ===
  { chapter: 'Aerodynamics', q: 'A wing stalls when:', choices: ['Airspeed drops below VS0', 'Critical AOA is exceeded', 'Power is lost', 'Flaps retract'], correct: 1, explanation: 'Stall defined by AOA, not airspeed. Exceeding critical AOA causes flow separation.' },
  { chapter: 'Aerodynamics', q: 'Load factor in a 60° bank level turn:', choices: ['1.15 G', '1.41 G', '2.0 G', '3.0 G'], correct: 2, explanation: 'LF = 1/cos(60°) = 2.0 G. Stall speed up 41%.' },
  { chapter: 'Aerodynamics', q: 'Which is NOT a left-turning tendency?', choices: ['Torque', 'P-factor', 'Adverse yaw', 'Spiraling slipstream'], correct: 2, explanation: 'Adverse yaw is aileron-related. The four left-turning: torque, P-factor, slipstream, gyroscopic precession.' },
  { chapter: 'Aerodynamics', q: 'Ground effect primarily:', choices: ['Increases lift', 'Reduces induced drag', 'Increases parasite drag', 'Reduces weight'], correct: 1, explanation: 'Wingtip vortices can\'t develop fully → induced drag drops.' },
  { chapter: 'Aerodynamics', q: 'Chord line is:', choices: ['Curve following wing surface', 'Straight line from LE to TE', 'Relative wind direction', 'Flight path'], correct: 1, explanation: 'Chord = straight from leading to trailing edge. Mean camber = curved.' },

  // === Aircraft Systems (5) ===
  { chapter: 'Aircraft Systems', q: 'Aircraft magnetos are powered by:', choices: ['Battery', 'Alternator', 'Engine rotation (self-powered)', 'Exhaust'], correct: 2, explanation: 'Magnetos generate their own voltage. Engine keeps running through electrical failures.' },
  { chapter: 'Aircraft Systems', q: 'Carb ice conditions:', choices: ['Below freezing dry air', 'Warm dry air', '20-70°F with high humidity', 'Only during precipitation'], correct: 2, explanation: 'Fuel vaporization + venturi drops temp 30-70°F; 20-70°F ambient + humidity = ice likely.' },
  { chapter: 'Aircraft Systems', q: 'Detonation is:', choices: ['Ignition before spark', 'Auto-ignition AFTER spark (damaging)', 'Normal combustion', 'Engine fire'], correct: 1, explanation: 'Detonation = post-spark auto-ignition. Pre-ignition = before spark. Both destroy engines.' },
  { chapter: 'Aircraft Systems', q: 'Turbocharger is powered by:', choices: ['Battery', 'Crankshaft gear', 'Exhaust gas', 'Electrical motor'], correct: 2, explanation: 'Turbocharger uses exhaust energy (free). Supercharger uses crankshaft (parasitic).' },
  { chapter: 'Aircraft Systems', q: 'Cabin CO often comes from:', choices: ['Leaking fuel tank', 'Cracked muffler leaking into cabin heat air', 'Battery vent', 'Oil breather'], correct: 1, explanation: 'Heat is exchanged around the exhaust muffler. A crack dumps CO-rich exhaust into cabin air.' },

  // === Flight Instruments (5) ===
  { chapter: 'Flight Instruments', q: 'If the STATIC port is blocked:', choices: ['ASI, ALT, VSI all read zero', 'ALT & VSI freeze; ASI reads low in climb, high in descent', 'Only ASI affected', 'Instruments unaffected'], correct: 1, explanation: 'Static feeds all three. ALT/VSI freeze; ASI readings become incorrect.' },
  { chapter: 'Flight Instruments', q: 'TAIPD altitude used for PERFORMANCE is:', choices: ['True', 'Indicated', 'Pressure', 'Density'], correct: 3, explanation: 'Density altitude corrects pressure altitude for temperature — directly affects performance.' },
  { chapter: 'Flight Instruments', q: 'UNOS: turning TO north in Northern Hemisphere causes compass to:', choices: ['Lead the turn', 'Lag the turn — roll out BEFORE reaching 360°', 'Be accurate', 'Spin'], correct: 1, explanation: 'UNOS: Undershoot North (compass lags). Roll out early by ~the latitude.' },
  { chapter: 'Flight Instruments', q: 'Top of the GREEN arc on ASI is:', choices: ['VNE', 'VFE', 'VNO (max structural cruise)', 'VS0'], correct: 2, explanation: 'Green arc is normal range, VS1 to VNO. Yellow arc starts at VNO, ends at VNE.' },
  { chapter: 'Flight Instruments', q: '"High to low, look out below" warns that altimeter:', choices: ['Reads correctly', 'Over-reads in low pressure area — aircraft actually LOWER', 'Under-reads', 'Freezes'], correct: 1, explanation: 'Without updating altimeter setting, entering lower pressure = altimeter shows higher than reality.' },

  // === Aeromedical (5) ===
  { chapter: 'Aeromedical', q: 'CO poisoning causes which type of hypoxia?', choices: ['Hypoxic', 'Hypemic', 'Stagnant', 'Histotoxic'], correct: 1, explanation: 'Hypemic: blood can\'t carry O₂. CO binds hemoglobin 200-300× stronger.' },
  { chapter: 'Aeromedical', q: 'Crew oxygen required above 14,000 MSL per FAR 91.211:', choices: ['Only if flight >30 min', 'Continuously', 'Only if PIC requests', 'Only for pax'], correct: 1, explanation: 'Crew must use O₂ continuously above 14,000 MSL. 12,500-14,000 only if >30 min.' },
  { chapter: 'Aeromedical', q: 'The leans is an illusion where:', choices: ['Slow roll unnoticed, correction feels like opposite bank', 'Aircraft pitches up', 'Airspeed drops', 'Instruments fail'], correct: 0, explanation: 'Inner ear misses slow roll; abrupt correction feels like NEW bank in opposite direction.' },
  { chapter: 'Aeromedical', q: 'After SCUBA diving at depth, wait ___ before flying above 8,000 MSL:', choices: ['2 hrs', '4 hrs', '12 hrs (controlled ascent) / 24 hrs (uncontrolled)', '48 hrs'], correct: 2, explanation: 'Dissolved nitrogen expands at altitude — risk of decompression sickness.' },
  { chapter: 'Aeromedical', q: 'At night, to detect faint targets, use:', choices: ['Direct central vision', 'Off-center vision ~10° to the side', 'Closed eyes', 'Rapid blinking'], correct: 1, explanation: 'Rods (night receptors) are densest ~10° off fovea.' },

  // === Regulations (5) ===
  { chapter: 'Regulations', q: 'Required onboard documents (AROW) are:', choices: ['Airworthiness, Registration, Operating limitations, Weight & Balance', 'Medical, logbook, ID, certificate', 'Checklist only', 'Just pilot cert'], correct: 0, explanation: 'AROW: in the AIRCRAFT. Pilot carries separate documents.' },
  { chapter: 'Regulations', q: 'Flight Review interval:', choices: ['12 cal months', '24 cal months', '36 cal months', 'Once ever'], correct: 1, explanation: '24 calendar months; 1 hr ground + 1 hr flight with CFI.' },
  { chapter: 'Regulations', q: 'Immediate NTSB notification required for:', choices: ['Any engine issue', 'Substantial damage, serious injury, fatality, fire, control malfunction', 'Minor incident', 'All flights'], correct: 1, explanation: 'NTSB 830.5 triggers.' },
  { chapter: 'Regulations', q: 'Transponder inspection required every:', choices: ['6 months', '12 months', '24 calendar months', '100 hours'], correct: 2, explanation: 'FAR 91.413: 24 calendar months by certified shop.' },
  { chapter: 'Regulations', q: '100-hour inspection required:', choices: ['For all aircraft', 'Only for hire / flight instruction', 'Only IFR', 'Only if owner requests'], correct: 1, explanation: '100-hour ONLY for aircraft used for hire or instruction.' },

  // === Weight & Balance (5) ===
  { chapter: 'Weight & Balance', q: 'CG is computed as:', choices: ['Total weight × total arm', 'Total moment ÷ total weight', 'Sum of arms', 'Empty weight ÷ gross'], correct: 1, explanation: 'CG = Σ moments / Σ weights.' },
  { chapter: 'Weight & Balance', q: 'Forward CG causes:', choices: ['Lower stall speed, faster cruise', 'Higher stall speed, more stability, harder flare', 'No change', 'Unrecoverable spin'], correct: 1, explanation: 'Fwd CG requires more tail-down force → more wing loading → higher stall speed.' },
  { chapter: 'Weight & Balance', q: 'Aft CG beyond limit can result in:', choices: ['Safer aircraft', 'Unrecoverable stall / instability', 'Faster cruise only', 'No effect'], correct: 1, explanation: 'Beyond aft limit, stability drops; recovery from stall may be impossible.' },
  { chapter: 'Weight & Balance', q: 'Moment equals:', choices: ['Weight ÷ arm', 'Weight + arm', 'Weight × arm', 'Arm − weight'], correct: 2, explanation: 'Moment = weight × arm (rotational force).' },
  { chapter: 'Weight & Balance', q: 'Useful load =', choices: ['Empty weight', 'Fuel only', 'Max gross weight − empty weight', 'Pilot weight'], correct: 2, explanation: 'Useful load: max gross − empty. What you can load with people/fuel/bags.' },

  // === Aviation Weather (5) ===
  { chapter: 'Aviation Weather', q: '"BKN035" means:', choices: ['Broken clouds at 3,500 AGL', 'Broken clouds at 35,000 MSL', 'Broken clouds at 35 feet', 'No clouds'], correct: 0, explanation: 'Cloud heights in METAR = hundreds of feet AGL; BKN035 = 3,500 AGL. BKN = ceiling.' },
  { chapter: 'Aviation Weather', q: 'AIRMET Zulu alerts for:', choices: ['IFR conditions', 'Moderate turbulence', 'Moderate icing / freezing level', 'Thunderstorms'], correct: 2, explanation: 'Sierra=IFR/mtn, Tango=turbulence/wind, Zulu=iCing.' },
  { chapter: 'Aviation Weather', q: 'Convective SIGMET is valid for:', choices: ['30 min', '2 hours', '4 hours', '6 hours'], correct: 1, explanation: 'Convective SIGMET: issued hourly, 2-hr validity.' },
  { chapter: 'Aviation Weather', q: 'Winds aloft "0945-08" means:', choices: ['090° @ 45 kt at 800 ft', '090° at 45 kt, −8°C', '9° at 45 kt, −08°C', '95 at 4.5 kt'], correct: 1, explanation: 'First 2 digits × 10 = dir (090°); next 2 = speed (45 kt); temp follows (-8°C).' },
  { chapter: 'Aviation Weather', q: 'METAR wind "31008KT" is:', choices: ['Wind 310° at 8 kt', 'Wind 31° at 8 kt', 'Wind 310° at 80 kt', 'Calm'], correct: 0, explanation: '310° direction at 8 kt. No gust.' }
];
