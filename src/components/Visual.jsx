import React from 'react';

export function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-lg shadow-sm ${className}`}>
      {title && <div className="px-4 py-2 border-b border-slate-100 text-sm font-semibold text-slate-700">{title}</div>}
      <div className="p-4">{children}</div>
    </div>
  );
}

export function Pill({ children, color = 'slate' }) {
  const map = {
    slate: 'bg-slate-100 text-slate-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
    violet: 'bg-violet-100 text-violet-700',
    sky: 'bg-sky-100 text-sky-700'
  };
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${map[color] || map.slate}`}>{children}</span>;
}

export function Callout({ kind = 'info', title, children }) {
  const map = {
    info: 'bg-sky-50 border-sky-300 text-sky-900',
    warn: 'bg-amber-50 border-amber-300 text-amber-900',
    danger: 'bg-red-50 border-red-300 text-red-900',
    tip: 'bg-emerald-50 border-emerald-300 text-emerald-900'
  };
  return (
    <div className={`border-l-4 p-3 rounded-r ${map[kind]}`}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="text-sm">{children}</div>
    </div>
  );
}

export function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-slate-200 rounded">
        <thead className="bg-slate-100">
          <tr>{headers.map((h, i) => <th key={i} className="px-3 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
              {r.map((c, j) => <td key={j} className="px-3 py-2 border-b border-slate-100 align-top">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
