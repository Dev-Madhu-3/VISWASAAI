import { universities } from '../data/site.js';

export default function Marquee() {
  const row = [...universities, ...universities];
  return (
    <div className="overflow-hidden border-y border-ink/15 bg-paper-warm py-5" aria-label="Partner universities">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((u, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-xs uppercase tracking-sign text-ink-mute">
            {u}
            <svg width="26" height="8" aria-hidden="true">
              <line x1="0" y1="4" x2="26" y2="4" stroke="#E85D04" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
