import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: remplacez 'site' par votre domaine definitif avant la mise en production.
export default defineConfig({
  site: 'https://abde-68.github.io/',
  integrations: [tailwind(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
