import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

function NotFound() {
  return (
    <section className="mx-auto max-w-shell px-5 py-32 md:px-8">
      <p className="font-mono text-xs tracking-sign text-saffron">ERROR 404 — ROUTE NOT FOUND</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-none md:text-7xl">
        This path
        <br />
        doesn't exist.
      </h1>
      <p className="mt-6 max-w-md text-ink-mute">
        Even the best-planned routes miss a turn. Let's get you back to known ground.
      </p>
      <Link
        to="/"
        className="mt-10 inline-block bg-ink px-7 py-3.5 font-mono text-xs font-semibold tracking-sign text-paper transition-colors hover:bg-saffron"
      >
        BACK TO HOME
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-paper text-ink">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
