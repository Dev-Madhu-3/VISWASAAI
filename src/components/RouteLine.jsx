import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animated "route" connector. Renders a dashed underlay plus a solid line that
 * draws itself when scrolled into view.
 */
export default function RouteLine({ className = '', d, duration = 1.8, delay = 0, color = 'currentColor' }) {
  const reduce = useReducedMotion();
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d={d} stroke={color} strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" opacity="0.35" />
      {reduce ? (
        <path d={d} stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      ) : (
        <motion.path
          d={d}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration, delay, ease: 'easeInOut' }}
        />
      )}
    </svg>
  );
}
