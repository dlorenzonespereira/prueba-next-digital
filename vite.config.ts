import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 9000,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 9001,
  },
  resolve: {
    alias: {
      '@domain': '/src/domain',
      '@infrastructure': '/src/infrastructure',
    },
  },
});
