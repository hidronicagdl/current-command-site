import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://currentcommand.com',
  integrations: [react(), // <--- ESTA LÍNEA ES VITAL
  tailwind(), sitemap()]
});