import { DefaultTheme, UserConfig } from 'vitepress';

export function getHeadConfig(): UserConfig<DefaultTheme.Config>['head'] {
  // base doesn't apply well to head
  return [['link', { rel: 'shortcut icon', href: '/img/favicon.ico' }]];
}
