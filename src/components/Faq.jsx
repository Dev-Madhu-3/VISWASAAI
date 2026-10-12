import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';

function FaqItem({ q, a, open, onToggle, id }) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-ink/15">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-saffron md:text-xl">
          {q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open ? 'rotate-45 border-saffron bg-saffron text-paper' : 'border-ink/30 text-ink group-hover:border-saffron'
          }`}
          aria-hidden="true"
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 leading-relaxed text-ink-mute">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="border-t border-ink/15">
      {items.map((item, i) => (
        <FaqItem
          key={item.q}
          id={`faq-panel-${i}`}
          q={item.q}
          a={item.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
