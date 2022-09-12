import { defineConfig } from 'tsup';

export default defineConfig({
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['cjs'],
  entryPoints: ['index.ts'],
});
