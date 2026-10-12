/**
 * Horizontal mini "route map" of labelled stops connected by a flowing dashed line.
 */
export default function RouteSteps({ steps, dark = false }) {
  const line = dark ? 'rgba(245,239,227,0.4)' : 'rgba(27,22,17,0.4)';
  const text = dark ? 'text-paper/80' : 'text-ink-mute';
  return (
    <ol className="flex flex-wrap items-center gap-y-4" aria-label="Process steps">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          <span className="flex items-center gap-2.5">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[10px] ${
                dark ? 'border-paper/50 text-paper' : 'border-ink/40 text-ink'
              }`}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span className={`font-mono text-[11px] uppercase tracking-wider ${text}`}>{step}</span>
          </span>
          {i < steps.length - 1 && (
            <svg width="34" height="6" className="mx-3" aria-hidden="true">
              <line x1="0" y1="3" x2="34" y2="3" stroke={line} strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}
