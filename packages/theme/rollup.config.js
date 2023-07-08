import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import tslint from 'rollup-plugin-tslint';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

import babel from '@rollup/plugin-babel';

export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/bundle.js',
      format: 'esm',
    },
    external: ['react', 'react-router-dom'],
    plugins: [
      typescript(),
      uglify(),
      tslint(),
      babel({
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],

        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
