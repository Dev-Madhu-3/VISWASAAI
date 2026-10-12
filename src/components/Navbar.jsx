import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import LogoMark from './LogoMark.jsx';

const links = [
  { to: '/', label: 'Home', index: '00' },
  { to: '/about', label: 'About', index: '01' },
  { to: '/services', label: 'Services', index: '02' },
  { to: '/contact', label: 'Contact', index: '03' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="VISWASAAI — home">
          <LogoMark className="h-9 w-9 text-ink" />
          <span className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-tight md:text-xl">VISWASAAI</span>
            <span className="mt-0.5 block font-mono text-[9px] tracking-sign text-ink-mute md:text-[10px]">
              EDUCATIONAL GUIDANCE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `group relative font-mono text-xs tracking-sign transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-mute hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label.toUpperCase()}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-saffron transition-all duration-300 ease-route ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ink px-5 py-2.5 font-mono text-xs font-semibold tracking-sign text-paper transition-colors hover:bg-saffron hover:text-ink"
          >
            PLOT MY ROUTE
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink text-paper md:hidden" role="dialog" aria-modal="true">
          <div className="flex h-16 items-center justify-between border-b border-paper/15 px-5">
            <span className="flex items-center gap-3">
              <LogoMark className="h-8 w-8 text-paper" />
              <span className="font-display text-lg font-extrabold tracking-tight">VISWASAAI</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center border border-paper/25"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `group flex items-baseline gap-4 border-b border-paper/10 py-5 ${
                    isActive ? 'text-saffron-bright' : 'text-paper'
                  }`
                }
              >
                <span className="font-mono text-xs text-paper/50">{l.index}</span>
                <span className="font-display text-4xl font-extrabold uppercase tracking-tight">{l.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="border-t border-paper/15 px-6 py-6">
            <p className="font-mono text-[10px] tracking-sign text-paper/50">FREE COUNSELLING — MON TO SAT</p>
            <a href="tel:+917382744791" className="mt-2 block font-display text-xl font-bold">
              +91 73827 44791
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
