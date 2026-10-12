import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import SectionSign from '../components/SectionSign.jsx';
import RouteSteps from '../components/RouteSteps.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { services, universities } from '../data/site.js';

export default function Services() {
  usePageTitle('Services');

  return (
    <>
      {/* HERO */}
      <section className="bg-paper">
        <div className="mx-auto max-w-shell px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          <SectionSign
            index="01"
            kicker="SERVICE MAP"
            title="Six routes. One standard."
            lede="Different starting points, different destinations — every route held to the same standard: recognised credentials, honest timelines, one counsellor throughout."
          />
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="border border-ink/25 px-4 py-2 font-mono text-[10px] tracking-sign transition-colors hover:border-saffron hover:bg-saffron hover:text-ink"
                >
                  {s.index} — {s.title.toUpperCase()}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="border-t border-ink/15 bg-paper">
        <div className="mx-auto max-w-shell px-5 md:px-8">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className={`grid gap-10 scroll-mt-24 border-b border-ink/15 py-16 md:py-24 lg:grid-cols-12 ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className="lg:col-span-4 lg:[direction:ltr]">
                <Reveal>
                  <p className="font-display text-7xl font-extrabold leading-none text-ghost md:text-8xl" aria-hidden="true">
                    {s.index}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-none tracking-tight md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-6 border-l-2 border-saffron pl-4 font-mono text-[11px] leading-relaxed tracking-wider text-ink-mute">
                    FOR — {s.audience.toUpperCase()}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-8 lg:[direction:ltr]">
                <Reveal delay={0.08}>
                  <p className="max-w-2xl text-lg leading-relaxed text-ink-mute">{s.description}</p>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 border border-ink/15 bg-paper-warm p-4">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron" aria-hidden="true">
                          <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-y border-dashed border-ink/25 py-6">
                    <p className="mb-4 font-mono text-[10px] tracking-sign text-ink-mute">ROUTE MAP</p>
                    <RouteSteps steps={s.route} />
                  </div>
                  <Link
                    to={`/contact?service=${s.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-xs font-semibold tracking-sign text-paper transition-colors hover:bg-saffron hover:text-ink"
                  >
                    PLOT THIS ROUTE
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-route group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-paper-warm bg-noise">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionSign index="02" kicker="ON THE MAP" title="Universities we route through." />
            <Reveal delay={0.08}>
              <p className="max-w-sm text-sm leading-relaxed text-ink-mute">
                Every partner is UGC-entitled or accredited. Recognition proof is shown to you
                before any fee is discussed.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u, i) => (
              <Reveal key={u} delay={i * 0.05} className="h-full">
                <div className="flex h-full items-center gap-4 bg-paper px-6 py-6">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
                  <span className="text-sm font-semibold">{u}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
