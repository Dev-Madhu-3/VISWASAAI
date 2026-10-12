import { useEffect } from 'react';

const BASE = 'VISWASAAI — Educational Guidance Consultancy';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : BASE;
  }, [title]);
}
