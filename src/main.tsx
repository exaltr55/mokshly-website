import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/site.css';

// `import.meta.env.BASE_URL` reflects `base` from vite.config.ts at
// build time ('/mokshly-website/' on Pages, '/' under a custom domain
// or in local dev). The router must use the same basename so route
// matching lines up with the served path prefix. Strip the trailing
// slash because BrowserRouter expects basenames without one.
const ROUTER_BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
