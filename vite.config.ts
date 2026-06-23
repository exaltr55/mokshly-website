import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served at https://exaltr55.github.io/mokshly-website/ on GitHub Pages
// (project site, not a user/org site), so all built asset URLs must be
// prefixed with the repo name. When we later add a custom domain that
// serves from the root, drop `base` back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/mokshly-website/',
  server: { port: 5173, strictPort: false },
});
