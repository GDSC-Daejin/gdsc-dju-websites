import * as path from 'path';

import { defineConfig } from 'vite';
// import mkcert from 'vite-plugin-mkcert';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), mkcert()],
  plugins: [react()],
  server: {
    // host: 'devlog.gdsc-dju.com',
    port: 3000,
    // https: true,
  },
  resolve: {
    alias: {
      '@templates': path.resolve(__dirname, './src/components/templates'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/organisms'),
      '@atoms': path.resolve(__dirname, './src/components/atoms'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@animations': path.resolve(__dirname, './src/components/animations'),
      '@common': path.resolve(__dirname, './src/components/common'),
      '@store': path.resolve(__dirname, './src/store'),
      '@contents': path.resolve(__dirname, './src/contents'),
      '@type': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
