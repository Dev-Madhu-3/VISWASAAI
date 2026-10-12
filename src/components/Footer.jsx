import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import LogoMark from './LogoMark.jsx';
import { contact, services } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-shell px-5 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <LogoMark className="h-10 w-10 text-paper" />
              <span className="leading-none">
                <span className="block font-display text-2xl font-extrabold tracking-tight">VISWASAAI</span>
                <span className="mt-1 block font-mono text-[10px] tracking-sign text-paper/50">
                  EDUCATIONAL GUIDANCE
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm leading-relaxed text-paper/60">
              From the Telugu <em className="text-paper">viswasa</em> — trust. Since 1995 we have plotted
              recognised-degree routes for 15,000+ students: distance, regular, credit transfer and
              abroad.
            </p>
          </div>

          <nav className="md:col-span-2" aria-label="Footer — site">
            <h3 className="font-mono text-[10px] tracking-sign text-saffron-bright">EXPLORE</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-paper/70 transition-colors hover:text-saffron-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Footer — services">
            <h3 className="font-mono text-[10px] tracking-sign text-saffron-bright">ROUTES WE PLOT</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="text-paper/70 transition-colors hover:text-saffron-bright"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[10px] tracking-sign text-saffron-bright">REACH US</h3>
            <ul className="mt-5 space-y-4 text-sm text-paper/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-bright" aria-hidden="true" />
                <span>{contact.addressLines.join(', ')}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron-bright" aria-hidden="true" />
                <span>
                  {contact.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block transition-colors hover:text-saffron-bright">
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron-bright" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-saffron-bright">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* The route ends here — the wayfinding motif pays off. */}
        <div className="mt-16 md:mt-20" aria-hidden="true">
          <svg viewBox="0 0 1200 70" className="w-full" fill="none">
            <path
              d="M0 40 H520 C560 40 560 18 600 18 H1140"
              stroke="rgba(245,239,227,0.35)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <circle cx="0" cy="40" r="4" fill="#E85D04" />
            <text x="12" y="30" fill="rgba(245,239,227,0.5)" fontSize="11" fontFamily="'IBM Plex Mono', monospace" letterSpacing="2">
              YOU ARE HERE
            </text>
            <circle cx="1148" cy="18" r="6" fill="#E85D04" />
            <text x="1190" y="22" fill="#E85D04" fontSize="11" fontFamily="'IBM Plex Mono', monospace" letterSpacing="2" textAnchor="end">
              TERMINUS: YOUR GOAL
            </text>
          </svg>
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/15 py-7 font-mono text-[10px] tracking-wider text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 VISWASAAI EDUCATIONAL GUIDANCE. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED AS THE WAYFINDER CONCEPT — NELLORE, AP</span>
        </div>
      </div>
    </footer>
  );
}
