// playground/vite.config.ts
import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react' // Example if using React

export default defineConfig({
  // plugins: [react()], // Example if using React
  server: {
    port: 3000, // Customize playground server port
    open: true, // Automatically open in browser
  },
  // Ensure Vite resolves your linked local package correctly
  resolve: {
    alias: {
      // Map your package name to the source for better HMR during dev
      '@<your-github-username>/<your-repo-name>': '../src/index.ts',
      // Add other aliases if needed
    },
  },
});