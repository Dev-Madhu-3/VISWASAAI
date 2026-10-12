import usePageTitle from '../hooks/usePageTitle.js';
import SectionSign from '../components/SectionSign.jsx';
import Station from '../components/Station.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';

const values = [
  {
    title: 'Clarity before commitment',
    body: 'We show you recognition documents, fee structures and realistic timelines before you sign anything. An informed no is better than a mis-sold yes.',
  },
  {
    title: 'Recognised, always',
    body: 'UGC-entitled universities and accredited programs only. If a route is not recognised, we say so and look for another one.',
  },
  {
    title: 'On the line, end to end',
    body: 'One counsellor from first call to convocation. Admissions are the beginning of our work, not the end of it.',
  },
  {
    title: 'Built for real life',
    body: 'Evening batches, EMI guidance, credit transfer for dropped years. Education should bend around life, not the other way round.',
  },
];

const timeline = [
  {
    index: '95',
    title: 'Founded in Nellore',
    body: 'A two-desk consultancy begins helping local students find recognised colleges — with a landline, a ledger, and a lot of patience.',
  },
  {
    index: '02',
    title: 'The distance desk opens',
    body: 'Working professionals keep asking for degrees that fit around jobs. We build the university partnerships to make it happen.',
  },
  {
    index: '10',
    title: 'Credit transfer, formalised',
    body: 'Years of informal help for discontinued students becomes a proper service: credit evaluation, university matching, re-enrolment.',
  },
  {
    index: '16',
    title: 'The abroad desk opens',
    body: 'Applications, visas, pre-departure briefings — and a dedicated MBBS pathway desk for recognised universities in CIS and Asia.',
  },
  {
    index: '22',
    title: '15,000 students and counting',
    body: 'The ledger that started with two desks now holds fifteen thousand routes. Every one of them reached a recognised degree.',
  },
];

export default function About() {
  usePageTitle('About');

  return (
    <>
      {/* HERO */}
      <section className="bg-paper">
        <div className="mx-auto max-w-shell px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          <SectionSign
            index="01"
            kicker="ABOUT VISWASAAI"
            title="The name is the promise."
            lede="VISWASAAI comes from viswasa — the Telugu word for trust, faith, confidence. We didn't choose it as decoration. We chose it as a contract."
          />
        </div>
      </section>

      {/* DICTIONARY ENTRY */}
      <section className="border-y border-ink/15 bg-paper-warm">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-12 md:items-baseline">
              <p className="font-display text-4xl font-extrabold tracking-tight md:col-span-4 md:text-5xl">
                vis·wa·sa <span className="text-saffron">/n./</span>
              </p>
              <div className="md:col-span-8">
                <p className="font-mono text-[11px] tracking-sign text-ink-mute">
                  TELUGU — విశ్వాసం · SANSKRIT — विश्वास
                </p>
                <ol className="mt-4 space-y-2 text-lg leading-relaxed">
                  <li>
                    <span className="font-mono text-sm text-saffron">1.</span> Trust; faith; confidence
                    placed in a person or institution.
                  </li>
                  <li>
                    <span className="font-mono text-sm text-saffron">2.</span> An educational
                    consultancy in Nellore, Andhra Pradesh — since 1995, guiding students to
                    recognised degrees through distance education, credit transfer, regular
                    admission and study abroad.
                  </li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-shell gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionSign
                index="02"
                kicker="THE STORY"
                title="Twenty-five years of not losing anyone."
              />
            </div>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-ink-mute lg:col-span-7">
            <Reveal>
              <p>
                In 1995, in Nellore, a student walked in with discontinued years and a question no
                one would answer honestly: <span className="text-ink">"Are those years gone?"</span>{' '}
                They weren't. They could be transferred, counted, finished. That answer became the
                founding habit of this consultancy — find the real route, however hidden, and walk
                it with the student.
              </p>
            </Reveal>
            <Reveal>
              <p>
                The ledger grew. Working professionals who needed degrees around their shifts.
                Parents who needed proof of recognition before proof of fees. Aspirants boarding
                flights to Tashkent and Bishkek with visa files we had checked twice. Fifteen
                thousand routes later, the habit hasn't changed: <span className="text-ink">tell the truth about
                where you stand, then move.</span>
              </p>
            </Reveal>
            <Reveal>
              <p>
                VISWASAAI is the same practice under a name that states its own standard. Viswasa —
                trust — is not our tagline. It is the thing we are audited on by every student who
                calls, and by every parent who checks our documents twice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-ink/15 bg-ink text-paper">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
          <SectionSign
            dark
            index="03"
            kicker="WHAT WE HOLD TO"
            title="Four things we don't bend."
          />
          <div className="mt-14 grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="h-full">
                <div className="h-full bg-ink p-8 transition-colors duration-300 hover:bg-ink-soft">
                  <span className="font-mono text-xs tracking-sign text-saffron-bright">
                    VALUE {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-shell px-5 py-20 md:px-8 md:py-28">
          <SectionSign
            index="04"
            kicker="THE LEDGER"
            title="Milestones on the route."
            lede="A short history, told the way we tell every student's story — as stations on a line."
          />
          <div className="mt-14 grid gap-x-16 md:grid-cols-2">
            {timeline.map((t, i) => (
              <Station key={t.index} number={t.index} title={t.title} body={t.body} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
