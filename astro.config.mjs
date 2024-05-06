import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx(), db()],
  site: "https://muhammedkaplan.com",
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
});
