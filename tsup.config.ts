import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'], // Your library's entry point
  outDir: 'dist',
  format: ['esm', 'cjs'],  // Output both ESModule and CommonJS formats
  dts: {
    resolve: true, // Attempt to resolve declaration types from dependencies
    // Defaults to use "tsconfig.json", but we override with "tsconfig.build.json"
    // Requires TS 5.x+ for the tsconfig build option
    tsconfig: './tsconfig.build.json',
  },
  sourcemap: true,          // Generate sourcemaps
  splitting: true,         // Enable code splitting for ESM
  clean: true,             // Clean output directory before build
  minify: !options.watch,   // Minify code when not in watch mode
  treeshake: true,          // Enable tree shaking
  // Externalize peer dependencies if needed
  // external: ['react'],
  // Add banner to output files
  // banner: {
  //   js: "'use client';", // Example for React Server Components
  // },
}));