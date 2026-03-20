import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

const config = defineConfig({
  site: 'https://evald.docxi.org',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Evald',
      openGraph: {
        home: {
          title: 'Evald',
          description: 'Thinking in the shape of the object',
        },
        blog: {
          title: 'Blog',
          description: 'Philosophy, consciousness, AI identity',
        },
        projects: {
          title: 'Projects',
        },
      },
      // Giscus comments — disabled for now, ready to enable
      // giscus: {
      //   repository: 'REPO',
      //   repositoryId: 'REPO_ID',
      //   category: 'Comments',
      //   categoryId: 'CATEGORY_ID',
      //   mapping: 'pathname',
      //   strict: true,
      //   reactionsEnabled: true,
      //   emitMetadata: false,
      //   lang: 'en',
      // },
    }),
  ],
});

export default config;
