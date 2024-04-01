import { defineConfig } from 'vitepress';
import articleItems from './sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    theme: 'one-dark-pro',
  },
  base: '/',
  lang: 'en-US',
  title: 'ZenByte',
  description: 'Technical Blog from ZenByte',
  // base doesn't apply well to head
  head: [['link', { rel: 'shortcut icon', href: '/img/favicon.ico' }]],
  themeConfig: {
    logo: '/img/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Articles', link: '/articles/' }],
    sidebar: {
      '/articles/': articleItems,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GeekEast' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/geekeast/' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present ZenByte',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'SX8FM9ZST4',
        apiKey: '2a58437ed867379befc25d0ca46dd0dd',
        indexName: 'zenbyte',
        placeholder: 'Search ZenByte',
      },
    },
  },
  cleanUrls: true,
  metaChunk: true,
  srcExclude: ['**/README.md'],
  appearance: 'dark',
  sitemap: {
    hostname: 'https://zenbyte.biz',
  },
});
