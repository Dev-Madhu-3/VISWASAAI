import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import SectionSign from '../components/SectionSign.jsx';
import Station from '../components/Station.jsx';
import Reveal from '../components/Reveal.jsx';
import Marquee from '../components/Marquee.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { services, processSteps, reasons, testimonials, faqs, stats } from '../data/site.js';

function HeroMap() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.18, delayChildren: 0.2 } },
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1, transition: { duration: 2, ease: 'easeInOut' } },
  };
  const pop = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };
  const label = "font-mono";
  return (
    <motion.svg
      viewBox="0 0 560 620"
      className="h-auto w-full"
      role="img"
      aria-label="Illustrated route map from 'you are here' through counselling and admission to graduation"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* faint survey grid */}
      {[80, 200, 320, 440].map((y) => (
        <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="rgba(27,22,17,0.07)" strokeWidth="1" />
      ))}
      {[110, 250, 390, 530].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="620" stroke="rgba(27,22,17,0.07)" strokeWidth="1" />
      ))}

      {/* abroad branch — always dashed, always there */}
      <motion.path
        d="M260 380 C190 340, 170 300, 150 250"
        stroke="#0E5F5B"
        strokeWidth="2"
        strokeDasharray="5 7"
        fill="none"
        variants={draw}
      />
      <motion.g variants={pop}>
        <rect x="62" y="206" width="120" height="30" fill="#0E5F5B" />
        <text x="72" y="226" fill="#F5EFE3" fontSize="12" letterSpacing="2" className={label}>
          ABROAD DESK
        </text>
      </motion.g>

      {/* main route */}
      <motion.path
        d="M80 520 C220 500, 140 400, 260 380 C380 360, 330 250, 430 230 C490 218, 470 140, 500 100"
        stroke="#1B1611"
        strokeWidth="2"
        strokeDasharray="5 7"
        fill="none"
        className={reduce ? '' : 'animate-dash-flow'}
        opacity="0.45"
      />
      <motion.path
        d="M80 520 C220 500, 140 400, 260 380 C380 360, 330 250, 430 230 C490 218, 470 140, 500 100"
        stroke="#E85D04"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={draw}
      />

      {/* stations */}
      <motion.g variants={pop}>
        <circle cx="80" cy="520" r="8" fill="#E85D04" />
        <text x="98" y="526" fill="#1B1611" fontSize="12" letterSpacing="2" className={label}>
          YOU ARE HERE
        </text>
      </motion.g>
      <motion.g variants={pop}>
        <circle cx="260" cy="380" r="13" fill="#F5EFE3" stroke="#1B1611" strokeWidth="2" />
        <text x="260" y="385" textAnchor="middle" fill="#1B1611" fontSize="12" className={label}>
          01
        </text>
        <text x="284" y="386" fill="#1B1611" fontSize="12" letterSpacing="2" className={label}>
          COUNSELLING
        </text>
      </motion.g>
      <motion.g variants={pop}>
        <circle cx="430" cy="230" r="13" fill="#F5EFE3" stroke="#1B1611" strokeWidth="2" />
        <text x="430" y="235" textAnchor="middle" fill="#1B1611" fontSize="12" className={label}>
          02
        </text>
        <text x="454" y="236" fill="#1B1611" fontSize="12" letterSpacing="2" className={label}>
          ADMISSION
        </text>
      </motion.g>
      <motion.g variants={pop}>
        <circle cx="500" cy="100" r="16" fill="#E85D04" />
        <path d="M493 100 l5 5 l9 -10" stroke="#F5EFE3" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="500" y="66" textAnchor="middle" fill="#E85D04" fontSize="12" letterSpacing="2" className={label}>
          GRADUATED
        </text>
      </motion.g>

      {/* compass */}
      <motion.g variants={pop}>
        <circle cx="500" cy="540" r="26" fill="none" stroke="rgba(27,22,17,0.3)" strokeWidth="1.5" />
        <path d="M500 522 L506 540 L500 558 L494 540 Z" fill="#E85D04" />
        <text x="500" y="512" textAnchor="middle" fill="rgba(27,22,17,0.5)" fontSize="10" letterSpacing="2" className={label}>
          N
        </text>
      </motion.g>
    </motion.svg>
  );
}

export default function Home() {
  usePageTitle('Every Degree Has a Route');

  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute -right-10 top-10 hidden select-none font-display text-[11rem] font-extrabold uppercase leading-none text-ghost lg:block" aria-hidden="true">
          Route
        </div>
        <div className="relative mx-auto grid max-w-shell gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] tracking-sign text-saffron">
                FROM THE TELUGU "VISWASA" — TRUST
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[3.4rem] font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-[5.2rem]">
                You are here.
                <br />
                <span className="text-saffron">Now, the route.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-mute">
                Distance degrees, credit transfer, regular admission and study abroad — since 1995,
                VISWASAAI has guided 15,000+ students from where they are to where they're headed.
                No detours. No dead ends.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-saffron px-7 py-4 font-mono text-xs font-semibold tracking-sign text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  PLOT MY ROUTE
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-route group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 border border-ink/30 px-7 py-4 font-mono text-xs font-semibold tracking-sign text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  EXPLORE SERVICES
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/15 pt-6 font-mono text-[10px] tracking-sign text-ink-mute">
                <span>EST. 1995</span>
                <span>NELLORE · ANDHRA PRADESH</span>
                <span>UGC-RECOGNISED PARTNERS</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={40}>
              <div className="border border-ink/15 bg-paper-warm p-4 md:p-6">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] tracking-sign text-ink-mute">
                  <span>FIG. 01 — THE TYPICAL ROUTE</span>
                  <span>SCALE: YOUR LIFE</span>
                </div>
                <HeroMap />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- STATS STRIP ---------------------------- */}
      <section aria-label="Track record" className="border-y border-ink/15 bg-ink text-paper">
        <div className="mx-auto grid max-w-shell grid-cols-2 divide-x divide-paper/10 px-5 md:grid-cols-4 md:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="px-4 py-8 text-center md:py-10">
              <p className="font-display text-3xl font-extrabold tracking-tight text-saffron-bright md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-sign text-paper/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------- SERVICES INDEX ------------------------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionSign
              index="01"
              kicker="ROUTES WE PLOT"
              title="Six ways forward."
              lede="Every student arrives from a different direction. These are the routes we know kilometre by kilometre."
            />
            <Reveal delay={0.1}>
              <Link
                to="/services"
                className="inline-flex shrink-0 items-center gap-2 border-b-2 border-saffron pb-1 font-mono text-xs tracking-sign transition-colors hover:text-saffron"
              >
                FULL SERVICE MAP <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 border-t border-ink/15">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  to={`/services#${s.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/15 py-6 transition-colors hover:bg-paper-warm md:grid-cols-[5rem_1fr_1fr_auto] md:gap-8 md:px-4"
                >
                  <span className="font-mono text-sm font-semibold text-saffron">{s.index}</span>
                  <h3 className="font-display text-xl font-extrabold uppercase tracking-tight transition-transform duration-300 ease-route group-hover:translate-x-2 md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="col-span-2 col-start-2 text-sm leading-relaxed text-ink-mute md:col-span-1 md:col-start-3">
                    {s.short}
                  </p>
                  <span
                    className="col-start-3 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 transition-all duration-300 ease-route group-hover:border-saffron group-hover:bg-saffron group-hover:text-ink md:col-start-4"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      {/* ------------------------------ PROCESS ------------------------------ */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
          <SectionSign
            dark
            index="02"
            kicker="HOW IT WORKS"
            title="How a route gets plotted."
            lede="Four stations between this conversation and your convocation. You walk; we navigate."
          />
          <div className="mt-14 grid gap-x-12 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <Station
                key={step.index}
                dark
                number={step.index}
                title={step.title}
                body={step.body}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ WHY US ------------------------------ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
          <SectionSign
            index="03"
            kicker="WHY VISWASAAI"
            title="Trust is a route, not a slogan."
            lede="The name makes a promise. Here is how we keep it, station after station."
          />
          <div className="mt-14 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.index} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-paper-warm">
                  <span className="font-display text-5xl font-extrabold text-saffron" aria-hidden="true">
                    {r.index}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- TESTIMONIALS ---------------------------- */}
      <section className="border-t border-ink/15 bg-paper-warm bg-noise">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
          <SectionSign
            index="04"
            kicker="FIELD NOTES"
            title="Word from the road."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="border-l-2 border-saffron pl-6">
                  <span className="font-display text-5xl font-extrabold leading-none text-saffron" aria-hidden="true">
                    "
                  </span>
                  <blockquote className="mt-2 text-lg leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="mt-5 font-mono text-[11px] tracking-sign text-ink-mute">
                    {t.name.toUpperCase()} — {t.program.toUpperCase()}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- FAQ -------------------------------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionSign
                index="05"
                kicker="COMMON QUESTIONS"
                title="Asked at every station."
                lede="The six questions every student and parent asks on the first call — answered straight."
              />
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <Faq items={faqs} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
