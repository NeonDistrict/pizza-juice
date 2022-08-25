import type { Options } from 'tsup';

export const tsup: Options = {
  splitting: true,
  sourcemap: true,
  clean: true,
  entryPoints: ['index.ts'],
};
