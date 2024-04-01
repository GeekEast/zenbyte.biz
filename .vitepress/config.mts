import { defineConfig } from 'vitepress';
import { getThemeConfig } from './themeConfig.mts';
import { getMarkdownConfig } from './markdownConfig.mts';
import { getHeadConfig } from './headConfig.mjs';
import algolia from '../algolia.json';
import { getViteConfig } from './viteConfig.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: 'ZenByte',
  description: 'Technical Blog from ZenByte',
  cleanUrls: true,
  metaChunk: true,
  srcExclude: ['**/README.md'],
  appearance: 'dark',
  sitemap: { hostname: algolia.start_urls[0] },
  head: getHeadConfig(),
  themeConfig: getThemeConfig(),
  markdown: getMarkdownConfig(),
  vite: getViteConfig(),
});
