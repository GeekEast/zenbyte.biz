import { defineConfig } from 'vitepress';
import articleItems from './sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    theme: 'one-dark-pro',
  },
  base: '/zenbyte.biz/',
  title: 'ZenByte',
  description: 'Technical Blog from ZenByte',
  themeConfig: {
    logo: '/img/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Articles', link: '/articles/' }],
    sidebar: {
      '/articles/': articleItems,
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/GeekEast' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2014-present ZenByte',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    search: {
      provider: 'local',
    },
  },
});
