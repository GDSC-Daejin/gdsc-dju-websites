import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    host: 'devlog.gdsc-dju.com',
    port: 3000,
    https: true,
  },
});
