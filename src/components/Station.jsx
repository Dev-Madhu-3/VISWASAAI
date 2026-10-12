import Reveal from './Reveal.jsx';

/**
 * A numbered "station" marker used across the site — the core wayfinding motif.
 */
export default function Station({ number, title, body, dark = false, delay = 0 }) {
  return (
    <Reveal delay={delay} className="relative">
      <div className="flex gap-5">
        <div className="flex flex-col items-center">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold ${
              dark ? 'border-saffron-bright text-saffron-bright' : 'border-saffron text-saffron'
            }`}
            aria-hidden="true"
          >
            {number}
          </span>
          <span className={`mt-3 w-px flex-1 ${dark ? 'bg-paper/25' : 'bg-ink/20'}`} aria-hidden="true" />
        </div>
        <div className="pb-10">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">{title}</h3>
          <p className={`mt-3 max-w-md leading-relaxed ${dark ? 'text-paper/70' : 'text-ink-mute'}`}>{body}</p>
        </div>
      </div>
    </Reveal>
  );
}
