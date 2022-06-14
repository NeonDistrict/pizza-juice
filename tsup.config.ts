import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: false,
  // format: ['esm'],
  treeshake: true,
});
