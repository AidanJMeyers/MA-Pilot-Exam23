# MA Pilot Exam 2 — Interactive Study Dashboard

Interactive React study guide covering 11 chapters for the Master Aviator / Private Pilot Exam 2 curriculum:

1. Airspace, Charts & Radio
2. Airport Operations & Wake Turbulence
3. Aeronautical Decision Making (ADM)
4. Emergencies
5. Aerodynamics
6. Aircraft Systems
7. Flight Instruments
8. Aeromedical Factors
9. Regulations & Documents
10. Weight & Balance
11. Aviation Weather Services

Plus a 50-question proportional **Practice Exam**.

## Features

- **Tab-based layout** with sidebar nav; completion badges per chapter.
- **Three sub-tabs per chapter**: Study Guide / Key Review / Practice Questions.
- **Study Guide**: thematic blocks with explanations, inline SVG diagrams, review checkbox, and 1–5 confidence slider.
- **Key Review**: fast-recall vocab, laws, methods/mnemonics, and helpful diagrams.
- **Practice Questions**: 16–25 MCQs per chapter, submit-per-question with detailed explanations and score tracking.
- **Practice Exam**: 50 proportional questions with running score and by-chapter breakdown.
- **Persistent state** via `window.storage` (falls back to `localStorage`).
- **Reset All Progress** button with confirmation.
- **Mobile-friendly**; Tailwind styling with confidence color coding (red → green for 1-5).

## Getting started

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build → dist/
```

## Data persistence

All progress persists through page reloads via hierarchical keys:

- `studyguide:ch{N}:block{M}:reviewed` — boolean
- `studyguide:ch{N}:block{M}:confidence` — 1..5
- `studyguide:ch{N}:q{X}` — `{ selected, submitted, correct }`
- `studyguide:exam:q{X}` — same shape as chapter questions

The storage wrapper prefers `window.storage` if available; otherwise `localStorage`.

## Tech

Vite + React 18 + Tailwind CSS. Pure JSX, no UI libraries.
