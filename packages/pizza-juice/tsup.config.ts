import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  sourcemap: true,
  dts: true,
  format: ['cjs'],
  entryPoints: ['index.ts'],
  loader: {
    '.js': 'jsx',
  },
});
