import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import node from "@astrojs/node";

const port = parseInt(process.env.PORT) || 8000;

// https://astro.build/config
export default defineConfig({
  server: {
    port: port,
    host: "0.0.0.0",
  },
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
