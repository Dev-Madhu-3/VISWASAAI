# VISWASAAI — Educational Guidance Consultancy

A distinctive multi-page marketing + enquiry website for VISWASAAI, built around the
**"Wayfinder"** creative direction: the entire experience is designed like a navigation
system, because every service the business offers is literally a route — from where a
student is to a recognised degree.

- Hero: "YOU ARE HERE. NOW, THE ROUTE." with an animated route-map illustration
- Wayfinding design system: stations, route lines, signage typography (Archivo + IBM Plex Mono)
- Palette: warm paper, deep ink, saffron route-line, deep teal accents (nothing like a
  typical blue education template)
- Pages: Home, About, Services (6 services with per-service route maps), Contact
- Fully responsive, keyboard-accessible, `prefers-reduced-motion` respected
- Validated enquiry form with success state (see "Wiring the form" below)

## Stack

React 18 · Vite 5 · Tailwind CSS 3 · React Router 6 · Framer Motion 11 · lucide-react

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Wiring the form (before launch)

`src/components/EnquiryForm.jsx` currently uses a **demo handler** — submissions are
stored in the browser's `localStorage` and the success screen says so honestly.
To go live, replace the `submitEnquiry` function with a real endpoint, e.g.:

- **Formspree** — POST to `https://formspree.io/f/{your-id}` with `fetch`
- **EmailJS / Web3Forms** — similar single `fetch` call
- **Own API** — point `fetch` at your backend route

## Replacing placeholder content

All business data lives in one file: `src/data/site.js`

- `contact` — address, phones, email, hours (currently WIMSE-derived placeholders)
- `stats` — 15,000+ students / 200+ programs / 30+ partners / 25+ years
- `testimonials` — placeholder student quotes; replace with verified VISWASAAI stories
- `services`, `faqs`, `universities` — service copy and partner list

The map embed on the Contact page is a clearly marked placeholder — drop a Google Maps
iframe into `src/pages/Contact.jsx`.

## Project structure

```
src/
  data/site.js            # all copy & business data (single source of truth)
  hooks/usePageTitle.js   # per-page document.title
  components/
    Navbar.jsx  Footer.jsx  LogoMark.jsx      # chrome + dummy wordmark
    SectionSign.jsx  Reveal.jsx               # section headers & scroll reveals
    Station.jsx  RouteLine.jsx  RouteSteps.jsx # wayfinding motifs
    Marquee.jsx  Faq.jsx  CtaBand.jsx
    EnquiryForm.jsx                          # validated enquiry form (demo submit)
    ScrollToTop.jsx
  pages/
    Home.jsx  About.jsx  Services.jsx  Contact.jsx
```
