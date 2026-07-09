import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served on the custom domain https://mokshly.com from the root, so assets
// are referenced from '/'. (Previously a project site at
// https://exaltr55.github.io/mokshly-website/, which required
// base: '/mokshly-website/'. The bare github.io project URL no longer works.)
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 5173, strictPort: false },
});
