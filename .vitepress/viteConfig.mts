import { DefaultTheme, UserConfig } from 'vitepress';
import { VitePluginAutoSidebar } from './plugin/auto-sidebar';

export function getViteConfig(): UserConfig<DefaultTheme.Config>['vite'] {
  return {
    server: {
      open: false,
    },
    plugins: [
      VitePluginAutoSidebar({
        docs: 'docs',
        // index file won't be included in the sidebar
        ignores: ['**/index.md', '**/README.md'],
        sidebarResolved(sidebar) {
          // const x = JSON.stringify(sidebar, null, 2);
          // console.log(x);
          return sidebar;
        },
      }),
    ],
  };
}
