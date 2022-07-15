import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import createExternal from 'vite-plugin-external';

// https://vitejs.dev/config/
const pkg = require('./package.json');

export default defineConfig({
  plugins: [
    react(),
    createExternal({
      externals: {
        react: 'React',
      },
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      external: Object.keys(pkg.dependencies),
    },
  },
});
