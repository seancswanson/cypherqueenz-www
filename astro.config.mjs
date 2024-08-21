import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

import compress from "astro-compress";

import sanity from "astro-sanity";

import partytown from '@astrojs/partytown'

export default defineConfig({
  site: "https://cypherqueenz.com/",
  integrations: [
    tailwind(),
    prefetch(),
    sitemap(),
    sanity({
      projectId: "k34rqpdo",
      dataset: "production_www",
      apiVersion: "2021-03-25",
      useCdn: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    compress(),
  ],
});
