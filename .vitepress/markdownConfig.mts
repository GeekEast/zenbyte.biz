import { DefaultTheme, UserConfig } from 'vitepress';

export function getMarkdownConfig(): UserConfig<DefaultTheme.Config>['markdown'] {
  return {
    theme: 'one-dark-pro',
  };
}
