export default function LogoMark({ className = 'h-9 w-9 text-ink' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M11 32 L20 23 L26 27.5 L37 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29.5 15 H37 V22.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="32" r="3.2" fill="#E85D04" stroke="none" />
    </svg>
  );
}
