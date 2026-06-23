import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import OurOffering from './pages/OurOffering';
import About from './pages/About';
import Manifesto from './pages/Manifesto';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change, or to the hashed element if present.
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // Wait a tick so the new page has rendered before we look up the node.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-offering" element={<OurOffering />} />
        <Route path="/about" element={<About />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
