import { DefaultTheme, UserConfig } from 'vitepress';
import { getSearchConfig } from './searchConfig.mts';
import { getNavConfig } from './navConfig.mts';

export function getThemeConfig(): UserConfig<DefaultTheme.Config>['themeConfig'] {
  return {
    logo: '/img/logo.svg',
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
    search: getSearchConfig(),
    nav: getNavConfig(),
  };
}
