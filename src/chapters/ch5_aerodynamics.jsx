import React from 'react';
import { Callout, Table, Pill } from '../components/Visual.jsx';

const FourForces = () => (
  <svg viewBox="0 0 520 320" className="w-full max-w-lg">
    <rect x="0" y="0" width="520" height="320" fill="#eff6ff" />
    {/* Airplane */}
    <g transform="translate(260,160)">
      <path d="M -80 0 L 80 0 L 70 -10 L -70 -5 Z" fill="#1e40af" />
      <path d="M -10 0 L 0 -60 L 10 -60 L 5 0 Z" fill="#1e40af" />
      <path d="M -10 0 L 0 40 L 10 40 L 5 0 Z" fill="#1e40af" />
      <path d="M 50 -5 L 70 -25 L 78 -25 L 70 -5 Z" fill="#1e40af" />
    </g>
    {/* Lift - up */}
    <line x1="260" y1="150" x2="260" y2="40" stroke="#22c55e" strokeWidth="4" markerEnd="url(#up)" />
    <text x="275" y="80" fontSize="16" fontWeight="bold" fill="#15803d">LIFT</text>
    {/* Weight - down */}
    <line x1="260" y1="180" x2="260" y2="290" stroke="#dc2626" strokeWidth="4" markerEnd="url(#down)" />
    <text x="275" y="250" fontSize="16" fontWeight="bold" fill="#991b1b">WEIGHT</text>
    {/* Thrust - right */}
    <line x1="340" y1="160" x2="450" y2="160" stroke="#0ea5e9" strokeWidth="4" markerEnd="url(#right)" />
    <text x="360" y="150" fontSize="16" fontWeight="bold" fill="#0369a1">THRUST</text>
    {/* Drag - left */}
    <line x1="180" y1="160" x2="70" y2="160" stroke="#f97316" strokeWidth="4" markerEnd="url(#left)" />
    <text x="85" y="150" fontSize="16" fontWeight="bold" fill="#9a3412">DRAG</text>
    <defs>
      {[
        { id: 'up', color: '#22c55e' }, { id: 'down', color: '#dc2626' },
        { id: 'right', color: '#0ea5e9' }, { id: 'left', color: '#f97316' }
      ].map((m) => (
        <marker key={m.id} id={m.id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill={m.color} />
        </marker>
      ))}
    </defs>
    <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#334155">Four Forces in Equilibrium (straight & level, unaccelerated flight)</text>
    <text x="20" y="305" fontSize="11" fill="#334155">Lift = Weight · Thrust = Drag</text>
  </svg>
);

const Airfoil = () => (
  <svg viewBox="0 0 540 260" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="260" fill="#f8fafc" />
    {/* Airfoil shape */}
    <path d="M 100 140 Q 180 70 350 110 Q 420 140 440 145 Q 250 160 100 145 Z" fill="#64748b" stroke="#1e293b" strokeWidth="2" />
    {/* Chord line */}
    <line x1="100" y1="143" x2="440" y2="143" stroke="#dc2626" strokeDasharray="4 3" />
    <text x="260" y="165" fontSize="11" fill="#991b1b">Chord line</text>
    {/* Relative wind */}
    <line x1="30" y1="180" x2="140" y2="155" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#rwi)" />
    <text x="30" y="200" fontSize="11" fontWeight="bold" fill="#0369a1">Relative wind</text>
    {/* AOA arc */}
    <path d="M 140 143 A 28 28 0 0 0 130 167" fill="none" stroke="#7c3aed" strokeWidth="2" />
    <text x="115" y="175" fontSize="11" fontWeight="bold" fill="#5b21b6">α (AOA)</text>
    {/* Mean camber line */}
    <path d="M 100 142 Q 180 100 350 125 Q 420 140 440 144" fill="none" stroke="#059669" strokeDasharray="3 3" />
    <text x="260" y="105" fontSize="11" fill="#047857">Mean camber line</text>
    {/* Labels */}
    <text x="85" y="138" fontSize="11" fill="#334155">LE</text>
    <text x="445" y="143" fontSize="11" fill="#334155">TE</text>
    <defs>
      <marker id="rwi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="#0ea5e9" />
      </marker>
    </defs>
    <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#334155">Airfoil anatomy — chord, camber, LE/TE, relative wind, angle of attack</text>
  </svg>
);

const StallAOA = () => (
  <svg viewBox="0 0 540 300" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="300" fill="#fff7ed" />
    <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#334155">Stall occurs at critical AOA — regardless of airspeed, attitude, or weight.</text>
    {[
      { x: 30, a: '4°', attached: true, label: 'Low AOA (cruise)', flow: 'Smooth laminar flow — full lift' },
      { x: 200, a: '12°', attached: true, label: 'High AOA', flow: 'Flow still attached — max lift' },
      { x: 370, a: '18°+', attached: false, label: 'Critical AOA', flow: 'Flow separates — STALL' }
    ].map((s, i) => (
      <g key={i} transform={`translate(${s.x}, 50)`}>
        <rect width="150" height="190" fill={s.attached ? '#d1fae5' : '#fee2e2'} stroke={s.attached ? '#059669' : '#dc2626'} strokeWidth="2" rx="8" />
        <g transform={`translate(75, 80) rotate(${s.a === '4°' ? -4 : s.a === '12°' ? -12 : -18})`}>
          <ellipse cx="0" cy="0" rx="50" ry="8" fill="#475569" />
        </g>
        {/* Flow lines */}
        {s.attached ? (
          <>
            {[0, 15, 30, -15].map((y) => (
              <path key={y} d={`M 10 ${80+y} Q 75 ${75+y} 140 ${80+y}`} fill="none" stroke="#0891b2" strokeWidth="1.5" />
            ))}
          </>
        ) : (
          <>
            <path d="M 10 80 Q 75 80 100 70" fill="none" stroke="#0891b2" strokeWidth="1.5" />
            <path d="M 100 70 Q 110 50 115 80" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M 115 80 Q 120 95 130 85" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M 130 90 Q 135 110 140 95" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
          </>
        )}
        <text x="75" y="145" fontSize="12" fontWeight="bold" textAnchor="middle" fill={s.attached ? '#059669' : '#dc2626'}>{s.a}</text>
        <text x="75" y="162" fontSize="10" textAnchor="middle" fill="#334155">{s.label}</text>
        <text x="75" y="178" fontSize="9" textAnchor="middle" fill="#475569">{s.flow}</text>
      </g>
    ))}
    <text x="270" y="275" fontSize="11" fill="#334155" textAnchor="middle">Critical AOA ≈ 15–20° for most GA airfoils — the exact number is a wing property.</text>
  </svg>
);

const LoadFactor = () => (
  <svg viewBox="0 0 520 300" className="w-full max-w-md">
    <rect x="0" y="0" width="520" height="300" fill="#f0f9ff" />
    <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#334155">Load Factor vs. Bank Angle</text>
    <line x1="60" y1="260" x2="490" y2="260" stroke="#334155" strokeWidth="2" />
    <line x1="60" y1="40" x2="60" y2="260" stroke="#334155" strokeWidth="2" />
    {/* axes labels */}
    {[0, 30, 45, 60, 75, 80].map((b, i) => (
      <text key={b} x={60 + (b / 80) * 400} y="278" fontSize="10" fill="#334155" textAnchor="middle">{b}°</text>
    ))}
    {[1, 2, 3, 4, 5, 6].map((g) => (
      <g key={g}>
        <line x1="60" y1={260 - (g - 1) * 44} x2="470" y2={260 - (g - 1) * 44} stroke="#e2e8f0" />
        <text x="50" y={264 - (g - 1) * 44} fontSize="10" fill="#334155" textAnchor="end">{g}G</text>
      </g>
    ))}
    {/* Curve: load factor = 1/cos(bank) */}
    {(() => {
      const points = [];
      for (let b = 0; b <= 80; b++) {
        const lf = 1 / Math.cos((b * Math.PI) / 180);
        const x = 60 + (b / 80) * 400;
        const y = 260 - (lf - 1) * 44;
        if (y < 30) continue;
        points.push(`${x},${y}`);
      }
      return <polyline fill="none" stroke="#0ea5e9" strokeWidth="3" points={points.join(' ')} />;
    })()}
    {/* Key markers */}
    {[
      { b: 30, lf: 1.15, color: '#22c55e' },
      { b: 45, lf: 1.41, color: '#eab308' },
      { b: 60, lf: 2.00, color: '#f97316' },
      { b: 75, lf: 3.86, color: '#dc2626' }
    ].map((m) => (
      <g key={m.b}>
        <circle cx={60 + (m.b / 80) * 400} cy={260 - (m.lf - 1) * 44} r="5" fill={m.color} />
        <text x={60 + (m.b / 80) * 400} y={250 - (m.lf - 1) * 44} fontSize="10" fontWeight="bold" textAnchor="middle" fill={m.color}>{m.lf}G</text>
      </g>
    ))}
    <text x="280" y="295" fontSize="10" fill="#334155" textAnchor="middle">60° bank = 2G · stall speed increases by √2 (≈41%)</text>
  </svg>
);

const LeftTurnForces = () => (
  <svg viewBox="0 0 560 280" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="280" fill="#fefce8" />
    <text x="20" y="25" fontSize="13" fontWeight="bold" fill="#334155">The 4 Left-Turning Tendencies (P-Factor, Torque, Spiraling Slipstream, Gyroscopic)</text>
    {[
      { x: 20, c: '#7c3aed', l: '1', t: 'Torque reaction', d: 'Newton\'s 3rd: prop turns right (CW from cockpit), aircraft rolls LEFT. Strongest at high power/low speed.' },
      { x: 150, c: '#0891b2', l: '2', t: 'P-factor (asymmetric thrust)', d: 'At high AOA, descending prop blade on right takes bigger bite → more thrust on right → yaws LEFT.' },
      { x: 290, c: '#dc2626', l: '3', t: 'Spiraling slipstream', d: 'Prop wash wraps around fuselage, strikes LEFT side of vertical stab → pushes tail right, yaws LEFT.' },
      { x: 430, c: '#059669', l: '4', t: 'Gyroscopic precession', d: 'Force applied to spinning prop reacts 90° ahead in direction of rotation (mostly on tailwheel takeoff: lifting tail yaws LEFT).' }
    ].map((f, i) => (
      <g key={i}>
        <rect x={f.x} y="50" width="120" height="210" rx="8" fill={f.c} fillOpacity="0.1" stroke={f.c} strokeWidth="2" />
        <circle cx={f.x + 60} cy="78" r="18" fill={f.c} />
        <text x={f.x + 60} y="85" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">{f.l}</text>
        <text x={f.x + 60} y="112" fontSize="11" fontWeight="bold" textAnchor="middle" fill={f.c}>{f.t}</text>
        <foreignObject x={f.x + 5} y="120" width="110" height="130">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize: '10px', color: '#374151', lineHeight: '1.35'}}>{f.d}</div>
        </foreignObject>
      </g>
    ))}
  </svg>
);

const GroundEffect = () => (
  <svg viewBox="0 0 560 260" className="w-full max-w-lg">
    <rect x="0" y="0" width="560" height="260" fill="#f0fdf4" />
    <rect x="0" y="210" width="560" height="50" fill="#365314" />
    <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#334155">Ground Effect — within ~1 wingspan of the surface</text>
    {/* Wing high */}
    <rect x="100" y="70" width="120" height="6" fill="#1e40af" />
    <text x="115" y="60" fontSize="10" fill="#334155">~1+ wingspan above</text>
    {/* Vortex large */}
    <circle cx="230" cy="100" r="20" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3 2" />
    <path d="M 230 80 Q 250 90 245 110 Q 240 125 220 120 Q 205 110 215 90 Q 225 80 230 80" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
    <text x="250" y="100" fontSize="10" fill="#5b21b6">Full vortex = induced drag</text>
    {/* Wing low */}
    <rect x="330" y="180" width="120" height="6" fill="#1e40af" />
    <text x="345" y="170" fontSize="10" fill="#334155">Within 1 wingspan</text>
    {/* Restricted vortex */}
    <ellipse cx="460" cy="195" rx="15" ry="6" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3 2" />
    <text x="330" y="205" fontSize="10" fill="#5b21b6">Vortex compressed → less induced drag</text>
    <text x="20" y="248" fontSize="11" fill="#334155">Effects: reduced induced drag, reduced required power, floating tendency on landing, "stuck" feeling on takeoff until out of effect.</text>
  </svg>
);

const BernoulliNewton = () => (
  <svg viewBox="0 0 540 300" className="w-full max-w-lg">
    <rect x="0" y="0" width="540" height="300" fill="#f8fafc" />
    <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#334155">Lift comes from BOTH Bernoulli AND Newton</text>
    <rect x="30" y="45" width="240" height="240" fill="#e0f2fe" stroke="#0369a1" />
    <text x="40" y="65" fontSize="12" fontWeight="bold" fill="#0369a1">BERNOULLI (pressure)</text>
    <path d="M 55 160 Q 130 100 230 145 Q 180 155 55 160 Z" fill="#64748b" />
    <path d="M 45 115 Q 145 115 250 115" fill="none" stroke="#0ea5e9" strokeWidth="2" />
    <path d="M 45 100 Q 145 90 250 95" fill="none" stroke="#0ea5e9" strokeWidth="2" />
    <text x="60" y="95" fontSize="10" fill="#0369a1">Faster flow over top → lower pressure</text>
    <text x="60" y="195" fontSize="10" fill="#0369a1">Slower flow underneath → higher pressure</text>
    <text x="60" y="255" fontSize="10" fill="#0369a1">Δ pressure = net UPWARD force</text>
    <text x="60" y="275" fontSize="10" fontStyle="italic" fill="#334155">P + ½ρv² = constant</text>

    <rect x="290" y="45" width="230" height="240" fill="#fef3c7" stroke="#d97706" />
    <text x="300" y="65" fontSize="12" fontWeight="bold" fill="#9a3412">NEWTON (momentum)</text>
    <path d="M 315 160 Q 390 100 490 145 Q 440 155 315 160 Z" fill="#64748b" />
    <path d="M 305 120 L 475 125" stroke="#dc2626" strokeWidth="2" />
    <path d="M 475 125 L 495 165" stroke="#dc2626" strokeWidth="2" markerEnd="url(#downArrow)" />
    <text x="400" y="180" fontSize="10" fill="#9a3412">Air deflected DOWN</text>
    <text x="400" y="195" fontSize="10" fill="#9a3412">→ reaction force UP</text>
    <text x="300" y="255" fontSize="10" fill="#9a3412">Newton's 3rd: wing pushes air down,</text>
    <text x="300" y="270" fontSize="10" fill="#9a3412">air pushes wing up (equal & opposite).</text>
    <defs>
      <marker id="downArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626" />
      </marker>
    </defs>
  </svg>
);

export default {
  id: 5,
  title: 'Aerodynamics',
  subtitle: 'Four forces, Bernoulli & Newton, airfoils, stalls, spins, load factor, stability, ground effect, left-turning tendencies.',
  blocks: [
    {
      id: 'four-forces',
      title: 'The Four Forces of Flight',
      subtitle: 'Lift, Weight, Thrust, Drag — and their equilibrium states.',
      content: (
        <>
          <p>In <b>straight-and-level, unaccelerated flight</b>, the four forces are in equilibrium: <b>Lift = Weight</b> and <b>Thrust = Drag</b>. Any deviation accelerates the aircraft in that direction.</p>
          <div className="flex justify-center my-3"><FourForces /></div>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Lift</b>: perpendicular to the relative wind, produced by the wing. Depends on AOA, airspeed², wing area, air density, and shape.</li>
            <li><b>Weight</b>: downward force of gravity acting through CG.</li>
            <li><b>Thrust</b>: forward force produced by the propeller (or jet exhaust).</li>
            <li><b>Drag</b>: opposes motion. Two main types: <b>parasite</b> (skin friction, form, interference) and <b>induced</b> (byproduct of lift, ↑ at low speed/high AOA).</li>
          </ul>
          <Callout kind="tip" title="Drag curve"><b>Total drag</b> is a "U-shape" curve: parasite drag rises with speed², induced drag drops with speed. The bottom of the U is L/D max — your best glide and max endurance speed.</Callout>
        </>
      )
    },
    {
      id: 'bernoulli-newton',
      title: 'Bernoulli & Newton — How Wings Make Lift',
      subtitle: 'Both principles work simultaneously, not in competition.',
      content: (
        <>
          <p>Lift is explained by <b>two complementary physics principles</b>:</p>
          <div className="flex justify-center my-3"><BernoulliNewton /></div>
          <p><b>Bernoulli's principle</b>: in fluid flow, pressure drops where velocity increases. Air over a cambered upper wing surface accelerates, creating lower pressure above than below — net upward force.</p>
          <p><b>Newton's 3rd law</b>: the wing deflects air downward (downwash); by reaction, air pushes the wing up. An airfoil at positive AOA both accelerates flow AND deflects air downward — Bernoulli + Newton are the same event described two ways.</p>
          <p><b>Lift equation:</b> <code className="bg-slate-100 px-1 rounded">L = ½ ρ V² S C_L</code> where ρ is density, V is velocity, S is wing area, C_L is coefficient of lift (depends on AOA and airfoil shape).</p>
        </>
      )
    },
    {
      id: 'airfoil',
      title: 'Airfoil Anatomy',
      subtitle: 'Chord, camber, leading/trailing edge, angle of incidence, angle of attack.',
      content: (
        <>
          <div className="flex justify-center my-3"><Airfoil /></div>
          <Table
            headers={['Term', 'Definition']}
            rows={[
              ['Leading edge (LE)', 'Front edge of the airfoil, first to meet the air.'],
              ['Trailing edge (TE)', 'Aft edge where upper and lower flow rejoin.'],
              ['Chord line', 'Straight line from LE to TE.'],
              ['Mean camber line', 'Curved line equidistant between upper and lower surfaces; indicates airfoil curvature.'],
              ['Angle of Attack (AOA)', 'Angle between chord line and RELATIVE WIND. Pilot controls directly.'],
              ['Angle of Incidence', 'Angle between chord line and longitudinal axis of aircraft. FIXED at manufacture.'],
              ['Relative wind', 'Direction of air flow relative to the airfoil — always opposite of flight path.']
            ]}
          />
          <Callout kind="info" title="AOA vs. pitch attitude">AOA and pitch attitude are NOT the same. In a steep descent the pitch attitude could be nose-down but AOA could be high. A stall is defined by AOA, not attitude.</Callout>
        </>
      )
    },
    {
      id: 'stalls',
      title: 'Stalls — Critical AOA',
      subtitle: 'A wing stalls at critical AOA, NOT a specific airspeed.',
      content: (
        <>
          <p>A <b>stall</b> happens when AOA exceeds the <b>critical AOA</b> (~15–20° for most GA wings). Flow separates from the upper surface, lift collapses, and the wing drops. Airspeed, bank, attitude, and weight are secondary — AOA is king.</p>
          <div className="flex justify-center my-3"><StallAOA /></div>
          <p><b>Factors that change stall SPEED</b> (but not critical AOA):</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Weight</b> ↑ → stall speed ↑ (heavier aircraft needs higher V to generate same lift).</li>
            <li><b>Load factor (bank/pull)</b> ↑ → stall speed ↑ by √(load factor).</li>
            <li><b>CG forward</b> → stall speed ↑ (longer tail arm, more "weight" on wing).</li>
            <li><b>Flaps extended</b> → stall speed ↓ (higher C_L max).</li>
            <li><b>Power on</b> → stall speed ↓ slightly (propwash over wings, thrust component).</li>
            <li><b>Turbulence / gusts</b> can instantaneously exceed critical AOA at any airspeed.</li>
          </ul>
          <Callout kind="warn" title="Stall recovery">AOA reduction is the answer. Lower the nose (reduce AOA), add power, level the wings, return to flight path. Power alone does NOT recover a stall — AOA must decrease.</Callout>
        </>
      )
    },
    {
      id: 'spins',
      title: 'Spins',
      subtitle: 'Autorotation — requires a stall AND yaw.',
      content: (
        <>
          <p>A <b>spin</b> is a stalled, yawing, descending condition. Both wings are stalled; one more than the other creates asymmetric lift and drag, driving autorotation.</p>
          <Table
            headers={['Phase', 'What happens']}
            rows={[
              ['Entry', 'Aircraft stalled WITH uncoordinated yaw (rudder input, adverse yaw, engine failure at high AOA)'],
              ['Incipient (first ~2 turns)', 'Spin develops. Rotation rate builds, attitude stabilizes.'],
              ['Developed (steady)', 'Constant rotation/attitude/airspeed. Aircraft rolls AND yaws about a vertical axis.'],
              ['Recovery (PARE)', 'Power idle → Ailerons neutral → Rudder opposite rotation → Elevator briskly forward to break stall']
            ]}
          />
          <Callout kind="danger" title="PARE recovery"><b>P</b>ower idle · <b>A</b>ilerons neutral · <b>R</b>udder opposite spin direction · <b>E</b>levator forward to break the stall · when rotation stops, neutralize rudder and pull out of dive. Some POHs vary — KNOW your aircraft's procedure.</Callout>
        </>
      )
    },
    {
      id: 'drag',
      title: 'Drag — Parasite & Induced',
      subtitle: 'The two kinds of drag and the L/D curve.',
      content: (
        <>
          <Table
            headers={['Type', 'Cause', 'Behavior vs. Speed']}
            rows={[
              ['Parasite — Skin friction', 'Surface texture resisting flow', 'Proportional to V²'],
              ['Parasite — Form', 'Shape forcing air around obstacles', 'Proportional to V²'],
              ['Parasite — Interference', 'Wing/fuselage junction mixing', 'Proportional to V²'],
              ['Induced', 'Byproduct of lift (wingtip vortices)', 'Inversely proportional to V² (high at low speed)']
            ]}
          />
          <Callout kind="info" title="L/D max">Where the drag curves intersect is <b>L/D max</b> — minimum total drag. This is your <b>best glide speed (Vg)</b>, best range for jets, and optimum AOA.</Callout>
        </>
      )
    },
    {
      id: 'load-factor',
      title: 'Load Factor & Turning Flight',
      subtitle: 'G-loading with bank angle; stall-speed increase.',
      content: (
        <>
          <p><b>Load factor (G)</b> = lift ÷ weight. In level turns, pilots must generate MORE lift to maintain altitude because vertical component decreases with bank.</p>
          <div className="flex justify-center my-3"><LoadFactor /></div>
          <Table
            headers={['Bank', 'Load Factor', 'Stall speed multiplier', 'Stall speed if VS0 = 50 kt']}
            rows={[
              ['30°', '1.15 G', '1.07×', '53.5 kt'],
              ['45°', '1.41 G', '1.19×', '59.5 kt'],
              ['60°', '2.00 G', '1.41×', '70.7 kt'],
              ['75°', '3.86 G', '1.96×', '98 kt']
            ]}
          />
          <p>Stall speed scales as <b>VS × √(load factor)</b>. In a 60° level turn you must carry ~41% more airspeed above published stall to stay above it.</p>
          <Callout kind="warn" title="Turn physics"><b>Rate of turn</b> increases with steeper bank AND with slower airspeed. <b>Radius of turn</b> decreases with steeper bank OR slower airspeed. Standard-rate turn = 3°/sec → 2 min for 360°.</Callout>
        </>
      )
    },
    {
      id: 'left-turning',
      title: 'Four Left-Turning Tendencies',
      subtitle: 'Torque, P-factor, spiraling slipstream, gyroscopic precession.',
      content: (
        <>
          <p>A typical single-engine prop aircraft wants to turn/yaw LEFT for four independent reasons:</p>
          <div className="flex justify-center my-3"><LeftTurnForces /></div>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><b>Torque reaction:</b> Newton's 3rd. Prop rotates CW (pilot view), so airframe tries to rotate CCW (roll left).</li>
            <li><b>P-factor:</b> At high AOA, descending prop blade (right side, for US engines) has a bigger "bite" than the ascending blade (left side). Asymmetric thrust yaws aircraft LEFT. Greatest at high AOA and high power.</li>
            <li><b>Spiraling slipstream:</b> Prop wash corkscrews around the fuselage and strikes the LEFT side of the vertical tail, pushing it right → nose yaws LEFT.</li>
            <li><b>Gyroscopic precession:</b> A force on a spinning rotor reacts 90° in the direction of rotation. Most notable in tailwheel takeoffs — lifting the tail applies forward force at top, which precesses to a LEFT yaw at the nose.</li>
          </ol>
          <Callout kind="tip" title="Compensate with right rudder">Full-power, low-speed, high-AOA situations (takeoff, climb, go-around) = all four forces at their worst. Rudder pressure to the RIGHT keeps coordinated.</Callout>
        </>
      )
    },
    {
      id: 'ground-effect',
      title: 'Ground Effect',
      subtitle: 'Reduced induced drag when close to the ground.',
      content: (
        <>
          <p><b>Ground effect</b> is the reduction of induced drag when the wing is within about <b>one wingspan</b> of the ground. Wingtip vortices are compressed between the wing and the ground, so they can't develop fully — induced drag drops, and less power is needed for the same lift.</p>
          <div className="flex justify-center my-3"><GroundEffect /></div>
          <p><b>Practical consequences:</b></p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Takeoff:</b> Aircraft may lift off in ground effect but be unable to climb out — "stuck" until enough airspeed is gained.</li>
            <li><b>Landing:</b> "Floating" tendency — aircraft feels reluctant to settle because induced drag drops as you near runway.</li>
            <li><b>Over-rotation / soft-field takeoff</b>: intentionally use ground effect to accelerate after lift-off before climbing out.</li>
          </ul>
        </>
      )
    },
    {
      id: 'stability',
      title: 'Aircraft Stability (All 3 Axes)',
      subtitle: 'Longitudinal, lateral, directional.',
      content: (
        <>
          <Table
            headers={['Axis', 'Rotation', 'Stability name', 'Provided by']}
            rows={[
              ['Longitudinal (nose-to-tail)', 'Roll', 'Lateral stability', 'Wing dihedral, sweep, keel effect'],
              ['Lateral (wingtip-to-wingtip)', 'Pitch', 'Longitudinal stability', 'Horizontal stabilizer, CG position'],
              ['Vertical (through the CG)', 'Yaw', 'Directional stability', 'Vertical fin, fuselage side area']
            ]}
          />
          <Callout kind="tip" title="Dutch roll & spiral instability">These are <i>dynamic</i> stability patterns. <b>Dutch roll</b>: coupled yaw-roll oscillation (strong dihedral + weak directional stability). <b>Spiral instability</b>: slow spiral-down (strong directional + weak lateral). Most GA aircraft are designed spirally slightly unstable to minimize Dutch roll — which is why trim/autopilot are important.</Callout>
        </>
      )
    },
    {
      id: 'propellers',
      title: 'Propellers',
      subtitle: 'Fixed-pitch vs. constant-speed, AOA at the blade.',
      content: (
        <>
          <p>A propeller is a rotating wing. Each blade generates lift (thrust) based on its <b>blade AOA</b> — the angle between the blade's chord and the <i>relative wind experienced by the blade</i> (which combines rotational speed and forward speed).</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>Fixed-pitch</b>: single pitch angle (design compromise between climb and cruise). Throttle controls RPM and power.</li>
            <li><b>Constant-speed</b>: governor adjusts blade pitch to maintain commanded RPM. Throttle sets manifold pressure; prop lever sets RPM.</li>
            <li><b>Feathering</b>: blade pitch aligned with flight path for zero drag (single engine = impossible; twins feather a failed engine).</li>
            <li><b>Reverse pitch</b>: thrust toward nose — braking on landing (turboprops).</li>
          </ul>
          <Callout kind="info" title="MP/RPM rule">On a constant-speed prop, NEVER exceed MP &gt; RPM/100 (e.g., 25" MP with 2,300 RPM is close to over-square at high power — check engine limits in POH).</Callout>
        </>
      )
    },
    {
      id: 'wingtip-vortices',
      title: 'Wingtip Vortices & Induced Drag',
      subtitle: 'The trade-off of lift generation.',
      content: (
        <>
          <p>High-pressure air under the wing spills around the wingtip to the low-pressure area above, creating a rotating vortex. Vortices:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Are the <b>cause of induced drag</b> — energy "wasted" creating them.</li>
            <li>Are worst when wings are generating maximum lift — <b>HEAVY / CLEAN / SLOW</b>.</li>
            <li>Sink ~500 fpm and level off 800-900 ft below the generator.</li>
            <li>Can be mitigated by <b>winglets</b> (interrupt cross-flow) or high aspect ratio wings (glider-style).</li>
          </ul>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      { term: 'AOA', def: 'Angle between chord line and relative wind. Stall depends on AOA only.' },
      { term: 'Chord line', def: 'Straight line from LE to TE of airfoil.' },
      { term: 'Relative wind', def: 'Airflow opposite to flight path.' },
      { term: 'Critical AOA', def: 'AOA beyond which flow separates — stall. ~15-20° typical.' },
      { term: 'Vg (best glide)', def: 'Speed for max L/D; maximum glide distance unpowered.' },
      { term: 'Vs0', def: 'Stall speed in landing configuration (full flaps, gear down).' },
      { term: 'Vs1', def: 'Stall speed in specified clean configuration.' },
      { term: 'Vx / Vy', def: 'Best angle of climb / best rate of climb speeds.' },
      { term: 'Load factor', def: 'Lift ÷ weight. 60° bank = 2G.' },
      { term: 'Dihedral', def: 'Upward angle of wings from root to tip; provides lateral stability.' },
      { term: 'Adverse yaw', def: 'Aileron down = more induced drag → yaw opposite to roll. Coordinate with rudder.' },
      { term: 'P-factor', def: 'Asymmetric propeller loading at high AOA → left yaw.' },
      { term: 'Torque', def: 'Newton 3rd reaction to prop rotation → left roll.' },
      { term: 'Gyroscopic precession', def: 'Force on spinning prop reacts 90° ahead of applied force.' },
      { term: 'Ground effect', def: 'Induced drag reduction within ~1 wingspan of surface.' }
    ],
    laws: [
      { name: "Bernoulli's principle", desc: 'P + ½ρv² = constant. Faster flow = lower pressure.' },
      { name: "Newton's 3rd law", desc: 'Every action has equal & opposite reaction. Wing deflects air down, air pushes wing up.' },
      { name: 'Lift equation', desc: 'L = ½ρV²·S·C_L. Lift depends on density, velocity², wing area, coefficient of lift (AOA).' },
      { name: 'Stall AOA invariant', desc: 'A wing stalls at the critical AOA regardless of airspeed, attitude, weight, or bank.' },
      { name: 'Load factor in turn', desc: 'Load factor = 1 / cos(bank angle). Stall speed scales as √(load factor).' }
    ],
    methods: [
      { name: 'Stall recovery', desc: 'REDUCE AOA (lower nose) → add power → level wings → return to flight path.' },
      { name: 'PARE spin recovery', expand: 'Power/Ailerons/Rudder/Elevator', desc: 'Power idle, ailerons neutral, rudder opposite rotation, elevator forward to break stall.' },
      { name: '4 left-turning tendencies', desc: 'Torque, P-factor, Spiraling slipstream, Gyroscopic precession. All worst at high power/low speed/high AOA.' },
      { name: 'Rate/radius of turn', desc: 'Steeper bank + lower airspeed = higher rate, tighter radius.' },
      { name: 'Std rate turn', desc: '3°/sec = 180° in 60 sec = 360° in 2 minutes.' }
    ],
    diagrams: [
      { title: 'Four forces', visual: <FourForces />, caption: 'Lift/Weight/Thrust/Drag equilibrium.' },
      { title: 'Airfoil anatomy', visual: <Airfoil />, caption: 'Chord, camber, AOA, relative wind.' },
      { title: 'Bernoulli + Newton', visual: <BernoulliNewton />, caption: 'Both produce lift simultaneously.' },
      { title: 'Stall AOA', visual: <StallAOA />, caption: 'Flow separates at critical AOA (~15-20°).' },
      { title: 'Load factor vs bank', visual: <LoadFactor />, caption: '60° bank doubles G — stall speed up 41%.' },
      { title: 'Left-turning tendencies', visual: <LeftTurnForces />, caption: 'Four forces = need right rudder.' },
      { title: 'Ground effect', visual: <GroundEffect />, caption: 'Induced drag compressed below 1 wingspan.' }
    ]
  },
  questions: [
    { q: 'An airfoil stalls when:', choices: ['Airspeed drops below Vs0', 'The critical angle of attack is exceeded', 'Engine quits', 'Flaps are retracted'], correct: 1, explanation: 'Stall is defined by AOA, not airspeed. Exceeding critical AOA separates flow and lift collapses — at ANY airspeed.' },
    { q: 'In a 60° level bank turn, load factor is:', choices: ['1.0 G', '1.41 G', '2.0 G', '3.0 G'], correct: 2, explanation: 'LF = 1/cos(60°) = 1/0.5 = 2.0 G. Stall speed increases by √2 ≈ 41%.' },
    { q: 'Best glide speed (Vg) corresponds to:', choices: ['Minimum drag', 'Maximum lift', 'Maximum thrust', 'Minimum power'], correct: 0, explanation: 'Vg = L/D max, where total drag is minimum for given weight. Maximum glide distance.' },
    { q: 'The 4 left-turning tendencies include all EXCEPT:', choices: ['P-factor', 'Torque', 'Adverse yaw', 'Spiraling slipstream'], correct: 2, explanation: 'Adverse yaw is an aileron effect, not a left-turning tendency. The four are: torque, P-factor, spiraling slipstream, gyroscopic precession.' },
    { q: 'Ground effect primarily:', choices: ['Increases lift', 'Reduces induced drag', 'Increases parasite drag', 'Reduces weight'], correct: 1, explanation: 'Wingtip vortices are restricted near the ground, reducing induced drag (and thus power required).' },
    { q: 'An airfoil\'s chord line is:', choices: ['Curved line equidistant from top and bottom', 'Straight line from LE to TE', 'Relative wind', 'Wing thickness line'], correct: 1, explanation: 'Chord = straight LE to TE. Mean camber line is the curved equidistant line.' },
    { q: 'Angle of incidence is:', choices: ['Between chord and relative wind', 'Between chord and longitudinal axis (fixed at manufacture)', 'Between wing and horizon', 'Between prop and fuselage'], correct: 1, explanation: 'Angle of incidence is fixed by design (wing mount angle). AOA is variable by pilot.' },
    { q: 'Induced drag varies:', choices: ['Directly with velocity²', 'Inversely with velocity²', 'Independent of velocity', 'Only with weight'], correct: 1, explanation: 'Induced drag is inversely proportional to V² — highest at low speed/high AOA.' },
    { q: 'A spin requires:', choices: ['Stall only', 'Yaw only', 'Both stall AND yaw (uncoordinated)', 'High speed'], correct: 2, explanation: 'Both wings stalled AND aircraft yawing. Remove either and spin cannot develop.' },
    { q: 'PARE spin recovery: the "E" stands for:', choices: ['Elevator forward to break stall', 'Emergency declaration', 'Exit aircraft', 'Extend flaps'], correct: 0, explanation: 'Power idle, Ailerons neutral, Rudder opposite, Elevator forward.' },
    { q: 'Which factor does NOT affect stall SPEED?', choices: ['Weight', 'Bank angle', 'Density altitude', 'Critical AOA'], correct: 3, explanation: 'Critical AOA itself is constant — it\'s a wing property. Weight/bank/density altitude change the SPEED at which critical AOA occurs.' },
    { q: 'Newton\'s 3rd law contribution to lift is:', choices: ['Acceleration of air over the top', 'Deflection of air downward → upward reaction', 'Pressure below > pressure above', 'Viscous friction'], correct: 1, explanation: 'Wing deflects air down (downwash); by reaction, air pushes wing up.' },
    { q: 'Dihedral provides:', choices: ['Longitudinal stability', 'Lateral stability', 'Directional stability', 'Load factor reduction'], correct: 1, explanation: 'Wings angled upward provide lateral (roll) stability — when sideslipping, lower wing meets air at higher AOA.' },
    { q: 'Longitudinal stability about the lateral axis is PRIMARILY provided by:', choices: ['Vertical fin', 'Horizontal stabilizer + CG position', 'Dihedral', 'Wingtip washout'], correct: 1, explanation: 'The tail plane and CG location give pitch (longitudinal) stability.' },
    { q: 'A standard-rate turn is:', choices: ['1°/sec', '3°/sec', '6°/sec', '15°/sec'], correct: 1, explanation: '3°/sec = 180° in 1 min = 360° in 2 min.' },
    { q: 'Wingtip vortices are worst behind an aircraft that is:', choices: ['Light, dirty, fast', 'Heavy, clean, slow', 'Heavy, dirty, fast', 'Light, clean, slow'], correct: 1, explanation: 'Heavy (max lift needed), clean (no flaps/gear dampening), slow (highest AOA) = strongest vortices.' },
    { q: 'P-factor is caused by:', choices: ['Prop torque reaction', 'Asymmetric blade thrust at high AOA', 'Spiraling slipstream hitting tail', 'Gyroscopic precession'], correct: 1, explanation: 'At high AOA, the descending blade takes a bigger "bite" than the ascending blade — asymmetric thrust yaws left.' },
    { q: 'On a constant-speed prop, the prop lever controls:', choices: ['Manifold pressure', 'RPM (via governor)', 'Mixture', 'Throttle'], correct: 1, explanation: 'Prop lever sets governor target RPM. Throttle sets MP. Mixture sets fuel/air ratio.' },
    { q: 'Wing sweep primarily affects:', choices: ['Lateral stability at high speed', 'Pitch control', 'Roll rate', 'Stall speed'], correct: 0, explanation: 'Swept wings delay compressibility effects and add lateral stability at transonic speeds.' },
    { q: 'The lift equation shows lift is proportional to:', choices: ['Velocity (V¹)', 'Velocity² (V²)', 'Velocity³ (V³)', 'Independent of velocity'], correct: 1, explanation: 'L = ½ρV²SC_L. Doubling speed quadruples lift.' },
    { q: 'When recovering from a stall, the MOST important action is:', choices: ['Add full power', 'Reduce AOA by lowering the nose', 'Raise the landing gear', 'Level the wings'], correct: 1, explanation: 'Stall recovery = reduce AOA. Power helps but doesn\'t solve the stall without nose-down input.' },
    { q: 'Rate of turn increases when:', choices: ['Bank decreases AND speed increases', 'Bank increases OR speed decreases', 'Only bank increases', 'Only speed increases'], correct: 1, explanation: 'Steeper bank OR lower airspeed increases rate. Radius decreases under same conditions.' },
    { q: 'Forward CG results in:', choices: ['Lower stall speed', 'Higher stall speed', 'Reduced elevator authority only at takeoff', 'No effect on stall'], correct: 1, explanation: 'Forward CG requires more tail-down force, which effectively adds "load" to the wing — higher stall speed.' },
    { q: 'Gyroscopic precession in a tailwheel aircraft is most noticeable when:', choices: ['Taxiing', 'Lifting the tail during takeoff', 'Retracting flaps', 'At altitude'], correct: 1, explanation: 'Raising the tail applies forward force at top of spinning prop disk → precession 90° forward → yaws left.' }
  ]
};
