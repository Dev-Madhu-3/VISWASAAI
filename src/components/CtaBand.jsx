import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function CtaBand() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] tracking-sign text-saffron-bright">NO OBLIGATION — 20 MINUTES</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
                Ready when
                <br />
                you are.
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-saffron px-8 py-4 font-mono text-xs font-semibold tracking-sign text-ink transition-colors hover:bg-paper"
            >
              PLOT MY ROUTE
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-route group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-14 flex items-center gap-4 font-mono text-[11px] tracking-sign text-paper/50">
            <span className="h-2 w-2 rounded-full bg-saffron" aria-hidden="true" />
            <span>FREE FIRST COUNSELLING CALL</span>
            <span className="hidden h-px flex-1 bg-paper/20 sm:block" aria-hidden="true" />
            <span className="hidden sm:inline">TEL: +91 73827 44791</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
