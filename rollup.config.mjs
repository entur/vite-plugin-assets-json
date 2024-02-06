import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import ts from 'rollup-plugin-typescript2';
import typescript from 'typescript';

export default [
  {
    input: ['src/main.ts'],
    output: {
      format: 'es',
      sourcemap: true,
      exports: 'named',
      dir: 'dist',
      assetFileNames: '[name][extname]'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      ts({
        useTsconfigDeclarationDir: true,
        sourceMap: false,
        typescript
      }),
      terser()
    ]
  },
  {
    input: './dts/main.d.ts',
    output: [{ file: './dist/main.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
