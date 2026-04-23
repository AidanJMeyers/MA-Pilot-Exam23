import React, { useEffect, useState } from 'react';
import QuestionItem from './QuestionItem.jsx';
import { storage } from '../storage';

export default function ExamView({ exam, chapters }) {
  const [state, setState] = useState({});
  const [tick, setTick] = useState(0);

  useEffect(() => {
    (async () => {
      const s = {};
      await Promise.all(exam.map(async (_, i) => {
        s[i] = await storage.get(`studyguide:exam:q${i}`);
      }));
      setState(s);
    })();
  }, [tick]);

  const answered = Object.values(state).filter((s) => s && s.submitted);
  const correct = answered.filter((s) => s.correct).length;
  const total = exam.length;
  const done = answered.length === total;

  const byChapter = {};
  exam.forEach((q, i) => {
    const s = state[i];
    if (!s || !s.submitted) return;
    const ch = q.chapter || 'Other';
    byChapter[ch] = byChapter[ch] || { correct: 0, total: 0 };
    byChapter[ch].total++;
    if (s.correct) byChapter[ch].correct++;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-indigo-700 via-sky-700 to-emerald-700 text-white rounded-xl p-6 mb-6 shadow-lg">
        <h1 className="text-3xl font-bold">Practice Exam</h1>
        <p className="text-indigo-100 mt-1">{total} multiple-choice questions covering all chapters. Submit each individually.</p>
      </div>

      <div className="sticky top-0 z-10 bg-white border border-slate-200 rounded-xl p-4 mb-6 shadow-sm flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">{correct}</div>
            <div className="text-xs text-slate-500">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">{answered.length}/{total}</div>
            <div className="text-xs text-slate-500">Answered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-600">{answered.length ? Math.round((correct/answered.length)*100) : 0}%</div>
            <div className="text-xs text-slate-500">Running Score</div>
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <div className="text-xs text-slate-500 mb-1">Progress</div>
          <div className="w-full h-2 bg-slate-100 rounded overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500" style={{ width: `${(answered.length / total) * 100}%` }} />
          </div>
        </div>
      </div>

      {done && (
        <div className="bg-white border border-emerald-200 rounded-xl p-5 mb-6 shadow">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Exam Complete — Final Score: {correct}/{total} ({Math.round((correct/total)*100)}%)</h2>
          <h3 className="text-sm font-semibold text-slate-700 mb-2 mt-4">Breakdown by Chapter</h3>
          <ul className="space-y-1">
            {Object.entries(byChapter).map(([ch, v]) => {
              const pct = v.total ? Math.round((v.correct/v.total)*100) : 0;
              return (
                <li key={ch} className="flex items-center gap-3">
                  <span className="w-48 text-sm text-slate-700">{ch}</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded overflow-hidden">
                    <div className={`h-full ${pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-yellow-400' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 w-20 text-right">{v.correct}/{v.total} · {pct}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {exam.map((q, i) => (
        <QuestionItem
          key={i}
          storageKey={`studyguide:exam:q${i}`}
          q={q}
          index={i}
          onAnswered={() => setTick((t) => t + 1)}
        />
      ))}
    </div>
  );
}
