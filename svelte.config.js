import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true,
    }),
    alias: {
      $components: 'src/infrastructure/ui/*',
      $domain: 'src/domain/*',
      $infrastructure: 'src/infrastructure/*',
      $tests: 'src/tests/*',
      $config: 'src/config',
    },
  },
  compilerOptions: {
    customElement: true,
  },
  preprocess: vitePreprocess({ postcss: true }),
};

export default config;
