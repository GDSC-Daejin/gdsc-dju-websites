import path from 'path';

import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    host: 'dev.gdscdju.dev',
    port: 3000,
    https: true,
  },
  optimizeDeps: { include: ['firebase/app', 'firebase/firestore'] },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@type': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@animations': path.resolve(__dirname, './src/components/animations'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
});
