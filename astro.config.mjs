import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

import compress from "astro-compress";

import sanity from "astro-sanity";

export default defineConfig({
  site: "https://cypherqueenz.com",
  integrations: [
    image(),
    tailwind(),
    prefetch(),
    sitemap(),
    sanity({
      projectId: "k34rqpdo",
      dataset: "production_www",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
    compress(),
  ],
});
