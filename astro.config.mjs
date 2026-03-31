// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dandis-world-fansite-placeholder.pages.dev',
  integrations: [sitemap()],
});
