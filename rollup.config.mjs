import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import ts from 'rollup-plugin-typescript2';
import typescript from 'typescript';

export default [
  {
    input: ['src/main.ts'],
    output: [
      {
        format: 'es',
        sourcemap: true,
        file: 'dist/index.mjs'
      },
      {
        format: 'cjs',
        sourcemap: true,
        file: 'dist/index.cjs'
      }
    ],
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
    output: [{ file: './dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
