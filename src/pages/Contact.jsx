import { useSearchParams } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import SectionSign from '../components/SectionSign.jsx';
import Reveal from '../components/Reveal.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { contact } from '../data/site.js';

const info = [
  {
    icon: MapPin,
    label: 'Visit the office',
    lines: contact.addressLines,
  },
  {
    icon: Phone,
    label: 'Call the desk',
    lines: contact.phones,
    href: (v) => `tel:${v.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Write to us',
    lines: [contact.email],
    href: (v) => `mailto:${v}`,
  },
  {
    icon: Clock,
    label: 'Desk hours',
    lines: [contact.hours],
  },
];

export default function Contact() {
  usePageTitle('Contact');
  const [params] = useSearchParams();
  const preset = params.get('service') || '';

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-shell px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
          <SectionSign
            index="01"
            kicker="CONTACT"
            title="Start from where you are."
            lede="No forms-in-triplicate, no waiting lists. Tell us where you stand and a counsellor calls you back within one working day."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            {/* info panel */}
            <Reveal className="lg:col-span-5">
              <div className="flex h-full flex-col bg-ink p-8 text-paper md:p-10">
                <p className="font-mono text-[10px] tracking-sign text-saffron-bright">THE DESK</p>
                <ul className="mt-8 flex-1 space-y-8">
                  {info.map((item) => (
                    <li key={item.label} className="flex gap-4">
                      <item.icon className="mt-1 h-5 w-5 shrink-0 text-saffron-bright" aria-hidden="true" />
                      <div>
                        <p className="font-mono text-[10px] tracking-sign text-paper/50">{item.label}</p>
                        <div className="mt-2 space-y-1 text-sm">
                          {item.lines.map((line) =>
                            item.href ? (
                              <a key={line} href={item.href(line)} className="block transition-colors hover:text-saffron-bright">
                                {line}
                              </a>
                            ) : (
                              <p key={line}>{line}</p>
                            )
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-paper/15 pt-6">
                  <p className="font-mono text-[10px] leading-relaxed tracking-sign text-paper/50">
                    WALK-INS WELCOME. MARKSHEETS IN HAND, EVEN BETTER.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* form */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <EnquiryForm initialDestination={preset} />
            </Reveal>
          </div>

          {/* map placeholder */}
          <Reveal delay={0.1}>
            <div className="mt-14 flex h-40 items-center justify-center border-2 border-dashed border-ink/25 bg-paper-warm md:h-52">
              <p className="px-6 text-center font-mono text-[11px] leading-relaxed tracking-sign text-ink-mute">
                MAP EMBED PLACEHOLDER — DROP A GOOGLE MAPS IFRAME HERE
                <br />
                <span className="text-saffron">SODHAN NAGAR, NELLORE 524001</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
