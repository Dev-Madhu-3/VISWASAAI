import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { services } from '../data/site.js';

const stations = [
  'Completed 12th / intermediate',
  'Discontinued or failed a degree',
  'Working professional',
  'Graduate planning PG',
  'Planning to study abroad',
  'A parent enquiring',
];

const initial = { name: '', phone: '', email: '', station: '', destination: '', message: '' };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 3) errors.name = 'Please enter your full name.';
  const digits = values.phone.replace(/\D/g, '').replace(/^91/, '');
  if (!/^[6-9]\d{9}$/.test(digits)) errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Enter a valid email address.';
  if (!values.station) errors.station = 'Tell us where you currently stand.';
  if (!values.destination) errors.destination = 'Pick the route you are interested in.';
  return errors;
}

/*
 * NOTE — this is a DEMO submission handler. Enquiries are stored in the
 * browser's localStorage only. Before launch, replace `submitEnquiry` with a
 * real endpoint (Formspree, EmailJS, or your own API) and update the success
 * copy below accordingly.
 */
function submitEnquiry(values) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ref = `VSW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const existing = JSON.parse(localStorage.getItem('viswasaai_enquiries') || '[]');
      existing.push({ ...values, ref, at: new Date().toISOString() });
      localStorage.setItem('viswasaai_enquiries', JSON.stringify(existing));
      resolve({ ref });
    }, 900);
  });
}

const inputBase =
  'w-full border border-ink/25 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-mute/70 transition-colors focus:border-saffron focus:outline-none';
const labelBase = 'mb-2 block font-mono text-[10px] uppercase tracking-sign text-ink-mute';

function Field({ label, error, children }) {
  return (
    <div>
      <label className={labelBase}>
        {label} {error && <span className="ml-2 normal-case tracking-normal text-saffron">— {error}</span>}
      </label>
      {children}
    </div>
  );
}

export default function EnquiryForm({ initialDestination = '' }) {
  const reduce = useReducedMotion();
  const [values, setValues] = useState({ ...initial, destination: initialDestination });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success
  const [ref, setRef] = useState('');

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus('sending');
    const res = await submitEnquiry(values);
    setRef(res.ref);
    setStatus('success');
  };

  const reset = () => {
    setValues({ ...initial, destination: '' });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="relative border border-ink/20 bg-paper-warm p-6 md:p-10">
      {/* ticket notch detail */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1.5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #1B1611 0 10px, transparent 10px 20px)',
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[28rem] flex-col items-start justify-center"
            role="status"
          >
            <CheckCircle2 className="h-12 w-12 text-saffron" aria-hidden="true" />
            <h3 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight">
              Route request logged.
            </h3>
            <p className="mt-1 font-mono text-xs tracking-sign text-ink-mute">REF: {ref}</p>
            <p className="mt-6 max-w-md leading-relaxed text-ink-mute">
              A counsellor will call you within one working day. Keep your marksheets handy — the
              more we know about where you are, the faster we can plot the route.
            </p>
            <p className="mt-6 border border-saffron/40 bg-saffron/10 px-4 py-3 font-mono text-[11px] leading-relaxed text-ink">
              DEMO MODE — submissions are stored in this browser only. Connect a real endpoint in
              EnquiryForm.jsx before going live.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 border border-ink px-6 py-3 font-mono text-xs tracking-sign transition-colors hover:bg-ink hover:text-paper"
            >
              SEND ANOTHER REQUEST
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={false}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight">Plot your route</h3>
              <span className="font-mono text-[10px] tracking-sign text-ink-mute">FORM VSW-01</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">
              Two minutes now, one phone call later — that's the whole commitment we ask for.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field label="Full name" error={errors.name}>
                <input
                  type="text"
                  value={values.name}
                  onChange={set('name')}
                  placeholder="e.g. Anitha Reddy"
                  autoComplete="name"
                  className={inputBase}
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>
              <Field label="Mobile number" error={errors.phone}>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={set('phone')}
                  placeholder="10-digit mobile"
                  autoComplete="tel"
                  className={inputBase}
                  aria-invalid={Boolean(errors.phone)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={values.email}
                    onChange={set('email')}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={inputBase}
                    aria-invalid={Boolean(errors.email)}
                  />
                </Field>
              </div>
              <Field label="Current station" error={errors.station}>
                <select value={values.station} onChange={set('station')} className={inputBase} aria-invalid={Boolean(errors.station)}>
                  <option value="" disabled>
                    Where do you stand today?
                  </option>
                  {stations.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Destination" error={errors.destination}>
                <select
                  value={values.destination}
                  onChange={set('destination')}
                  className={inputBase}
                  aria-invalid={Boolean(errors.destination)}
                >
                  <option value="" disabled>
                    Which route interests you?
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Anything we should know? (optional)">
                  <textarea
                    value={values.message}
                    onChange={set('message')}
                    rows={4}
                    placeholder="Gap years, completed credits, budget, preferred cities…"
                    className={`${inputBase} resize-y`}
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 font-mono text-xs font-semibold tracking-sign text-paper transition-colors hover:bg-saffron hover:text-ink disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' ? 'LOGGING REQUEST…' : 'REQUEST MY CALLBACK'}
              <Send className="h-4 w-4 transition-transform duration-300 ease-route group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-wider text-ink-mute">
              WE CALL WITHIN ONE WORKING DAY. YOUR NUMBER IS NEVER SHARED.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
