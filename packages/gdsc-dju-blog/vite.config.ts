import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    host: 'devlog.gdsc-dju.com',
    port: 3000,
    https: true,
  },

  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@type': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@layout': path.resolve(__dirname, './src/components/templates'),
      '@common': path.resolve(__dirname, './src/components/atoms'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@animations': path.resolve(__dirname, './src/components/animations'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
});
