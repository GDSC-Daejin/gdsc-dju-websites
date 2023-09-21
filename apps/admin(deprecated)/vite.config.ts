import path from 'path';

import { defineConfig } from 'vite';
// local로 돌리때 주석 지우기
import mkcert from 'vite-plugin-mkcert';

import react from '@vitejs/plugin-react';
/* 배포할때 주석 해제하기*/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
//   optimizeDeps: { include: ['firebase/app', 'firebase/firestore'] },
//   resolve: {
//     alias: {
//       '@src': path.resolve(__dirname, './src'),
//       '@type': path.resolve(__dirname, './src/types'),
//       '@assets': path.resolve(__dirname, './src/assets'),
//       '@layout': path.resolve(__dirname, './src/components/layout'),
//       '@common': path.resolve(__dirname, './src/components/common'),
//       '@utils': path.resolve(__dirname, './src/utils'),
//       '@animations': path.resolve(__dirname, './src/components/animations'),
//       '@pages': path.resolve(__dirname, './src/pages'),
//     },
//   },
// });
/* 로컬용*/
export default defineConfig({
  plugins: [react(), mkcert()],
  // plugins: [react()],
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
