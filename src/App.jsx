import React, { useEffect, useState } from 'react';
import ChapterView from './components/ChapterView.jsx';
import ExamView from './components/ExamView.jsx';
import { chapters } from './data/chapters.js';
import { exam } from './data/exam.js';
import { storage, resetAll } from './storage';

export default function App() {
  const [active, setActive] = useState(() => localStorage.getItem('studyguide:activeTab') || 'ch1');
  const [progress, setProgress] = useState({});
  const [showReset, setShowReset] = useState(false);

  useEffect(() => { localStorage.setItem('studyguide:activeTab', active); }, [active]);

  // Poll progress for badges
  const refreshProgress = async () => {
    const p = {};
    await Promise.all(chapters.map(async (ch) => {
      const reviewed = await Promise.all(ch.blocks.map((b) =>
        storage.get(`studyguide:ch${ch.id}:block${b.id}:reviewed`)
      ));
      p[`ch${ch.id}`] = { reviewed: reviewed.filter(Boolean).length, total: ch.blocks.length };
    }));
    const examAns = await Promise.all(exam.map((_, i) => storage.get(`studyguide:exam:q${i}`)));
    p['exam'] = {
      reviewed: examAns.filter((s) => s && s.submitted).length,
      total: exam.length
    };
    setProgress(p);
  };

  useEffect(() => {
    refreshProgress();
    const interval = setInterval(refreshProgress, 1500);
    return () => clearInterval(interval);
  }, []);

  const currentChapter = chapters.find((c) => `ch${c.id}` === active);

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-slate-200 min-h-screen sticky top-0 max-h-screen overflow-y-auto scrollbar-thin">
        <div className="p-5 border-b border-slate-800">
          <div className="text-xs uppercase tracking-wider text-sky-400 font-bold">MA Pilot</div>
          <div className="text-xl font-bold text-white mt-1">Exam 2 Study Guide</div>
          <div className="text-xs text-slate-400 mt-1">Interactive dashboard · window.storage</div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {chapters.map((ch) => {
            const p = progress[`ch${ch.id}`] || { reviewed: 0, total: ch.blocks.length };
            const isActive = active === `ch${ch.id}`;
            return (
              <button
                key={ch.id}
                onClick={() => setActive(`ch${ch.id}`)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
                  isActive ? 'bg-sky-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className={`text-xs font-bold mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>{ch.id}</span>
                <span className="flex-1">
                  <div className="font-semibold leading-tight">{ch.title}</div>
                  <div className={`text-[10px] mt-0.5 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>
                    {p.reviewed}/{p.total} reviewed
                  </div>
                </span>
              </button>
            );
          })}
          <div className="my-2 border-t border-slate-800" />
          <button
            onClick={() => setActive('exam')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${
              active === 'exam' ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-base">🎯</span>
            <span className="flex-1">
              <div className="font-semibold">Practice Exam</div>
              <div className={`text-[10px] mt-0.5 ${active === 'exam' ? 'text-emerald-100' : 'text-slate-500'}`}>
                {(progress.exam?.reviewed) || 0}/{exam.length} answered
              </div>
            </span>
          </button>
        </nav>
        <div className="p-3 border-t border-slate-800">
          <button
            onClick={() => setShowReset(true)}
            className="w-full px-3 py-2 text-xs font-semibold bg-red-900/40 text-red-300 rounded hover:bg-red-900/70"
          >
            Reset All Progress
          </button>
        </div>
      </aside>

      {/* Mobile top nav */}
      <div className="md:hidden fixed top-0 inset-x-0 z-20 bg-slate-900 text-white overflow-x-auto scrollbar-thin flex gap-1 px-2 py-2 border-b border-slate-800">
        {chapters.map((ch) => {
          const p = progress[`ch${ch.id}`] || { reviewed: 0, total: ch.blocks.length };
          const isActive = active === `ch${ch.id}`;
          return (
            <button
              key={ch.id}
              onClick={() => setActive(`ch${ch.id}`)}
              className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${isActive ? 'bg-sky-600' : 'bg-slate-800'}`}
            >
              Ch{ch.id} · {p.reviewed}/{p.total}
            </button>
          );
        })}
        <button
          onClick={() => setActive('exam')}
          className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${active === 'exam' ? 'bg-emerald-600' : 'bg-slate-800'}`}
        >
          Exam
        </button>
      </div>

      {/* Main */}
      <main className="flex-1 min-w-0 md:pt-0 pt-14">
        {active === 'exam' ? (
          <ExamView exam={exam} chapters={chapters} />
        ) : currentChapter ? (
          <ChapterView chapter={currentChapter} />
        ) : (
          <div className="p-10 text-slate-500">Select a chapter.</div>
        )}
        <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-xs text-slate-400">
          Built for MA pilot ground school · Exam 2 · data persists via window.storage
        </footer>
      </main>

      {showReset && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reset all progress?</h3>
            <p className="text-sm text-slate-600 mb-5">
              This will clear every review checkbox, confidence rating, practice question, and exam answer.
              This cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowReset(false)}
                className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300"
              >
                Cancel
              </button>
              <button
                onClick={async () => { await resetAll(); setShowReset(false); window.location.reload(); }}
                className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-700"
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
