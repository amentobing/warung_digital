// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 5050,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
});