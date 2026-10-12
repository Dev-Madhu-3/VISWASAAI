import Reveal from './Reveal.jsx';

export default function SectionSign({ index, kicker, title, lede, dark = false, className = '' }) {
  return (
    <Reveal className={className}>
      <div className="flex items-start gap-4">
        <span
          className={`mt-1 hidden h-px w-10 shrink-0 sm:block ${dark ? 'bg-paper/40' : 'bg-ink/30'}`}
          aria-hidden="true"
        />
        <div>
          <p className={`font-mono text-[11px] tracking-sign ${dark ? 'text-saffron-bright' : 'text-saffron'}`}>
            {index ? `${index} / ` : ''}
            {kicker}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {lede && (
            <p className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? 'text-paper/70' : 'text-ink-mute'}`}>
              {lede}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
