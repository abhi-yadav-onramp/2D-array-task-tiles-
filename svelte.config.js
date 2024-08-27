import { sveltePreprocess } from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(
		{
			fallback: 'index.html',
			strict: false,
		}
	),
    // Other kit options
  },
  preprocess: sveltePreprocess(),
};

export default config;
