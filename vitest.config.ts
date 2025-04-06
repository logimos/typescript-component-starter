// vitest.config.ts
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'; // If using path aliases in tsconfig

export default defineConfig({
  plugins: [tsconfigPaths()], // Enable mapping paths from tsconfig.json
  test: {
    globals: true, // Use Vitest's global APIs (describe, it, expect, etc.)
    environment: 'node', // Or 'jsdom' if testing browser-specific features
    coverage: {
      provider: 'v8', // Use V8 for coverage collection (faster)
      reporter: ['text', 'json', 'html', 'lcov'], // Output formats
      reportsDirectory: './coverage', // Directory for coverage reports
      include: ['src/**'], // Files to include in coverage analysis
      exclude: [
        // Files/patterns to exclude
        'src/index.ts', // Often just exports, adjust if it has logic
        '**/*.d.ts',
        '**/types.ts', // Example: exclude type definition files
      ],
      all: true, // Report coverage for all included files, even untested ones
      thresholds: {
        // Optional: enforce coverage thresholds
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    // Optional: Setup files to run before tests
    // setupFiles: ['./tests/setup.ts'],
  },
});
